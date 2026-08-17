const inputClassName =
    "w-full rounded-lg border border-brand-border bg-[#0a1c33] px-4 py-3 text-brand-text placeholder:text-brand-muted outline-none transition focus:border-brand-green";

function Field({ question, value, error, onChange }) {
    const { id, label, type, options, placeholder, required } = question;

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={type === "radio" ? undefined : id} className="text-sm font-medium text-white">
                {label}
                {required && <span className="ml-1 text-brand-green">*</span>}
            </label>

            {(type === "text" || type === "email" || type === "tel") && (
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={(event) => onChange(id, event.target.value)}
                    className={inputClassName}
                />
            )}

            {type === "select" && (
                <select
                    id={id}
                    name={id}
                    value={value}
                    required={required}
                    onChange={(event) => onChange(id, event.target.value)}
                    className={`${inputClassName} ${value ? "text-brand-text" : "text-brand-muted"}`}
                >
                    <option value="">{placeholder || "Selecciona una opción..."}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}

            {type === "radio" && (
                <div role="radiogroup" aria-label={label} className="flex flex-col gap-2">
                    {options.map((option) => {
                        const selected = value === option;

                        return (
                            <label
                                key={option}
                                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                                    selected
                                        ? "border-brand-green bg-[#0a1c33]"
                                        : "border-brand-border bg-[#0a1c33] hover:border-brand-muted"
                                }`}
                            >
                                <input
                                    type="radio"
                                    name={id}
                                    value={option}
                                    checked={selected}
                                    required={required}
                                    onChange={() => onChange(id, option)}
                                    className="accent-brand-green h-4 w-4"
                                />
                                <span>{option}</span>
                            </label>
                        );
                    })}
                </div>
            )}

            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    );
}

export default Field;