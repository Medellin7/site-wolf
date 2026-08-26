import { SITE_CONFIG } from '@/data/content';

export function getWhatsAppUrl(): string {
  const phone = SITE_CONFIG.whatsappNumber;
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  return 'https://wa.me/' + phone + '?text=' + message;
}
