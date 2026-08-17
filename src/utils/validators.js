export function validateAnswers(questions, answers) {
    const errors = {};

    for (const question of questions) {
        const raw = answers[question.id];
        const value = typeof raw === 'string' ? raw.trim() : raw;

        if (question.required && !value) {
            errors[question.id] = 'Este campo es obligatorio';
            continue;
        }

        if (question.type === 'email' && value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                errors[question.id] = 'Ingresa un correo válido';
            }
        }
    }

    return errors;
}
