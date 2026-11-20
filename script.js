// Twenty Something: intentionally lightweight, no framework required.
// The RSVP currently demonstrates UI state only. It does NOT transmit or save data.
const form = document.querySelector('#guest-form');
const notice = document.querySelector('#notice');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#guest-name').value.trim();
  const attendance = document.querySelector('#attendance').value;
  if (!name) return;
  const message = {
    yes: `You're on the preview guest list, ${name}!`,
    maybe: `Thanks, ${name}! We'll keep you posted.`,
    no: `We'll miss you, ${name}!`
  }[attendance];
  notice.textContent = message + ' This is a demo; no RSVP was submitted.';
});