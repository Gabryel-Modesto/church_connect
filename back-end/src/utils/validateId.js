export function validateId(id) {
  const isInvalidID = isNaN(id);

  if (isInvalidID) {
    return { valid: false, message: "ID inválido" };
  }
  return { valid: true };
}
