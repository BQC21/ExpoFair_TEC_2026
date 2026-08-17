import { supabase } from "../lib/supabase.js";

// mapping with Cliente table
function mapAnswersToCliente(answers) {
    return {
        nombre_completo: answers.nombre?.trim() || null,
        empresa: answers.empresa?.trim() || null,
        cargo: answers.cargo?.trim() || null,
        correo_electronico: answers.email?.trim() || null,
        telefono_contacto: answers.telefono?.trim() || null,
        sector_industrial: answers.sector || null,
        interes: answers.interes_solar || null,
        consumo_energetico_mensual: answers.consumo || null,
        implementacion: answers.renovables || null,
        propuesta: answers.propuesta || null,
    };
}

// Querie function (POST)
export async function postCliente(answers) {
    const { error } = await supabase
        .from("Clientes")
        .insert(mapAnswersToCliente(answers));

    return { error };
}
