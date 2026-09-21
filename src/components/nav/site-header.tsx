"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { McButton, RollingLabel } from "@/components/mc/button";
import { InstagramTile, MessengerGlyph } from "@/components/mc/icons";
import { Logo, LogoMark } from "@/components/site/logo";
import { brand, LOGIN_URL, SIGNUP_URL } from "@/lib/brand";
import {
  headerMenus,
  isLandingPath,
  type NavLink,
  type NavMenu,
} from "@/lib/nav";
import { cn } from "@/lib/utils";

/**
 * ManyChat-style header.
 *  - At the top of the page: transparent, full-width, full wordmark. Text is
 *    white or black depending on the first section's `data-nav` attribute.
 *  - Once scrolled: a liquid-glass bar with the square mark that tints to
 *    whatever colour is behind it (floating on desktop, edge to edge on phones).
 *  - Phones: mark, a magenta "Get started" pill and a menu button.
 *  - Use-case landing pages get the stripped version: logo + one button.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const landing = isLandingPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [lightText, setLightText] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
    const first = document.querySelector("[data-nav]");
    setLightText(first?.getAttribute("data-nav") === "light");
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const show = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  }, []);
  const hide = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, []);

  const compact = scrolled;
  const solid = mobile || (!compact && open !== null);
  const white = !compact && !solid && lightText;
  const activeMenu = headerMenus.find((menu) => menu.label === open);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "fixed inset-0 z-40 hidden bg-black/15 transition-opacity duration-300 lg:block",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "relative flex items-center justify-between transition-[margin,height,border-radius,padding,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "h-[60px] px-[18px]",
            compact
              ? cn(
                  "lg:mx-[22px] lg:mt-[22px] lg:rounded-lg lg:px-[31px]",
                  landing ? "lg:h-[69px] lg:pr-[26px]" : "lg:h-[80px]",
                )
              : cn(
                  "lg:px-[53px]",
                  landing ? "lg:h-[113px] lg:pr-[50px]" : "lg:h-[123px]",
                ),
            compact && !solid && "mc-glass",
            solid && "bg-white",
            white ? "text-white" : "text-ink",
          )}
        >
          <Link
            href="/"
            aria-label={`${brand.name} home`}
            className="relative flex h-8 items-center"
          >
            <Logo
              className={cn(
                "h-[20px] transition-opacity duration-300 lg:h-[28px]",
                compact && !mobile ? "opacity-0" : "opacity-100",
              )}
            />
            <LogoMark
              className={cn(
                "absolute left-0 top-1/2 h-[24px] -translate-y-1/2 transition-opacity duration-300 lg:h-[30px]",
                compact && !mobile ? "opacity-100" : "opacity-0",
              )}
            />
          </Link>

          {!landing ? (
            <nav
              aria-label="Primary"
              className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
            >
              <ul className="flex items-center gap-[29px]">
                {headerMenus.map((menu) => {
                  const current = menu.href
                    ? pathname === menu.href
                    : menu.columns?.some((column) =>
                        column.links.some((link) =>
                          pathname.startsWith(link.href),
                        ),
                      );
                  const itemClass = cn(
                    "mc-label block px-1 py-1 transition-colors",
                    (current || open === menu.label) &&
                      "underline decoration-1 underline-offset-[5px]",
                    "hover:bg-yellow hover:text-ink hover:no-underline",
                  );
                  return (
                    <li
                      key={menu.label}
                      onMouseEnter={() =>
                        menu.columns ? show(menu.label) : hide()
                      }
                      onMouseLeave={hide}
                    >
                      {menu.href ? (
                        <Link href={menu.href} className={itemClass}>
                          {menu.label}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          aria-expanded={open === menu.label}
                          onClick={() =>
                            setOpen(open === menu.label ? null : menu.label)
                          }
                          className={itemClass}
                        >
                          {menu.label}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}

          <div className="flex items-center">
            {landing ? (
              <McButton
                href={SIGNUP_URL}
                variant={white ? "outline-light" : "outline"}
                size="sm"
                className="h-[34px] px-4 lg:h-[43px] lg:px-[26px]"
              >
                Start for free
              </McButton>
            ) : (
              <>
                <McButton
                  href={SIGNUP_URL}
                  variant={white ? "outline-light" : "outline"}
                  size="sm"
                  className="hidden lg:inline-flex"
                >
                  Get started
                </McButton>
                <a
                  href={LOGIN_URL}
                  className="group mc-label hidden h-[52px] items-center px-8 lg:inline-flex"
                >
                  <span className="sr-only">Sign in</span>
                  <RollingLabel>Sign in</RollingLabel>
                </a>
                <McButton
                  href={SIGNUP_URL}
                  variant="magenta"
                  size="sm"
                  className="h-[31px] px-3.5 lg:hidden"
                >
                  Get started
                </McButton>
                <button
                  type="button"
                  aria-label={mobile ? "Close menu" : "Open menu"}
                  aria-expanded={mobile}
                  onClick={() => setMobile((value) => !value)}
                  className="-mr-2 ml-2 flex size-10 items-center justify-center lg:hidden"
                >
                  <span className="relative block h-3 w-[22px]" aria-hidden>
                    <span
                      className={cn(
                        "absolute left-0 h-[1.5px] w-[22px] bg-current transition-transform",
                        mobile ? "top-[5px] rotate-45" : "top-0",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute left-0 h-[1.5px] w-[22px] bg-current transition-transform",
                        mobile ? "top-[5px] -rotate-45" : "top-[10px]",
                      )}
                    />
                  </span>
                </button>
              </>
            )}
          </div>
        </div>

        {activeMenu?.columns ? (
          <div
            onMouseEnter={() => show(activeMenu.label)}
            onMouseLeave={hide}
            className={cn(
              "absolute hidden bg-white text-ink lg:block",
              compact
                ? "left-[5%] right-[5%] top-[110px] rounded-[10px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
                : "left-0 right-0 top-[123px] border-t border-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]",
            )}
          >
            <MegaMenu menu={activeMenu} pathname={pathname} full={!compact} />
          </div>
        ) : null}
      </header>

      {mobile ? (
        <MobileMenu pathname={pathname} onClose={() => setMobile(false)} />
      ) : null}
    </>
  );
}

function ChannelIcon({
  link,
  className,
}: {
  link: NavLink;
  className?: string;
}) {
  if (link.icon === "instagram") return <InstagramTile className={className} />;
  if (link.icon === "messenger")
    return <MessengerGlyph className={className} />;
  if (link.icon === "ai") return <LogoMark className={className} />;
  return null;
}

/*
 * Menus measured from ManyChat at 1800px:
 *  - Product: centred tiles 264px apart; 28px icon, 30px bold title, 18px grey blurb.
 *  - Solutions: two 343px columns split by a rule, 27px bold items on 37px lines.
 *  - Resources: 297px columns with full-height rules, 22px items on 46px lines.
 */
