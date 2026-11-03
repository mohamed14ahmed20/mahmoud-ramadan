"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig } from "@/data/site";

export function Navbar() {
    const t = useTranslations("nav");

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    {t("home")}
                </Link>
                <div className="flex items-center gap-6">

                    <nav className="hidden md:flex gap-6 text-base font-medium">
                        <Link href="/about" className="hover:text-primary transition-colors">{t("about")}</Link>
                        <Link href="/news" className="hover:text-primary transition-colors">{t("news")}</Link>
                        <Link href="/programs" className="hover:text-primary transition-colors">{t("programs")}</Link>
                        <Link href="/gallery" className="hover:text-primary transition-colors">{t("gallery")}</Link>
                        <Link href="/videos" className="hover:text-primary transition-colors">{t("videos")}</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">{t("contact")}</Link>
                    </nav>
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>

            </div>
        </header>
    );
}
