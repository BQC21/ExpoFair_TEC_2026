import { QRCodeSVG } from "qrcode.react";

function QR() {
    const formUrl = `${window.location.origin}/form`;

    return (
        <main className="hex-bg flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center">
            <div className="mb-5 overflow-hidden rounded-lg bg-white px-3 py-2 shadow-md">
                <img
                    src="/Tec_ES_logo.png"
                    alt="TEC Energy Solutions"
                    className="h-14 w-auto"
                />
            </div>

            <h1 className="font-display mb-8 text-4xl font-extrabold text-white">
                ExpoEnergética 2026
            </h1>

            <section className="w-full max-w-sm rounded-2xl border border-[#3d6a96] bg-[#0e2744]/80 px-6 py-6">
                <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#8eb4d4] uppercase">
                    Escanea y participa
                </p>

                <div className="mx-auto mb-5 inline-flex rounded-xl bg-white p-3">
                    <QRCodeSVG
                        value={formUrl}
                        size={220}
                        level="H"
                        marginSize={2}
                    />
                </div>

                <h2 className="mb-2 text-xl font-bold text-white">
                    Registra tu interés
                </h2>
            </section>

            {/* <Link
                to="/form"
                className="mt-6 text-sm text-[#7eb6e0] underline underline-offset-2 hover:text-white"
            >
                [Vista previa: abrir formulario]
            </Link> */}

            <a
                href="https://tec-energysolutions.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-2xl font-semibold text-[#7eb6e0] underline underline-offset-4 hover:text-white sm:text-3xl"
            >
                tec-energysolutions.pe
            </a>

        </main>
    );
}

export default QR;
