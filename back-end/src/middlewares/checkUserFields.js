import { validateCpf } from "../utils/validateCpf.js";

export function checkCpf(req, res, next) {
  const {cpf_user} = req.body;

  if (!validateCpf(cpf_user)) {
    return res.status(400).json({ message: "CPF inválido" });
  }
  next();
}
