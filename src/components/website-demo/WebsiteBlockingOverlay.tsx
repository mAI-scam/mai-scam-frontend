"use client";

import { Shield, AlertTriangle, ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore } from "@/lib/store/extensionStore";
import { useState } from "react";

export function WebsiteBlockingOverlay() {
  const { isAnalyzing, riskScore, riskLevel, explanation } =
    useExtensionStore();
  const [showFinalWarning, setShowFinalWarning] = useState(false);
  const [allowAccess, setAllowAccess] = useState(false);

  if (allowAccess) return null;

  const handleContinue = () => {
    setShowFinalWarning(true);
  };

  const handleFinalContinue = () => {
    setAllowAccess(true);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-red-600 text-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">
                  LAMAN WEB INI MUNGKIN SCAM!
                </h1>
                <p className="text-red-100">
                  Berhati-hati, harga terlalu murah untuk jadi kenyataan!
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {isAnalyzing ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Menganalisis laman web...</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <span className="text-lg font-semibold">
                      Analisis Risiko
                    </span>
                  </div>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    RISIKO: SANGAT TINGGI - {riskScore}%
                  </Badge>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">
                    Mengapa laman web ini berbahaya?
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>
                        Kami mengesan harga yang luar biasa rendah untuk
                        barangan berjenama (iPhone RM999, PS5 RM599). Ini adalah
                        taktik lazim penipu untuk menarik mangsa.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>
                        URL laman web &quot;deal-raya-123.com&quot; kelihatan
                        mencurigakan dan mungkin cuba meniru platform
                        membeli-belah popular seperti Shopee atau Lazada.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>
                        Terdapat gesaan melampau untuk membeli segera dengan
                        timer palsu dan &quot;stok terhad&quot; - ini adalah
                        teknik manipulasi psikologi.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>
                        Ulasan pelanggan kelihatan palsu - semua 5 bintang
                        dengan komen generik. Tiada ulasan negatif atau neutral.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>
                        Laman web ini mungkin meminta maklumat kad kredit atau
                        pembayaran ke akaun persendirian, bukan melalui payment
                        gateway yang selamat.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-2">
                    ⚠️ Apa yang mungkin berlaku jika anda teruskan?
                  </h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>
                      • Wang anda akan hilang tanpa menerima sebarang barang
                    </li>
                    <li>• Maklumat kad kredit anda mungkin dicuri</li>
                    <li>• Data peribadi anda mungkin disalahgunakan</li>
                    <li>
                      • Anda mungkin menerima barang palsu atau tidak berkualiti
                    </li>
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali ke Keselamatan
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={handleContinue}
                  >
                    Teruskan Dengan Risiko Sendiri
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Final warning modal */}
      {showFinalWarning && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4">
          <Card className="max-w-md">
            <CardContent className="p-6">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-center mb-2">
                Amaran Terakhir!
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Anda akan memasuki laman web yang sangat berisiko. Kami tidak
                bertanggungjawab atas sebarang kerugian.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowFinalWarning(false)}
                >
                  Batal
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={handleFinalContinue}
                >
                  Saya Faham Risikonya
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