function MegaMenu({
  menu,
  pathname,
  full,
}: {
  menu: NavMenu;
  pathname: string;
  full: boolean;
}) {
  const columns = menu.columns ?? [];

  if (menu.style === "channels") {
    const links = columns.flatMap((column) => column.links);
    return (
      <ul className="flex justify-center pb-[98px] pt-[89px]">
        {links.map((link) => (
          <li key={link.href} className="w-[264px]">
            <Link
              href={link.href}
              className="group flex flex-col items-center text-center"
            >
              <ChannelIcon link={link} className="size-[30px]" />
              <span
                className={cn(
                  "mt-[14px] text-[1.875rem] font-bold leading-[1.1] tracking-[-0.015em]",
                  pathname.startsWith(link.href) && "opacity-60",
                )}
              >
                {link.label}
              </span>
              {link.blurb ? (
                <span className="mt-[10px] max-w-[210px] text-[1.125rem] leading-[1.2] text-[#8a8a8a]">
                  {link.blurb}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  if (menu.style === "display") {
    return (
      <div className="flex justify-center pb-[52px] pt-[44px]">
        {columns.map((column, index) => (
          <div
            key={column.heading}
            className={cn(
              "w-[343px] pl-6",
              index > 0 && "border-l border-line",
            )}
          >
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.07em] text-mute">
              {column.heading}
            </p>
            <ul className="mt-[22px]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[1.6875rem] font-bold leading-[37px] tracking-[-0.015em] decoration-2 underline-offset-4 hover:underline",
                      pathname.startsWith(link.href) && "underline",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      {columns.map((column, index) => (
        <div
          key={column.heading}
          className={cn(
            "w-[297px] pl-[37px]",
            full ? "pb-[72px] pt-[52px]" : "pb-[52px] pt-[44px]",
            index > 0 && "border-l border-line",
          )}
        >
          <p className="mc-label text-mute">{column.heading}</p>
          <ul className="mt-[26px] space-y-[20px]">
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[1.375rem] leading-[1.2] decoration-1 underline-offset-4 hover:underline",
                    pathname.startsWith(link.href) && "underline",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileMenu({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="fixed inset-x-0 bottom-0 top-[60px] z-[45] flex flex-col overflow-y-auto bg-white text-ink lg:hidden">
      <ul className="border-t border-line px-[18px]">
        {headerMenus.map((menu) => {
          const isOpen = expanded === menu.label;
          return (
            <li key={menu.label} className="border-b border-line">
              {menu.href ? (
                <Link
                  href={menu.href}
                  onClick={onClose}
                  className="mc-label flex h-[62px] items-center text-[0.875rem]"
                >
                  {menu.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : menu.label)}
                    className="mc-label flex h-[62px] w-full items-center justify-between text-[0.875rem]"
                  >
                    {menu.label}
                    <span
                      aria-hidden
                      className={cn(
                        "text-[1.5rem] font-light leading-none transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="space-y-7 pb-7 pt-1">
                      {menu.columns?.map((column) => (
                        <div key={column.heading}>
                          {menu.style !== "channels" ? (
                            <p className="mc-label mb-3 text-mute">
                              {column.heading}
                            </p>
                          ) : null}
                          <ul
                            className={cn(
                              menu.style === "text" ? "space-y-3" : "space-y-2",
                            )}
                          >
                            {column.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className={cn(
                                    "flex items-center gap-3",
                                    menu.style === "text"
                                      ? "text-[1.25rem]"
                                      : "text-[1.5rem] font-bold tracking-[-0.015em]",
                                    pathname.startsWith(link.href) &&
                                      "underline decoration-2 underline-offset-4",
                                  )}
                                >
                                  <ChannelIcon link={link} className="size-7" />
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </>
              )}
            </li>
          );
        })}
      </ul>
      <div className="mt-auto flex flex-col gap-3 px-[18px] pb-8 pt-10">
        <McButton href={SIGNUP_URL} variant="black" size="lg" full>
          Get started
        </McButton>
        <McButton href={LOGIN_URL} variant="outline" size="lg" full>
          Sign in
        </McButton>
      </div>
    </div>
  );
}
