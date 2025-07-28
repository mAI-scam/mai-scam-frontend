'use client';

import { Shield, X, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useExtensionStore } from '@/lib/store/extensionStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function WebExtensionOverlay() {
  const { 
    isActive, 
    isAnalyzing, 
    riskScore, 
    riskLevel, 
    toggleExtension 
  } = useExtensionStore();

  if (!isActive) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleExtension}
          className="shadow-lg"
        >
          <Shield className="h-5 w-5 mr-2" />
          Activate mAIscam
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Card className="w-80 shadow-xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">mAIscam Active</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={toggleExtension}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {isAnalyzing ? (
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-sm text-muted-foreground">Menganalisis...</p>
            </div>
          ) : riskScore !== null ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {riskLevel === 'high' ? (
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  ) : riskLevel === 'medium' ? (
                    <Info className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  <span className="font-medium">
                    {riskLevel === 'high' ? 'Risiko Tinggi' : 
                     riskLevel === 'medium' ? 'Risiko Sederhana' : 
                     'Risiko Rendah'}
                  </span>
                </div>
                <Badge 
                  variant={riskLevel === 'high' ? 'destructive' : 'secondary'}
                  className="text-lg"
                >
                  {riskScore}%
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Analisis lengkap ditunjukkan dalam e-mel.
              </p>
              
              {riskLevel === 'high' && (
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="w-full"
                >
                  Lihat Butiran Amaran
                </Button>
              )}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
