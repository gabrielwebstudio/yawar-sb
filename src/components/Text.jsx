import { cn } from "@/lib/utils";

export default function Text({ className = "", children }) {
	return (
		<p className={cn("text-body leading-relaxed max-w-md", className)}>
			{children}
		</p>
	);
}