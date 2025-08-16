import type { LanguageCode } from "@/data/store/Languages";

export type SafeSiteRedirectTranslation = {
  title: string;
  subtitle: string;
  currentSite: string;
  safeSite: string;
  redirectButton: string;
  redirectButtonSecondary: string;
  verified: string;
  secure: string;
  trusted: string;
  description: string;
  suspicious: string;
};

export const SafeSiteRedirectData: Record<
  LanguageCode,
  SafeSiteRedirectTranslation
> = {
  en: {
    title: "Safe Alternative Found!",
    subtitle: "We found the legitimate website you might be looking for:",
    currentSite: "Current site (suspicious):",
    safeSite: "Safe alternative:",
    redirectButton: "Go to Safe Site",
    redirectButtonSecondary: "Visit Legitimate Site",
    verified: "Verified",
    secure: "Secure",
    trusted: "Trusted",
    description: "This is the official, verified website with secure payment methods and buyer protection.",
    suspicious: "Suspicious",
  },
  ms: {
    title: "Alternatif Selamat Dijumpai!",
    subtitle: "Kami jumpa laman web sah yang mungkin anda cari:",
    currentSite: "Laman semasa (mencurigakan):",
    safeSite: "Alternatif selamat:",
    redirectButton: "Pergi ke Laman Selamat",
    redirectButtonSecondary: "Lawati Laman Sah",
    verified: "Disahkan",
    secure: "Selamat",
    trusted: "Dipercayai",
    description: "Ini adalah laman web rasmi yang disahkan dengan kaedah pembayaran selamat dan perlindungan pembeli.",
    suspicious: "Mencurigakan",
  },
  zh: {
    title: "找到安全替代网站！",
    subtitle: "我们找到了您可能正在寻找的合法网站：",
    currentSite: "当前网站（可疑）：",
    safeSite: "安全替代网站：",
    redirectButton: "前往安全网站",
    redirectButtonSecondary: "访问合法网站",
    verified: "已验证",
    secure: "安全",
    trusted: "可信",
    description: "这是官方验证的网站，具有安全的支付方式和买家保护。",
    suspicious: "可疑",
  },
  vi: {
    title: "Tìm thấy trang thay thế an toàn!",
    subtitle: "Chúng tôi tìm thấy trang web chính thức bạn có thể đang tìm:",
    currentSite: "Trang hiện tại (đáng ngờ):",
    safeSite: "Trang thay thế an toàn:",
    redirectButton: "Đi đến trang an toàn",
    redirectButtonSecondary: "Truy cập trang chính thức",
    verified: "Đã xác minh",
    secure: "An toàn",
    trusted: "Đáng tin cậy",
    description: "Đây là trang web chính thức đã được xác minh với phương thức thanh toán an toàn và bảo vệ người mua.",
    suspicious: "Đáng ngờ",
  },
  th: {
    title: "พบทางเลือกที่ปลอดภัย!",
    subtitle: "เราพบเว็บไซต์ที่ถูกต้องตามกฎหมายที่คุณอาจกำลังมองหา:",
    currentSite: "ไซต์ปัจจุบัน (น่าสงสัย):",
    safeSite: "ทางเลือกที่ปลอดภัย:",
    redirectButton: "ไปยังไซต์ที่ปลอดภัย",
    redirectButtonSecondary: "เยี่ยมชมไซต์ที่ถูกต้อง",
    verified: "ยืนยันแล้ว",
    secure: "ปลอดภัย",
    trusted: "เชื่อถือได้",
    description: "นี่คือเว็บไซต์อย่างเป็นทางการที่ได้รับการยืนยันแล้วพร้อมวิธีการชำระเงินที่ปลอดภัยและการคุ้มครองผู้ซื้อ",
    suspicious: "น่าสงสัย",
  },
  fil: {
    title: "Nahanap ang Ligtas na Alternatibo!",
    subtitle: "Nahanap namin ang lehitimong website na maaaring hinahanap mo:",
    currentSite: "Kasalukuyang site (kahina-hinala):",
    safeSite: "Ligtas na alternatibo:",
    redirectButton: "Pumunta sa Ligtas na Site",
    redirectButtonSecondary: "Bisitahin ang Lehitimong Site",
    verified: "Napatunayan",
    secure: "Ligtas",
    trusted: "Mapagkakatiwalaan",
    description: "Ito ang opisyal, napatunayang website na may ligtas na paraan ng pagbabayad at proteksyon ng buyer.",
    suspicious: "Kahina-hinala",
  },
  id: {
    title: "Alternatif Aman Ditemukan!",
    subtitle: "Kami menemukan situs resmi yang mungkin Anda cari:",
    currentSite: "Situs saat ini (mencurigakan):",
    safeSite: "Alternatif aman:",
    redirectButton: "Pergi ke Situs Aman",
    redirectButtonSecondary: "Kunjungi Situs Resmi",
    verified: "Terverifikasi",
    secure: "Aman",
    trusted: "Terpercaya",
    description: "Ini adalah situs web resmi yang diverifikasi dengan metode pembayaran aman dan perlindungan pembeli.",
    suspicious: "Mencurigakan",
  },
  jv: {
    title: "Alternatif Aman Ditemokaké!",
    subtitle: "Kita nemu situs resmi sing sampeyan goleki:",
    currentSite: "Situs saiki (curiga):",
    safeSite: "Alternatif aman:",
    redirectButton: "Menyang situs aman",
    redirectButtonSecondary: "Ngunjungi situs resmi",
    verified: "Diverifikasi",
    secure: "Aman",
    trusted: "Dipercaya",
    description: "Iki situs web resmi sing diverifikasi kanthi cara bayar aman lan perlindungan pembeli.",
    suspicious: "Curiga",
  },
  su: {
    title: "Alternatif Aman Kapanggih!",
    subtitle: "Kami mendakan situs resmi anu mungkin anjeun milarian:",
    currentSite: "Situs ayeuna (curiga):",
    safeSite: "Alternatif aman:",
    redirectButton: "Angkat ka situs aman",
    redirectButtonSecondary: "Datangan situs resmi",
    verified: "Diverifikasi",
    secure: "Aman",
    trusted: "Dipercaya",
    description: "Ieu situs web resmi anu diverifikasi kalayan cara mayar aman sareng panyalindungan pembeli.",
    suspicious: "Curiga",
  },
  km: {
    title: "រកឃើញជម្រើសដែលមានសុវត្ថិភាព!",
    subtitle: "យើងបានរកឃើញគេហទំព័រផ្លូវការដែលអ្នកអាចកំពុងស្វែងរក:",
    currentSite: "គេហទំព័របច្ចុប្បន្ន (គួរឱ្យសង្ស័យ):",
    safeSite: "ជម្រើសដែលមានសុវត្ថិភាព:",
    redirectButton: "ទៅកាន់គេហទំព័រដែលមានសុវត្ថិភាព",
    redirectButtonSecondary: "ទស្សនាគេហទំព័រផ្លូវការ",
    verified: "បានផ្ទៀងផ្ទាត់",
    secure: "មានសុវត្ថិភាព",
    trusted: "គួរឱ្យទុកចិត្ត",
    description: "នេះគឺជាគេហទំព័រផ្លូវការដែលបានផ្ទៀងផ្ទាត់ជាមួយនឹងវិធីបង់ប្រាក់ដែលមានសុវត្ថិភាពនិងការការពារអ្នកទិញ។",
    suspicious: "គួរឱ្យសង្ស័យ",
  },
  lo: {
    title: "ພົບທາງເລືອກທີ່ປອດໄພ!",
    subtitle: "ພວກເຮົາພົບເວັບໄຊທີ່ຖືກຕ້ອງທີ່ທ່ານອາດຈະກຳລັງຊອກຫາ:",
    currentSite: "ເວັບໄຊປັດຈຸບັນ (ນ່າສົງໃສ):",
    safeSite: "ທາງເລືອກທີ່ປອດໄພ:",
    redirectButton: "ໄປຫາເວັບໄຊທີ່ປອດໄພ",
    redirectButtonSecondary: "ເຂົ້າເບິ່ງເວັບໄຊທີ່ຖືກຕ້ອງ",
    verified: "ຢືນຢັນແລ້ວ",
    secure: "ປອດໄພ",
    trusted: "ໄວ້ວາງໃຈໄດ້",
    description: "ນີ້ແມ່ນເວັບໄຊທີ່ຖືກຕ້ອງທີ່ຢືນຢັນແລ້ວພ້ອມກັບວິທີການຊຳລະທີ່ປອດໄພແລະການປົກປ້ອງຜູ້ຊື້",
    suspicious: "ນ່າສົງໃສ",
  },
  my: {
    title: "လုံခြုံသော အစားထိုးရွေးချယ်မှု တွေ့ရှိ!",
    subtitle: "သင်ရှာဖွေနေနိုင်သည့် တရားဝင် ဝဘ်ဆိုက်ကို ကျွန်ုပ်တို့ တွေ့ရှိခဲ့သည်:",
    currentSite: "လက်ရှိဆိုက် (သံသယရှိ):",
    safeSite: "လုံခြုံသော အစားထိုး:",
    redirectButton: "လုံခြုံသောဆိုက်သို့ သွားပါ",
    redirectButtonSecondary: "တရားဝင်ဆိုက်ကို လည်ပတ်ပါ",
    verified: "အတည်ပြုပြီး",
    secure: "လုံခြုံသော",
    trusted: "ယုံကြည်ရသော",
    description: "ဤသည် လုံခြုံသော ငွေပေးချေမှုနည်းလမ်းများနှင့် ဝယ်ယူသူကာကွယ်မှုဖြင့် တရားဝင် အတည်ပြုထားသော ဝဘ်ဆိုက်ဖြစ်သည်။",
    suspicious: "သံသယရှိ",
  },
  ta: {
    title: "பாதுகாப்பான மாற்று கண்டுபிடிக்கப்பட்டது!",
    subtitle: "நீங்கள் தேடிக்கொண்டிருக்கலாம் என்று நாங்கள் கண்டறிந்த சட்டபூர்வ வலைத்தளம்:",
    currentSite: "தற்போதைய தளம் (சந்தேகத்திற்குரியது):",
    safeSite: "பாதுகாப்பான மாற்று:",
    redirectButton: "பாதுகாப்பான தளத்திற்கு செல்லுங்கள்",
    redirectButtonSecondary: "சட்டபூர்வ தளத்தைப் பார்வையிடுங்கள்",
    verified: "சரிபார்க்கப்பட்டது",
    secure: "பாதுகாப்பானது",
    trusted: "நம்பகமானது",
    description: "இது பாதுகாப்பான கட்டண முறைகள் மற்றும் வாங்குபவர் பாதுகாப்புடன் கூடிய அதிகாரப்பூர்வ, சரிபார்க்கப்பட்ட வலைத்தளமாகும்.",
    suspicious: "சந்தேகத்திற்குரியது",
  },
};

