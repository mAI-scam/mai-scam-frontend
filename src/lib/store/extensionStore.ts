import { create } from 'zustand';

interface ExtensionState {
  isActive: boolean;
  isAnalyzing: boolean;
  riskScore: number | null;
  riskLevel: 'low' | 'medium' | 'high' | null;
  explanation: string | null;
  toggleExtension: () => void;
  analyzeContent: (content: string) => void;
  resetAnalysis: () => void;
}

export const useExtensionStore = create<ExtensionState>((set) => ({
  isActive: false,
  isAnalyzing: false,
  riskScore: null,
  riskLevel: null,
  explanation: null,
  
  toggleExtension: () => set((state) => ({ 
    isActive: !state.isActive,
    riskScore: null,
    riskLevel: null,
    explanation: null 
  })),
  
  analyzeContent: async (content: string) => {
    set({ isAnalyzing: true });
    
    // Simulate API call to LLM with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Check if content contains scam indicators
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
    
    // Calculate risk score based on keywords found
    const baseScore = Math.min(foundKeywords.length * 12, 90);
    const riskScore = baseScore + Math.floor(Math.random() * 5) + 5; // Add some randomness
    
    // Determine risk level
    let riskLevel: 'low' | 'medium' | 'high';
    if (riskScore >= 80) {
      riskLevel = 'high';
    } else if (riskScore >= 50) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'low';
    }
    
    // Generate explanation based on findings
    const explanation = riskLevel === 'high' 
      ? 'Analisis mendapati e-mel ini mengandungi ciri-ciri penipuan:\n\n• Meminta maklumat peribadi (nombor akaun, kata laluan)\n• Menggunakan bahasa yang mendesak untuk tindakan segera\n• Pautan yang mencurigakan bukan dari domain rasmi\n• Janji hadiah wang tunai yang tidak realistik\n• Tiada tandatangan rasmi atau maklumat hubungan yang sah\n• Domain pengirim tidak sepadan dengan organisasi yang didakwa'
      : riskLevel === 'medium'
      ? 'E-mel ini mungkin mencurigakan. Sila berhati-hati dengan:\n\n• Permintaan maklumat peribadi\n• Pautan yang tidak dikenali\n• Tawaran yang terlalu baik untuk dipercayai'
      : 'E-mel ini kelihatan selamat, tetapi sentiasa berhati-hati dengan komunikasi dalam talian.';
    
    set({
      isAnalyzing: false,
      riskScore,
      riskLevel,
      explanation
    });
  },
  
  resetAnalysis: () => set({
    riskScore: null,
    riskLevel: null,
    explanation: null
  })
}));
