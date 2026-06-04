import { NextResponse } from 'next/server';
import { prismaAdmin } from '@/lib/prisma/adminClient';
import { sendContactEmail } from '@/lib/services/mail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, source } = body;

    // Simple validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    if (!source || typeof source !== 'string' || !source.trim()) {
      return NextResponse.json({ error: 'Source is required' }, { status: 400 });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();
    const trimmedSource = source.trim();

    // 1. Save to Database
    const savedMessage = await prismaAdmin.contactMessage.create({
      data: {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        source: trimmedSource,
      },
    });

    // 2. Send via Email
    const emailResult = await sendContactEmail({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      source: trimmedSource,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: savedMessage.id,
        emailSent: emailResult.success,
      },
    });
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
