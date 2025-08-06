'use client';

import { 
  ArrowLeft, 
  Archive, 
  AlertCircle, 
  Trash2, 
  MailOpen,
  MoreVertical,
  Reply,
  Forward,
  Star
} from 'lucide-react';
import { useExtensionStore } from '@/lib/store/extensionStore';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RiskAnalysisBlock } from './RiskAnalysisBlock';

const scamEmailContent = {
  from: 'Bank Negara Malaysia <notifications@banknegara-my.info>',
  to: 'shaun.liew@example.com',
  subject: 'PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan',
  date: 'Hari ini, 10:23 PG',
  content: `
Pelanggan Yang Dihormati,

Kami telah mengesan aktiviti mencurigakan dalam akaun bank anda. Untuk keselamatan anda, kami telah membekukan sementara akaun anda.

AMARAN: Akaun anda akan ditutup secara KEKAL dalam 24 JAM jika anda tidak mengesahkan maklumat anda!

Untuk mengaktifkan semula akaun anda, sila klik pautan di bawah dan masukkan maklumat berikut:
- Nombor Akaun Bank
- Kata Laluan Online Banking
- Nombor TAC terakhir anda

[KLIK SINI UNTUK MENGESAHKAN AKAUN ANDA]
https://secure-banknegara-verification.com/verify

Sebagai ganjaran untuk kerjasama anda, anda akan menerima RM 1,000 sebagai token penghargaan selepas pengesahan selesai.

INGAT: Ini adalah e-mel rasmi dari Bank Negara Malaysia. Abaikan mesej ini akan mengakibatkan kehilangan SEMUA wang dalam akaun anda.

Terima kasih,
Jabatan Keselamatan
Bank Negara Malaysia

*E-mel ini dijana secara automatik. Jangan balas e-mel ini.
  `.trim()
};

export function EmailContent() {
  const { isActive, analyzeContent } = useExtensionStore();

  useEffect(() => {
    if (isActive) {
      analyzeContent(scamEmailContent.content, 'email');
    }
  }, [isActive, analyzeContent]);

  return (
    <main className="flex-1 bg-background">
      {/* Email Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Archive className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <AlertCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MailOpen className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Email Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Risk Analysis Block appears here when active */}
        {isActive && <RiskAnalysisBlock />}
        
        <h1 className="text-2xl font-normal mb-6">{scamEmailContent.subject}</h1>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-destructive-foreground text-sm">BN</span>
            </div>
            <div>
              <div className="font-medium text-foreground">{scamEmailContent.from}</div>
              <div className="text-sm text-muted-foreground">kepada {scamEmailContent.to}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>{scamEmailContent.date}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Reply className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-foreground leading-relaxed">
            {scamEmailContent.content}
          </pre>
        </div>
        
        {/* Reply/Forward buttons */}
        <div className="mt-8 flex space-x-4">
          <Button variant="outline" className="rounded-full">
            <Reply className="h-4 w-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline" className="rounded-full">
            <Forward className="h-4 w-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>
    </main>
  );
}
