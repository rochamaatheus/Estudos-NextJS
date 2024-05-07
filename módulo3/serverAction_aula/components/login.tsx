'use client';

import { login } from '@/action/login';
import React from 'react';

export default function Login() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username: string = e.currentTarget.username.value;
    const password: string = e.currentTarget.password.value;
    const r = await login(username, password);
    return r;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button>Logar</button>
    </form>
  );
}
