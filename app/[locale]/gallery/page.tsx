"use client";

import { useTranslations } from "next-intl";
import { GalleryGrid } from "@/components/GalleryGrid";

export default function GalleryPage() {
    const t = useTranslations("sections");

    return (
        <div className="container py-20 px-4 max-w-7xl min-h-[80vh] flex flex-col">
            <div className="flex flex-col items-center mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("gallery_title")}</h1>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="flex-1">
                <GalleryGrid />
            </div>

            <div className="text-center mt-12 text-muted-foreground">
                <p>{t("gallery_description")}</p>
            </div>
        </div>
    );
}
