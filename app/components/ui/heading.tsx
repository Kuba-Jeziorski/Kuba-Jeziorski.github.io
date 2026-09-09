import { cn } from "@/app/utils/css";

type Variants = "h1" | "h2" | "h3";

type Props = {
  children: React.ReactNode;
  variant: Variants;
  className?: string;
};

const variantStyles = {
  h1: "text-2xl custom-375:text-3xl md:text-4xl font-bold mb-4",
  h2: "text-2xl md:text-3xl font-semibold",
  h3: "text-xl md:text-2xl font-medium mb-2",
};

export default function Heading({ children, variant, className }: Props) {
  const HeadingTag = variant;

  return (
    <HeadingTag className={cn(variantStyles[variant], className)}>
      {children}
    </HeadingTag>
  );
}
