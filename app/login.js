// pages/login.js
import { useState } from 'react';
import { signIn } from 'next-auth';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn('credentials', { email, password, redirect: false });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login with Email/Password</button>
      </form>
      <div>
        <button onClick={() => signIn('google', { callbackUrl: `${window.location.origin}/dashboard` })}>Login with Google</button>
        <button onClick={() => signIn('facebook', { callbackUrl: `${window.location.origin}/dashboard` })}>Login with Facebook</button>
      </div>
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
}
