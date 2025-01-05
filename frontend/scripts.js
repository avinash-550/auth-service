const BASE_URL = 'http://localhost:8083/auth';

let accessToken = null;

// Signup
document.getElementById('signup-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.text();
  document.getElementById('signup-response').innerText = result;
});

// Login
document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    accessToken = await response.text();
    document.getElementById('login-response').innerText = `Token: ${accessToken}`;
  } else {
    const error = await response.text();
    document.getElementById('login-response').innerText = error;
  }
});

// Authenticated Request
document.getElementById('auth-request').addEventListener('click', async () => {
  if (!accessToken) {
    document.getElementById('auth-response').innerText = 'Please login first!';
    return;
  }

  const response = await fetch('http://localhost:8083/example', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

  if (response.ok) {
    const result = await response.json();
    document.getElementById('auth-response').innerText = JSON.stringify(result, null, 2);
  } else {
    const error = await response.text();
    document.getElementById('auth-response').innerText = error;
  }
});
