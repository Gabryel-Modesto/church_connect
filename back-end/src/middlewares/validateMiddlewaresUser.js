import { validateEmailUser } from "../utils/validateEmail.js"
import { checkCpf } from "./checkUserFields.js";
import { handleValidationErrors } from "./handleValidationsErros.js";

export function validateMiddlewaresUser() {
  return [checkCpf, validateEmailUser(), handleValidationErrors];
}
