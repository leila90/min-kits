type DividerVariant = "solid" | "gradient";
type DividerDirection = "ltr" | "rtl";

type DividerProps = {
    variant?: DividerVariant;
    direction?: DividerDirection;
    className?: string;
};

export default function Divider({
    variant = "solid",
    direction = "ltr",
    className = "",
}: DividerProps) {
    return (
        <div
            aria-hidden="true"
            className={[
                "h-px w-full",
                variant === "solid"
                    ? "bg-divider"
                    : [
                        direction === "rtl" ? "bg-linear-to-l" : "bg-linear-to-r",
                        "from-divider-gradient-start via-divider-gradient-mid to-divider-gradient-end",
                    ].join(" "),
                className,
            ].filter(Boolean).join(" ")}
        />
    );
}
