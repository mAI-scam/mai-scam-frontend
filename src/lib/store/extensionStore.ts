import { create } from 'zustand';

export type Language = 'en' | 'ms' | 'zh';

interface ExtensionState {
  isActive: boolean;
  isAnalyzing: boolean;
  riskScore: number | null;
  riskLevel: 'low' | 'medium' | 'high' | null;
  explanation: string | null;
  analysisType: 'email' | 'website' | null;
  selectedLanguage: Language;
  toggleExtension: () => void;
  analyzeContent: (content: string, type: 'email' | 'website') => void;
  resetAnalysis: () => void;
  setLanguage: (language: Language) => void;
  reportScam: (type: 'email' | 'website' | 'image', data?: any) => Promise<void>;
}

export const useExtensionStore = create<ExtensionState>((set, get) => ({
  isActive: false,
  isAnalyzing: false,
  riskScore: null,
  riskLevel: null,
  explanation: null,
  analysisType: null,
  selectedLanguage: 'ms',
  
  toggleExtension: () => set((state) => ({ 
    isActive: !state.isActive,
    riskScore: null,
    riskLevel: null,
    explanation: null,
    analysisType: null
  })),
  
  analyzeContent: async (content: string, type: 'email' | 'website') => {
    set({ isAnalyzing: true, analysisType: type });
    
    // Simulate API call to LLM with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    if (type === 'email') {
      // Email analysis logic
      const scamKeywords = [
        'akaun anda telah dibekukan',
        'tindakan segera diperlukan',
        'dalam 24 jam',
        'kata laluan',
        'nombor tac',
        'rm 1,000',
        'klik sini',
        'secure-banknegara-verification'
      ];
      
      const foundKeywords = scamKeywords.filter(keyword => 
        content.toLowerCase().includes(keyword.toLowerCase())
      );
      
      const baseScore = Math.min(foundKeywords.length * 12, 90);
      const riskScore = baseScore + Math.floor(Math.random() * 5) + 5;
      
      let riskLevel: 'low' | 'medium' | 'high';
      if (riskScore >= 80) {
        riskLevel = 'high';
      } else if (riskScore >= 50) {
        riskLevel = 'medium';
      } else {
        riskLevel = 'low';
      }
      
      const explanations = {
        high: {
          en: 'Analysis found this email contains scam characteristics:\n\n• Requests for personal information (account numbers, passwords)\n• Uses urgent language to force immediate action\n• Suspicious links not from official domain\n• Unrealistic cash reward promises\n• No official signature or legitimate contact information\n• Sender domain does not match claimed organization',
          ms: 'Analisis mendapati e-mel ini mengandungi ciri-ciri penipuan:\n\n• Meminta maklumat peribadi (nombor akaun, kata laluan)\n• Menggunakan bahasa yang mendesak untuk tindakan segera\n• Pautan yang mencurigakan bukan dari domain rasmi\n• Janji hadiah wang tunai yang tidak realistik\n• Tiada tandatangan rasmi atau maklumat hubungan yang sah\n• Domain pengirim tidak sepadan dengan organisasi yang didakwa',
          zh: '分析发现此电子邮件包含诈骗特征：\n\n• 要求提供个人信息（账号、密码）\n• 使用紧急语言强迫立即行动\n• 可疑链接不是来自官方域名\n• 不切实际的现金奖励承诺\n• 没有官方签名或合法联系信息\n• 发件人域名与声称的组织不匹配'
        },
        medium: {
          en: 'This email may be suspicious. Please be careful with:\n\n• Requests for personal information\n• Unrecognized links\n• Offers that are too good to be true',
          ms: 'E-mel ini mungkin mencurigakan. Sila berhati-hati dengan:\n\n• Permintaan maklumat peribadi\n• Pautan yang tidak dikenali\n• Tawaran yang terlalu baik untuk dipercayai',
          zh: '此电子邮件可能有可疑之处。请注意：\n\n• 个人信息请求\n• 不认识的链接\n• 好得不真实的优惠'
        },
        low: {
          en: 'This email appears safe, but always be cautious with online communications.',
          ms: 'E-mel ini kelihatan selamat, tetapi sentiasa berhati-hati dengan komunikasi dalam talian.',
          zh: '此电子邮件看起来安全，但始终要对在线通信保持谨慎。'
        }
      };
      
      const language = (get().selectedLanguage || 'ms') as Language;
      const explanation = explanations[riskLevel][language];
      
      set({
        isAnalyzing: false,
        riskScore,
        riskLevel,
        explanation
      });
    } else if (type === 'website') {
      // Website analysis - always high risk for the demo
      const riskScore = 95 + Math.floor(Math.random() * 4);
      
      const websiteExplanations = {
        en: 'This website shows many warning signs of online scam.',
        ms: 'Laman web ini menunjukkan banyak tanda amaran penipuan dalam talian.',
        zh: '此网站显示了许多在线诈骗的警告信号。'
      };
      
      const language = (get().selectedLanguage || 'ms') as Language;
      
      set({
        isAnalyzing: false,
        riskScore,
        riskLevel: 'high',
        explanation: websiteExplanations[language]
      });
    }
  },
  
  resetAnalysis: () => set({
    riskScore: null,
    riskLevel: null,
    explanation: null,
    analysisType: null
  }),
  
  setLanguage: (language: Language) => set({ selectedLanguage: language }),
  
  reportScam: async (type: 'email' | 'website' | 'image', data?: any) => {
    // Mock implementation for demo purposes
    console.log(`Reporting ${type} scam:`, data);
    
    if (type === 'email') {
      // Mock: Forward to Anti-Phishing Working Group
      alert('Demo: Email akan diteruskan ke reportphishing@apwg.org\n\nDalam implementasi sebenar, email ini akan dihantar secara automatik.');
    } else if (type === 'website') {
      // Mock: Report to Google Safe Browsing and PhishTank
      const url = data?.url || 'deal-raya-123.com';
      alert(`Demo: Laman web akan dilaporkan ke:\n\n1. Google Safe Browsing\n2. PhishTank (https://www.phishtank.com/)\n\nURL: ${url}\n\nDalam implementasi sebenar, laporan akan dihantar melalui API.`);
    } else if (type === 'image') {
      // Mock: Report based on source
      alert('Demo: Imej penipuan akan dilaporkan berdasarkan sumber\n\nJika dari media sosial, akan dilaporkan ke platform tersebut.\nJika dari WhatsApp/Telegram, akan dilaporkan ke MCMC.');
    }
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}));
