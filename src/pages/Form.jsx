import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { questions } from "../utils/questions.js";
import { validateAnswers } from "../utils/validators.js";
import Field from "../components/Field.jsx";

function Form() {
    const [answers, setAnswers] = useState(() =>
        Object.fromEntries(questions.map((question) => [question.id, ""])),
    );
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (id, value) => {
        setAnswers((current) => ({ ...current, [id]: value }));
        setErrors((current) => {
            if (!current[id]) return current;
            const next = { ...current };
            delete next[id];
            return next;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nextErrors = validateAnswers(questions, answers);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        navigate("/confirm");
    };

    return (
        <main className="hex-bg min-h-screen px-5 py-8">
            <div className="mx-auto w-full max-w-lg">
                <header className="mb-8 flex items-center gap-4">
                    <div className="shrink-0 overflow-hidden rounded-lg bg-white px-2 py-1.5">
                        <img
                            src="/Tec_ES_logo.png"
                            alt="TEC Energy Solutions"
                            className="h-10 w-auto"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white sm:text-2xl">
                            Formulario de Contacto
                        </h1>
                        <p className="text-sm text-brand-muted">
                            Expoferia 2026 · TEC Energy Solutions
                        </p>
                    </div>
                </header>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                    {questions.map((question) => (
                        <Field
                            key={question.id}
                            question={question}
                            value={answers[question.id]}
                            error={errors[question.id]}
                            onChange={handleChange}
                        />
                    ))}

                    <button
                        className="mt-2 w-full rounded-full bg-brand-green py-3.5 text-base font-semibold text-white transition hover:bg-brand-green-dark"
                        type="submit"
                    >
                        Enviar respuestas →
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Form;
