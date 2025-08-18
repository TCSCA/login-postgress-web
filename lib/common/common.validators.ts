import { z } from "zod";

const REGEXS = {
  STRING_REQUIRED: /^(?!\s*$).+/,
};

const MIN_LENGTH = 9;
const MAX_LENGTH = 30;

export const hasOnlyLetters = (value: React.KeyboardEvent<HTMLInputElement>) => !/[a-zA-Z ]/.test(value.key) ? value.preventDefault() : null;
export const hasOnlyLettersAndDot = (value: React.KeyboardEvent<HTMLInputElement>) => !/[a-zA-ZñÑáÁéÉÍíóÓúÚ. ]/.test(value.key) ? value.preventDefault() : null;
export const handleOnlyLettersAndNumbers = (value: React.KeyboardEvent<HTMLInputElement>) => !/[a-zA-Z-0-9]/.test(value.key) ? value.preventDefault() : null;
export const handleOnlyNumbers = (value: React.KeyboardEvent<HTMLInputElement>) => !/[0-9]/.test(value.key) ? value.preventDefault() : null;
export const handleOnlyNumbersAndDot = (value: React.KeyboardEvent<HTMLInputElement>) => !/[0-9.]/.test(value.key) ? value.preventDefault() : null;

// const hasLetter = (value: string) => /[a-zA-Z]/.test(value);
// const hasNumber = (value: string) => /\d/.test(value);
// const hasSpecialChar = (value: string) => /[@$!%*#?&]/.test(value);
// const hasMinLength = (value: string) => value.length >= MIN_LENGTH;
// const hasMaxLength = (value: string) => value.length <= MAX_LENGTH;

const hasSpecialCharMessage = "Requiere al menos una carácter especial";
const hasNumberMessage = "Requiere al menos una número";
const hasLetterMessage = "Requiere al menos una letra";
export const hasMinLengthMessage = "Longitud mínima requerida";
export const hasRequired = "Campo requerido";
export const hasMaxLengthMessage = "Longitud máxima requerida";
