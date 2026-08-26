import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.siteSettings.upsert({
    where: { id: 'settings' },
    update: {},
    create: {
      id: 'settings',
      whatsappNumber: '5583999999999',
      whatsappMessage: 'Olá, vim pelo site da WOLF DEV e gostaria de solicitar um orçamento.',
      email: 'contato@wolfdev.com.br',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  });

  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.adminUser.upsert({
    where: { email: 'admin@wolfdev.com' },
    update: {},
    create: {
      email: 'admin@wolfdev.com',
      password: hashedPassword,
    },
  });

  console.log('Seed executado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });