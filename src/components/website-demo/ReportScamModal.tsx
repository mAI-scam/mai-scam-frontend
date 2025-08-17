"use client";

import { useState } from "react";
import {
  X,
  AlertTriangle,
  CheckCircle,
  Send,
  Shield,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore } from "@/lib/store/extensionStore";

const translations = {
  en: {
    title: "Report Scam Website",
    subtitle: "Help protect others by reporting this fraudulent website",
    reportingTo: "Reporting to:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Global web protection service",
    phishTank: "PhishTank",
    phishTankDesc: "Community-driven anti-phishing service",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Malaysian Communications & Multimedia Commission",
    websiteUrl: "Website URL:",
    reportCategory: "Threat Category:",
    phishing: "Phishing Website",
    fraudulent: "Fraudulent E-commerce",
    malware: "Malware Distribution",
    reportDetails: "What makes this site suspicious:",
    lowPrices: "Unrealistic low prices on branded items",
    suspiciousUrl: "Suspicious domain name mimicking legitimate sites",
    urgencyTactics: "Excessive urgency and pressure tactics",
    fakeReviews: "Fake customer reviews and testimonials",
    unsecurePayment: "Requests for direct bank transfers",
    submitReport: "Submit Report",
    submitting: "Submitting...",
    reportSuccess: "Report Submitted Successfully!",
    successMessage:
      "Thank you for helping keep the internet safe. The website has been reported to:",
    reportId: "Report ID:",
    close: "Close",
    cancel: "Cancel",
  },
  ms: {
    title: "Laporkan Laman Web Penipuan",
    subtitle:
      "Bantu melindungi orang lain dengan melaporkan laman web penipuan ini",
    reportingTo: "Melaporkan ke:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Perkhidmatan perlindungan web global",
    phishTank: "PhishTank",
    phishTankDesc: "Perkhidmatan anti-phishing komuniti",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Suruhanjaya Komunikasi dan Multimedia Malaysia",
    websiteUrl: "URL Laman Web:",
    reportCategory: "Kategori Ancaman:",
    phishing: "Laman Web Phishing",
    fraudulent: "E-dagang Penipuan",
    malware: "Pengedaran Malware",
    reportDetails: "Apa yang menjadikan laman ini mencurigakan:",
    lowPrices: "Harga rendah yang tidak realistik untuk barangan berjenama",
    suspiciousUrl: "Nama domain mencurigakan meniru laman sah",
    urgencyTactics: "Taktik tekanan dan ketergesaan berlebihan",
    fakeReviews: "Ulasan dan testimoni pelanggan palsu",
    unsecurePayment: "Meminta pemindahan bank secara langsung",
    submitReport: "Hantar Laporan",
    submitting: "Menghantar...",
    reportSuccess: "Laporan Berjaya Dihantar!",
    successMessage:
      "Terima kasih kerana membantu menjaga keselamatan internet. Laman web telah dilaporkan ke:",
    reportId: "ID Laporan:",
    close: "Tutup",
    cancel: "Batal",
  },
  zh: {
    title: "举报诈骗网站",
    subtitle: "通过举报此欺诈网站来帮助保护他人",
    reportingTo: "举报至:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "全球网络保护服务",
    phishTank: "PhishTank",
    phishTankDesc: "社区驱动的反钓鱼服务",
    mcmc: "MCMC (马来西亚)",
    mcmcDesc: "马来西亚通讯与多媒体委员会",
    websiteUrl: "网站URL:",
    reportCategory: "威胁类别:",
    phishing: "钓鱼网站",
    fraudulent: "欺诈性电子商务",
    malware: "恶意软件分发",
    reportDetails: "使此网站可疑的原因:",
    lowPrices: "品牌商品的不现实低价",
    suspiciousUrl: "模仿合法网站的可疑域名",
    urgencyTactics: "过度的紧迫性和压力策略",
    fakeReviews: "虚假的客户评论和推荐",
    unsecurePayment: "要求直接银行转账",
    submitReport: "提交举报",
    submitting: "提交中...",
    reportSuccess: "举报提交成功！",
    successMessage: "感谢您帮助保持互联网安全。网站已举报至:",
    reportId: "举报ID:",
    close: "关闭",
    cancel: "取消",
  },
  vi: {
    title: "Báo cáo Trang Web Lừa đảo",
    subtitle: "Hãy giúp bảo vệ người khác bằng cách báo cáo trang lừa đảo này",
    reportingTo: "Báo cáo tới:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Dịch vụ bảo vệ web toàn cầu",
    phishTank: "PhishTank",
    phishTankDesc: "Dịch vụ chống phishing cộng đồng",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Ủy ban Truyền thông & Đa phương tiện Malaysia",
    websiteUrl: "URL Trang web:",
    reportCategory: "Phân loại mối đe dọa:",
    phishing: "Trang web Phishing",
    fraudulent: "Thương mại điện tử gian lận",
    malware: "Phân phối malware",
    reportDetails: "Điểm đáng nghi của trang này:",
    lowPrices: "Giá quá thấp không thực tế cho hàng hiệu",
    suspiciousUrl: "Tên miền đáng ngờ giả mạo trang hợp pháp",
    urgencyTactics: "Thúc giục mua gấp quá mức",
    fakeReviews: "Đánh giá giả mạo và lời chứng thực",
    unsecurePayment: "Yêu cầu chuyển khoản ngân hàng trực tiếp",
    submitReport: "Gửi Báo Cáo",
    submitting: "Đang gửi...",
    reportSuccess: "Gửi báo cáo thành công!",
    successMessage:
      "Cảm ơn bạn đã giúp giữ an toàn cho internet. Trang web đã được báo cáo tới:",
    reportId: "Mã Báo Cáo:",
    close: "Đóng",
    cancel: "Hủy",
  },
  th: {
    title: "รายงานเว็บไซต์หลอกลวง",
    subtitle: "ช่วยปกป้องผู้อื่นโดยการรายงานเว็บไซต์นี้",
    reportingTo: "รายงานไปยัง:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "บริการป้องกันเว็บระดับโลก",
    phishTank: "PhishTank",
    phishTankDesc: "ชุมชนต้านฟิชชิง",
    mcmc: "MCMC (มาเลเซีย)",
    mcmcDesc: "คณะกรรมการสื่อสารและมัลติมีเดียมาเลเซีย",
    websiteUrl: "URL เว็บไซต์:",
    reportCategory: "ประเภทภัยคุกคาม:",
    phishing: "เว็บไซต์ฟิชชิง",
    fraudulent: "อีคอมเมิร์ซฉ้อโกง",
    malware: "การกระจายมัลแวร์",
    reportDetails: "สิ่งที่ทำให้ไซต์นี้น่าสงสัย:",
    lowPrices: "ราคาถูกเกินจริงสำหรับสินค้าแบรนด์",
    suspiciousUrl: "โดเมนน่าสงสัยเลียนแบบเว็บไซต์จริง",
    urgencyTactics: "การเร่งให้ซื้อเกินควร",
    fakeReviews: "รีวิวปลอมและคำรับรอง",
    unsecurePayment: "ขอให้โอนเงินโดยตรง",
    submitReport: "ส่งรายงาน",
    submitting: "กำลังส่ง...",
    reportSuccess: "ส่งรายงานสำเร็จ!",
    successMessage:
      "ขอบคุณที่ช่วยทำให้อินเทอร์เน็ตปลอดภัยขึ้น เว็บไซต์นี้ถูกรายงานไปยัง:",
    reportId: "รหัสรายงาน:",
    close: "ปิด",
    cancel: "ยกเลิก",
  },
  fil: {
    title: "Iulat ang Scam na Website",
    subtitle: "Tumulong magprotekta sa iba sa pamamagitan ng pag-uulat",
    reportingTo: "Iniulat sa:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Global web protection",
    phishTank: "PhishTank",
    phishTankDesc: "Community anti-phishing",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Komisyon sa Komunikasyon at Multimedia ng Malaysia",
    websiteUrl: "URL ng Website:",
    reportCategory: "Kategorya ng Banta:",
    phishing: "Phishing Website",
    fraudulent: "Mapanlinlang na E-commerce",
    malware: "Pamamahagi ng Malware",
    reportDetails: "Bakit kahina-hinala ang site na ito:",
    lowPrices: "Hindi makatotohanang mababang presyo",
    suspiciousUrl: "Kahina-hinalang domain na ginagaya ang lehitimong site",
    urgencyTactics: "Labislabis na pag-udyok na bumili agad",
    fakeReviews: "Pekeng review at testimonial",
    unsecurePayment: "Humihingi ng direktang bank transfer",
    submitReport: "Isumite ang Ulat",
    submitting: "Isinusumite...",
    reportSuccess: "Matagumpay na naisumite ang ulat!",
    successMessage:
      "Salamat sa pagtulong na panatilihing ligtas ang internet. Naiulat ang site sa:",
    reportId: "ID ng Ulat:",
    close: "Isara",
    cancel: "Kanselahin",
  },
  id: {
    title: "Laporkan Situs Penipuan",
    subtitle: "Bantu lindungi orang lain dengan melaporkan situs ini",
    reportingTo: "Melaporkan ke:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Layanan perlindungan web global",
    phishTank: "PhishTank",
    phishTankDesc: "Layanan anti-phishing komunitas",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Komisi Komunikasi & Multimedia Malaysia",
    websiteUrl: "URL Situs:",
    reportCategory: "Kategori Ancaman:",
    phishing: "Situs Phishing",
    fraudulent: "E-commerce Penipuan",
    malware: "Distribusi Malware",
    reportDetails: "Mengapa situs ini mencurigakan:",
    lowPrices: "Harga terlalu murah untuk barang bermerek",
    suspiciousUrl: "Domain mencurigakan meniru situs resmi",
    urgencyTactics: "Dorongan berlebihan untuk segera membeli",
    fakeReviews: "Ulasan palsu dan testimoni",
    unsecurePayment: "Meminta transfer bank langsung",
    submitReport: "Kirim Laporan",
    submitting: "Mengirim...",
    reportSuccess: "Laporan Berhasil Dikirim!",
    successMessage:
      "Terima kasih telah membantu menjaga internet tetap aman. Situs dilaporkan ke:",
    reportId: "ID Laporan:",
    close: "Tutup",
    cancel: "Batal",
  },
  jv: {
    title: "Laporke Situs Penipuan",
    subtitle: "Tulung nglindhungi wong liya kanthi nglaporake situs iki",
    reportingTo: "Dilaporake menyang:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Layanan proteksi web global",
    phishTank: "PhishTank",
    phishTankDesc: "Layanan anti-phishing komunitas",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Komisi Komunikasi & Multimedia Malaysia",
    websiteUrl: "URL Situs:",
    reportCategory: "Kategori Ancaman:",
    phishing: "Situs Phishing",
    fraudulent: "E-commerce Penipuan",
    malware: "Distribusi Malware",
    reportDetails: "Napa situs iki curiga:",
    lowPrices: "Regane murah banget kanggo barang branded",
    suspiciousUrl: "Domain curiga niru situs resmi",
    urgencyTactics: "Ajak tuku langsung kelewat",
    fakeReviews: "Ulasan lan testimoni palsu",
    unsecurePayment: "Njaluk transfer bank langsung",
    submitReport: "Kirim Laporan",
    submitting: "Ngirim...",
    reportSuccess: "Laporan Kasil Dikirim!",
    successMessage:
      "Matur nuwun wis mbantu njaga internet aman. Situs dilaporake menyang:",
    reportId: "ID Laporan:",
    close: "Tutup",
    cancel: "Batal",
  },
  su: {
    title: "Laporke Situs Tipu",
    subtitle: "Tulungan ngajaga batur ku ngalaporkeun situs ieu",
    reportingTo: "Dilaporkeun ka:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "Layanan panyalindungan web global",
    phishTank: "PhishTank",
    phishTankDesc: "Layanan anti-phishing komunitas",
    mcmc: "MCMC (Malaysia)",
    mcmcDesc: "Komisi Komunikasi & Multimedia Malaysia",
    websiteUrl: "URL Situs:",
    reportCategory: "Kategori Ancaman:",
    phishing: "Situs Phishing",
    fraudulent: "E-commerce Tipu",
    malware: "Distribusi Malware",
    reportDetails: "Naha situs ieu curiga:",
    lowPrices: "Harga murah teuing pikeun barang branded",
    suspiciousUrl: "Domain curiga niron situs resmi",
    urgencyTactics: "Ngadesek supaya meuli geuwat",
    fakeReviews: "Review jeung testimoni palsu",
    unsecurePayment: "Menta transfer bank langsung",
    submitReport: "Kirim Laporan",
    submitting: "Ngirim...",
    reportSuccess: "Laporan Kasil Dikirim!",
    successMessage:
      "Hatur nuhun geus ngabantu ngajaga internet aman. Situs dilaporkeun ka:",
    reportId: "ID Laporan:",
    close: "Tutup",
    cancel: "Batal",
  },
  km: {
    title: "រាយការណ៍​គេហទំព័រ​ក្លែងបន្លំ",
    subtitle: "ជួយការពារអ្នកដទៃដោយរាយការណ៍គេហទំព័រនេះ",
    reportingTo: "រាយការណ៍ទៅ:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "សេវាការពារបណ្ដាញសកល",
    phishTank: "PhishTank",
    phishTankDesc: "សហគមន៍ប្រឆាំងការនេសាទទិន្នន័យ",
    mcmc: "MCMC (ម៉ាឡេស៊ី)",
    mcmcDesc: "គណៈកម្មាធិការទំនាក់ទំនង និងពហុព័ត៌មាន ម៉ាឡេស៊ី",
    websiteUrl: "URL គេហទំព័រ:",
    reportCategory: "ប្រភេទภัยគ្រោះថ្នាក់:",
    phishing: "គេហទំព័រនេសាទទិន្នន័យ",
    fraudulent: "ពាណិជ្ជកម្មក្លែងបន្លំ",
    malware: "បំបែកផ្សាយមេរោគ",
    reportDetails: "ហេតុអ្វីបានជា​គេហទំព័រនេះ​គួរឱ្យសង្ស័យ:",
    lowPrices: "តម្លៃទាបពេកសម្រាប់ម៉ាក",
    suspiciousUrl: "ដូមែនគួរឱ្យសង្ស័យក្លែងធ្វើជាគេហទំព័រផ្លូវការ",
    urgencyTactics: "ជំរុញឲ្យទិញភ្លាមៗខ្ពស់ពេក",
    fakeReviews: "ពិនិត្យឡើងវិញ និងសក្ខីកម្មក្លែងក្លាយ",
    unsecurePayment: "ស្នើសុំផ្ទេរប្រាក់ត្រង់",
    submitReport: "ដាក់ស្នើរបាយការណ៍",
    submitting: "កំពុងដាក់ស្នើ...",
    reportSuccess: "បានដាក់ស្នើរបាយការណ៍ដោយជោគជ័យ!",
    successMessage:
      "អរគុណសម្រាប់ជួយរក្សាអ៊ីនធឺណិតឲ្យមានសុវត្ថិភាព។ គេហទំព័រត្រូវបានរាយការណ៍ទៅ:",
    reportId: "លេខសម្គាល់របាយការណ៍:",
    close: "បិទ",
    cancel: "បោះបង់",
  },
  lo: {
    title: "ລາຍງານເວັບໄຊຫລອກລວງ",
    subtitle: "ຊ່ວຍປົກປ້ອງຜູ້ອື່ນໂດຍການລາຍງານເວັບໄຊນີ້",
    reportingTo: "ລາຍງານໄປຫາ:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "ການປົກປ້ອງເວັບໂລກ",
    phishTank: "PhishTank",
    phishTankDesc: "ຊຸມຊົນຕ້ານການ phishing",
    mcmc: "MCMC (ມາເລເຊຍ)",
    mcmcDesc: "ຄະນະກຳມະການການສື່ສານ ແລະ ມັນຕິມີເດຍມາເລເຊຍ",
    websiteUrl: "URL ເວັບໄຊ:",
    reportCategory: "ປະເພດພາຍຄຸກຄາມ:",
    phishing: "ເວັບໄຊ phishing",
    fraudulent: "ອີຄອມເມີດຫລອກລວງ",
    malware: "ການແຈກຢາຍ Malware",
    reportDetails: "ເຫດຜົນທີ່ເຮັດໃຫ້ເວັບນີ້ນົດສົງໃສ:",
    lowPrices: "ລາຄາຖືກເກີນໄປສຳລັບສິນຄ້າຍີ່ຫໍ້",
    suspiciousUrl: "ໂດເມນນົດສົງໃສທີ່ເຮັດຕົວເປັນເວັບໄຊທີ່ຖືກຕ້ອງ",
    urgencyTactics: "ການຊັກຊວນໃຫ້ຊື້ທັນທີຫຼາຍເກີນ",
    fakeReviews: "ການທົບທວນຄືນ ແລະ ການຮັບຮອງປອມ",
    unsecurePayment: "ຮ້ອງຂໍໃຫ້ໂອນເງິນໂດຍກົງ",
    submitReport: "ສົ່ງລາຍງານ",
    submitting: "ກຳລັງສົ່ງ...",
    reportSuccess: "ສົ່ງລາຍງານສຳເລັດ!",
    successMessage: "ຂອບໃຈທີ່ຊ່ວຍໃຫ້ອິນເຕີເນັດປອດໄພ. ເວັບໄຊຖືກລາຍງານໄປຫາ:",
    reportId: "ເລກ ID ລາຍງານ:",
    close: "ປິດ",
    cancel: "ຍົກເລີກ",
  },
  my: {
    title: "လိမ်လည် ဝဘ်ဆိုက်ကို အကြောင်းကြားရန်",
    subtitle:
      "ဤ လိမ်လည် ဝဘ်ဆိုက်ကို အကြောင်းကြား၍ အခြားသူများကို ကာကွယ်ပို့ုပါ",
    reportingTo: "အစီရင်ခံစာပို့ရန်:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "ကမ္ဘာလုံးဆိုင်ရာ ဝဘ်ကာကွယ်ရေး ဝန်ဆောင်မှု",
    phishTank: "PhishTank",
    phishTankDesc: "အသိုင်းအဝိုင်းအခြေပြု တိုက်ဖျက်ရေး",
    mcmc: "MCMC (မလေးရှား)",
    mcmcDesc: "မလေးရှား ဆက်သွယ်ရေးနှင့် မီဒီယာ ကော်မရှင်",
    websiteUrl: "Website URL:",
    reportCategory: "အန္တရာယ် အမျိုးအစား:",
    phishing: "Phishing ဝဘ်ဆိုက်",
    fraudulent: "လိမ်လည် အီးကော်မ စဏ်",
    malware: "မော်လဝဲ ဖြန့်ဝေမှု",
    reportDetails: "ဤဆိုက်တွင် သံသယ ဖြစ်စေသော အချက်များ:",
    lowPrices: "အမှတ်တံဆိပ်ပစ္စည်းများအတွက် အလွန်ဈေးချိုသော စျေးနှုန်း",
    suspiciousUrl: "မှန်ကန်သောဆိုက်ကို တီထွင်သည့် သံသယမရှိသော ဂုံးမိန်း",
    urgencyTactics: "ချက်ချင်းဝယ်ရန် အလွန်နှိုးဆော်မှု",
    fakeReviews: "အတုသုံးသပ်ချက်များ",
    unsecurePayment: "တိုက်ရိုက် ဘဏ်လွှဲရန် တောင်းဆိုမှု",
    submitReport: "အစီရင်ခံစာတင်ပါ",
    submitting: "တင်နေသည်...",
    reportSuccess: "အစီရင်ခံစာ တင်သွင်းမှု အောင်မြင်!",
    successMessage:
      "အင်တာနက် လုံခြုံရေး အတွက် ကူညီသည့်အတွက် ကျေးဇူးတင်ပါသည်။ ၎င်းဆိုက်ကို အောက်ပါနေရာများသို့ အစီရင်ခံခဲ့ပါသည်:",
    reportId: "အစီရင်ခံစာ ID:",
    close: "ပိတ်မည်",
    cancel: "ဖျက်သိမ်းမည်",
  },
  ta: {
    title: "மோசடி இணையதளை புகாரளி",
    subtitle: "இந்த மோசடி தளத்தை புகாரளிப்பதன் மூலம் பிறரை பாதுகாக்க உதவுங்கள்",
    reportingTo: "இவர்களுக்கு புகாரளிக்கப்படுகிறது:",
    googleSafeBrowsing: "Google Safe Browsing",
    googleDesc: "உலகளாவிய வலை பாதுகாப்பு சேவை",
    phishTank: "PhishTank",
    phishTankDesc: "சமூக அடிப்படையிலான எதிர்-Phishing சேவை",
    mcmc: "MCMC (மலேசியா)",
    mcmcDesc: "மலேசிய தொடர்பாடல் & மல்டிமீடியா கமிஷன்",
    websiteUrl: "இணையதள URL:",
    reportCategory: "அச்சுறுத்தல் வகை:",
    phishing: "Phishing இணையதளம்",
    fraudulent: "மோசடி மின்வணிகம்",
    malware: "தீங்கு விளைவிக்கும் மென்பொருள் விநியோகம்",
    reportDetails: "இந்த தளம் சந்தேகமாகத் தோன்றுவதற்கான காரணங்கள்:",
    lowPrices: "பிராண்டட் பொருட்களுக்கு யதார்த்தமற்ற குறைந்த விலை",
    suspiciousUrl: "சட்டபூர்வ தளங்களைப் போலியாக காட்டும் சந்தேகமான டொமைன்",
    urgencyTactics: "உடனே வாங்குமாறு அதிக அழுத்தம்",
    fakeReviews: "போலி விமர்சனங்கள் மற்றும் சான்றுகள்",
    unsecurePayment: "நேரடி வங்கிப் பரிமாற்றங்களை கோருகிறது",
    submitReport: "அறிக்கையை சமர்ப்பிக்கவும்",
    submitting: "சமர்ப்பிக்கிறது...",
    reportSuccess: "அறிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",
    successMessage:
      "இணையத்தை பாதுகாப்பாக வைத்ததற்கு நன்றி. இந்த தளம் கீழ்கண்டவர்களுக்கு புகாரளிக்கப்பட்டது:",
    reportId: "அறிக்கை ஐடி:",
    close: "மூடு",
    cancel: "ரத்து செய்",
  },
};

