import { QRCodeSVG } from "qrcode.react";
import {Tec_ES_logo} from "public/Tec_ES_logo.png";

// Enlace a exportar
URL = "http://localhost:5173/form";

function QR() {
    return (
        <>
            <img src={Tec_ES_logo} alt="Logo TEC" />
            <h1>Expoferia 2026</h1>

            <div>
                <h2>Escanea y participa</h2>

                <QRCodeSVG
                    value={URL} size={300}
                    level="H" marginSize={4}
                />

                <p>Registra tu interés</p>
            </div>

            <footer>
                tec-energysolutions.pe - Lima, Perú
            </footer>
        </>
    );
}

export default QR;