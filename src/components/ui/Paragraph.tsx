import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const paragraphVarients = cva(
    "max-x-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
    {
        variants: {
            size: {
                default: "text-base sm:text-lg",
                sm: "text-sm sm:text-base"
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
)

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVarients> {

}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
    className, size, children, ...props
}, ref) => {
    return (
        <p
            ref={ref}
            {...props}
            className={cn(paragraphVarients({ size, className }))}>
            {children}
        </p>
    );
})

Paragraph.displayName = 'Paragraph'

export default Paragraph;