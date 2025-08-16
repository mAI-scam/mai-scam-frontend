import type { LanguageCode } from "@/data/store/Languages";

export type FacebookSafeContentTranslation = {
  safeContentDetected: string;
  protectedBy: string;
  safeContent: string;
  description: string;
  riskLevel: string;
  low: string;
  hidePost: string;
  showPost: string;
  trustContent: string;
  whySafe: string;
  reasons: string[];
  continueBrowsing: string;
};

export const FacebookSafeContentData: Record<
  LanguageCode,
  FacebookSafeContentTranslation
> = {
  en: {
    safeContentDetected: "SAFE CONTENT VERIFIED",
    protectedBy: "Protected by mAIscam Extension",
    safeContent: "This content appears to be legitimate",
    description:
      "Our connected AI agents used OCR to extract text from this image and found no suspicious patterns. The content appears to be genuine personal sharing with no signs of scam tactics through MCP threat intelligence analysis",
    riskLevel: "Risk Level",
    low: "LOW RISK - SAFE",
    hidePost: "Hide Content Details",
    showPost: "Show Content Details",
    trustContent: "Trust This Content",
    whySafe: "Why is this considered safe?",
    reasons: [
      "Personal sharing content with genuine context",
      "No unrealistic offers or promises detected",
      "No suspicious links or call-to-action patterns",
      "Natural language usage without pressure tactics",
      "Authentic user-generated content characteristics",
    ],
    continueBrowsing: "Continue Browsing Safely",
  },
  ms: {
    safeContentDetected: "KANDUNGAN SELAMAT DISAHKAN",
    protectedBy: "Dilindungi oleh Sambungan mAIscam",
    safeContent: "Kandungan ini kelihatan sah",
    description:
      "Agen AI terhubung kami menggunakan OCR untuk mengekstrak teks dari imej ini dan tidak menemui corak mencurigakan. Kandungan ini kelihatan seperti perkongsian peribadi tulen tanpa tanda-tanda taktik penipuan melalui analisis intelligence ancaman MCP",
    riskLevel: "Tahap Risiko",
    low: "RISIKO RENDAH - SELAMAT",
    hidePost: "Sembunyikan Butiran Kandungan",
    showPost: "Tunjuk Butiran Kandungan",
    trustContent: "Percayai Kandungan Ini",
    whySafe: "Mengapa ini dianggap selamat?",
    reasons: [
      "Kandungan perkongsian peribadi dengan konteks tulen",
      "Tiada tawaran atau janji tidak realistik dikesan",
      "Tiada pautan mencurigakan atau corak call-to-action",
      "Penggunaan bahasa semula jadi tanpa taktik tekanan",
      "Ciri-ciri kandungan buatan pengguna yang autentik",
    ],
    continueBrowsing: "Teruskan Melayari Dengan Selamat",
  },
  zh: {
    safeContentDetected: "安全内容已验证",
    protectedBy: "受 mAIscam 扩展保护",
    safeContent: "此内容看起来是合法的",
    description:
      "我们的连接AI代理使用OCR从此图像中提取文本，未发现可疑模式。通过MCP威胁情报分析，该内容看起来是真实的个人分享，没有诈骗策略的迹象",
    riskLevel: "风险等级",
    low: "低风险 - 安全",
    hidePost: "隐藏内容详情",
    showPost: "显示内容详情",
    trustContent: "信任此内容",
    whySafe: "为什么这被认为是安全的？",
    reasons: [
      "具有真实语境的个人分享内容",
      "未检测到不切实际的优惠或承诺",
      "没有可疑链接或行动呼吁模式",
      "自然语言使用，无压力策略",
      "真实用户生成内容特征",
    ],
    continueBrowsing: "继续安全浏览",
  },
  vi: {
    safeContentDetected: "NỘI DUNG AN TOÀN ĐÃ XÁC MINH",
    protectedBy: "Được bảo vệ bởi tiện ích mAIscam",
    safeContent: "Nội dung này có vẻ hợp pháp",
    description:
      "Các tác nhân AI được kết nối đã dùng OCR để trích xuất văn bản từ hình ảnh này và không tìm thấy mẫu đáng ngờ. Nội dung này có vẻ là chia sẻ cá nhân chân thực không có dấu hiệu của chiêu trò lừa đảo qua phân tích tình báo mối đe dọa MCP",
    riskLevel: "Mức độ rủi ro",
    low: "RỦI RO THẤP - AN TOÀN",
    hidePost: "Ẩn chi tiết nội dung",
    showPost: "Hiện chi tiết nội dung",
    trustContent: "Tin tưởng nội dung này",
    whySafe: "Tại sao điều này được coi là an toàn?",
    reasons: [
      "Nội dung chia sẻ cá nhân với ngữ cảnh chân thực",
      "Không phát hiện ưu đãi hoặc lời hứa phi thực tế",
      "Không có liên kết đáng ngờ hoặc mẫu kêu gọi hành động",
      "Sử dụng ngôn ngữ tự nhiên không có chiêu trò gây áp lực",
      "Đặc điểm nội dung do người dùng tạo ra xác thực",
    ],
    continueBrowsing: "Tiếp Tục Duyệt Web An Toàn",
  },
  th: {
    safeContentDetected: "เนื้อหาปลอดภัยได้รับการยืนยัน",
    protectedBy: "ป้องกันโดยส่วนขยาย mAIscam",
    safeContent: "เนื้อหานี้ดูเหมือนจะถูกต้องตามกฎหมาย",
    description:
      "ตัวแทน AI ที่เชื่อมต่อของเราใช้ OCR เพื่อดึงข้อความจากภาพนี้ และไม่พบรูปแบบที่น่าสงสัย เนื้อหานี้ดูเหมือนการแบ่งปันส่วนตัวที่แท้จริงโดยไม่มีสัญญาณของกลยุทธ์หลอกลวงผ่านการวิเคราะห์ข่าวกรองภัยคุกคาม MCP",
    riskLevel: "ระดับความเสี่ยง",
    low: "ความเสี่ยงต่ำ - ปลอดภัย",
    hidePost: "ซ่อนรายละเอียดเนื้อหา",
    showPost: "แสดงรายละเอียดเนื้อหา",
    trustContent: "เชื่อถือเนื้อหานี้",
    whySafe: "เหตุใดจึงถือว่าปลอดภัย?",
    reasons: [
      "เนื้อหาการแบ่งปันส่วนตัวที่มีบริบทแท้จริง",
      "ไม่พบข้อเสนอหรือคำสัญญาที่ไม่สมจริง",
      "ไม่มีลิงก์ที่น่าสงสัยหรือรูปแบบการเรียกร้องให้ดำเนินการ",
      "การใช้ภาษาธรรมชาติโดยไม่มีกลยุทธ์การกดดัน",
      "ลักษณะเนื้อหาที่ผู้ใช้สร้างขึ้นอย่างแท้จริง",
    ],
    continueBrowsing: "ดำเนินการเรียกดูเว็บอย่างปลอดภัย",
  },
  fil: {
    safeContentDetected: "NAVERIFY ANG SAFE NA CONTENT",
    protectedBy: "Protektado ng mAIscam Extension",
    safeContent: "Ang content na ito ay mukhang lehitimo",
    description:
      "Gumamit ang aming mga konektadong AI agent ng OCR upang kumuha ng teksto mula sa larawang ito at hindi nakakita ng mga kahina-hinalang pattern. Ang content na ito ay mukhang tunay na personal sharing na walang mga senyales ng scam tactics sa pamamagitan ng MCP threat intelligence analysis",
    riskLevel: "Antas ng Panganib",
    low: "MABABANG PANGANIB - LIGTAS",
    hidePost: "Itago ang mga Detalye ng Content",
    showPost: "Ipakita ang mga Detalye ng Content",
    trustContent: "Pagkatiwalaan ang Content na Ito",
    whySafe: "Bakit ito tinuring na ligtas?",
    reasons: [
      "Personal sharing content na may tunay na konteksto",
      "Walang nakitang hindi makatotohanang alok o pangako",
      "Walang kahina-hinalang link o call-to-action pattern",
      "Natural na paggamit ng wika na walang pressure tactics",
      "Tunay na user-generated content characteristics",
    ],
    continueBrowsing: "Magpatuloy sa Ligtas na Pag-browse",
  },
  id: {
    safeContentDetected: "KONTEN AMAN TERVERIFIKASI",
    protectedBy: "Dilindungi oleh Ekstensi mAIscam",
    safeContent: "Konten ini tampak sah",
    description:
      "Agen AI terhubung kami menggunakan OCR untuk mengekstrak teks dari gambar ini dan tidak menemukan pola mencurigakan. Konten ini tampak seperti berbagi pribadi yang asli tanpa tanda-tanda taktik penipuan melalui analisis intelijen ancaman MCP",
    riskLevel: "Tingkat Risiko",
    low: "RISIKO RENDAH - AMAN",
    hidePost: "Sembunyikan Detail Konten",
    showPost: "Tampilkan Detail Konten",
    trustContent: "Percayai Konten Ini",
    whySafe: "Mengapa ini dianggap aman?",
    reasons: [
      "Konten berbagi pribadi dengan konteks asli",
      "Tidak ada penawaran atau janji tidak realistis yang terdeteksi",
      "Tidak ada tautan mencurigakan atau pola call-to-action",
      "Penggunaan bahasa alami tanpa taktik tekanan",
      "Karakteristik konten buatan pengguna yang autentik",
    ],
    continueBrowsing: "Lanjutkan Browsing dengan Aman",
  },
  jv: {
    safeContentDetected: "KONTEN AMAN WIS DIVERIFIKASI",
    protectedBy: "Dilindhungi déning Ékstènsi mAIscam",
    safeContent: "Konten iki katon sah",
    description:
      "Agen AI sing nyambung nggunakake OCR kanggo njupuk téks saka gambar iki lan ora nemokake pola sing curiga. Konten iki katon kaya sharing pribadi sing asli tanpa tandha-tandha taktik penipuan liwat analisis intelijèn ancaman MCP",
    riskLevel: "Tingkat Risiko",
    low: "RISIKO RENDAH - AMAN",
    hidePost: "Delikna Detail Konten",
    showPost: "Tuduhna Detail Konten",
    trustContent: "Percaya Konten Iki",
    whySafe: "Kok iki dianggep aman?",
    reasons: [
      "Konten sharing pribadi karo konteks asli",
      "Ora ana penawaran utawa janji ora realistis sing ketemu",
      "Ora ana pranala curiga utawa pola call-to-action",
      "Panggunaan basa alami tanpa taktik tekanan",
      "Karakteristik konten buatan pangguna sing otentik",
    ],
    continueBrowsing: "Terusna Browsing Kanthi Aman",
  },
  su: {
    safeContentDetected: "EUSI AMAN PARANTOS DIVERIFIKASI",
    protectedBy: "Dijaga ku Éksténsi mAIscam",
    safeContent: "Eusi ieu sigana sah",
    description:
      "Agén AI anu nyambung nganggo OCR pikeun nyokot téks tina gambar ieu sarta henteu mendakan pola anu curiga. Eusi ieu sigana sapertos ngabagi pribadi anu asli tanpa tanda-tanda taktik panipuan ngalangkungan analisis intelijén ancaman MCP",
    riskLevel: "Tingkat Risiqo",
    low: "RISIKO RENDAH - AMAN",
    hidePost: "Sumputkeun Rinci Eusi",
    showPost: "Témbongkeun Rinci Eusi",
    trustContent: "Percanten ka Eusi Ieu",
    whySafe: "Naha ieu dianggap aman?",
    reasons: [
      "Eusi ngabagi pribadi sareng kontéks asli",
      "Henteu aya tawaran atanapi jangji teu réalistis anu kapendak",
      "Henteu aya tumbu curiga atanapi pola call-to-action",
      "Pamakéan basa alami tanpa taktik tekanan",
      "Karakteristik eusi buatan pangguna anu otentik",
    ],
    continueBrowsing: "Teraskeun Browsing Kalawan Aman",
  },
  km: {
    safeContentDetected: "បានផ្ទៀងផ្ទាត់មាតិកាសុវត្ថិភាព",
    protectedBy: "បានការពារ​ដោយ​ផ្នែក​បន្ថែម mAIscam",
    safeContent: "មាតិកានេះ​ហាក់​ដូច​ជា​ស្របច្បាប់",
    description:
      "ភ្នាក់ងារ AI ដែលបានតភ្ជាប់បានប្រើ OCR ដើម្បីស្រង់អត្ថបទពីរូបភាពនេះ ហើយមិនបានរកឃើញលំនាំគួរឲ្យសង្ស័យ។ មាតិកានេះហាក់ដូចជាការចែករំលែកផ្ទាល់ខ្លួនដែលពិតប្រាកដ ដោយគ្មានសញ្ញានៃយុទ្ធសាស្ត្របោកបញ្ឆោត តាមរយៈការវិភាគព័ត៌មានអំពីភัยគ្រោះថ្នាក់ទទួលបានពី MCP",
    riskLevel: "កម្រិត​ហានិភ័យ",
    low: "ហានិភ័យ​ទាប - សុវត្ថិភាព",
    hidePost: "លាក់​ព័ត៌មាន​លម្អិត​មាតិកា",
    showPost: "បង្ហាញ​ព័ត៌មាន​លម្អិត​មាតិកា",
    trustContent: "ទុកចិត្ត​មាតិកា​នេះ",
    whySafe: "ហេតុអ្វី​បាន​ជា​ត្រូវ​បាន​គេ​ចាត់​ទុក​ថា​សុវត្ថិភាព?",
    reasons: [
      "មាតិកាចែករំលែកផ្ទាល់ខ្លួនដែលមានបរិបទពិតប្រាកដ",
      "មិនបានរកឃើញការផ្តល់ជូន ឬសន្យាមិនមានមូលដ្ឋានជាក់ស្ដែង",
      "គ្មានតំណភ្ជាប់គួរឲ្យសង្ស័យ ឬលំនាំ call-to-action",
      "ការប្រើប្រាស់ភាសាធម្មជាតិដោយគ្មានយុទ្ធសាស្ត្រសម្ពាធ",
      "លក្ខណៈនៃមាតិកាដែលបង្កើតដោយអ្នកប្រើប្រាស់ពិតប្រាកដ",
    ],
    continueBrowsing: "បន្តការរកមើលក្នុងលក្ខណៈសុវត្ថិភាព",
  },
  lo: {
    safeContentDetected: "ເນື້ອຫາປອດໄພໄດ້ຮັບການກວດສອບ",
    protectedBy: "ຖືກປົກປ້ອງໂດຍ mAIscam Extension",
    safeContent: "ເນື້ອຫານີ້ເບິ່ງຄືວ່າຖືກຕ້ອງ",
    description:
      "ເອເຈັນ AI ທີ່ເຊື່ອມຕໍ່ໄດ້ໃຊ້ OCR ເພື່ອດຶງຂໍ້ຄວາມຈາກຮູບນີ້ ແລະບໍ່ພົບແບບແຜນທີ່ນ່າສົງໄສ. ເນື້ອຫານີ້ເບິ່ງຄືວ່າເປັນການແບ່ງປັນສ່ວນຕົວທີ່ແທ້ຈິງໂດຍບໍ່ມີສັນຍານຂອງກົນລະຍຸດການຫລອກລວງ ຜ່ານການວິເຄາະຂໍ້ມູນຂ່າວກ່ຽວກັບພາຍຄຸກຄາມ MCP",
    riskLevel: "ລະດັບຄວາມສ່ຽງ",
    low: "ຄວາມສ່ຽງຕ່ຳ - ປອດໄພ",
    hidePost: "ເຊື່ອງລາຍລະອຽດເນື້ອຫາ",
    showPost: "ສະແດງລາຍລະອຽດເນື້ອຫາ",
    trustContent: "ເຊື່ອຖືເນື້ອຫານີ້",
    whySafe: "ເປັນຫຍັງຈຶ່ງຖືວ່າປອດໄພ?",
    reasons: [
      "ເນື້ອຫາການແບ່ງປັນສ່ວນຕົວທີ່ມີບໍລິບົດແທ້ຈິງ",
      "ບໍ່ພົບຂໍ້ເສນອຟເຟີຫລືຄໍາສັນຍາທີ່ບໍ່ເໝາະຈິງ",
      "ບໍ່ມີລິ້ງທີ່ນ່າສົງໄສຫຼືແບບແຜນການເອີ້ນຮ້ອງໃຫ້ດໍາເນີນການ",
      "ການໃຊ້ພາສາທໍາມະຊາດໂດຍບໍ່ມີກົນລະຍຸດຄວາມກົດດັນ",
      "ລັກສະນະຂອງເນື້ອຫາທີ່ຜູ້ໃຊ້ສ້າງຂື້ນທີ່ແທ້ຈິງ",
    ],
    continueBrowsing: "ສືບຕໍ່ການຂຸດຄົ້ນຢ່າງປອດໄພ",
  },
  my: {
    safeContentDetected: "ဘေးကင်းသော အကြောင်းအရာ စစ်ဆေးပြီး",
    protectedBy: "mAIscam Extension ဖြင့် ကာကွယ်ထားသည်",
    safeContent: "ဤအကြောင်းအရာသည် တရားဝင်ပုံရသည်",
    description:
      "ချိတ်ဆက်ထားသော AI မိတ်ဖက်များက ဤပုံမှ စာသားကို OCR ဖြင့် ထုတ်ယူပြီး စိတ်သံယောဇဉ်ပုံစံများကို မတွေ့ရှိခဲ့ပါ။ ဤအကြောင်းအရာသည် MCP အန္တရာယ်ထောက်လှမ်းချက်များမှ လိမ်လည်စည်းကမ်းများ၏ လက္ခဏာများမပါရှိသော စစ်မှန်သော ကိုယ်ရေးကိုယ်တာ မျှဝေမှုပုံရသည်",
    riskLevel: "အန္တရာယ်အဆင့်",
    low: "အန္တရာယ်နည်း - ဘေးကင်း",
    hidePost: "အကြောင်းအရာ အသေးစိတ်များ ဖျောက်ရန်",
    showPost: "အကြောင်းအရာ အသေးစိတ်များ ပြရန်",
    trustContent: "ဤအကြောင်းအရာကို ယုံကြည်ရန်",
    whySafe: "ဘာကြောင့် ဘေးကင်းသည်ဟု ယူဆရသလဲ?",
    reasons: [
      "စစ်မှန်သော အကြောင်းအရာရှိသော ကိုယ်ရေးကိုယ်တာ မျှဝေမှု",
      "မယုံကြည်ရသော ကမ်းလှမ်းချက်/ကတိများ မတွေ့ရပါ",
      "သံသယဖွယ် လင့်ခ်များ သို့မဟုတ် call-to-action ပုံစံများ မရှိပါ",
      "ဖိအားမပေးသော သဘာဝ ဘာသာစကား အသုံးပြုမှု",
      "စစ်မှန်သော အသုံးပြုသူ ဖန်တီးထားသော အကြောင်းအရာ လက္ခဏာများ",
    ],
    continueBrowsing: "ဘေးကင်းစွာ ဆက်လက် ရှာဖွေကြည့်ရန်",
  },
  ta: {
    safeContentDetected: "பாதுகாப்பான உள்ளடக்கம் சரிபார்க்கப்பட்டது",
    protectedBy: "mAIscam நீட்டிப்பால் பாதுகாக்கப்பட்டது",
    safeContent: "இந்த உள்ளடக்கம் சட்டபூர்வமானதாக தெரிகிறது",
    description:
      "எங்கள் இணைக்கப்பட்ட AI முகவர்கள் இந்த படத்தில் இருந்து OCR மூலம் உரையை எடுத்தனர் மற்றும் சந்தேகப்படும் மாதிரிகளை கண்டறியவில்லை. இந்த உள்ளடக்கம் MCP அச்சுறுத்தல் நுண்ணறிவு பகுப்பாய்வின் மூலம் மோசடி யுக்திகளின் அறிகுறிகள் இல்லாத உண்மையான தனிப்பட்ட பகிர்வாக தெரிகிறது",
    riskLevel: "அபாய நிலை",
    low: "குறைந்த அபாயம் - பாதுகாப்பான",
    hidePost: "உள்ளடக்க விவரங்களை மறைக்கவும்",
    showPost: "உள்ளடக்க விவரங்களைக் காட்டு",
    trustContent: "இந்த உள்ளடக்கத்தை நம்பவும்",
    whySafe: "இது ஏன் பாதுகாப்பானதாக கருதப்படுகிறது?",
    reasons: [
      "உண்மையான சூழலுடன் தனிப்பட்ட பகிர்வு உள்ளடக்கம்",
      "யதார்த்தமற்ற சலுகைகள் அல்லது வாக்குறுதிகள் கண்டறியப்படவில்லை",
      "சந்தேகமான இணைப்புகள் அல்லது call-to-action பேட்டர்ன்கள் இல்லை",
      "அழுத்த யுக்திகள் இல்லாத இயற்கையான மொழி பயன்பாடு",
      "உண்மையான பயனர் உருவாக்கிய உள்ளடக்க பண்புகள்",
    ],
    continueBrowsing: "தொடர்ந்து பாதுகாப்பாக உலாவுதல்",
  },
};
