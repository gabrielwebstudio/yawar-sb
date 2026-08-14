"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Banner() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Redo att boka oss?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">Låt oss skapa en färgstark och minnesvärd upplevelse för era gäster</p>
          <Link href="/kontakt" className="rounded-full bg-linear-to-b from-primary/60 to-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 inline-flex items-center gap-2">
            Kontakta oss <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
