// src/data/website-demo/WebsiteBlockingOverlayData.ts

import type { LanguageCode } from "@/data/store/Languages";

export type WebsiteBlockingOverlayTranslation = {
  title: string;
  subtitle: string;
  analyzing: string;
  riskAnalysis: string;
  risk: string;
  veryHigh: string;
  whyDangerous: string;
  shortExplanation: string;
  detailedExplanation: {
    lowPrices: string;
    suspiciousUrl: string;
    urgency: string;
    fakeReviews: string;
    paymentRisk: string;
  };
  whatMayHappen: string;
  loseMoneyRisk: string;
  creditCardRisk: string;
  personalDataRisk: string;
  fakeGoodsRisk: string;
  didYouMean: string;
  goToSafeSite: string;
  backToSafety: string;
  continueRisk: string;
  finalWarning: string;
  finalWarningText: string;
  cancel: string;
  understandRisk: string;
  reportFraud: string;
  reportingScam: string;
  backToHome: string;
  seeMore: string;
  seeLess: string;
};

export const WebsiteBlockingOverlayData: Record<
  LanguageCode,
  WebsiteBlockingOverlayTranslation
> = {
  en: {
    title: "THIS WEBSITE MAY BE A SCAM!",
    subtitle: "Be careful, prices are too cheap to be real!",
    analyzing: "Analyzing website...",
    riskAnalysis: "Risk Analysis",
    risk: "RISK",
    veryHigh: "VERY HIGH",
    whyDangerous: "Why is this website dangerous?",
    shortExplanation:
      "This website shows multiple red flags including unrealistic prices, fake urgency tactics, and suspicious payment methods that are commonly used in online scams.",
    detailedExplanation: {
      lowPrices:
        "We detected extraordinarily low prices for branded items (iPhone RM999, PS5 RM599). This is a common tactic scammers use to attract victims.",
      suspiciousUrl:
        'The website URL "shoppe123.com" looks suspicious and may be trying to imitate popular shopping platforms like Shopee or Lazada.',
      urgency:
        'There are excessive prompts to buy immediately with fake timers and "limited stock" - these are psychological manipulation techniques.',
      fakeReviews:
        "Customer reviews appear fake - all 5 stars with generic comments. No negative or neutral reviews.",
      paymentRisk:
        "This website may ask for credit card information or payment to personal accounts, not through secure payment gateways.",
    },
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
    finalWarningText:
      "You are about to enter a very risky website. We are not responsible for any losses.",
    cancel: "Cancel",
    understandRisk: "I Understand the Risk",
    reportFraud: "REPORT FRAUD",
    reportingScam: "Reporting scam...",
    backToHome: "Back to Home",
    seeMore: "See more",
    seeLess: "See less",
  },
  ms: {
    title: "LAMAN WEB INI MUNGKIN SCAM!",
    subtitle: "Berhati-hati, harga terlalu murah untuk jadi kenyataan!",
    analyzing: "Menganalisis laman web...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "SANGAT TINGGI",
    whyDangerous: "Mengapa laman web ini berbahaya?",
    shortExplanation:
      "Laman web ini menunjukkan banyak tanda amaran termasuk harga tidak realistik, taktik desakan palsu, dan kaedah pembayaran mencurigakan yang biasa digunakan dalam penipuan dalam talian.",
    detailedExplanation: {
      lowPrices:
        "Kami mengesan harga yang luar biasa rendah untuk barangan berjenama (iPhone RM999, PS5 RM599). Ini adalah taktik lazim penipu untuk menarik mangsa.",
      suspiciousUrl:
        'URL laman web "deal-raya-123.com" kelihatan mencurigakan dan mungkin cuba meniru platform membeli-belah popular seperti Shopee atau Lazada.',
      urgency:
        'Terdapat gesaan melampau untuk membeli segera dengan timer palsu dan "stok terhad" - ini adalah teknik manipulasi psikologi.',
      fakeReviews:
        "Ulasan pelanggan kelihatan palsu - semua 5 bintang dengan komen generik. Tiada ulasan negatif atau neutral.",
      paymentRisk:
        "Laman web ini mungkin meminta maklumat kad kredit atau pembayaran ke akaun persendirian, bukan melalui payment gateway yang selamat.",
    },
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
    finalWarningText:
      "Anda akan memasuki laman web yang sangat berisiko. Kami tidak bertanggungjawab atas sebarang kerugian.",
    cancel: "Batal",
    understandRisk: "Saya Faham Risikonya",
    reportFraud: "LAPORKAN PENIPUAN",
    reportingScam: "Melaporkan penipuan...",
    backToHome: "Kembali ke Halaman Utama",
    seeMore: "Lihat lagi",
    seeLess: "Lihat kurang",
  },
  zh: {
    title: "此网站可能是诈骗！",
    subtitle: "小心，价格太便宜了不真实！",
    analyzing: "正在分析网站...",
    riskAnalysis: "风险分析",
    risk: "风险",
    veryHigh: "非常高",
    whyDangerous: "为什么这个网站危险？",
    shortExplanation:
      "此网站显示多个危险信号，包括不切实际的价格、虚假紧急策略和可疑的支付方式，这些都是在线诈骗中常用的手段。",
    detailedExplanation: {
      lowPrices:
        "我们检测到品牌商品的价格异常低（iPhone RM999，PS5 RM599）。这是骗子用来吸引受害者的常见策略。",
      suspiciousUrl:
        '网站URL"deal-raya-123.com"看起来可疑，可能试图模仿Shopee或Lazada等流行购物平台。',
      urgency:
        '有过度的催促立即购买，使用假计时器和"库存有限" - 这些是心理操纵技巧。',
      fakeReviews:
        "客户评论看起来是假的 - 都是5星，评论内容通用。没有负面或中性评论。",
      paymentRisk:
        "此网站可能要求信用卡信息或付款到个人账户，而不是通过安全的支付网关。",
    },
    whatMayHappen: "⚠️ 如果您继续，可能会发生什么？",
    loseMoneyRisk: "您的钱会丢失而不会收到任何物品",
    creditCardRisk: "您的信用卡信息可能被盗",
    personalDataRisk: "您的个人数据可能被滥用",
    fakeGoodsRisk: "您可能会收到假货或劣质商品",
    didYouMean: "您是想访问:",
    goToSafeSite: "转到安全网站",
    backToSafety: "返回安全",
    continueRisk: "自担风险继续",
    finalWarning: "最后警告！",
    finalWarningText:
      "您即将进入一个非常危险的网站。我们对任何损失不承担责任。",
    cancel: "取消",
    understandRisk: "我了解风险",
    reportFraud: "举报欺诈",
    reportingScam: "正在举报诈骗...",
    backToHome: "返回主页",
    seeMore: "查看更多",
    seeLess: "收起",
  },
  vi: {
    title: "TRANG WEB NÀY CÓ THỂ LÀ LỪA ĐẢO!",
    subtitle: "Cẩn thận, giá quá rẻ đến mức không thực tế!",
    analyzing: "Đang phân tích trang web...",
    riskAnalysis: "Phân tích rủi ro",
    risk: "RỦI RO",
    veryHigh: "RẤT CAO",
    whyDangerous: "Vì sao trang web này nguy hiểm?",
    shortExplanation:
      "Trang web này cho thấy nhiều dấu hiệu nguy hiểm bao gồm giá không thực tế, chiến thuật tạo áp lực giả và phương thức thanh toán đáng ngờ thường được sử dụng trong các vụ lừa đảo trực tuyến.",
    detailedExplanation: {
      lowPrices:
        "Chúng tôi phát hiện giá cực thấp cho hàng thương hiệu (iPhone RM999, PS5 RM599). Đây là chiêu trò thường dùng để dụ nạn nhân.",
      suspiciousUrl:
        'URL "deal-raya-123.com" trông đáng ngờ và có thể bắt chước các sàn mua sắm như Shopee hoặc Lazada.',
      urgency:
        'Có quá nhiều lời kêu gọi mua ngay với đồng hồ đếm ngược giả và "hết hàng sớm" – thủ thuật thao túng tâm lý.',
      fakeReviews:
        "Đánh giá có vẻ giả – toàn 5 sao với bình luận chung chung. Không có đánh giá tiêu cực hay trung lập.",
      paymentRisk:
        "Trang có thể yêu cầu thông tin thẻ hoặc chuyển vào tài khoản cá nhân, không qua cổng thanh toán an toàn.",
    },
    whatMayHappen: "⚠️ Điều gì có thể xảy ra nếu bạn tiếp tục?",
    loseMoneyRisk: "Mất tiền mà không nhận được hàng",
    creditCardRisk: "Thông tin thẻ tín dụng có thể bị đánh cắp",
    personalDataRisk: "Dữ liệu cá nhân có thể bị lạm dụng",
    fakeGoodsRisk: "Có thể nhận hàng giả hoặc kém chất lượng",
    didYouMean: "Bạn có ý định truy cập:",
    goToSafeSite: "Đi đến trang an toàn",
    backToSafety: "Quay lại an toàn",
    continueRisk: "Tự chịu rủi ro để tiếp tục",
    finalWarning: "Cảnh báo cuối!",
    finalWarningText:
      "Bạn sắp truy cập trang có rủi ro rất cao. Chúng tôi không chịu trách nhiệm cho mọi tổn thất.",
    cancel: "Hủy",
    understandRisk: "Tôi hiểu rủi ro",
    reportFraud: "BÁO CÁO GIAN LẬN",
    reportingScam: "Đang báo cáo lừa đảo...",
    backToHome: "Về trang chủ",
    seeMore: "Xem thêm",
    seeLess: "Thu gọn",
  },
  th: {
    title: "เว็บไซต์นี้อาจเป็นการหลอกลวง!",
    subtitle: "ระวัง ราคาถูกเกินกว่าจะเป็นจริง!",
    analyzing: "กำลังวิเคราะห์เว็บไซต์...",
    riskAnalysis: "การวิเคราะห์ความเสี่ยง",
    risk: "ความเสี่ยง",
    veryHigh: "สูงมาก",
    whyDangerous: "ทำไมเว็บไซต์นี้จึงอันตราย?",
    shortExplanation:
      "เว็บไซต์นี้แสดงสัญญาณเตือนหลายอย่าง รวมถึงราคาที่ไม่สมจริง กลยุทธ์สร้างความเร่งด่วนปลอม และวิธีการชำระเงินที่น่าสงสัย ซึ่งเป็นวิธีที่มักใช้ในการหลอกลวงออนไลน์",
    detailedExplanation: {
      lowPrices:
        "เราพบว่ามีการตั้งราคาสินค้าแบรนด์ต่ำผิดปกติ (iPhone RM999, PS5 RM599) ซึ่งเป็นกลยุทธ์ที่มิจฉาชีพมักใช้ล่อเหยื่อ",
      suspiciousUrl:
        'ที่อยู่เว็บไซต์ "deal-raya-123.com" ดูน่าสงสัย อาจพยายามเลียนแบบแพลตฟอร์มช้อปปิ้งอย่าง Shopee หรือ Lazada',
      urgency:
        'มีการเร่งให้รีบซื้อ โดยใช้ตัวจับเวลาและคำว่า "สินค้ามีจำนวนจำกัด" ซึ่งเป็นเทคนิคชักจูงทางจิตวิทยา',
      fakeReviews:
        "รีวิวลูกค้าดูไม่น่าเชื่อถือ — คะแนน 5 ดาวทั้งหมดและข้อความทั่วไป ไม่มีรีวิวเชิงลบหรือกลาง",
      paymentRisk:
        "อาจให้กรอกข้อมูลบัตรเครดิตหรือโอนเข้าบัญชีส่วนบุคคล ไม่ผ่านเกตเวย์ชำระเงินที่ปลอดภัย",
    },
    whatMayHappen: "⚠️ หากคุณดำเนินการต่อ อะไรอาจเกิดขึ้น?",
    loseMoneyRisk: "สูญเสียเงินโดยไม่ได้รับสินค้า",
    creditCardRisk: "ข้อมูลบัตรเครดิตอาจถูกขโมย",
    personalDataRisk: "ข้อมูลส่วนบุคคลอาจถูกนำไปใช้ในทางที่ผิด",
    fakeGoodsRisk: "อาจได้รับสินค้าปลอมหรือคุณภาพต่ำ",
    didYouMean: "คุณหมายถึงจะเยี่ยมชม:",
    goToSafeSite: "ไปยังเว็บไซต์ที่ปลอดภัย",
    backToSafety: "กลับสู่ความปลอดภัย",
    continueRisk: "ยอมรับความเสี่ยงและดำเนินการต่อ",
    finalWarning: "คำเตือนครั้งสุดท้าย!",
    finalWarningText:
      "คุณกำลังจะเข้าสู่เว็บไซต์ที่มีความเสี่ยงสูงมาก เราไม่รับผิดชอบต่อความสูญเสียใด ๆ",
    cancel: "ยกเลิก",
    understandRisk: "ฉันเข้าใจความเสี่ยง",
    reportFraud: "รายงานการทุจริต",
    reportingScam: "กำลังรายงานการหลอกลวง...",
    backToHome: "กลับหน้าแรก",
    seeMore: "ดูเพิ่มเติม",
    seeLess: "ดูน้อยลง",
  },
  fil: {
    title: "MAARING SCAM ANG WEBSITE NA ITO!",
    subtitle: "Mag‑ingat, sobrang baba ng presyo para maging totoo!",
    analyzing: "Sinusuri ang website...",
    riskAnalysis: "Pagsusuri sa Panganib",
    risk: "PANGANIB",
    veryHigh: "NAPAKATAAS",
    whyDangerous: "Bakit delikado ang website na ito?",
    shortExplanation:
      "Ang website na ito ay nagpapakita ng maraming pula na bandila kabilang ang mga hindi realistikong presyo, pekeng mga taktika ng pagmamadali, at mga kahina-hinalang paraan ng pagbabayad na karaniwang ginagamit sa mga online scam.",
    detailedExplanation: {
      lowPrices:
        "Nakakita kami ng sobrang babang presyo para sa branded na items (iPhone RM999, PS5 RM599). Karaniwang taktika ito ng scammers.",
      suspiciousUrl:
        'Mukhang kahina‑hinala ang URL na "deal-raya-123.com" at posibleng ginagaya ang mga platform tulad ng Shopee o Lazada.',
      urgency:
        'May sobra‑sobrang paghimok na bumili agad gamit ang pekeng timer at "limited stock" — mga teknik ng psychological manipulation.',
      fakeReviews:
        "Mukhang peke ang reviews — puro 5‑star na may generic na komento. Walang negatibo o neutral.",
      paymentRisk:
        "Maaaring hilingin ang detalye ng credit card o bayad sa personal na account, hindi sa ligtas na payment gateway.",
    },
    whatMayHappen: "⚠️ Ano ang maaaring mangyari kung magpatuloy ka?",
    loseMoneyRisk: "Mawawala ang pera mo nang walang matatanggap na item",
    creditCardRisk: "Maaaring manakaw ang detalye ng credit card mo",
    personalDataRisk: "Maaaring magamit nang mali ang personal na data mo",
    fakeGoodsRisk:
      "Maaaring makatanggap ng peke o mababang kalidad na produkto",
    didYouMean: "Ibig mo bang bisitahin:",
    goToSafeSite: "Pumunta sa ligtas na site",
    backToSafety: "Bumalik sa Kaligtasan",
    continueRisk: "Magpatuloy sa Sariling Panganib",
    finalWarning: "Huling Babala!",
    finalWarningText:
      "Papunta ka sa napaka‑delikadong website. Hindi kami mananagot sa anumang pagkalugi.",
    cancel: "Kanselahin",
    understandRisk: "Nauunawaan ko ang panganib",
    reportFraud: "I‑REPORT ANG PANLOLOKO",
    reportingScam: "Nagre‑report ng scam...",
    backToHome: "Bumalik sa Home",
    seeMore: "Makita pa",
    seeLess: "Bawasan",
  },
  id: {
    title: "SITUS INI MUNGKIN PENIPUAN!",
    subtitle: "Hati‑hati, harganya terlalu murah untuk nyata!",
    analyzing: "Menganalisis situs...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "SANGAT TINGGI",
    whyDangerous: "Mengapa situs ini berbahaya?",
    shortExplanation:
      "Situs web ini menunjukkan banyak tanda bahaya termasuk harga yang tidak realistis, taktik urgensi palsu, dan metode pembayaran yang mencurigakan yang biasa digunakan dalam penipuan online.",
    detailedExplanation: {
      lowPrices:
        "Kami mendeteksi harga sangat rendah untuk barang bermerek (iPhone RM999, PS5 RM599). Ini taktik umum penipu untuk menarik korban.",
      suspiciousUrl:
        'URL "deal-raya-123.com" mencurigakan dan mungkin meniru platform belanja seperti Shopee atau Lazada.',
      urgency:
        'Ada dorongan berlebihan untuk segera membeli dengan timer palsu dan "stok terbatas" — teknik manipulasi psikologis.',
      fakeReviews:
        "Ulasan tampak palsu — semua 5 bintang dengan komentar generik. Tidak ada ulasan negatif atau netral.",
      paymentRisk:
        "Situs bisa meminta data kartu kredit atau pembayaran ke rekening pribadi, bukan melalui gerbang pembayaran yang aman.",
    },
    whatMayHappen: "⚠️ Apa yang bisa terjadi jika lanjut?",
    loseMoneyRisk: "Uang hilang tanpa menerima barang",
    creditCardRisk: "Data kartu kredit bisa dicuri",
    personalDataRisk: "Data pribadi dapat disalahgunakan",
    fakeGoodsRisk: "Bisa menerima barang palsu atau berkualitas buruk",
    didYouMean: "Maksud Anda mengunjungi:",
    goToSafeSite: "Pergi ke situs aman",
    backToSafety: "Kembali ke Keamanan",
    continueRisk: "Lanjutkan dengan Risiko Sendiri",
    finalWarning: "Peringatan Terakhir!",
    finalWarningText:
      "Anda akan masuk ke situs berisiko sangat tinggi. Kami tidak bertanggung jawab atas kerugian apa pun.",
    cancel: "Batal",
    understandRisk: "Saya paham risikonya",
    reportFraud: "LAPORKAN PENIPUAN",
    reportingScam: "Melaporkan penipuan...",
    backToHome: "Kembali ke Beranda",
    seeMore: "Lihat lebih",
    seeLess: "Lihat kurang",
  },
  jv: {
    title: "SITUS IKI BISA WAÉ APUS‑APUS!",
    subtitle: "Ati‑ati, regané murah banget nganti ora masuk akal!",
    analyzing: "Nglacak situs...",
    riskAnalysis: "Analisis Risiko",
    risk: "RISIKO",
    veryHigh: "DHUWUR BANGET",
    whyDangerous: "Napa situs iki mbebayani?",
    shortExplanation:
      "Situs web iki nuduhake akeh tanda bebaya kalebu rega sing ora masuk akal, taktik desakan palsu, lan cara bayar sing curiga sing asring digunakake ing penipuan online.",
    detailedExplanation: {
      lowPrices:
        "Kita ndeteksi rega murah banget kanggo barang mérek (iPhone RM999, PS5 RM599). Iki taktik umum sing dienggo pengapusan kanggo narik korban.",
      suspiciousUrl:
        'URL "deal-raya-123.com" katon curiga lan bisa uga niru platform blanja kaya Shopee utawa Lazada.',
      urgency:
        'Ana paksaan tuku sakcepeté nganggo timer palsu lan "stok winates" — teknik manipulasi psikologis.',
      fakeReviews:
        "Ulasané katon palsu — kabèh 5 bintang nganggo komentar umum. Ora ana ulasan negatif utawa netral.",
      paymentRisk:
        "Situs bisa njaluk data kertu kredit utawa mbayar menyang akun pribadi, dudu liwat gerbang pambayaran aman.",
    },
    whatMayHappen: "⚠️ Opo sing bisa kelakon yen terus?",
    loseMoneyRisk: "Dhuwit ilang tanpa nampa barang",
    creditCardRisk: "Data kertu kredit bisa dicolong",
    personalDataRisk: "Data pribadhi bisa disalahgunakaké",
    fakeGoodsRisk: "Bisa nampa barang palsu utawa ora apik kualitasé",
    didYouMean: "Apa sampeyan arep ngunjungi:",
    goToSafeSite: "Menyang situs aman",
    backToSafety: "Bali menyang Keamanan",
    continueRisk: "Terusaké kanthi Risiko Dèwé",
    finalWarning: "Pènget Pungkasan!",
    finalWarningText:
      "Kowé arep mlebu situs sing resikoné dhuwur banget. Kita ora tanggung jawab marang kerugian apa waé.",
    cancel: "Batal",
    understandRisk: "Aku ngerti risikoné",
    reportFraud: "LAPOR KACURANGAN",
    reportingScam: "Nglaporaké apus‑apus...",
    backToHome: "Bali menyang Omah",
    seeMore: "Deleng liyane",
    seeLess: "Deleng sithik",
  },
  su: {
    title: "SITUS IEU BISA WAÉ PANIPUAN!",
    subtitle: "Waspada, hargana teuing mirah pikeun jadi nyata!",
    analyzing: "Ngadéteksi/nga‑analisis situs...",
    riskAnalysis: "Analisis Résiko",
    risk: "RÉSIKO",
    veryHigh: "Luhur Pisang",
    whyDangerous: "Naha situs ieu bahaya?",
    shortExplanation:
      "Situs web ieu nunjukkeun seueur sinyal bahaya kalebu harga anu teu réalistis, taktik urgensi palsu, sareng metode pamayaran anu curiga anu biasa dianggo dina panipuan online.",
    detailedExplanation: {
      lowPrices:
        "Kapanggih harga pisan mirah keur barang mérek (iPhone RM999, PS5 RM599). Ieu téh taktik umum panipuan pikeun narik korban.",
      suspiciousUrl:
        'URL "deal-raya-123.com" katingali curiga jeung bisa waé niron platform balanja saperti Shopee atawa Lazada.',
      urgency:
        'Aya dorongan kaleuleuwihi supaya meuli geuwat ku timer palsu jeung "stok kawates" — téhnik manipulasi psikologis.',
      fakeReviews:
        "Review katingali palsu — sadayana 5 béntang jeung koméntar umum. Teu aya review négatif atawa nétral.",
      paymentRisk:
        "Situs bisa ménta data kartu kiridit atawa pamayaran ka rekening pribadi, lain ngaliwatan gerbang pamayaran aman.",
    },
    whatMayHappen: "⚠️ Naon anu bisa kajadian lamun diteruskeun?",
    loseMoneyRisk: "Artos leungit tanpa narima barang nanaon",
    creditCardRisk: "Data kartu kiridit bisa dicolong",
    personalDataRisk: "Data pribadi bisa disalahgunakeun",
    fakeGoodsRisk: "Bisa narima barang palsu atawa goréng kualitasna",
    didYouMean: "Naha anjeun hartosna nganjang ka:",
    goToSafeSite: "Angkat ka situs aman",
    backToSafety: "Balik ka Kaamanan",
    continueRisk: "Teruskeun kalayan Risiko Sorangan",
    finalWarning: "Peringatan Pamungkas!",
    finalWarningText:
      "Anjeun bade asup ka situs résiko pisan luhur. Kami teu tanggung jawab kana karugian naon waé.",
    cancel: "Batal",
    understandRisk: "Kuring ngartos résikona",
    reportFraud: "LAPOR PANIPUAN",
    reportingScam: "Ngadaptarkeun laporan panipuan...",
    backToHome: "Balik ka Imah",
    seeMore: "Tingali deui",
    seeLess: "Tingali saeutik",
  },
  km: {
    title: "គេហទំព័រនេះអាចជាការលួចលក់/បោកបញ្ឆោត!",
    subtitle: "ប្រុងប្រយ័ត្ន តម្លៃទាបពេក មិនសមរម្យនឹងជាប់ជាក់ស្ដែងទេ!",
    analyzing: "កំពុងវិភាគគេហទំព័រ...",
    riskAnalysis: "ការវិភាគហានិភ័យ",
    risk: "ហានិភ័យ",
    veryHigh: "ខ្ពស់ណាស់",
    whyDangerous: "ហេតុអ្វីបានជាគេហទំព័រនេះគ្រោះថ្នាក់?",
    shortExplanation:
      "គេហទំព័រនេះបង្ហាញសញ្ញាម្រាមបាញ់ជាច្រើន រួមទាំងតម្លៃមិនសមហេតុផល យុទ្ធសាស្ត្រប្រញាប់ប្រាស់ក្លែងក្លាយ និងវិធីបង់ប្រាក់គួរឱ្យសង្ស័យ ដែលជាទូទៅត្រូវបានប្រើប្រាស់ក្នុងការបោកបញ្ឆោតតាមអ៊ីនធឺណិត។",
    detailedExplanation: {
      lowPrices:
        "យើងរកឃើញតម្លៃទាបខ្លាំងសម្រាប់ទំនិញម៉ាក (iPhone RM999, PS5 RM599)។ នេះជាយុទ្ធសាស្ត្រដែលអ្នកបោកប្រើជាញឹកញាប់ដើម្បីទាក់ទាញជនរងគ្រោះ។",
      suspiciousUrl:
        'អាសយដ្ឋាន "deal-raya-123.com" មើលទៅគួរឱ្យសង្ស័យ ហើយអាចកំពុងចម្លងវេទិការទិញឥវ៉ាន់ដូចជា Shopee ឬ Lazada។',
      urgency:
        'មានការជំរុញឱ្យទិញភ្លាមៗជាច្រើន ដោយប្រើម៉ោងក្លែងក្លាយ និង "ស្តុកមានកំណត់" — ជា​បច្ចេកទេសបោកបញ្ឆោតផ្លូវចិត្ត។',
      fakeReviews:
        "ពិនិត្យអតិថិជនហាក់ដូចជាព្រៀង — ៥ ផ្កាយទាំងអស់ ជាមួយមតិយោបល់ទូទៅ មិនមានអវិជ្ជមាន ឬអព្យាក្រឹត។",
      paymentRisk:
        "គេហទំព័រអាចស្នើព័ត៌មានកាតឥណទាន ឬបង់ប្រាក់ទៅគណនីផ្ទាល់ខ្លួន មិនមែនតាមប្រព័ន្ធបង់ប្រាក់មានសុវត្ថិភាពទេ។",
    },
    whatMayHappen: "⚠️ អ្វីអាចកើតឡើង ប្រសិនបើអ្នកបន្ត?",
    loseMoneyRisk: "បាត់បង់ប្រាក់ ដោយមិនទទួលបានទំនិញ",
    creditCardRisk: "ព័ត៌មានកាតឥណទានអាចត្រូវបានលួច",
    personalDataRisk: "ទិន្នន័យផ្ទាល់ខ្លួនអាចត្រូវបានប្រើខុស",
    fakeGoodsRisk: "អាចទទួលបានទំនិញក្លែងក្លាយ ឬគុណភាពទាប",
    didYouMean: "តើអ្នកចង់ទៅកាន់:",
    goToSafeSite: "ទៅកាន់គេហទំព័រដែលមានសុវត្ថិភាព",
    backToSafety: "ត្រឡប់ទៅសុវត្ថិភាព",
    continueRisk: "បន្តតាមហានិភ័យផ្ទាល់ខ្លួន",
    finalWarning: "ការព្រមានចុងក្រោយ!",
    finalWarningText:
      "អ្នកកំពុងចូលទៅគេហទំព័រដែលមានហានិភ័យខ្ពស់។ យើងមិនទទួលខុសត្រូវចំពោះការបាត់បង់ណាមួយទេ។",
    cancel: "បោះបង់",
    understandRisk: "ខ្ញុំយល់អំពីហានិភ័យ",
    reportFraud: "រាយការណ៍ការលួចលក់",
    reportingScam: "កំពុងរាយការណ៍ការលួចលក់...",
    backToHome: "ត្រឡប់​ទៅគេហទំព័រ",
    seeMore: "មើលបន្ថែម",
    seeLess: "មើលតិច",
  },
  lo: {
    title: "ເວັບໄຊນີ້ອາດຈະເປັນການຫລອກລວງ!",
    subtitle: "ລະວັງ ລາຄາຖືກເກີນຈິງ!",
    analyzing: "ກຳລັງວິເຄາະເວັບໄຊ...",
    riskAnalysis: "ການວິເຄາະຄວາມສ່ຽງ",
    risk: "ຄວາມສ່ຽງ",
    veryHigh: "ສູງຫຼາຍ",
    whyDangerous: "ເປັນຫຍັງເວັບນີ້ອັນຕະລາຍ?",
    shortExplanation:
      "ເວັບໄຊນີ້ສະແດງໃຫ້ເຫັນສັນຍານອັນຕະລາຍຫຼາຍອັນ ລວມທັງລາຄາທີ່ບໍ່ເປັນຈິງ, ກົນລະຍຸດຄວາມຮີບຮ້ອນປອມ, ແລະວິທີການຊຳລະທີ່ນ່າສົງໄສ ທີ່ມັກຖືກໃຊ້ໃນການຫລອກລວງອອນລາຍ.",
    detailedExplanation: {
      lowPrices:
        "ພົບລາຄາຕໍ່າຜິດປົກກະຕິສໍາລັບສິນຄ້າຍີ່ຫໍ້ (iPhone RM999, PS5 RM599) — ກລະທົບທີ່ມັກໃຊ້ເພື່ອລໍ້ລວງເຫຍື່ອ.",
      suspiciousUrl:
        'URL "deal-raya-123.com" ດູນ່າສົງໃສ ແລະອາດຈະລອງເປັນ Shopee ຫຼື Lazada.',
      urgency:
        'ມີການເຊີນຊວນໃຫ້ຊື້ທັນທີຫຼາຍເກີນໄປ ດ້ວຍໂມງນັບຖອຍຫຼື "ສິນຄ້າຈໍາກັດ" — ເປັນເທັກນິກຈິດວິທະຍາ.',
      fakeReviews:
        "ຄຳວິຈານລູກຄ້າເບິ່ງເປັນປອມ — 5 ດາວທັງໝົດ ແລະຄຳເຫັນທົ່ວໄປ ບໍ່ມີຄຳວິຈານລົບ ຫຼື ກາງ.",
      paymentRisk:
        "ເວັບອາດຈະຮ້ອງຂໍຂໍ້ມູນບັດເຄຣດິດ ຫຼື ໃຫ້ໂອນເງິນເຂົ້າບັນຊີສ່ວນໂຕ ບໍ່ຜ່ານປະຕູຊຳລະທີ່ປອດໄພ.",
    },
    whatMayHappen: "⚠️ ຈະເກີດຫຍັງຂື້ນຖ້າທ່ານສືບຕໍ່?",
    loseMoneyRisk: "ເງິນອາດຈະຫາຍໂດຍບໍ່ໄດ້ຮັບສິນຄ້າ",
    creditCardRisk: "ຂໍ້ມູນບັດເຄຣດິດອາດຖືກຂໂມຍ",
    personalDataRisk: "ຂໍ້ມູນສ່ວນໂຕອາດຖືກນໍາໄປໃຊ້ຜິດວິທີ",
    fakeGoodsRisk: "ອາດຈະໄດ້ຮັບສິນຄ້າປອມ ຫຼື ຄຸນນະພາບຕໍ່າ",
    didYouMean: "ທ່ານໝາຍເຖິງການໄປເບິ່ງ:",
    goToSafeSite: "ໄປຫາເວັບໄຊທີ່ປອດໄພ",
    backToSafety: "ກັບໄປຄວາມປອດໄພ",
    continueRisk: "ສືບຕໍ່ໂດຍຮັບຜິດຊອບຄວາມສ່ຽງເອງ",
    finalWarning: "ຄໍາເຕືອນສຸດທ້າຍ!",
    finalWarningText:
      "ທ່ານກຳລັງຈະເຂົ້າເວັບທີ່ມີຄວາມສ່ຽງສູງຫຼາຍ. ພວກເຮົາບໍ່ຮັບຜິດຊອບຕໍ່ຄວາມເສຍຫາຍໃດໆ.",
    cancel: "ຍົກເລີກ",
    understandRisk: "ຂ້ອຍເຂົ້າໃຈຄວາມສ່ຽງ",
    reportFraud: "ແຈ້ງການທຸຈະລິດ",
    reportingScam: "ກຳລັງແຈ້ງການຫລອກລວງ...",
    backToHome: "ກັບໜ້າຫຼັກ",
    seeMore: "ເບິ່ງເພີ່ມ",
    seeLess: "ເບິ່ງໜ້ອຍ",
  },
  my: {
    title: "ဤဝဘ်ဆိုက်သည် လိမ်လည်မှု ဖြစ်နိုင်ပါတယ်!",
    subtitle: "သတိထားပါ၊ ဈေးနှုန်းများ အလွန်ချိုသာနေပြီး မနာလျှောက်ပါ!",
    analyzing: "ဝဘ်ဆိုက်ကို ခွဲခြမ်းစိတ်ဖြာနေသည်...",
    riskAnalysis: "အန္တရာယ် ခွဲခြမ်းစိတ်ဖြာချက်",
    risk: "အန္တရာယ်",
    veryHigh: "အလွန် မြင့်",
    whyDangerous: "ဘာကြောင့် ဤဝဘ်ဆိုက် အန္တရာယ်ရှိတာလဲ?",
    shortExplanation:
      "ဤဝဘ်ဆိုက်သည် မဖြစ်နိုင်သည့်ဈေးနှုန်းများ၊ အတုအကျင့်ဖြင့် ခြိမ်းခြောက်မှုများ နှင့် သံသယရှိသည့် ငွေပေးချေမှုနည်းလမ်းများအပါအဝင် အွန်လိုင်းလိမ်လည်မှုတွင် အမြဲတမ်းအသုံးပြုသည့် အန္တရာယ်လက္ခဏာများစွာကို ပြသနေသည်။",
    detailedExplanation: {
      lowPrices:
        "မူရင်းတံဆိပ် ထုတ်ကုန်များအတွက် အလွန်ချိုသာသော ဈေးနှုန်းများ (iPhone RM999, PS5 RM599) ကို တွေ့ရှိခဲ့သည်။ ၎င်းသည် လိမ်လည်သူများ၏ သာမန် လိမ်လည်နည်းလမ်းဖြစ်သည်။",
      suspiciousUrl:
        'ဝဘ်ဆိုက် URL "deal-raya-123.com" သည် သံသယဖွယ် ဖြစ်ပြီး Shopee/Lazada ကဲ့သို့များကို ကွတ်ကွတ်ကွင်းကွင်း လိုက်မှီပါသည်။',
      urgency:
        '"လက်လျှော့ဈေး"၊ "စတော့ကပ်" စသည့် စိတ်ပညာ လုပ်ငန်းစဉ်များဖြင့် ယခု ချက်ချင်း ဝယ်ယူရန် အလွန် ဖိအားပေးထားသည်။',
      fakeReviews:
        "ဖောက်သည်ပြန်လည်သုံးသပ်ချက်များ ပျက်မွားနေရသည် — ၅ကြယ် အပြည့်နှင့် အနှစ်ချုပ် ဝေါဟာရများသာ ရှိသည်။ ဆန့်ကျင်/အလယ်အလတ် မရှိပါ။",
      paymentRisk:
        "လုံခြုံသော Payment Gateway မဟုတ်ဘဲ ပုဂ္ဂလိက အကောင့်သို့ ငွေပေးချေမှုများကို တောင်းဆို နိုင်သည်။",
    },
    whatMayHappen: "⚠️ ဆက်လက် ဆောင်ရွက်ပါက ဘာတွေ ဖြစ်နိုင်သလဲ?",
    loseMoneyRisk: "ကုန်ပစ္စည်း မရဘဲ ငွေဆုံးရှုံးနိုင်သည်",
    creditCardRisk: "ကတ်အသုံးပြုမှု အသေးစိတ်များ ခိုးယူခံရနိုင်သည်",
    personalDataRisk:
      "ကိုယ်ရေးကိုယ်တာအချက်အလက်များ သုံးစွဲမှု မမှန် ဖြစ်နိုင်သည်",
    fakeGoodsRisk: "ကူးစားကုန်/အရည်အသွေးမကောင်း ပစ္စည်း ရနိုင်သည်",
    didYouMean: "သင် ဆိုလိုသည်မှာ:",
    goToSafeSite: "လုံခြုံသောဆိုက်သို့ သွားပါ",
    backToSafety: "လုံခြုံရေးသို့ ပြန်သွားရန်",
    continueRisk: "အန္တရာယ်ကို သဘောတူ၍ ဆက်လက် ဝင်ရောက်မည်",
    finalWarning: "နောက်ဆုံး အကြောင်းကြားစာ!",
    finalWarningText:
      "အန္တရာယ် အလွန်မြင့် သော ဝဘ်ဆိုက်သို့ ဝင်ရန် လုပ်ဆောင်နေသည်။ ရရှိနိုင်သည့် ဆုံးရှုံးမှုများအတွက် ကျွန်ုပ်တို့ တာဝန်မရှိပါ။",
    cancel: "ဖျက်သိမ်း",
    understandRisk: "အန္တရာယ်ကို နားလည်ပြီ",
    reportFraud: "လိမ်လည်မှု တိုင်ကြားမည်",
    reportingScam: "လိမ်လည်မှုကို တိုင်ကြားနေသည်...",
    backToHome: "မူလစာမျက်နှာသို့",
    seeMore: "ပို၍ကြည့်မည်",
    seeLess: "နည်းနည်းကြည့်မည်",
  },
  ta: {
    title: "இந்த வலைத்தளம் மோசடியாக இருக்கலாம்!",
    subtitle: "எச்சரிக்கை—விலை உண்மைக்கு மிகக் குறைவு!",
    analyzing: "வலைத்தளத்தை பகுப்பாய்வு செய்கிறோம்...",
    riskAnalysis: "அபாய ஆய்வு",
    risk: "அபாயம்",
    veryHigh: "மிக உயர்",
    whyDangerous: "ஏன் இந்த வலைத்தளம் ஆபத்தானது?",
    shortExplanation:
      "இந்த வலைத்தளம் நம்பமுடியாத விலைகள், போலி அவசர தந்திரங்கள் மற்றும் சந்தேகத்திற்குரிய பணம் செலுத்தும் முறைகள் உட்பட பல எச்சரிக்கை அறிகுறிகளைக் காட்டுகிறது, அவை பொதுவாக ஆன்லைன் மோசடிகளில் பயன்படுத்தப்படுகின்றன.",
    detailedExplanation: {
      lowPrices:
        "பிராண்டட் பொருட்களுக்கு இயலாத அளவு குறைந்த விலை (iPhone RM999, PS5 RM599) கண்டறியப்பட்டது. இது மோசடிகள் பொதுவாக பயன்படுத்தும் உத்தி.",
      suspiciousUrl:
        '"deal-raya-123.com" URL சந்தேகத்திற்குரியது; Shopee/Lazada போன்ற தளங்களைப் பின்பற்ற முயலலாம்.',
      urgency:
        'போலி டைமர் மற்றும் "குறைந்த ஸ்டாக்" போன்ற கவர்ச்சிகளுடன் உடன் வாங்குமாறு அதிக அழுத்தம்—இது மன உளைச்சல் உத்தி.',
      fakeReviews:
        "வாடிக்கையாளர் விமர்சனங்கள் போலி போல—அனைத்தும் 5 நட்சத்திரம், பொதுவான கருத்துக்கள். எதிர்மறை/நடுநிலை இல்லை.",
      paymentRisk:
        "பாதுகாப்பான பெமென்ட் கேட்வே இல்லாமல், தனிப்பட்ட கணக்குகளுக்கு கட்டணம்/கார்டு தகவல் கேட்கலாம்.",
    },
    whatMayHappen: "⚠️ தொடர்ந்தால் என்ன நடக்கலாம்?",
    loseMoneyRisk: "பொருள் வராமல் பணத்தை இழக்கலாம்",
    creditCardRisk: "கிரெடிட் கார்டு தகவல் திருடப்படலாம்",
    personalDataRisk: "தனிப்பட்ட தரவு தவறாக பயன்படுத்தப்படலாம்",
    fakeGoodsRisk: "போலி அல்லது தரமற்ற பொருள் கிடைக்கலாம்",
    didYouMean: "நீங்கள் வருகை தர விரும்பினீர்கள்:",
    goToSafeSite: "பாதுகாப்பான தளத்திற்கு செல்லுங்கள்",
    backToSafety: "பாதுகாப்புக்கு திரும்பு",
    continueRisk: "அபாயத்தை ஏற்று தொடர்க",
    finalWarning: "இறுதி எச்சரிக்கை!",
    finalWarningText:
      "மிகவும் ஆபத்தான வலைத்தளத்துக்குள் செல்ல உள்ளீர்கள். எந்த இழப்பிற்கும் நாங்கள் பொறுப்பல்ல.",
    cancel: "ரத்து",
    understandRisk: "அபாயம் புரிந்தது",
    reportFraud: "மோசடி புகார்",
    reportingScam: "மோசடியை புகாரளிக்கிறது...",
    backToHome: "முகப்புக்குத் திரும்ப",
    seeMore: "மேலும் பார்க்கவும்",
    seeLess: "குறைவாக பார்க்கவும்",
  },
};
