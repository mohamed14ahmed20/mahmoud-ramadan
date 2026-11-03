"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'ar', label: 'العربية', flag: '🇪🇬' },
        { code: 'en', label: 'English', flag: '🇺🇸' }
    ];

    const currentLang = languages.find(l => l.code === locale) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const switchLocale = (newLocale: string) => {
        if (newLocale === locale) {
            setIsOpen(false);
            return;
        }

        const segments = pathname.split('/');
        const currentLocaleSegment = segments[1];

        let newPath = pathname;
        if (routing.locales.includes(currentLocaleSegment as any)) {
            segments[1] = newLocale;
            newPath = segments.join('/');
        } else {
            newPath = `/${newLocale}${pathname}`;
        }

        setIsOpen(false);
        window.location.href = newPath;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50 hover:bg-accent hover:border-primary/50 transition-all shadow-sm group"
                aria-label="Change language"
            >
                <Globe className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-wider">{locale}</span>
                <ChevronDown className={cn("w-3 h-3 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full mt-2 end-0 min-w-[140px] bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                        <div className="p-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => switchLocale(lang.code)}
                                    className={cn(
                                        "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors",
                                        locale === lang.code
                                            ? "bg-primary text-primary-foreground font-bold"
                                            : "hover:bg-accent text-foreground"
                                    )}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-base">{lang.flag}</span>
                                        {lang.label}
                                    </span>
                                    {locale === lang.code && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="w-1.5 h-1.5 rounded-full bg-primary-foreground"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
