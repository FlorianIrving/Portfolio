import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ContactService {
  private http = inject(HttpClient);

  sendContact(form: { name: string; email: string; message: string }) {
    return this.http.post('/contact.php', form, {responseType: 'text'});
  }
}
