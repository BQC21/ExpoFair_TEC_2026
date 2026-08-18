function Confirm() {
    return (
        <main className="hex-bg flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green shadow-[0_0_28px_rgba(92,184,54,0.55)]">
                <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                >
                    <path
                        d="M5 12.5l5 5L19.5 8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div className="mb-8 overflow-hidden rounded-lg bg-white px-3 py-2 shadow-md">
                <img
                    src="/Tec_ES_logo.png"
                    alt="TEC Energy Solutions"
                    className="h-14 w-auto"
                />
            </div>

            <h1 className="font-display mb-3 text-3xl font-extrabold text-white sm:text-4xl">
                ¡Gracias por participar!
            </h1>
            <p className="max-w-sm text-base text-white">
                Tus respuestas fueron registradas exitosamente.
            </p>

            <footer className="mt-16 text-xs text-[#6b8aaa]">
                <h2>Para mayor información consulte nuestra página web</h2>
                <a
                    href="https://tec-energysolutions.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 text-2xl font-semibold text-[#7eb6e0] underline underline-offset-4 hover:text-white sm:text-3xl"
                >
                    tec-energysolutions.pe
                </a>
            </footer>
        </main>
    );
}

export default Confirm;
