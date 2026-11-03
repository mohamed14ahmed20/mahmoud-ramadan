"use client";

import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { GalleryGrid } from "@/components/GalleryGrid";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === 'ar';

  // Use a logical arrow based on direction
  const ViewAllArrow = isRtl ? ArrowLeft : ArrowRight;
  const ReadMoreArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        {siteConfig.hero.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={siteConfig.hero.image}
              alt="Background"
              fill
              className="object-cover blur-[8px] scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-[2px]" />
          </div>
        )}

        <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto drop-shadow-lg">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white hover:bg-primary/80 mb-8 shadow-xl">
            {t("hero.welcome")}
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-md">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/about" className="h-14 px-8 inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-transform">
              {t("hero.cta")}
            </Link>
            <Link href="/contact" className="h-14 px-8 inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20 shadow-xl hover:-translate-y-1 transition-transform">
              {t("hero.contact_cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Highlights */}
      <section className="w-full py-20 bg-background flex justify-center border-t border-border/40 text-start">
        <div className="container px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold border-s-4 border-primary ps-4">{t("sections.latest_news")}</h2>
            <Link href="/news" className="text-primary hover:underline flex items-center gap-1 transition-all hover:gap-2">
              {t("sections.view_all_news")} <ViewAllArrow className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.news.map((item) => (
              <div key={item.id} className="group flex flex-col md:flex-row gap-6 bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="md:w-1/3 relative h-52 md:h-auto overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t(`news_data.item${item.id}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 start-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                    {item.date}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {t(`news_data.item${item.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                    {t(`news_data.item${item.id}.excerpt`)}
                  </p>
                  <Link href={`/news/${item.id}`} className="text-primary font-bold hover:underline inline-flex items-center gap-1 text-sm mt-auto transition-all hover:gap-2">
                    {t("sections.read_more")} <ViewAllArrow className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program/Vision Preview */}
      <section className="w-full py-20 bg-muted/30 flex justify-center border-y border-border/40 text-start">
        <div className="container px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t("sections.vision")}</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <Link href="/programs" className="text-primary hover:underline flex items-center gap-1 transition-all hover:gap-2">
              {t("sections.view_all_programs")} <ViewAllArrow className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.programs.slice(0, 3).map((prog) => (
              <div key={prog.id} className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="font-bold text-lg">{prog.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 line-clamp-2">{t(`programs_data.item${prog.id}.title`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {t(`programs_data.item${prog.id}.excerpt`)}
                </p>
                <Link href={`/programs/${prog.id}`} className="inline-flex items-center gap-1 text-primary font-bold hover:underline transition-all hover:gap-2">
                  {t("sections.read_more")} <ViewAllArrow className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Highlights */}
      <section className="w-full py-20 bg-background flex justify-center border-t border-border/40">
        <div className="container px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold border-s-4 border-primary ps-4">{t("sections.gallery")}</h2>
            <Link href="/gallery" className="text-primary hover:underline flex items-center gap-1 transition-all hover:gap-2">
              {t("sections.view_all_gallery")} <ViewAllArrow className="w-4 h-4" />
            </Link>
          </div>
          <GalleryGrid limit={4} className="grid-cols-2 md:grid-cols-4" />
        </div>
      </section>

      {/* Highlights Videos */}
      <section className="w-full py-20 bg-muted/30 flex justify-center border-t border-border/40">
        <div className="container px-4 max-w-5xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold border-s-4 border-primary ps-4">{t("sections.videos")}</h2>
            <Link href="/videos" className="text-primary hover:underline flex items-center gap-1 transition-all hover:gap-2">
              {t("sections.view_all_videos")} <ViewAllArrow className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.videos.slice(0, 2).map((video) => (
              <div key={video.id} className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-border bg-black">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
