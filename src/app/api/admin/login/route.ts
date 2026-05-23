import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const res = NextResponse.json({ success: true });
    res.cookies.set('admin_session', process.env.ADMIN_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    return res;
  }

  return NextResponse.json({ error: 'Kredencialet janë të gabuara.' }, { status: 401 });
}
