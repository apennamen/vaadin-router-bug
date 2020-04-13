import { Router } from '@vaadin/router';
import { WiredCalendarBug } from './WiredCalendarBug.js';

customElements.define('wired-calendar-bug', WiredCalendarBug);

function initRouter() {
    const router = new Router(document.querySelector('main'));
    router.setRoutes([
      {
        path: '/',
        component: 'wired-calendar-bug',
      },
    ]);
}
  
window.addEventListener('load', () => {
    console.log('lol');
    initRouter();
});
