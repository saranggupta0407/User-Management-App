// pages/forgot-password.js
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic here to send reset password email
    setMessage('Password reset email sent. Check your inbox.');
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <button type="submit">Send Reset Password Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
