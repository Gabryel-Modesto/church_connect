import { validateEmailChurch } from "../utils/validateEmail.js"
import { checkCnpj } from "./checkChurchFields.js";
import { handleValidationErrors } from "./handleValidationsErros.js";

export function validateMiddlewaresChurch() {
  return [checkCnpj, validateEmailChurch(), handleValidationErrors];
}
