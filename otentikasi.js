"use strict";

const VALID_USERNAME = 'ahmad2017';
const VALID_PASSWORD = 'integrity';

function handleLogin(event) {
  if (event && event.preventDefault) event.preventDefault();

  const usernameEl = document.getElementById('username');
  const passwordEl = document.getElementById('password');
  if(!usernameEl || !passwordEl) {
    alert('Form login tidak lengkap.');
    return false;
  }

  const username = usernameEl.value.trim();
  const password = passwordEl.value;

  const messageEl = document.getElementById('loginMessage');
  if (messageEl) {
    messageEl.style.display = 'none';
    messageEl.textContent = '';
    messageEl.className = '';
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    alert('Login sukses');
    if (messageEl) {
      messageEl.textContent = 'Login sukses. Selamat datang, ' + username + '!';
      messageEl.classList.add('message-success');
      messageEl.style.display = 'block';
    }
    return true;
  }

  alert('Login gagal: username atau password salah');
  if (messageEl) {
    messageEl.textContent = 'Login gagal: username atau password salah';
    messageEl.classList.add('message-error');
    messageEl.style.display = 'block';
  }
  return false;
}

window.handleLogin = handleLogin;