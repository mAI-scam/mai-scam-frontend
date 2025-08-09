"use client";

import { Shield, AlertTriangle, ArrowLeft, ExternalLink, Home, Flag, CornerUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useExtensionStore} from "@/lib/store/extensionStore";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ReportScamModal } from "./ReportScamModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

const translations = {
  en: {
    title: "THIS WEBSITE MAY BE A SCAM!",
    subtitle: "Be careful, prices are too cheap to be real!",
    analyzing: "Analyzing website...",
    riskAnalysis: "Risk Analysis",
    risk: "RISK",
    veryHigh: "VERY HIGH",
    whyDangerous: "Why is this website dangerous?",
    lowPrices: "We detected extraordinarily low prices for branded items (iPhone RM999, PS5 RM599). This is a common tactic scammers use to attract victims.",
    suspiciousUrl: (url: string) => `The website URL "${url}" looks suspicious and may be trying to imitate popular shopping platforms like Shopee or Lazada.`,
    urgency: "There are excessive prompts to buy immediately with fake timers and \"limited stock\" - these are psychological manipulation techniques.",
    fakeReviews: "Customer reviews appear fake - all 5 stars with generic comments. No negative or neutral reviews.",
    paymentRisk: "This website may ask for credit card information or payment to personal accounts, not through secure payment gateways.",
    whatMayHappen: "What may happen if you continue?",
    loseMoneyRisk: "Your money will be lost without receiving any items",
    creditCardRisk: "Your credit card information may be stolen",
    personalDataRisk: "Your personal data may be misused",
    fakeGoodsRisk: "You may receive fake or poor quality goods",
    didYouMean: "Did you mean to visit:",
    goToSafeSite: "Go to safe site",
    backToSafety: "Back to Safety",
    continueRisk: "Continue at Your Own Risk",
    finalWarning: "Final Warning!",
    finalWarningText: "You are about to enter a very risky website. We are not responsible for any losses.",
    cancel: "Cancel",
    understandRisk: "I Understand the Risk",
    reportFraud: "REPORT FRAUD",
    reportingScam: "Reporting scam...",
    backToHome: "Back to Home"
  },
  ms: {
    title: "LAMAN WEB INI MUNGKIN SCAM!",
    subtitle: "Berhati-hati, harga terlalu murah untuk jadi kenyataan!",
    analyzing: "Menganalisis laman web...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "SANGAT TINGGI",
    whyDangerous: "Mengapa laman web ini berbahaya?",
    lowPrices: "Kami mengesan harga yang luar biasa rendah untuk barangan berjenama (iPhone RM999, PS5 RM599). Ini adalah taktik lazim penipu untuk menarik mangsa.",
    suspiciousUrl: (url: string) => `URL laman web "${url}" kelihatan mencurigakan dan mungkin cuba meniru platform membeli-belah popular seperti Shopee atau Lazada.`,
    urgency: "Terdapat gesaan melampau untuk membeli segera dengan timer palsu dan \"stok terhad\" - ini adalah teknik manipulasi psikologi.",
    fakeReviews: "Ulasan pelanggan kelihatan palsu - semua 5 bintang dengan komen generik. Tiada ulasan negatif atau neutral.",
    paymentRisk: "Laman web ini mungkin meminta maklumat kad kredit atau pembayaran ke akaun persendirian, bukan melalui payment gateway yang selamat.",
    whatMayHappen: "⚠️ Apa yang mungkin berlaku jika anda teruskan?",
    loseMoneyRisk: "Wang anda akan hilang tanpa menerima sebarang barang",
    creditCardRisk: "Maklumat kad kredit anda mungkin dicuri",
    personalDataRisk: "Data peribadi anda mungkin disalahgunakan",
    fakeGoodsRisk: "Anda mungkin menerima barang palsu atau tidak berkualiti",
    didYouMean: "Adakah anda bermaksud melawat:",
    goToSafeSite: "Pergi ke laman selamat",
    backToSafety: "Kembali ke Keselamatan",
    continueRisk: "Teruskan Dengan Risiko Sendiri",
    finalWarning: "Amaran Terakhir!",
    finalWarningText: "Anda akan memasuki laman web yang sangat berisiko. Kami tidak bertanggungjawab atas sebarang kerugian.",
    cancel: "Batal",
    understandRisk: "Saya Faham Risikonya",
    reportFraud: "LAPORKAN PENIPUAN",
    reportingScam: "Melaporkan penipuan...",
    backToHome: "Kembali ke Halaman Utama"
  },
  zh: {
    title: "此网站可能是诈骗！",
    subtitle: "小心，价格太便宜了不真实！",
    analyzing: "正在分析网站...",
    riskAnalysis: "风险分析",
    risk: "风险",
    veryHigh: "非常高",
    whyDangerous: "为什么这个网站危险？",
    lowPrices: "我们检测到品牌商品的价格异常低（iPhone RM999，PS5 RM599）。这是骗子用来吸引受害者的常见策略。",
    suspiciousUrl: (url: string) => `网站URL"${url}"看起来可疑，可能试图模仿Shopee或Lazada等流行购物平台。`,
    urgency: "有过度的催促立即购买，使用假计时器和\"库存有限\" - 这些是心理操纵技巧。",
    fakeReviews: "客户评论看起来是假的 - 都是5星，评论内容通用。没有负面或中性评论。",
    paymentRisk: "此网站可能要求信用卡信息或付款到个人账户，而不是通过安全的支付网关。",
    whatMayHappen: "⚠️ 如果您继续，可能会发生什么？",
    loseMoneyRisk: "您的钱会丢失而不会收到任何物品",
    creditCardRisk: "您的信用卡信息可能被盗",
    personalDataRisk: "您的个人数据可能被滥用",
    fakeGoodsRisk: "您可能会收到假货或劣质商品",
    didYouMean: "你是否想访问：",
    goToSafeSite: "前往安全网站",
    backToSafety: "返回安全",
    continueRisk: "自担风险继续",
    finalWarning: "最后警告！",
    finalWarningText: "您即将进入一个非常危险的网站。我们对任何损失不承担责任。",
    cancel: "取消",
    understandRisk: "我了解风险",
    reportFraud: "举报欺诈",
    reportingScam: "正在举报诈骗...",
    backToHome: "返回主页"
  },
  vi: {
    title: "TRANG WEB NÀY CÓ THỂ LÀ LỪA ĐẢO!",
    subtitle: "Cẩn thận, giá quá rẻ để là thật!",
    analyzing: "Đang phân tích trang web...",
    riskAnalysis: "Phân tích rủi ro",
    risk: "RỦI RO",
    veryHigh: "RẤT CAO",
    whyDangerous: "Tại sao trang web này nguy hiểm?",
    lowPrices: "Chúng tôi phát hiện giá cực thấp cho hàng hiệu (iPhone RM999, PS5 RM599). Đây là chiêu thức phổ biến của kẻ lừa đảo.",
    suspiciousUrl: (url: string) => `URL trang web "${url}" trông đáng ngờ và có thể đang giả mạo các sàn như Shopee hoặc Lazada.`,
    urgency: "Có quá nhiều lời kêu gọi mua ngay với hẹn giờ giả và \"hết hàng nhanh\" - thủ thuật thao túng tâm lý.",
    fakeReviews: "Đánh giá có vẻ giả - toàn 5 sao với bình luận chung chung.",
    paymentRisk: "Trang có thể yêu cầu thẻ tín dụng hoặc chuyển khoản cá nhân, không qua cổng thanh toán an toàn.",
    whatMayHappen: "Điều gì có thể xảy ra nếu bạn tiếp tục?",
    loseMoneyRisk: "Mất tiền mà không nhận được hàng",
    creditCardRisk: "Thông tin thẻ tín dụng có thể bị đánh cắp",
    personalDataRisk: "Dữ liệu cá nhân có thể bị lạm dụng",
    fakeGoodsRisk: "Có thể nhận hàng giả hoặc kém chất lượng",
    didYouMean: "Bạn muốn truy cập:",
    goToSafeSite: "Đi đến trang an toàn",
    backToSafety: "Quay lại an toàn",
    continueRisk: "Tiếp tục với rủi ro",
    finalWarning: "Cảnh báo cuối!",
    finalWarningText: "Bạn sắp truy cập trang web rủi ro rất cao. Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất nào.",
    cancel: "Hủy",
    understandRisk: "Tôi hiểu rủi ro",
    reportFraud: "BÁO CÁO LỪA ĐẢO",
    reportingScam: "Đang báo cáo lừa đảo...",
    backToHome: "Về trang chủ"
  },
  th: {
    title: "เว็บไซต์นี้อาจเป็นการหลอกลวง!",
    subtitle: "ระวัง ราคาอาจถูกเกินจริง!",
    analyzing: "กำลังวิเคราะห์เว็บไซต์...",
    riskAnalysis: "การวิเคราะห์ความเสี่ยง",
    risk: "ความเสี่ยง",
    veryHigh: "สูงมาก",
    whyDangerous: "ทำไมเว็บไซต์นี้อันตราย?",
    lowPrices: "พบราคาสินค้าแบรนด์ต่ำผิดปกติ (iPhone RM999, PS5 RM599) มักเป็นกลวิธีของมิจฉาชีพ",
    suspiciousUrl: (url: string) => `URL "${url}" น่าสงสัยและอาจเลียนแบบแพลตฟอร์มช้อปปิ้งอย่าง Shopee หรือ Lazada`,
    urgency: "มีการเร่งให้ซื้อทันที ใช้ตัวจับเวลาและ \"สต็อกจำกัด\" ปลอม",
    fakeReviews: "รีวิวดูปลอม คะแนน 5 ดาวทั้งหมดพร้อมคอมเมนต์ทั่วไป",
    paymentRisk: "อาจขอข้อมูลบัตรเครดิตหรือให้โอนเข้าบัญชีส่วนตัว ไม่ผ่านเกตเวย์ที่ปลอดภัย",
    whatMayHappen: "หากดำเนินการต่อจะเกิดอะไรขึ้น?",
    loseMoneyRisk: "อาจเสียเงินโดยไม่ได้รับสินค้า",
    creditCardRisk: "ข้อมูลบัตรเครดิตอาจถูกขโมย",
    personalDataRisk: "ข้อมูลส่วนบุคคลอาจถูกนำไปใช้ในทางที่ผิด",
    fakeGoodsRisk: "อาจได้รับสินค้าปลอมหรือคุณภาพต่ำ",
    didYouMean: "คุณตั้งใจจะไปที่:",
    goToSafeSite: "ไปยังเว็บไซต์ที่ปลอดภัย",
    backToSafety: "กลับสู่ความปลอดภัย",
    continueRisk: "ดำเนินการต่อโดยยอมรับความเสี่ยง",
    finalWarning: "คำเตือนสุดท้าย!",
    finalWarningText: "คุณกำลังจะเข้าสู่เว็บไซต์ที่มีความเสี่ยงสูงมาก เราไม่รับผิดชอบต่อความสูญเสียใดๆ",
    cancel: "ยกเลิก",
    understandRisk: "ฉันเข้าใจความเสี่ยง",
    reportFraud: "รายงานการหลอกลวง",
    reportingScam: "กำลังรายงาน...",
    backToHome: "กลับหน้าแรก"
  },
  fil: {
    title: "MAAARING PANLOLOKO ANG WEBSITE NA ITO!",
    subtitle: "Mag-ingat, masyadong mura para maging totoo!",
    analyzing: "Sinusuri ang website...",
    riskAnalysis: "Pagsusuri ng Panganib",
    risk: "PANGANIB",
    veryHigh: "NAPAKATAAS",
    whyDangerous: "Bakit mapanganib ang website na ito?",
    lowPrices: "May napakababang presyo sa mga branded na items. Karaniwang taktika ito ng scammers.",
    suspiciousUrl: (url: string) => `Kahina-hinala ang URL na "${url}" at maaaring ginagaya ang mga sikat na shopping site tulad ng Shopee o Lazada.`,
    urgency: "Sobra ang pag-udyok na bumili agad gamit ang pekeng timer at \"limitadong stock\".",
    fakeReviews: "Mukhang peke ang mga review - puro 5 stars at generic ang komento.",
    paymentRisk: "Maaaring humingi ng credit card info o personal bank transfer.",
    whatMayHappen: "Ano ang maaaring mangyari kung magpatuloy ka?",
    loseMoneyRisk: "Mawawala ang pera nang walang matatanggap na item",
    creditCardRisk: "Maaaring manakaw ang impormasyon ng iyong card",
    personalDataRisk: "Maaaring magamit ang personal na data",
    fakeGoodsRisk: "Maaaring tumanggap ng peke o mababang kalidad na produkto",
    didYouMean: "Baka ang nais mong puntahan:",
    goToSafeSite: "Pumunta sa ligtas na site",
    backToSafety: "Bumalik sa ligtas",
    continueRisk: "Magpatuloy sa sariling panganib",
    finalWarning: "Huling Babala!",
    finalWarningText: "Papasok ka sa napakadelikadong website. Hindi kami mananagot sa anumang pagkalugi.",
    cancel: "Kanselahin",
    understandRisk: "Nauunawaan ko ang panganib",
    reportFraud: "I-REPORT ANG PANLOLOKO",
    reportingScam: "Nagre-report...",
    backToHome: "Bumalik sa Home"
  },
  id: {
    title: "SITUS INI MUNGKIN PENIPUAN!",
    subtitle: "Hati-hati, harga terlalu murah untuk nyata!",
    analyzing: "Menganalisis situs...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "SANGAT TINGGI",
    whyDangerous: "Mengapa situs ini berbahaya?",
    lowPrices: "Kami mendeteksi harga sangat rendah untuk barang bermerek. Ini taktik umum penipu.",
    suspiciousUrl: (url: string) => `URL situs "${url}" mencurigakan dan mungkin meniru Shopee atau Lazada.`,
    urgency: "Terlalu banyak dorongan untuk segera membeli dengan timer palsu dan \"stok terbatas\".",
    fakeReviews: "Ulasan tampak palsu - semua 5 bintang dengan komentar umum.",
    paymentRisk: "Situs mungkin meminta info kartu atau transfer ke rekening pribadi.",
    whatMayHappen: "Apa yang mungkin terjadi jika lanjut?",
    loseMoneyRisk: "Uang hilang tanpa menerima barang",
    creditCardRisk: "Informasi kartu Anda dapat dicuri",
    personalDataRisk: "Data pribadi dapat disalahgunakan",
    fakeGoodsRisk: "Mungkin menerima barang palsu/berkualitas rendah",
    didYouMean: "Apakah maksud Anda ke:",
    goToSafeSite: "Buka situs aman",
    backToSafety: "Kembali ke aman",
    continueRisk: "Lanjut dengan risiko sendiri",
    finalWarning: "Peringatan Terakhir!",
    finalWarningText: "Anda akan memasuki situs berisiko sangat tinggi. Kami tidak bertanggung jawab atas kerugian.",
    cancel: "Batal",
    understandRisk: "Saya mengerti risikonya",
    reportFraud: "LAPORKAN PENIPUAN",
    reportingScam: "Melaporkan penipuan...",
    backToHome: "Kembali ke Beranda"
  },
  jv: {
    title: "SITUS IKI KUDUWO ATI-ATI!",
    subtitle: "Regane kakehan murah ora lumrah!",
    analyzing: "Mriksa situs...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "DHUWUR BANGET",
    whyDangerous: "Napa situs iki mbebayani?",
    lowPrices: "Ana rega murah banget kanggo barang branded. Iki trik umum penipu.",
    suspiciousUrl: (url: string) => `URL "${url}" katon curiga lan bisa wae niru Shopee utawa Lazada.`,
    urgency: "Akeh ajakan tuku saiki nganggo timer palsu lan \"stok winates\".",
    fakeReviews: "Ulasan katon palsu kabeh 5 bintang karo komentar umum.",
    paymentRisk: "Situs bisa njaluk data kertu utawa transfer pribadi.",
    whatMayHappen: "Yen diterusake apa sing bisa kelakon?",
    loseMoneyRisk: "Dhuwit ilang tanpa nampa barang",
    creditCardRisk: "Data kertu kredit bisa dicolong",
    personalDataRisk: "Data pribadhi bisa disalahgunakake",
    fakeGoodsRisk: "Bisa nampa barang palsu/kualitase kurang",
    didYouMean: "Apa maksude menyang:",
    goToSafeSite: "Menyang situs aman",
    backToSafety: "Bali aman",
    continueRisk: "Terusake kanthi risiko dewe",
    finalWarning: "Pènget Pungkasan!",
    finalWarningText: "Kowe arep mlebu situs resiko dhuwur banget. Ora tanggung jawab kerugian.",
    cancel: "Batal",
    understandRisk: "Aku ngerti risikone",
    reportFraud: "LAPOR PENIPUAN",
    reportingScam: "Nelapor...",
    backToHome: "Bali menyang Ngarep"
  },
  su: {
    title: "SITUS IEU BISA WAE TIPU!",
    subtitle: "Waspada, harga teuing murah pikeun nyata!",
    analyzing: "Ngabedah situs...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "LALAMPAHAN",
    whyDangerous: "Naha situs ieu bahaya?",
    lowPrices: "Kapanggih harga mirah pisan keur barang branded. Ieu trik umum panipuan.",
    suspiciousUrl: (url: string) => `URL "${url}" curiga jeung siga niron Shopee atawa Lazada.`,
    urgency: "Loba ajakan meuli ayeuna ku timer palsu jeung \"stok kawates\".",
    fakeReviews: "Témbong ulasan palsu sadayana 5 béntang jeung koméntar umum.",
    paymentRisk: "Situs bisa ménta data kartu atawa transfer pribadi.",
    whatMayHappen: "Naon anu bisa kajadian lamun diteruskeun?",
    loseMoneyRisk: "Artos leungit tanpa narima barang",
    creditCardRisk: "Data kartu tiasa dicolong",
    personalDataRisk: "Data pribadi tiasa disalahgunakeun",
    fakeGoodsRisk: "Bisa nampi barang palsu/kualitas rendah",
    didYouMean: "Niatna ka:",
    goToSafeSite: "Buka situs aman",
    backToSafety: "Balik ka aman",
    continueRisk: "Teruskeun kalayan risiko sorangan",
    finalWarning: "Peringatan Panungtungan!",
    finalWarningText: "Anjeun badé lebet ka situs résiko luhur pisan. Kami teu tanggung jawab kana karugian.",
    cancel: "Batal",
    understandRisk: "Abdi ngartos risikona",
    reportFraud: "LAPOR TIPU",
    reportingScam: "Ngilakeun laporan...",
    backToHome: "Balik ka Imah"
  },
  km: {
    title: "វេបសាយនេះអាច​ជា​ការ​បោកប្រាស់!",
    subtitle: "ប្រយ័ត្ន! តម្លៃថោកពេក មិនពិត!",
    analyzing: "កំពុងវិភាគវេបសាយ...",
    riskAnalysis: "ការវិភាគហានិភ័យ",
    risk: "ហានិភ័យ",
    veryHigh: "ខ្ពស់​ណាស់",
    whyDangerous: "ហេតុអ្វីវេបសាយនេះគឺគ្រោះថ្នាក់?",
    lowPrices: "រកឃើញតម្លៃទាបខ្លាំងសម្រាប់ទំនិញម៉ាក។ ជាយុទ្ធសាស្ត្រដើមរបស់ក្លែងបន្លំ។",
    suspiciousUrl: (url: string) => `URL "${url}" គួរឱ្យសង្ស័យ ហើយអាចក្លែងធ្វើជា Shopee ឬ Lazada។`,
    urgency: "មានការបញ្ចុះឲ្យទិញភ្លាមៗ ជាមួយឧបករណ៍កំណត់ពេលវេលាក្លែង និង \"ស្តុកកំណត់\"។",
    fakeReviews: "ពិនិត្យឡើងវិញមើលទៅក្លែង - 5 ផ្កាយទាំងអស់ជាមួយមតិយោបល់ទូទៅ។",
    paymentRisk: "អាចស្នើសុំព័ត៌មានកាតឥណទាន ឬផ្ទេរប្រាក់ទៅគណនីផ្ទាល់ខ្លួន។",
    whatMayHappen: "អ្វីអាចកើតឡើងបើអ្នកបន្ត?",
    loseMoneyRisk: "បាត់បង់ប្រាក់ដោយមិនទទួលទំនិញ",
    creditCardRisk: "ព័ត៌មានកាតអាចត្រូវបានលួច",
    personalDataRisk: "ទិន្នន័យផ្ទាល់ខ្លួនអាចត្រូវបានប្រើប្រាស់ខុសគោលបំណង",
    fakeGoodsRisk: "អាចទទួលបានទំនិញក្លែងក្លាយ/គុណភាពទាប",
    didYouMean: "តើ​អ្នក​ចង់​ចូល​ទៅ៖",
    goToSafeSite: "ទៅកាន់វេបសាយសុវត្ថិភាព",
    backToSafety: "ត្រឡប់ទៅសុវត្ថិភាព",
    continueRisk: "បន្តដោយមានហានិភ័យផ្ទាល់ខ្លួន",
    finalWarning: "ព្រមានចុងក្រោយ!",
    finalWarningText: "អ្នកកំពុងចូលទៅកាន់វេបសាយដែលមានហានិភ័យខ្ពស់ណាស់។ យើងមិនទទួលខុសត្រូវចំពោះការបាត់បង់ណាមួយទេ។",
    cancel: "បោះបង់",
    understandRisk: "ខ្ញុំយល់ហានិភ័យ",
    reportFraud: "រាយការណ៍ការលួចលាក់",
    reportingScam: "កំពុងរាយការណ៍...",
    backToHome: "ត្រលប់ ទៅទំព័រដើម"
  },
  lo: {
    title: "ເວັບໄຊນີ້ອາດຈະເປັນການຫລອກລວງ!",
    subtitle: "ລະວັງ, ລາຄາຖືກເກີນຈິງ!",
    analyzing: "ກຳລັງວິເຄາະເວັບໄຊ...",
    riskAnalysis: "ການວິເຄາະຄວາມສຽງ",
    risk: "ຄວາມສຽງ",
    veryHigh: "ສູງຫຼາຍ",
    whyDangerous: "ເປັນຫຍັງເວັບນີ້ອັນຕະລາຍ?",
    lowPrices: "ພົບລາຄາຖືກຫຼາຍສຳລັບສິນຄ້າຍີ່ຫໍ້. ເປັນກົນລະຍຸທົດທີ່ນິຍົມຂອງຜູ້ຫລອກລວງ.",
    suspiciousUrl: (url: string) => `URL "${url}" ນົດສົງໃສ ແລະອາດຈະປອມຕົວ Shopee ຫຼື Lazada`,
    urgency: "ມີການກະຕຸ້ນໃຫ້ຊື້ທັນທີ ໃຊ້ເວລາປອມ ແລະ \"ສະຕັອກຈຳກັດ\".",
    fakeReviews: "ລາຍງານທົບທວນເບິ່ງແລ້ວປອມ ທັງໝົດ 5 ດາວ",
    paymentRisk: "ອາດຮ້ອງຂໍຂໍ້ມູນບັດ ຫຼື ໂອນເງິນສ່ວນບຸກຄົນ",
    whatMayHappen: "ຖ້າດຳເນີນຕໍ່ຈະເກີດຫຍັງ?",
    loseMoneyRisk: "ເງິນອາດຈະຫາຍໂດຍບໍ່ໄດ້ຮັບສິນຄ້າ",
    creditCardRisk: "ຂໍ້ມູນບັດອາດຈະຖືກຂໂມຍ",
    personalDataRisk: "ຂໍ້ມູນສ່ວນຕົວອາດຈະຖືກນຳໃຊ້ຜິດວິທີ",
    fakeGoodsRisk: "ອາດຈະໄດ້ຮັບສິນຄ້າປອມ/ຄຸນນະພາບຕ່ຳ",
    didYouMean: "ເຈົ້າໝາຍເຖິງໄປທີ່:",
    goToSafeSite: "ໄປທີ່ເວັບໄຊທີ່ປອດໄພ",
    backToSafety: "ກັບໄປຄວາມປອດໄພ",
    continueRisk: "ດຳເນີນຕໍ່ດ້ວຍຄວາມສຽງ",
    finalWarning: "ຄຳເຕືອນຄັ້ງສຸດທ້າຍ!",
    finalWarningText: "ທ່ານກຳລັງເຂົ້າໄປໃນເວັບໄຊທີ່ມີຄວາມສຽງສູງ. ພວກເຮົາບໍ່ຮັບຜິດຊອບຄວາມເສຍຫາຍໃດໆ.",
    cancel: "ຍົກເລີກ",
    understandRisk: "ຂ້ອຍເຂົ້າໃຈຄວາມສຽງ",
    reportFraud: "ລາຍງານການຫລອກລວງ",
    reportingScam: "ກຳລັງລາຍງານ...",
    backToHome: "ກັບໜ້າຫຼັກ"
  },
  my: {
    title: "ဤ ဝဘ်ဆိုက်သည် သတင်းလိမ်လား ဖြစ်နိုင်သည်!",
    subtitle: "သတိထားပါ၊ စျေးနှုန်းများ တကယ်မဟုတ်အောင် ပိုမိုချိုသာနေသည်!",
    analyzing: "ဝဘ်ဆိုက်ကို ခွဲခြမ်းစိတ်ဖြာနေသည်...",
    riskAnalysis: "အန္တရာယ် ခွဲခြမ်းစိတ်ဖြာ",
    risk: "အန္တရာယ်",
    veryHigh: "အလွန်မြင့်",
    whyDangerous: "ဒီဝဘ်ဆိုက်က ဘာကြောင့် အန္တရာယ်ရှိလဲ?",
    lowPrices: "အမှတ်တံဆိပ်ပစ္စည်းများအားလုံးကို စျေးအလွန်ဈေးကျစွာ ရောင်းချထားခြင်းကို တွေ့ရှိခဲ့သည်။",
    suspiciousUrl: (url: string) => `ဝဘ်ဆိုက် URL "${url}" သည် သံသယဖြစ်စရာကောင်းသည်၊ Shopee သို့မဟုတ် Lazada ကို တုပမိတတ်သည်။`,
    urgency: "လုပ်ယူရေးနှိုးဆော်မှုများ၊ အတုအယောင်အချိန်နှင့် \"စတော့ချို့တဲ့\" စသည်ဖြင့်",
    fakeReviews: "ဖျက်တောက်သောသုံးသပ်ချက်များ 5 စတားသာရှိသည်",
    paymentRisk: "ကိုယ်ရေးကိုယ်တာ အကောင့်သို့ ငွေလွှဲခိုင်းနိုင်သည်",
    whatMayHappen: "ဆက်လက်လုပ်ပါက ဘာဖြစ်နိုင်မလဲ?",
    loseMoneyRisk: "ကုန်ပစ္စည်းမရဘဲ ငွေဆုံးနိုင်သည်",
    creditCardRisk: "ကတ်မှတ်တမ်း အချက်အလက် ခိုးယူခံနိုင်သည်",
    personalDataRisk: "ကိုယ်ရေးကိုယ်တာ အချက်အလက် မတော်တဆ အသုံးချခံနိုင်သည်",
    fakeGoodsRisk: "အတု/အရည်အသွေးနိမ့် ပစ္စည်း လက်ခံရနိုင်သည်",
    didYouMean: "သင်ဆုံးဖြတ်တာက:",
    goToSafeSite: "လုံခြုံသည့် site သို့သွားရန်",
    backToSafety: "လုံခြုံရေးသို့ ပြန်သွားရန်",
    continueRisk: "အန္တရာယ်နှင့်ပူးတွဲ၍ ဆက်လက်လုပ်ဆောင်ရန်",
    finalWarning: "နောက်ဆုံး သတိပေးချက်!",
    finalWarningText: "အလွန်အန္တရာယ် ကြီးမားသော ဝဘ်ဆိုက်သို့ သင်ဝင်မည်ဖြစ်သည်။ အရှုံးများအတွက် ကျွန်ုပ်တို့ မယူဆောင်ပါ။",
    cancel: "ပယ်ဖျက်ရန်",
    understandRisk: "အန္တရာယ်ကို နားလည်ပါသည်",
    reportFraud: "လိမ်လည်မှု အသိပေး",
    reportingScam: "အသိပေးနေသည်...",
    backToHome: "ပင်မစာမျက်နှာသို့ ပြန်သွားရန်"
  },
  ta: {
    title: "இந்த இணையதளம் மோசடி இருக்கலாம்!",
    subtitle: "கவனம், விலை மிகக் குறைவு!",
    analyzing: "இணையதளத்தை பகுப்பாய்வு செய்கிறது...",
    riskAnalysis: "அபாய பகுப்பாய்வு",
    risk: "அபாயம்",
    veryHigh: "மிகவும் அதிகம்",
    whyDangerous: "இந்த இணையதளம் ஏன் ஆபத்தானது?",
    lowPrices: "பிராண்டட் பொருட்களுக்கு மிகக் குறைந்த விலைகள் கண்டறியப்பட்டன. இது மோசடிக்காரர்கள் பயன்படுத்தும் வழக்கம்.",
    suspiciousUrl: (url: string) => `இணையதள URL "${url}" சந்தேகமானது; Shopee/Lazada போன்ற தளங்களை போலிவது போலத் தெரிகிறது.`,
    urgency: "உடனே வாங்குமாறு அதிக அழுத்தம், போலியான டைமர் மற்றும் \"குறைந்த பங்கு\"",
    fakeReviews: "விமர்சனங்கள் போலியாகத் தெரிகின்றன - அனைத்தும் 5 நட்சத்திரங்கள்.",
    paymentRisk: "பாதுகாப்பான பெமெண்ட் கேட்வே அல்லாது நேரடி வங்கிப் பரிமாற்றங்களை கேட்கலாம்.",
    whatMayHappen: "நீங்கள் தொடர்ந்தால் என்ன நடக்கலாம்?",
    loseMoneyRisk: "பொருட்கள் இல்லாமல் உங்கள் பணம் இழக்கலாம்",
    creditCardRisk: "உங்கள் கார்ட் தகவல் திருடப்படலாம்",
    personalDataRisk: "தனிப்பட்ட தரவு தவறாகப் பயன்படுத்தப்படலாம்",
    fakeGoodsRisk: "போலி/குறைந்த தரப் பொருட்கள் கிடைக்கலாம்",
    didYouMean: "நீங்கள் வர விரும்பியது:",
    goToSafeSite: "பாதுகாப்பான தளத்திற்குச் செல்லவும்",
    backToSafety: "பாதுகாப்பிற்கு திரும்பவும்",
    continueRisk: "அபாயத்தை ஏற்று தொடரவும்",
    finalWarning: "இறுதி எச்சரிக்கை!",
    finalWarningText: "மிக அபாயகரமான தளத்தில் நுழைய உள்ளீர்கள். எந்த இழப்புக்கும் நாங்கள் பொறுப்பல்ல.",
    cancel: "ரத்து செய்",
    understandRisk: "அபாயத்தை புரிந்துகொள்கிறேன்",
    reportFraud: "மோசடிக்கு புகார்",
    reportingScam: "புகாரளிக்கிறது...",
    backToHome: "முகப்புக்கு திரும்பவும்"
  }
};

