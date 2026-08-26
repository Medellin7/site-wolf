import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let settings = await prisma.siteSettings.findUnique({
      where: { id: 'settings' },
    });
    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: { id: 'settings' },
      });
    }
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar configurações' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const settings = await prisma.siteSettings.upsert({
      where: { id: 'settings' },
      update: {
        whatsappNumber: body.whatsappNumber,
        whatsappMessage: body.whatsappMessage,
        email: body.email,
        github: body.github,
        linkedin: body.linkedin,
        facebook: body.facebook,
        instagram: body.instagram,
        tiktok: body.tiktok,
        kwai: body.kwai,
      },
      create: {
        id: 'settings',
        whatsappNumber: body.whatsappNumber,
        whatsappMessage: body.whatsappMessage,
        email: body.email,
        github: body.github,
        linkedin: body.linkedin,
        facebook: body.facebook,
        instagram: body.instagram,
        tiktok: body.tiktok,
        kwai: body.kwai,
      },
    });
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar configurações' }, { status: 500 });
  }
}

