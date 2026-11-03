"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    const t = useTranslations("contact");

    return (
        <div className="container py-20 px-4 max-w-4xl">
            <div className="flex flex-col items-center mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
                <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    {t("description")}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl">{t("email")}</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-lg">
                        {siteConfig.contact.email}
                    </a>
                </div>

                <div className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] mb-2">
                        <Facebook className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl">{t("facebook")}</h3>
                    <a href={siteConfig.contact.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition-colors text-lg">
                        {t("facebook_link_text")}
                    </a>
                </div>

                <div className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow md:col-span-2">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                        <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl">{t("address")}</h3>
                    <p className="text-muted-foreground text-lg">
                        {siteConfig.contact.address}
                    </p>
                </div>
            </div>

            <form className="bg-card p-8 md:p-12 rounded-2xl border shadow-lg space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-center">{t("form.title")}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-start">
                        <label htmlFor="name" className="text-sm font-medium">{t("form.name")}</label>
                        <input type="text" id="name" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("form.name_placeholder")} />
                    </div>
                    <div className="space-y-2 text-start">
                        <label htmlFor="email" className="text-sm font-medium">{t("form.email")}</label>
                        <input type="email" id="email" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("form.email_placeholder")} />
                    </div>
                </div>
                <div className="space-y-2 text-start">
                    <label htmlFor="subject" className="text-sm font-medium">{t("form.subject")}</label>
                    <input type="text" id="subject" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("form.subject_placeholder")} />
                </div>
                <div className="space-y-2 text-start">
                    <label htmlFor="message" className="text-sm font-medium">{t("form.message")}</label>
                    <textarea id="message" className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("form.message_placeholder")}></textarea>
                </div>
                <button className="w-full h-12 inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                    {t("form.submit")}
                </button>
            </form>
        </div>
    );
}
