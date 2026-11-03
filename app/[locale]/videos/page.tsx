"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";

export default function VideosPage() {
    const t = useTranslations("sections");

    return (
        <div className="container py-20 px-4 max-w-5xl">
            <div className="flex flex-col items-center mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("videos_title")}</h1>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid gap-12">
                {siteConfig.videos.map((video) => (
                    <div key={video.id} className="flex flex-col gap-4">
                        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
                            <iframe
                                className="w-full h-full"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h3 className="text-2xl font-bold text-center mt-2">{video.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
