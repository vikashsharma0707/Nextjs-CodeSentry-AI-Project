import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center overflow-hidden",
    "rounded-xl font-medium whitespace-nowrap",
    "transition-all duration-300 ease-out",
    "outline-none",
    "select-none",
    "cursor-pointer",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "focus-visible:ring-2 focus-visible:ring-[#5B5FFF]/50",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border border-[#5B5FFF]/20",
          "bg-gradient-to-r",
          "from-[#5B5FFF]",
          "via-[#6366F1]",
          "to-[#4F8CFF]",
          "text-white",
          "shadow-lg shadow-[#5B5FFF]/25",
          "hover:shadow-[#5B5FFF]/50",
          "hover:scale-[1.02]",
          "hover:brightness-110",
        ].join(" "),

        secondary: [
          "border border-white/10",
          "bg-white/5",
          "backdrop-blur-xl",
          "text-white",
          "hover:bg-white/10",
          "hover:border-[#5B5FFF]/30",
        ].join(" "),

        outline: [
          "border border-[#5B5FFF]/30",
          "bg-transparent",
          "text-[#B8C4FF]",
          "hover:bg-[#5B5FFF]/10",
          "hover:border-[#5B5FFF]",
        ].join(" "),

        ghost: [
          "text-slate-300",
          "hover:bg-white/5",
          "hover:text-white",
        ].join(" "),

        destructive: [
          "bg-gradient-to-r",
          "from-red-600",
          "to-red-500",
          "text-white",
          "shadow-lg shadow-red-600/25",
          "hover:shadow-red-600/40",
        ].join(" "),

        success: [
          "bg-gradient-to-r",
          "from-emerald-600",
          "to-green-500",
          "text-white",
          "shadow-lg shadow-emerald-500/25",
        ].join(" "),

        ai: [
          "bg-gradient-to-r",
          "from-[#5B5FFF]",
          "via-[#4F8CFF]",
          "to-[#00D4FF]",
          "text-white",
          "shadow-[0_0_35px_rgba(91,95,255,.35)]",
          "hover:shadow-[0_0_45px_rgba(0,212,255,.45)]",
          "hover:scale-[1.03]",
          "before:absolute",
          "before:inset-0",
          "before:bg-gradient-to-r",
          "before:from-transparent",
          "before:via-white/20",
          "before:to-transparent",
          "before:-translate-x-full",
          "hover:before:translate-x-full",
          "before:transition-transform",
          "before:duration-700",
        ].join(" "),

        link: "text-[#5B5FFF] underline-offset-4 hover:underline",
      },

      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-lg",
        icon: "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };