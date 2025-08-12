import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContactService} from './contact.service';
import {Content} from '../../components/content/content';
import {RecaptchaService} from '../../services/recaptcha.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Content, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern(/^[a-zA-Z0-9\s]+$/)]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(500), Validators.pattern(/^[a-zA-Z0-9\s.,!?'"-]+$/)]
    }),
  });
  status = signal<string | null>(null);
  private contactService = inject(ContactService);

  private recaptcha = inject(RecaptchaService);
  private readonly siteKey = '6LdAf54rAAAAAJbHAveimxuLWr1yt85HEbOUHsg2';

  onSubmit() {
    if (this.contactForm.valid) {
      this.recaptcha.execute(this.siteKey).then(token => {
        const payload = {
          name: this.contactForm.value.name ?? '',
          email: this.contactForm.value.email ?? '',
          message: this.contactForm.value.message ?? '',
          captcha: token
        };
        this.contactService.sendContact(payload)
          .subscribe({
            next: (msg: string) => {
              this.status.set(msg);
              setTimeout(() => this.status.set(null), 3000);
              this.contactForm.reset();
            },
            error: () => this.status.set('Fehler beim Senden.')
          });
      });
    } else {
      this.status.set('Formular ist ungültig.');
    }
  }
}
