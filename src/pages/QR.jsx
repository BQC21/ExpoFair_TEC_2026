import { QRCodeSVG } from "qrcode.react";
import standVideo from "../assets/VIDEO STAND.mp4";

function QR() {
    const formUrl = `${window.location.origin}/form`;

    return (
        <main className="hex-bg flex min-h-screen flex-col items-center justify-center px-6 py-8 text-center">
            <div className="flex w-full max-w-6xl flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-center">
                <section className="w-full overflow-hidden rounded-2xl border border-[#3d6a96] bg-[#0e2744]/80 lg:w-[100%]">
                    <video
                        src={standVideo}
                        autoPlay
                        loop
                        // muted
                        playsInline
                        aria-label="Video del stand TEC Energy Solutions"
                        className="aspect-video h-full w-full object-cover"
                    />
                </section>

                <section className="mx-auto w-full max-w-sm rounded-2xl border border-[#3d6a96] bg-[#0e2744]/80 px-6 py-6 lg:mx-0 lg:w-[30%]">
                    <img
                        src="/Tec_ES_logo.png"
                        alt="TEC Energy Solutions"
                        className="h-14 w-auto"
                    />

                    <h1 className="font-display mb-8 text-4xl font-extrabold text-white">
                        ExpoEnergética 2026
                    </h1>
                    
                    
                    <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#8eb4d4] uppercase">
                        Escanea para poder contactarnos más adelante
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
            </div>
        </main>
    );
}

export default QR;
