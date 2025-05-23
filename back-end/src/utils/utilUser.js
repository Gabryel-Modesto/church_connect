function validateLenCpfUser(cpf) {
  cpf = cpf.replace(/\D/g, "");

  //verifica se o CPF tem 11 dígitos
  if (!/^\d{11}$/.test(cpf)) {
    return false;
  }

  //verifica se todos os dígitos são iguais (ex: 11111111111)
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  return true;
}

function calcDigitoVerificador(cpfSlice) {
  let sum = 0;
  let factor = cpfSlice.length + 1;

  for (let i = 0; i < cpfSlice.length; i++) {
    sum += parseInt(cpfSlice.charAt(i)) * factor;
    factor--;
  }

  const digit = 11 - (sum % 11);
  return digit >= 10 ? 0 : digit;
}

export function validateCpf(cpf) {
  cpf = cpf.replace(/\D/g, "");

  if (!validateLenCpfUser(cpf)) {
    return false;
  };

  const firstDigit = calcDigitoVerificador(cpf.slice(0, 9));
  const secondDigit = calcDigitoVerificador(cpf.slice(0, 9) + firstDigit);

  return firstDigit == cpf[9] && secondDigit == cpf[10];
};
