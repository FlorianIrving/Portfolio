import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecaptchaService {
  token = signal<string | null>(null);

  execute(siteKey: string, action: string = 'submit'): Promise<string> {
    return new Promise((resolve, reject) => {
      const grecaptcha = (window as unknown as { grecaptcha?: unknown }).grecaptcha;
      if (!grecaptcha) {
        reject('reCAPTCHA nicht geladen');
        return;
      }
      (grecaptcha as any).ready(() => {
        (grecaptcha as any).execute(siteKey, {action})
          .then((token: string) => {
            this.token.set(token);
            resolve(token);
          })
          .catch(reject);
      });
    });
  }
}
