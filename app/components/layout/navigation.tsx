"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../utils/css";
import { useEffect, useId, useState } from "react";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/courses", label: "Courses" },
  { href: "/cv", label: "CV" },
] as const;

const baseLinkClasses =
  "flex h-full w-fit text-2xl sm:text-lg py-2 border-b-3 transition-all duration-300 hover:text-primary-accent hover:border-b-primary-accent";

const linkClasses = (pathname: string, href: string) => {
  return cn(
    baseLinkClasses,
    pathname === href
      ? "text-primary-accent border-b-primary-accent"
      : "text-muted-text border-b-transparent",
  );
};

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const close = () => setOpen(false);
  const toggle = () => setOpen((isOpen) => !isOpen);

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const onChange = () => {
      if (media.matches) {
        close();
      }
    };

    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <nav className="w-full bg-canvas-background pt-4 border-b border-b-slate-400/20 h-nav-height fixed top-0 left-0 shadow-[0_2px_4px_rgba(0,0,0,0.05)] z-50">
      <div className="w-full max-w-full px-6 2xl:px-0 2xl:max-w-375 mx-auto h-full">
        <div className="w-full flex justify-between gap-6 h-full">
          <Link
            href="/"
            className="transition-all duration-300 hover:brightness-125"
            onClick={close}
          >
            <div className="flex flex-col">
              <p className="text-2xl leading-none font-bold text-primary-accent">
                Kuba Jeziorski
              </p>
              <p className="text-xs tracking-[1.75] text-secondary-text">
                Frontend developer
              </p>
            </div>
          </Link>
          <div className="hidden sm:flex items-center gap-6" data-nav="desktop">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(pathname, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex sm:hidden pt-1 w-8 h-8" data-nav="mobile">
            <button
              type="button"
              className="w-full h-full text-primary-accent"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label="Open menu"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-full h-full object-contain"
                aria-hidden="true"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id={menuId}
        className={cn(
          "fixed top-0 left-0 py-5 px-6 w-full h-full bg-canvas-background flex-col gap-4 sm:hidden",
          open ? "flex" : "hidden",
        )}
        aria-hidden={!open}
      >
        <div className="w-full flex justify-end">
          <button
            type="button"
            className="w-8 h-8 text-primary-accent"
            aria-label="Close menu"
            onClick={close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-full h-full object-contain"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(pathname, item.href)}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
