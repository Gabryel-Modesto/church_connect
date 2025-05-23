import { validateCpf } from "../utils/utilUser.js";

export function checkUserFields (req, res, next) {
  const { cpf } = req.body;

  if (!validateCpf(cpf)) {
    return res.status(400).json({ message: "CPF inválido" });
  };
  next();
}
