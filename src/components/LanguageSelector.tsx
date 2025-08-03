'use client';

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useExtensionStore, Language } from '@/lib/store/extensionStore';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export function LanguageSelector() {
  const { selectedLanguage, setLanguage } = useExtensionStore();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[1];

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white border rounded-lg shadow-lg z-50 min-w-[180px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 ${
                lang.code === selectedLanguage ? 'bg-gray-100' : ''
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
