"use client";

import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProgramsPage() {
    const t = useTranslations("programs_data");
    const t_sections = useTranslations("sections");
    const locale = useLocale();
    const isRtl = locale === 'ar';
    const ReadMoreArrow = isRtl ? ArrowLeft : ArrowRight;

    return (
        <div className="container py-20 px-4 max-w-7xl">
            <div className="flex flex-col items-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t_sections("programs_title")}</h1>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteConfig.programs.map((prog) => (
                    <div key={prog.id} className="group bg-card text-card-foreground rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 overflow-hidden text-start">
                        <div className="relative w-full aspect-video bg-muted">
                            {prog.image && (
                                <Image
                                    src={prog.image}
                                    alt={t(`item${prog.id}.title`)}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            )}
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {t(`item${prog.id}.title`)}
                            </h3>
                            <p className="text-muted-foreground flex-1 mb-6 leading-relaxed line-clamp-3">
                                {t(`item${prog.id}.excerpt`)}
                            </p>
                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                                <span className="text-sm text-muted-foreground font-mono">{prog.date}</span>
                                <Link href={`/programs/${prog.id}`} className="text-primary font-bold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                    {t_sections("read_more")} <ReadMoreArrow className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
