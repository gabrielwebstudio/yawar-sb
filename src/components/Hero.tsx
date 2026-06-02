import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero({blok} : {blok: any}) {
  console.log(blok);
	const { titel, text, bild } = blok;
	const words = titel.split(" ");

	const content = (
		<>
			<h1 className="max-w-xl text-heading text-4xl md:text-6xl font-bold tracking-tight leading-tight">
				{words.map((titel : string, i: number) =>
					titel === "Boliviansk" ? (
						<span
							key={i}
							className="bg-linear-to-r from-red-600 via-yellow-400 to-green-600 bg-clip-text text-transparent inline-block"
						>
							{titel}{" "}
						</span>
					) : (
						titel + " "
					)
				)}
			</h1>

			<p className="mt-6 max-w-xs md:max-w-lg text-subheading text-lg ">
				{text}
			</p>

			<div className="mt-8 flex flex-col gap-4 sm:flex-row">
				<Link
					href="/kontakt"
					className="rounded-full bg-linear-to-b from-primary/60 to-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 inline-flex items-center gap-2"
				>
					Bokningsförfrågan
					<ArrowRight className="w-4 h-4" />
				</Link>

				<Link
					href="/danser"
					className="rounded-full border bg-card border-primary px-6 py-3 font-medium text-primary  transition-colors hover:bg-card/30 duration-300 text-center"
				>
					Våra danser
				</Link>
			</div>
		</>
	);

		return (
			<section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src={bild.filename}
						alt={"hero"}
						fill
						className="object-cover object-[50%_20%] "
						priority
					/>
				</div>

				<div className="absolute inset-0 bg-linear-to-r from-background via-background via-50% md:via-40% to-background/50 md:to-background/30 " />

				<div className="container relative z-10 mx-auto px-4">
					<div className="mx-auto w-full text-start">
						<div className="flex flex-col items-start">{content}</div>
					</div>
				</div>
			</section>
		);
	}
