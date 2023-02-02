import { Injectable } from '@angular/core';
import { PasswordStrength } from '../types/password-strength';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidationService {
  constructor() {}

  calculatePasswordStrength(password: string): PasswordStrength {
    if (!password) {
      return 'none';
    }

    if (password.length < 8) {
      return 'nonValid';
    }

    let hasLetters = false;
    let hasNumbers = false;
    let hasSymbols = false;

    for (let i = 0; i < password.length; i++) {
      const char = password.charAt(i);
      if (isNaN(+char)) {
        if (char.match(/[a-zA-Z]/i)) {
          hasLetters = true;
        } else {
          hasSymbols = true;
        }
      } else {
        hasNumbers = true;
      }
    }

    if (hasLetters && hasNumbers && hasSymbols) {
      return 'strong';
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
