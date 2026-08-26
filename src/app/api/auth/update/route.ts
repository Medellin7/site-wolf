import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function PUT(request: Request) {
  try {
    const { newEmail, newPassword } = await request.json();

    // Pega o primeiro administrador cadastrado no banco de dados
    const admin = await prisma.adminUser.findFirst();

    if (!admin) {
      return NextResponse.json({ error: 'Nenhum administrador encontrado' }, { status: 404 });
    }

    const updateData: any = {};

    if (newEmail && newEmail.trim() !== '') {
      updateData.email = newEmail;
    }

    if (newPassword && newPassword.trim() !== '') {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    const updatedAdmin = await prisma.adminUser.update({
      where: { id: admin.id },
      data: updateData,
    });

    // Atualiza também nas configurações do site para refletir no rodapé
    if (newEmail) {
      await prisma.siteSettings.updateMany({
        where: { id: 'settings' },
        data: { email: newEmail },
      });
    }

    return NextResponse.json({ success: true, email: updatedAdmin.email, message: 'Credenciais atualizadas com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar credenciais' }, { status: 500 });
  }
}