interface ReportScamModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteUrl?: string;
}

export function ReportScamModal({
  isOpen,
  onClose,
  websiteUrl = "deal-raya-123.com",
}: ReportScamModalProps) {
  const { selectedLanguage, markWebsiteReported } = useExtensionStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reportId] = useState(() => {
    // Only generate ID on client-side to avoid hydration mismatch
    if (typeof window === "undefined") return "";
    return `MSR-${Date.now().toString(36).toUpperCase()}`;
  });
  const t =
    translations[selectedLanguage as keyof typeof translations] ??
    translations.en;

  if (!isOpen) return null;

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API calls to different services
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Mark website as reported in the store
    markWebsiteReported();
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    // EDIT POSITIONING: This modal covers full screen - adjust 'p-4' for edge spacing
    <div className="fixed inset-0 bg-black/60 z-[9997] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" data-tour="website-report-modal">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              {t.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {!isSuccess ? (
            <>
              {/* Reporting Services */}
              <div data-tour="website-reporting-services">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t.reportingTo}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border">
                    <Globe className="h-8 w-8 text-blue-600" />
                    <div className="flex-1">
                      <div className="font-medium text-blue-900">
                        {t.googleSafeBrowsing}
                      </div>
                      <div className="text-sm text-blue-700">
                        {t.googleDesc}
                      </div>
                    </div>
                    <Badge variant="secondary">API</Badge>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <div className="flex-1">
                      <div className="font-medium text-purple-900">
                        {t.phishTank}
                      </div>
                      <div className="text-sm text-purple-700">
                        {t.phishTankDesc}
                      </div>
                    </div>
                    <Badge variant="secondary">Community</Badge>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border">
                    <AlertTriangle className="h-8 w-8 text-green-600" />
                    <div className="flex-1">
                      <div className="font-medium text-green-900">{t.mcmc}</div>
                      <div className="text-sm text-green-700">{t.mcmcDesc}</div>
                    </div>
                    <Badge variant="secondary">Regulatory</Badge>
                  </div>
                </div>
              </div>

              {/* Website Details */}
              <div className="space-y-4">
                <div>
                  <label className="font-medium text-sm">{t.websiteUrl}</label>
                  <div className="mt-1 p-2 bg-gray-100 rounded border text-sm font-mono">
                    {websiteUrl}
                  </div>
                </div>

                <div>
                  <label className="font-medium text-sm">
                    {t.reportCategory}
                  </label>
                  <div className="mt-1">
                    <Badge variant="destructive">{t.fraudulent}</Badge>
                  </div>
                </div>
              </div>

              {/* Threat Details */}
              <div>
                <h4 className="font-medium mb-3">{t.reportDetails}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.lowPrices}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.suspiciousUrl}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.urgencyTactics}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.fakeReviews}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>{t.unsecurePayment}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  {t.cancel}
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  data-tour="website-submit-report-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t.submitReport}
                    </>
                  )}
                </Button>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8" data-tour="website-report-success">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {t.reportSuccess}
              </h3>
              <p className="text-gray-600 mb-6">{t.successMessage}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span>Google Safe Browsing</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span>PhishTank</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-green-600" />
                  <span>MCMC Malaysia</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="text-sm">
                  <span className="font-medium">{t.reportId}</span> {reportId}
                </div>
              </div>

              <Button onClick={handleClose} className="w-full" data-tour="website-close-report-button">
                {t.close}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
