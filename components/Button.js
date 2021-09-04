export default function Button({ className, variant, children }) {
    const addClassName = className ? ` ${className}` : "";

    const variants = {
        "outline-yellow": `border border-yellow-500 text-yellow-500`,
        "yellow": "bg-yellow-500 text-black"
    };

    const pickedVariant = variants[variant]

    return (
        <a className={`py-2 px-8 rounded-full text-lg font-semibold inline-block ${pickedVariant}${addClassName}`}>
            {children}
        </a>
    );
}