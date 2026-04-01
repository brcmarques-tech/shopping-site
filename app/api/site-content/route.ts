import { NextResponse } from 'next/server';
import { getSiteContent } from '@/lib/site-content';

export const revalidate = 300;

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content);
}
