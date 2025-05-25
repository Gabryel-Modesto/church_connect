import { validateCnpj } from "../utils/validateCnpj.js";

export function checkCnpj(req, res, next) {
    const {cnpj_church} = req.body; 

  if (!validateCnpj(cnpj_church)) {
    return res.status(400).json({ message: "CNPJ inválido" });
  }
  next();
}
