export default function PrimaryButton({
    type = "button",
    className = "",
    variant = "primary",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `rounded-2xl bg-alerange py-[13px] text-center w-full btn-${variant} ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
