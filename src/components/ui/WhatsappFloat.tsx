'use client';

import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsappFloat() {
  const [whatsappUrl, setWhatsappUrl] = useState('https://wa.me/5583999999999');

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.whatsappNumber) {
          const phone = data.whatsappNumber.replace(/\D/g, '');
          const message = encodeURIComponent(data.whatsappMessage || 'Olá, vim pelo site e gostaria de um orçamento.');
          setWhatsappUrl(`https://wa.me/${phone}?text=${message}`);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Falar no WhatsApp'
      className='fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl shadow-blue-950 transition-all hover:scale-110'
    >
      <MessageCircle className='w-7 h-7 text-white' />
    </a>
  );
}