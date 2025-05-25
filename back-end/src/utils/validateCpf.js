import {cpf} from 'cpf-cnpj-validator'

export function validateCpf(cpfInput) {
    const cleanCpf = cpfInput.replace(/\D/g, '');
    return cpf.isValid(cleanCpf);
};