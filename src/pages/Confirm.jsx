import {Tec_ES_logo} from "public/Tec_ES_logo.png";

function Confirm() {
    return (
        <>
        <div>
            {/* Agregar check*/}

            <img src={Tec_ES_logo} alt="Logo TEC" />
            <h1>Gracias por participar</h1>
            <p>Tus respuestas fueron registradas exitosamente</p>

            <footer>
                tec-energysolutions.pe - Lima, Perú
            </footer>

        </div>
        </>
    );
}

export default Confirm;