'use client';

import { Shield, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useExtensionStore } from '@/lib/store/extensionStore';

export function RiskAnalysisBlock() {
  const { isAnalyzing, riskScore, riskLevel, explanation } = useExtensionStore();

  if (!riskScore) return null;

  return (
    <div className="mb-4">
      {/* Gmail-style spam warning */}
      <Alert className="mb-4 border-yellow-500 bg-yellow-50">
        <AlertDescription className="text-sm text-gray-700">
          <strong>Mengapa mesej ini dalam spam?</strong> Ia serupa dengan mesej yang telah dikenal pasti sebagai spam pada masa lalu.
        </AlertDescription>
        <Button variant="outline" size="sm" className="mt-2">
          Laporkan bukan spam
        </Button>
      </Alert>

      {/* Risk Analysis Card */}
      <Card className={`border-l-4 ${
        riskLevel === 'high' ? 'border-l-red-500' : 
        riskLevel === 'medium' ? 'border-l-yellow-500' : 
        'border-l-green-500'
      }`}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-gray-600" />
              <h3 className="text-lg font-semibold text-red-600">AMARAN RISIKO TINGGI</h3>
            </div>
            <Badge variant="destructive" className="text-base px-3 py-1">
              RISIKO: TINGGI
            </Badge>
          </div>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            E-mel ini mengandungi beberapa petunjuk penipuan yang berpotensi. Subjek 'PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan' 
            mencipta rasa keperluan segera, taktik biasa dalam percubaan pancingan data untuk mendorong tindakan segera tanpa 
            pertimbangan yang teliti. E-mel ini tidak mempunyai personalisasi yang sah untuk tawaran perbankan yang sebenar. 
            Selain itu, arahan untuk 'masukkan maklumat' adalah amaran besar dan boleh menjadi sebahagian daripada amalan menipu 
            untuk mencuri kredensial anda. E-mel ini juga mengandungi beberapa pautan yang mencurigakan yang berpotensi membawa 
            ke laman web berniat jahat.
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Keperluan palsu</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Tawaran promosi yang mencurigakan</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Kekurangan personalisasi</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Potensi untuk amalan menipu</span>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-sm mb-2">Tindakan Yang Disyorkan:</h4>
            <p className="text-sm text-gray-700">
              Jangan berinteraksi dengan mana-mana pautan atau muat turun sebarang lampiran dari e-mel ini. Tandakan e-mel 
              sebagai spam dan padamkannya. Jika anda berminat untuk mengesahkan status akaun anda, hubungi bank anda secara langsung 
              melalui laman web rasmi mereka atau perkhidmatan pelanggan untuk mengesahkan.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="destructive" className="font-medium">
              LAPORKAN PENIPUAN
            </Button>
            <Button variant="outline">
              TOLAK
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
