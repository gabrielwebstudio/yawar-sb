import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs))
}

export function formatPublicationDate(value?: string | Date | null) {
    if (!value) return null;

    const date = value instanceof Date ? value : new Date(value);

    if (Number.isNaN(date.getTime())) return null;

    return new Intl.DateTimeFormat("sv-SE", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}

export function getPublicationDate(value?: Record<string, unknown> | null) {
    const publicationDate = value?.published_at
        ?? value?.first_published_at
        ?? value?.created_at
        ?? value?.date;

    return formatPublicationDate(publicationDate as string | Date | null | undefined);
}