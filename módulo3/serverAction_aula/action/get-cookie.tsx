'use server';

import { cookies } from 'next/headers';

export async function getCookie(key: string) {
  return cookies().get('token')?.value;
}
