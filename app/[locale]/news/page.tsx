"use client";

import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NewsPage() {
    const t = useTranslations("news_data");
    const t_sections = useTranslations("sections");
    const locale = useLocale();
    const isRtl = locale === 'ar';
    const ReadMoreArrow = isRtl ? ArrowLeft : ArrowRight;

    return (
        <div className="container py-20 px-4 max-w-6xl">
            <div className="flex flex-col items-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("news_title")}</h1>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {siteConfig.news.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row gap-6 bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-start">
                        <div className="md:w-1/3 relative h-48 md:h-auto">
                            <Image src={item.image} alt={t_sections(`news_data.item${item.id}.title`)} fill className="object-cover" />
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-center">
                            <span className="text-sm text-primary font-bold mb-2">{item.date}</span>
                            <h3 className="text-xl font-bold mb-3">
                                {t(`item${item.id}.title`)}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {t(`item${item.id}.excerpt`)}
                            </p>
                            <Link href={`/news/${item.id}`} className="text-primary font-bold hover:underline inline-flex items-center gap-1 text-sm transition-all hover:gap-2">
                                {t_sections("read_more")} <ReadMoreArrow className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