// Domain mapping for scam to legitimate sites
export const SCAM_TO_LEGITIMATE_MAPPING: Record<string, string> = {
  // Shopee variations
  "shoppe123.com": "shopee.com.my",
  "shoppee-my.com": "shopee.com.my",
  "shoppe-malaysia.net": "shopee.com.my",
  "shoppe.my": "shopee.com.my",
  "shoppe123.my": "shopee.com.my",
  "shoppe-sale.com": "shopee.com.my",
  "shoppe-flash.com": "shopee.com.my",
  "shoppe-deals.com": "shopee.com.my",
  
  // Lazada variations
  "lazada-malaysia.net": "lazada.com.my",
  "lazada.my": "lazada.com.my",
  "lazada-sale.com": "lazada.com.my",
  "lazada-deals.net": "lazada.com.my",
  "lazada123.com": "lazada.com.my",
  
  // General scam domains
  "deal-raya-123.com": "shopee.com.my",
  "deal-raya.com": "shopee.com.my",
  "flash-sale-malaysia.com": "shopee.com.my",
  "malaysia-deals.net": "shopee.com.my",
  "mega-sale.com": "shopee.com.my",
  "super-deals.my": "shopee.com.my",
  "hot-deals-malaysia.com": "shopee.com.my",
  "discount-malaysia.net": "shopee.com.my",
  
  // Amazon variations (if targeting Amazon)
  "amazon-malaysia.com": "amazon.com",
  "amazon.my": "amazon.com",
  "amazon-sale.net": "amazon.com",
  
  // Carousell variations
  "carousell-malaysia.com": "carousell.com.my",
  "carousell.my": "carousell.com.my",
  "carousell-sale.net": "carousell.com.my",
};

export function getLegitimateSuggestion(url: string | undefined): string | null {
  if (!url) return null;
  const domain = url.toLowerCase();
  return SCAM_TO_LEGITIMATE_MAPPING[domain] ?? null;
}
