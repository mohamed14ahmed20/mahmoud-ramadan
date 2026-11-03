"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const t = useTranslations("footer");

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative p-2 rounded-full hover:bg-accent transition-colors w-10 h-10 flex items-center justify-center border border-border"
            aria-label={t("toggle_theme")}
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute text-orange-500" />
            <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute text-blue-400" />
            <span className="sr-only">{t("toggle_theme")}</span>
        </button>
    );
}
