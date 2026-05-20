(function () {
  'use strict';

  // ---------------------------------------------------------------
  // /js/contact.js — handles the inquiry form on contact.html.
  // Responsibilities (and only these):
  //   1. Minimal client-side validation (name, email, interest).
  //   2. POST form data to the Formspree endpoint via fetch.
  //   3. Replace the form with an inline confirmation on success.
  //   4. Show a single inline error line on failure; restore submit.
  // ---------------------------------------------------------------

  var form = document.getElementById('inquiry-form');
  var wrap = document.getElementById('inquiry-form-wrap');
  if (!form || !wrap) return;

  var submitBtn   = document.getElementById('inq-submit');
  var submitError = document.getElementById('inq-submit-error');

  var fields = {
    name:     { input: document.getElementById('inq-name'),     error: document.getElementById('inq-name-error') },
    email:    { input: document.getElementById('inq-email'),    error: document.getElementById('inq-email-error') },
    interest: { input: null /* radio group */,                  error: document.getElementById('inq-interest-error') }
  };

  // Simple, deliberately permissive email check.
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(key, message) {
    var f = fields[key];
    if (!f) return;
    if (f.input) f.input.classList.add('has-error');
    if (key === 'interest') {
      form.querySelectorAll('.pill-group label').forEach(function (lbl) { lbl.classList.add('has-error'); });
    }
    if (f.error) {
      f.error.textContent = message;
      f.error.hidden = false;
    }
  }

  function clearError(key) {
    var f = fields[key];
    if (!f) return;
    if (f.input) f.input.classList.remove('has-error');
    if (key === 'interest') {
      form.querySelectorAll('.pill-group label').forEach(function (lbl) { lbl.classList.remove('has-error'); });
    }
    if (f.error) {
      f.error.textContent = '';
      f.error.hidden = true;
    }
  }

  function validate() {
    var valid = true;
    clearError('name'); clearError('email'); clearError('interest');

    var name = fields.name.input.value.trim();
    if (!name) { setError('name', 'Please enter your name.'); valid = false; }

    var email = fields.email.input.value.trim();
    if (!email) {
      setError('email', 'Please enter your email.'); valid = false;
    } else if (!EMAIL_RE.test(email)) {
      setError('email', 'Please enter a valid email address.'); valid = false;
    }

    var interest = form.querySelector('input[name="interest"]:checked');
    if (!interest) { setError('interest', 'Please choose an area of interest.'); valid = false; }

    return valid;
  }

  // Clear a field's error as the user corrects it.
  if (fields.name.input)  fields.name.input.addEventListener('input',  function () { clearError('name'); });
  if (fields.email.input) fields.email.input.addEventListener('input', function () { clearError('email'); });
  form.querySelectorAll('input[name="interest"]').forEach(function (r) {
    r.addEventListener('change', function () { clearError('interest'); });
  });

  function showSubmitError(msg) {
    if (!submitError) return;
    submitError.textContent = msg;
    submitError.hidden = false;
  }
  function clearSubmitError() {
    if (!submitError) return;
    submitError.textContent = '';
    submitError.hidden = true;
  }

  function setSubmitting(isSubmitting) {
    submitBtn.disabled = isSubmitting;
    submitBtn.classList.toggle('is-sending', isSubmitting);
    submitBtn.textContent = isSubmitting ? 'Sending…' : 'Send inquiry';
  }

  function showConfirmation() {
    var html =
      '<div id="inquiry-confirmation" class="inquiry-confirmation" role="status" aria-live="polite" tabindex="-1">' +
        '<p class="eyebrow">Thank You</p>' +
        '<h2 class="section-heading inquiry-confirmation__heading">Your message is in.</h2>' +
        '<p class="inquiry-confirmation__line">Thank you for your interest, we’ll be in touch.</p>' +
        '<span class="inquiry-confirmation__rule" aria-hidden="true"></span>' +
      '</div>';
    wrap.innerHTML = html;
    var conf = document.getElementById('inquiry-confirmation');
    if (conf) conf.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearSubmitError();
    if (!validate()) {
      // Move focus to the first invalid field.
      var firstInvalid = form.querySelector('.has-error');
      if (firstInvalid && typeof firstInvalid.focus === 'function') firstInvalid.focus();
      return;
    }

    setSubmitting(true);

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        showConfirmation();
      } else {
        setSubmitting(false);
        showSubmitError('Something went wrong sending your message. Please try again, or email sales@dellamountain.com directly.');
      }
    }).catch(function () {
      setSubmitting(false);
      showSubmitError('Something went wrong sending your message. Please try again, or email sales@dellamountain.com directly.');
    });
  });
})();
