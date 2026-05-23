import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data } = await supabase.from('admin_users').select('id').limit(1);
  return NextResponse.json({ exists: (data?.length ?? 0) > 0 });
}

export async function POST(req: NextRequest) {
  const { data: existing } = await supabase.from('admin_users').select('id').limit(1);
  if ((existing?.length ?? 0) > 0) {
    return NextResponse.json({ error: 'Useri ekziston tashmë.' }, { status: 403 });
  }

  const { username, password } = await req.json();
  if (!username || !password || password.length < 6) {
    return NextResponse.json({ error: 'Të dhënat janë të pavlefshme.' }, { status: 400 });
  }

  const password_hash = await bcrypt.hash(password, 12);
  const { error } = await supabase.from('admin_users').insert({ username, password_hash });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
