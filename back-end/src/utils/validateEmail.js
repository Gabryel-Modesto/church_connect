import { check } from "express-validator";

export function validateEmailUser() {
  return [
    check("email_user")
      .notEmpty()
      .withMessage("O campo de email é obrigatório")
      .bail()
      .isEmail()
      .withMessage("O email deve estar no formato correto"),
  ];
}


export function validateEmailChurch() {
  return [
    check("email_church")
      .notEmpty()
      .withMessage("O campo de email é obrigatório")
      .bail()
      .isEmail()
      .withMessage("O email deve estar no formato correto"),
  ];
}