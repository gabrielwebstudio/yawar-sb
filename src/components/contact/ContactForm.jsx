"use client";

import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function ContactForm() {

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await fetch('https://formspree.io/f/mojzrdry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                })

                setSubmitted(true);
            } else {

                console.error("Error:", await response.json());
            }

        } catch (error) {
            console.log("Error submitting form:", error)

        } finally {
            setIsLoading(false)
        }
    }


    const labelClasses = "block text-sm font-medium text-foreground mb-1.5"
    const inputClasses = "w-full border border-border rounded-md px-3.5 py-2.5 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"


    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <>
            {submitted ? (
                <div className="border border-border rounded-md p-8 text-center">
                    <p className="font-title text-lg font-semibold text-heading">Tack för ditt meddelande!</p>
                    <p className="text-sm text-body mt-2">Vi återkommer så snart vi kan</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Skicka ett meddelande</h2>
                    <div>
                        <label htmlFor="name" className={labelClasses}>
                            Namn
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            className={inputClasses}
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClasses}>
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className={inputClasses}
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className={labelClasses}>
                            Telefon
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            className={inputClasses}
                            onChange={handleChange}
                            value={formData.phone}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className={labelClasses}>
                            Meddelande
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full border border-border rounded-md px-3.5 py-2.5 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                            placeholder="Skriv ditt meddelande här..."
                            onChange={handleChange}
                            value={formData.message}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300 flex justify-center items-center"
                    >
                        {isLoading ? <LoadingSpinner /> : "Skicka meddelande"}
                    </button>
                </form>)
            }
        </>
    )
}
