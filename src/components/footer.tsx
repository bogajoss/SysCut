"use client";

import Link from "next/link";
import { RiDiscordFill, RiTwitterXLine } from "react-icons/ri";
import { FaGithub, FaTelegram } from "react-icons/fa6";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-5xl px-8 py-10">
        <div className="mb-8 flex flex-col gap-12">
          {/* Brand Section */}
          <div className="max-w-sm md:col-span-1">
            <div className="mb-4 flex items-center justify-start gap-2">
              <Image
                src={t.site.brand.logoUrl}
                alt={t.site.brand.title}
                width={24}
                height={24}
                className="invert dark:invert-0"
              />
              <span className="text-lg font-bold">{t.site.brand.title}</span>
            </div>
            <p className="text-muted-foreground mb-5 text-sm md:text-left">
              {t.home.footer.description}
            </p>
            <div className="flex justify-start gap-3">
              <Link
                href={t.site.social.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="size-5" />
              </Link>
              <Link
                href={t.site.social.x}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine className="size-5" />
              </Link>
              <Link
                href={t.site.social.discord}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiDiscordFill className="size-5" />
              </Link>
              <Link
                href={t.site.social.telegram}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-start justify-between gap-4 pt-2 md:flex-row">
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <span>
              © {new Date().getFullYear()} {t.site.brand.title},{" "}
              {t.home.footer.allRightsReserved}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
