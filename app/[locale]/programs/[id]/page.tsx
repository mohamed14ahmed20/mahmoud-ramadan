"use client";

import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";

export default function ProgramDetailsPage({ params }: { params: { id: string } }) {
    const t = useTranslations();
    const t_data = useTranslations("programs_data");
    const locale = useLocale();
    const isRtl = locale === 'ar';
    const BackArrow = isRtl ? ArrowRight : ArrowLeft;

    const program = siteConfig.programs.find((prog) => prog.id.toString() === params.id);

    if (!program) {
        notFound();
    }

    return (
        <article className="container py-20 px-4 max-w-4xl mx-auto text-start">
            <Link href="/programs" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <BackArrow className="w-4 h-4 mx-2" /> {t("nav.back_to_programs")}
            </Link>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-10 group">
                <Image
                    src={program.image}
                    alt={t_data(`item${program.id}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 end-6 text-white text-end">
                    <div className="flex items-center gap-4 text-sm font-medium mb-2">
                        <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full"><Calendar className="w-3 h-3" /> {program.date}</span>
                        <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full"><User className="w-3 h-3" /> {t("metadata.title")}</span>
                    </div>
                </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{t_data(`item${program.id}.title`)}</h1>

            <div className="prose dark:prose-invert max-w-none text-lg leading-loose">
                <p className="text-xl text-muted-foreground font-medium mb-8 border-s-4 border-primary ps-6">
                    {t_data(`item${program.id}.excerpt`)}
                </p>

                <div className="whitespace-pre-line text-start lg:text-justify">
                    {t_data(`item${program.id}.content`)}
                </div>
            </div>
        </article>
    );
}
