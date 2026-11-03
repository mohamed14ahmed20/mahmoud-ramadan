"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/routing";
import { Facebook, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

export function Footer() {
    const t = useTranslations();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t pt-16 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start text-start">
                        <Link href="/" className="text-2xl font-bold text-primary block mb-6">
                            {t("metadata.title")}
                        </Link>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {t("about.summary")}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t("footer.quick_links")}</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                                    {t("nav.home")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                                    {t("nav.about")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                                    {t("nav.programs")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                                    {t("nav.contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t("footer.contact_info")}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>{siteConfig.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">{t("footer.follow_me")}</h3>
                        <div className="flex gap-4 mb-8">
                            <a
                                href={siteConfig.contact.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {t("footer.rights")} &copy; {currentYear}
                        </p>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>{t("footer.designed_by")} {t("metadata.title")}</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">{t("footer.privacy_policy")}</Link>
                        <Link href="#" className="hover:text-primary transition-colors">{t("footer.terms_of_use")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
