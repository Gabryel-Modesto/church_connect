import { cnpj } from "cpf-cnpj-validator";

export function validateCnpj(cnpjInput) {
    const cleanCnpj = cnpjInput.replace(/\D/g, '');
    return cnpj.isValid(cleanCnpj);
};