import { Component } from '@angular/core';
import passwordStrengthColors from './passwordStrengthColors';
import { PasswordValidationService } from '../shared/services/password-validation.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent {
  password: string = '';
  sectionColors: string[] = passwordStrengthColors.none;

  constructor(private passwordValidationService: PasswordValidationService) {}

  onPasswordChange() {
    const passwordStrength =
      this.passwordValidationService.calculatePasswordStrength(this.password);

    switch (passwordStrength) {
      case 'none':
        this.sectionColors = passwordStrengthColors.none;
        break;
      case 'nonValid':
        this.sectionColors = passwordStrengthColors.nonValid;
        break;
      case 'easy':
        this.sectionColors = passwordStrengthColors.easy;
        break;
      case 'medium':
        this.sectionColors = passwordStrengthColors.medium;
        break;
      case 'strong':
        this.sectionColors = passwordStrengthColors.strong;
        break;
    }
  }
}
