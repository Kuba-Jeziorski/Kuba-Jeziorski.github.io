import { cn } from "@/app/utils/css";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  url: string;
  isExternal?: boolean;
  className?: string;
};

const linkClasses =
  "flex w-full sm:w-auto justify-center px-4 py-2 font bg-primary-accent rounded-xl border-none transition-filter duration-300 hover:brightness-125";

export default function CustomLink({
  children,
  url,
  isExternal = false,
  className,
}: Props) {
  return (
    <>
      {isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(linkClasses, className)}
        >
          {children}
        </a>
      ) : (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(linkClasses, className)}
        >
          {children}
        </Link>
      )}
    </>
  );
}
