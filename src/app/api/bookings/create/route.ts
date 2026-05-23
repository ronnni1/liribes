import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const { doctor, date, time, name, phone, service } = await req.json();

  if (!doctor || !date || !time || !name || !phone || !service) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Check if slot is still free
  const { data: existing } = await supabase
    .from('bookings')
    .select('id')
    .eq('date', date)
    .eq('time', time)
    .eq('doctor', doctor)
    .single();

  if (existing) {
    return NextResponse.json({ error: 'slot_taken' }, { status: 409 });
  }

  const { error } = await supabase
    .from('bookings')
    .insert({ doctor, date, time, name, phone, service });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
