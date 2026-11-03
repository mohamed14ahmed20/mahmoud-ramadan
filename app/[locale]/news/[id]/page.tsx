"use client";

import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

export default function NewsDetailsPage({ params }: { params: { id: string } }) {
    const t = useTranslations("nav");
    const t_data = useTranslations("news_data");
    const locale = useLocale();
    const isRtl = locale === 'ar';
    const BackArrow = isRtl ? ArrowRight : ArrowLeft;

    const newsItem = siteConfig.news.find((item) => item.id.toString() === params.id);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="container py-20 px-4 max-w-4xl mx-auto text-start">
            <Link href="/news" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <BackArrow className="w-4 h-4 mx-2" /> {t("back_to_news")}
            </Link>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-10">
                <Image
                    src={newsItem.image}
                    alt={t_data(`item${newsItem.id}.title`)}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-bold">{newsItem.date}</span>
                </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{t_data(`item${newsItem.id}.title`)}</h1>

            <div className="prose dark:prose-invert max-w-none text-lg leading-loose">
                <p className="text-xl text-muted-foreground font-medium mb-8 border-s-4 border-primary ps-6">
                    {t_data(`item${newsItem.id}.excerpt`)}
                </p>

                <div className="text-muted-foreground/80 space-y-4">
                    <p>{t_data(`item${newsItem.id}.excerpt`)}</p>
                </div>
            </div>
        </article>
    );
}
