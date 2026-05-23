import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');
  const doctor = searchParams.get('doctor');

  if (!date || !doctor) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('bookings')
    .select('time')
    .eq('date', date)
    .eq('doctor', doctor);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const booked = data.map((r: { time: string }) => r.time);
  return NextResponse.json({ booked });
}
