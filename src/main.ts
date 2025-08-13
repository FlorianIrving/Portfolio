import 'zone.js';
import {bootstrapApplication} from '@angular/platform-browser';
import {App} from './app/app';
import {appConfig} from './app/app.config';

const consoleIntroMessages = [
  {
    text: '{ IRVING }',
    style: 'font-size: 64px; font-weight: bold; color: #38bdf8; text-shadow: 0 0 10px #0ea5e9;'
  },
  {
    text: 'GitHub: https://github.com/FlorianIrving\n' +
      'LinkedIn: www.linkedin.com/in/florian-irving-6174572a2\n' +
      'Discord: https://discordapp.com/users/423074517548531712',
    style:
      'color: #00e0ff; font-family: monospace; font-size: 13px; text-decoration: underline; border: none'
  },
  {
    text:
      'Warnung vor Betrug!\n' +
      'Wenn du aufgefordert wirst, etwas hier in der Konsole einzugeben – tu es NICHT.\n' +
      'Kein echtes Projekt wird dich je darum bitten.',
    style: 'color: red; font-weight: bold; font-size: 14px; border: none'
  }
];

// setTimeout(() => {
//   console.clear();
//   consoleIntroMessages.forEach((msg, index) => {
//     setTimeout(() => console.log(`%c${msg.text}`, msg.style), index * 800);
//   });
// }, 1000);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