interface WebsiteBlockingOverlayProps {
  websiteUrl?: string;
}

function getLegitimateSuggestion(url: string | undefined): string | null {
  if (!url) return null;
  const domain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const mapping: Record<string, string> = {
    "shoppe123.com": "shopee.com",
    "shoppee.com": "shopee.com",
    "shopee-my.com": "shopee.com",
    "lazada-my.shop": "lazada.com",
    "lazadamy.co": "lazada.com",
  };
  return mapping[domain] ?? null;
}

export function WebsiteBlockingOverlay({ websiteUrl = "shoppe123.com" }: WebsiteBlockingOverlayProps) {
  const { isAnalyzing, riskScore, selectedLanguage } = useExtensionStore();
  const [showFinalWarning, setShowFinalWarning] = useState(false);
  const [allowAccess, setAllowAccess] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const router = useRouter();
  const t = translations[selectedLanguage as keyof typeof translations] ?? translations.en;
  const suggestedDomain = getLegitimateSuggestion(websiteUrl);

  if (allowAccess) return null;

  const handleContinue = () => {
    setShowFinalWarning(true);
  };

  const handleFinalContinue = () => {
    setAllowAccess(true);
  };

  const handleReport = () => {
    setShowReportModal(true);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <Card className="max-w-2xl w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-red-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-10 w-10" />
                <div>
                  <h1 className="text-2xl font-bold">{t.title}</h1>
                  <p className="text-red-100">{t.subtitle}</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-1">
                <LanguageSelector />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {isAnalyzing ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p className="text-gray-600">{t.analyzing}</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6" data-tour="risk-analysis">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <span className="text-lg font-semibold">
                      {t.riskAnalysis}
                    </span>
                  </div>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    {t.risk}: {t.veryHigh} - {riskScore}%
                  </Badge>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">{t.whyDangerous}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.lowPrices}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.suspiciousUrl(websiteUrl)}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.urgency}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.fakeReviews}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                      <p>{t.paymentRisk}</p>
                    </div>
                  </div>
                </div>

                {suggestedDomain && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-blue-900 font-medium">{t.didYouMean}</div>
                      <div className="text-lg font-semibold text-blue-700">{suggestedDomain}</div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(`https://${suggestedDomain}`, '_blank', 'noopener,noreferrer')}
                    >
                      <CornerUpRight className="h-4 w-4 mr-2" />
                      {t.goToSafeSite}
                    </Button>
                  </div>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-2">
                    {t.whatMayHappen}
                  </h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• {t.loseMoneyRisk}</li>
                    <li>• {t.creditCardRisk}</li>
                    <li>• {t.personalDataRisk}</li>
                    <li>• {t.fakeGoodsRisk}</li>
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 flex-wrap">
                  <Button
                    size="lg"
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t.backToSafety}
                  </Button>
                  <Button
                    data-tour="website-report-button"
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600 shadow-lg"
                    onClick={handleReport}
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    {t.reportFraud}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleBackToHome}
                  >
                    <Home className="h-4 w-4 mr-2" />
                    {t.backToHome}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-50"
                    onClick={handleContinue}
                  >
                    {t.continueRisk}
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
                {t.finalWarning}
              </h3>
              <p className="text-center text-gray-600 mb-6">
                {t.finalWarningText}
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowFinalWarning(false)}
                >
                  {t.cancel}
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={handleFinalContinue}
                >
                  {t.understandRisk}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Report Scam Modal */}
      <ReportScamModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        websiteUrl={websiteUrl}
      />
    </div>
  );
}
