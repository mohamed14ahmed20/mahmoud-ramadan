"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export default function AboutPage() {
    const t = useTranslations("about");

    return (
        <div className="container py-20 px-4">
            <div className="flex flex-col items-center text-center mb-16">
                <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
                <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
                <p className="text-xl text-muted-foreground mt-4 max-w-2xl">{t("summary")}</p>
            </div>

            <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-border/50">
                    {siteConfig.about.image && (
                        <Image
                            src={siteConfig.about.image}
                            alt={t("title")}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <div className="md:col-span-7 bg-card text-card-foreground p-8 rounded-2xl border shadow-sm h-full">
                    <div className="prose dark:prose-invert max-w-none text-lg leading-loose whitespace-pre-line text-start lg:text-justify">
                        {t("content")}
                    </div>
                </div>
            </div>
        </div>
    );
}
