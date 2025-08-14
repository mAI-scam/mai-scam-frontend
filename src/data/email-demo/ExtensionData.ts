// src/data/email-demo/ExtensionData.ts

import type { LanguageCode } from "@/data/store/Languages";

type ExtensionTextBlock = {
  activateExtension: string;
  deactivateExtension: string;
  extensionActive: string;
  analyzing: string;
  highRisk: string;
  mediumRisk: string;
  lowRisk: string;
  detailsInEmail: string;
  viewWarning: string;
  reportFraud: string;
};

export const ExtensionData: Record<LanguageCode, ExtensionTextBlock> = {
  en: {
    // English
    activateExtension: "Activate mAIscam",
    deactivateExtension: "Deactivate mAIscam",
    extensionActive: "mAIscam Active",
    analyzing: "Analyzing email...",
    highRisk: "High Risk",
    mediumRisk: "Medium Risk",
    lowRisk: "Low Risk",
    detailsInEmail: "Full analysis shown in email.",
    viewWarning: "View Warning Details",
    reportFraud: "Report Fraud",
  },
  ms: {
    // Malay
    activateExtension: "Aktifkan mAIscam",
    deactivateExtension: "Nyahaktifkan mAIscam",
    extensionActive: "mAIscam Aktif",
    analyzing: "Menganalisis e-mel...",
    highRisk: "Risiko Tinggi",
    mediumRisk: "Risiko Sederhana",
    lowRisk: "Risiko Rendah",
    detailsInEmail: "Analisis lengkap ditunjukkan dalam e-mel.",
    viewWarning: "Lihat Butiran Amaran",
    reportFraud: "Laporkan Penipuan",
  },
  zh: {
    // Chinese
    activateExtension: "激活 mAIscam",
    deactivateExtension: "停用 mAIscam",
    extensionActive: "mAIscam 已激活",
    analyzing: "正在分析电子邮件...",
    highRisk: "高风险",
    mediumRisk: "中等风险",
    lowRisk: "低风险",
    detailsInEmail: "完整分析显示在电子邮件中。",
    viewWarning: "查看警告详情",
    reportFraud: "举报欺诈",
  },
  vi: {
    // Vietnamese
    activateExtension: "Kích hoạt mAIscam",
    deactivateExtension: "Hủy kích hoạt mAIscam",
    extensionActive: "mAIscam đã kích hoạt",
    analyzing: "Đang phân tích email...",
    highRisk: "Rủi ro cao",
    mediumRisk: "Rủi ro trung bình",
    lowRisk: "Rủi ro thấp",
    detailsInEmail: "Phân tích chi tiết hiển thị trong email.",
    viewWarning: "Xem chi tiết cảnh báo",
    reportFraud: "Báo cáo lừa đảo",
  },
  th: {
    // Thai
    activateExtension: "เปิดใช้งาน mAIscam",
    deactivateExtension: "ปิดใช้งาน mAIscam",
    extensionActive: "mAIscam เปิดใช้งานแล้ว",
    analyzing: "กำลังวิเคราะห์อีเมล...",
    highRisk: "มีความเสี่ยงสูง",
    mediumRisk: "มีความเสี่ยงปานกลาง",
    lowRisk: "มีความเสี่ยงต่ำ",
    detailsInEmail: "การวิเคราะห์ทั้งหมดแสดงในอีเมล",
    viewWarning: "ดูรายละเอียดคำเตือน",
    reportFraud: "รายงานการหลอกลวง",
  },
  fil: {
    // Filipino
    activateExtension: "I-activate ang mAIscam",
    deactivateExtension: "I-deactivate ang mAIscam",
    extensionActive: "Aktibo ang mAIscam",
    analyzing: "Sinusuri ang email...",
    highRisk: "Mataas na Panganib",
    mediumRisk: "Katamtamang Panganib",
    lowRisk: "Mababang Panganib",
    detailsInEmail: "Buong pagsusuri ay nasa email.",
    viewWarning: "Tingnan ang Babala",
    reportFraud: "I-report ang Panloloko",
  },
  id: {
    // Indonesian
    activateExtension: "Aktifkan mAIscam",
    deactivateExtension: "Nonaktifkan mAIscam",
    extensionActive: "mAIscam Aktif",
    analyzing: "Menganalisis email...",
    highRisk: "Risiko Tinggi",
    mediumRisk: "Risiko Sedang",
    lowRisk: "Risiko Rendah",
    detailsInEmail: "Analisis lengkap ditampilkan di email.",
    viewWarning: "Lihat Rincian Peringatan",
    reportFraud: "Laporkan Penipuan",
  },
  jv: {
    // Javanese
    activateExtension: "Aktifake mAIscam",
    deactivateExtension: "Matekake mAIscam",
    extensionActive: "mAIscam wis aktif",
    analyzing: "Nglakoni analisa email...",
    highRisk: "Risiko Dhuwur",
    mediumRisk: "Risiko Sedheng",
    lowRisk: "Risiko Endhek",
    detailsInEmail: "Analisa lengkap ditampilake ing email.",
    viewWarning: "Deleng Rincian Peringatan",
    reportFraud: "Lapor Penipuan",
  },
  su: {
    // Sundanese
    activateExtension: "Aktipkeun mAIscam",
    deactivateExtension: "Pareum mAIscam",
    extensionActive: "mAIscam parantos aktip",
    analyzing: "Ngalaan email...",
    highRisk: "Risiko Luhur",
    mediumRisk: "Risiko Sedeng",
    lowRisk: "Risiko Handap",
    detailsInEmail: "Analisis lengkep ditingal dina email.",
    viewWarning: "Tingal Rincian Peringatan",
    reportFraud: "Laporkeun Panipuan",
  },
  km: {
    // Khmer
    activateExtension: "បើកដំណើរការ mAIscam",
    deactivateExtension: "បិទដំណើរការ mAIscam",
    extensionActive: "mAIscam បានដំណើរការ",
    analyzing: "កំពុងវិភាគអ៊ីមែល...",
    highRisk: "ហានិភ័យខ្ពស់",
    mediumRisk: "ហានិភ័យមធ្យម",
    lowRisk: "ហានិភ័យទាប",
    detailsInEmail: "ការវិភាគពេញលេញបង្ហាញក្នុងអ៊ីមែល។",
    viewWarning: "មើលព័ត៌មានព្រមាន",
    reportFraud: "រាយការណ៍ការលួចលួង",
  },
  lo: {
    // Lao
    activateExtension: "ເປີດໃຊ້ mAIscam",
    deactivateExtension: "ປິດໃຊ້ mAIscam",
    extensionActive: "mAIscam ເປີດແລ້ວ",
    analyzing: "ກຳລັງວິເຄາະອີເມວ...",
    highRisk: "ຄວາມສ່ຽງສູງ",
    mediumRisk: "ຄວາມສ່ຽງປານກາງ",
    lowRisk: "ຄວາມສ່ຽງຕ່ຳ",
    detailsInEmail: "ການວິເຄາະແບບເຕັມສະແດງໃນອີເມວ.",
    viewWarning: "ເບິ່ງລາຍລະອຽດຄຳເຕືອນ",
    reportFraud: "ລາຍງານການຫລອກລວງ",
  },
  my: {
    // Burmese
    activateExtension: "mAIscam ကိုဖွင့်ပါ",
    deactivateExtension: "mAIscam ကိုပိတ်ပါ",
    extensionActive: "mAIscam အသုံးပြုပြီးပါပြီ",
    analyzing: "အီးမေးလ်ကို ချက်ခြင်းစစ်ဆေးနေသည်...",
    highRisk: "အန္တရာယ်အမြင့်",
    mediumRisk: "အန္တရာယ်အလတ်စား",
    lowRisk: "အန္တရာယ်နည်း",
    detailsInEmail: "အပြည့်အစုံကို အီးမေးလ်တွင်ပြသသည်။",
    viewWarning: "သတိပေးချက်အသေးစိတ်ကြည့်ရန်",
    reportFraud: "လှည့်ဖျက်မှုကိုรายงานပါ",
  },
  ta: {
    // Tamil
    activateExtension: "mAIscam ஐ செயல்படுத்தவும்",
    deactivateExtension: "mAIscam ஐ நிறுத்தவும்",
    extensionActive: "mAIscam செயல்பட்டது",
    analyzing: "மின்னஞ்சலை பகுப்பாய்வு செய்கிறது...",
    highRisk: "உயர் அபாயம்",
    mediumRisk: "மிதமான அபாயம்",
    lowRisk: "குறைந்த அபாயம்",
    detailsInEmail: "முழு பகுப்பாய்வு மின்னஞ்சலில் காணப்படும்.",
    viewWarning: "எச்சரிக்கையைப் பார்க்கவும்",
    reportFraud: "ஏமாற்றத்தை புகாரளிக்கவும்",
  },
};
