import type { LanguageCode } from "@/data/store/Languages";

export type FacebookScamBlockTranslation = {
  scamDetected: string;
  protectedBy: string;
  warning: string;
  description: string;
  riskLevel: string;
  high: string;
  hidePost: string;
  showPost: string;
  reportScam: string;
  whyBlocked: string;
  reasons: string[];
};

export const FacebookScamBlockData: Record<
  LanguageCode,
  FacebookScamBlockTranslation
> = {
  en: {
    scamDetected: "SCAM POST DETECTED",
    protectedBy: "Protected by mAIscam Extension",
    warning: "This post contains scam content",
    description:
      "Our connected AI agents used OCR to extract text from this image and detected suspicious patterns that match known scam tactics through MCP threat intelligence",
    riskLevel: "Risk Level",
    high: "HIGH RISK",
    hidePost: "Hide This Post",
    showPost: "Show Post (I Understand the Risk)",
    reportScam: "Report Scam",
    whyBlocked: "Why was this blocked?",
    reasons: [
      "Fake government announcements",
      "Unrealistic offers or promises",
      "Requests for personal information",
      "Suspicious links or domains",
      "Impersonation of legitimate brands",
    ],
  },
  ms: {
    scamDetected: "POST PENIPUAN DIKESAN",
    protectedBy: "Dilindungi oleh Sambungan mAIscam",
    warning: "Post ini mengandungi kandungan penipuan",
    description:
      "Agen AI terhubung kami menggunakan OCR untuk mengekstrak teks dari imej ini dan mengesan corak mencurigakan yang sepadan dengan taktik penipuan melalui intelligence ancaman MCP",
    riskLevel: "Tahap Risiko",
    high: "RISIKO TINGGI",
    hidePost: "Sembunyikan Post Ini",
    showPost: "Tunjuk Post (Saya Faham Risikonya)",
    reportScam: "Laporkan Penipuan",
    whyBlocked: "Mengapa ini disekat?",
    reasons: [
      "Pengumuman kerajaan palsu",
      "Tawaran atau janji yang tidak realistik",
      "Permintaan maklumat peribadi",
      "Pautan atau domain yang mencurigakan",
      "Penyamaran jenama yang sah",
    ],
  },
  zh: {
    scamDetected: "检测到诈骗帖子",
    protectedBy: "受 mAIscam 扩展保护",
    warning: "此帖子包含诈骗内容",
    description:
      "我们的连接AI代理使用OCR从此图像中提取文本，并通过MCP威胁情报检测到与已知诈骗策略相匹配的可疑模式",
    riskLevel: "风险等级",
    high: "高风险",
    hidePost: "隐藏此帖子",
    showPost: "显示帖子（我了解风险）",
    reportScam: "举报诈骗",
    whyBlocked: "为什么被阻止？",
    reasons: [
      "虚假政府公告",
      "不切实际的优惠或承诺",
      "个人信息请求",
      "可疑链接或域名",
      "冒充合法品牌",
    ],
  },
  vi: {
    scamDetected: "PHÁT HIỆN BÀI ĐĂNG LỪA ĐẢO",
    protectedBy: "Được bảo vệ bởi tiện ích mAIscam",
    warning: "Bài đăng này chứa nội dung lừa đảo",
    description:
      "Các tác nhân AI được kết nối đã dùng OCR để trích xuất văn bản từ hình ảnh này và phát hiện mẫu đáng ngờ trùng khớp với các chiêu trò lừa đảo đã biết thông qua tình báo mối đe dọa MCP",
    riskLevel: "Mức độ rủi ro",
    high: "RỦI RO CAO",
    hidePost: "Ẩn bài viết này",
    showPost: "Hiện bài (Tôi hiểu rủi ro)",
    reportScam: "Báo cáo lừa đảo",
    whyBlocked: "Vì sao bị chặn?",
    reasons: [
      "Thông báo giả mạo của cơ quan nhà nước",
      "Ưu đãi/ lời hứa không thực tế",
      "Yêu cầu cung cấp thông tin cá nhân",
      "Liên kết hoặc tên miền đáng ngờ",
      "Giả mạo thương hiệu hợp pháp",
    ],
  },
  th: {
    scamDetected: "ตรวจพบโพสต์หลอกลวง",
    protectedBy: "ป้องกันโดยส่วนขยาย mAIscam",
    warning: "โพสต์นี้มีเนื้อหาหลอกลวง",
    description:
      "ตัวแทน AI ที่เชื่อมต่อของเราใช้ OCR เพื่อดึงข้อความจากภาพนี้ และตรวจพบรูปแบบที่น่าสงสัยซึ่งสอดคล้องกับกลยุทธ์หลอกลวงที่รู้จัก ผ่านข่าวกรองภัยคุกคามของ MCP",
    riskLevel: "ระดับความเสี่ยง",
    high: "ความเสี่ยงสูง",
    hidePost: "ซ่อนโพสต์นี้",
    showPost: "แสดงโพสต์ (ฉันเข้าใจความเสี่ยง)",
    reportScam: "รายงานการหลอกลวง",
    whyBlocked: "เหตุใดจึงถูกบล็อก?",
    reasons: [
      "ประกาศจากหน่วยงานรัฐปลอม",
      "ข้อเสนอหรือคำสัญญาเกินจริง",
      "ขอข้อมูลส่วนบุคคล",
      "ลิงก์หรือโดเมนน่าสงสัย",
      "ปลอมแปลงเลียนแบบแบรนด์ถูกกฎหมาย",
    ],
  },
  fil: {
    scamDetected: "NATUKLASANG SCAM NA POST",
    protectedBy: "Protektado ng mAIscam Extension",
    warning: "Ang post na ito ay may nilalamang panloloko",
    description:
      "Gumamit ang aming mga konektadong AI agent ng OCR upang kumuha ng teksto mula sa larawang ito at nakakita ng mga kahina-hinalang pattern na tugma sa mga kilalang taktika ng scam sa pamamagitan ng MCP threat intelligence",
    riskLevel: "Antas ng Panganib",
    high: "MATAAS NA PANGANIB",
    hidePost: "Itago ang Post na Ito",
    showPost: "Ipakita ang Post (Naiintindihan ko ang Panganib)",
    reportScam: "I-report ang Scam",
    whyBlocked: "Bakit ito na-block?",
    reasons: [
      "Pekeng anunsyo ng gobyerno",
      "Hindi makatotohanang alok o pangako",
      "Hinihinging personal na impormasyon",
      "Kahina-hinalang link o domain",
      "Pagpapanggap bilang lehitimong brand",
    ],
  },
  id: {
    scamDetected: "POSTINGAN PENIPUAN TERDETEKSI",
    protectedBy: "Dilindungi oleh Ekstensi mAIscam",
    warning: "Postingan ini berisi konten penipuan",
    description:
      "Agen AI terhubung kami menggunakan OCR untuk mengekstrak teks dari gambar ini dan mendeteksi pola mencurigakan yang cocok dengan taktik penipuan yang sudah dikenal melalui intelijen ancaman MCP",
    riskLevel: "Tingkat Risiko",
    high: "RISIKO TINGGI",
    hidePost: "Sembunyikan Postingan Ini",
    showPost: "Tampilkan Postingan (Saya Paham Risikonya)",
    reportScam: "Laporkan Penipuan",
    whyBlocked: "Mengapa ini diblokir?",
    reasons: [
      "Pengumuman pemerintah palsu",
      "Penawaran atau janji yang tidak realistis",
      "Permintaan informasi pribadi",
      "Tautan atau domain mencurigakan",
      "Penyamaran merek yang sah",
    ],
  },
  jv: {
    scamDetected: "KIRIMAN APUS-APUS KETEMU",
    protectedBy: "Dilindhungi déning Ékstènsi mAIscam",
    warning: "Kiriman iki ngemot isi apus-apus",
    description:
      "Agen AI sing nyambung nggunakake OCR kanggo njupuk téks saka gambar iki lan ndeteksi pola sing nyerempet curiga sing padha karo taktik apus-apus sing wis dikenal liwat intelijèn ancaman MCP",
    riskLevel: "Tingkat Risiko",
    high: "RISIKO DHUWUR",
    hidePost: "Delikna Kiriman Iki",
    showPost: "Tuduhna Kiriman (Aku Ngerti Risikone)",
    reportScam: "Laporke Apus-apus",
    whyBlocked: "Kok iki diblokir?",
    reasons: [
      "Pangumuman pamaréntah palsu",
      "Penawaran utawa janji ora nyata",
      "Panyuwunan informasi pribadhi",
      "Pranala utawa domain sing curiga",
      "Niru mérek sing sah",
    ],
  },
  su: {
    scamDetected: "KAPANGGIH POSTINGAN PANIPUAN",
    protectedBy: "Dijaga ku Éksténsi mAIscam",
    warning: "Ieu postingan ngandung eusi panipuan",
    description:
      "Agén AI anu nyambung nganggo OCR pikeun nyokot téks tina gambar ieu sarta ngadeteksi pola anu curiga anu sarua jeung taktik panipuan anu parantos dipikawanoh ngalangkungan intelijén ancaman MCP",
    riskLevel: "Tingkat Risiqo",
    high: "RISIKO LODONG",
    hidePost: "Sumputkeun Postingan Ieu",
    showPost: "Témbongkeun Postingan (Abdi Ngartos Risikona)",
    reportScam: "Laporkeun Panipuan",
    whyBlocked: "Naha ieu diblokir?",
    reasons: [
      "Pengumuman pamaréntah palsu",
      "Tawaran atanapi jangji anu teu réalistis",
      "Pénta inpormasi pribadi",
      "Tumbu atanapi domain anu curiga",
      "Nyamur mérek anu sah",
    ],
  },
  km: {
    scamDetected: "បានរកឃើញប្រកាសបោកបញ្ឆោត",
    protectedBy: "បានការពារ​ដោយ​ផ្នែក​បន្ថែម mAIscam",
    warning: "ប្រកាសនេះ​មាន​មាតិកា​បោកបញ្ឆោត",
    description:
      "ភ្នាក់ងារ AI ដែលបានតភ្ជាប់បានប្រើ OCR ដើម្បីស្រង់អត្ថបទពីរូបភាពនេះ ហើយបានរកឃើញលំនាំគួរឲ្យសង្ស័យដែលផ្គូផ្គងនឹងយុទ្ធសាស្ត្របោកបញ្ឆោតដែលគេស្គាល់ តាមរយៈព័ត៌មានអំពីภัยគ្រោះថ្នាក់ទទួលបានពី MCP",
    riskLevel: "កម្រិត​ហានិភ័យ",
    high: "ហានិភ័យ​ខ្ពស់",
    hidePost: "លាក់​ប្រកាស​នេះ",
    showPost: "បង្ហាញ​ប្រកាស (ខ្ញុំ​យល់​អំពី​ហានិភ័យ)",
    reportScam: "រាយការណ៍​បោកបញ្ឆោត",
    whyBlocked: "ហេតុអ្វី​បាន​ត្រូវ​បិទទប់?",
    reasons: [
      "សេចក្តីប្រកាសរដ្ឋាភិបាល​ក្លែងក្លាយ",
      "ការផ្តល់ជូន ឬសន្យាមិនមានមូលដ្ឋានជាក់ស្ដែង",
      "ស្នើសុំព័ត៌មានផ្ទាល់ខ្លួន",
      "តំណភ្ជាប់ ឬដូម៉ែនគួរឲ្យសង្ស័យ",
      "ការក្លែងធ្វើជាយីហោស្របច្បាប់",
    ],
  },
  lo: {
    scamDetected: "ກວດພົບໂພສຫລອກລວງ",
    protectedBy: "ຖືກປົກປ້ອງໂດຍ mAIscam Extension",
    warning: "ໂພສນີ້ມີເນື້ອຫາຫລອກລວງ",
    description:
      "ເອເຈັນ AI ທີ່ເຊື່ອມຕໍ່ໄດ້ໃຊ້ OCR ເພື່ອດຶງຂໍ້ຄວາມຈາກຮູບນີ້ ແລະກວດພົບແບບແຜນທີ່ນ່າສົງໄສທີ່ສອດຄ່ອງກັບກົນລະຍຸດການຫລອກລວງທີ່ຮູ້ຈັກ ຜ່ານຂໍ້ມູນຂ່າວກ່ຽວກັບພາຍຄຸກຄາມ MCP",
    riskLevel: "ລະດັບຄວາມສ່ຽງ",
    high: "ຄວາມສ່ຽງສູງ",
    hidePost: "ເຊື່ອງໂພສນີ້",
    showPost: "ສະແດງໂພສ (ຂ້ອຍເຂົ້າໃຈຄວາມສ່ຽງ)",
    reportScam: "ແຈ້ງການຫລອກລວງ",
    whyBlocked: "ເປັນຫຍັງຈຶ່ງຖືກບລັອກ?",
    reasons: [
      "ປະກາດຈາກລັດຖະບານປອມ",
      "ຂໍ້ເສນອຟເຟີຫລືຄໍາສັນຍາທີ່ບໍ່ເໝາະຈິງ",
      "ຮ້ອງຂໍຂໍ້ມູນສ່ວນຕົວ",
      "ລິ້ງ ຫລືໂດເມນທີ່ນ່າສົງໄສ",
      "ປອມແປງເປັນຍີ່ຫໍ້ຖືກກົດໝາຍ",
    ],
  },
  my: {
    scamDetected: "လိမ်လည်မှု ပို့စ်ကို တွေ့ရှိခဲ့သည်",
    protectedBy: "mAIscam Extension ဖြင့် ကာကွယ်ထားသည်",
    warning: "ဤပို့စ်တွင် လိမ်လည်မှု အကြောင်းအရာ ပါရှိသည်",
    description:
      "ချိတ်ဆက်ထားသော AI မိတ်ဖက်များက ဤပုံမှ စာသားကို OCR ဖြင့် ထုတ်ယူပြီး MCP အန္တရာယ်ထောက်လှမ်းချက်များအရ လူသိများသော လိမ်လည်စည်းကမ်းများနှင့် ကိုက်ညီသည့် စိတ်သံယောဇဉ်ပုံစံများကို တွေ့ရှိခဲ့သည်",
    riskLevel: "အန္တရာယ်အဆင့်",
    high: "အန္တရာယ် မြင့်",
    hidePost: "ဤပို့စ်ကို ဖျောက်ရန်",
    showPost: "ပို့စ် ပြရန် (အန္တရာယ်ကို နားလည်ထားသည်)",
    reportScam: "လိမ်လည်မှု တိုင်ကြားရန်",
    whyBlocked: "ဘာကြောင့် ပိတ်ထားသလဲ?",
    reasons: [
      "အစိုးရ ကြေညာချက် အတု",
      "မယုံကြည်ရသော ကမ်းလှမ်းချက်/ကတိများ",
      "ကိုယ်ရေးကိုယ်တာ အချက်အလက် တောင်းဆိုမှု",
      "ရှုပ်ထွေးစိတ်စည်းစိတ်ဖြာဖွယ် လင့်ခ် သို့မဟုတ် ဒိုမိန်းများ",
      "တရားဝင် ဘရန်းဒ်များကို တုနိမိတ်လုပ်ခြင်း",
    ],
  },
  ta: {
    scamDetected: "மோசடி பதிவை கண்டறிந்தோம்",
    protectedBy: "mAIscam நீட்டிப்பால் பாதுகாக்கப்பட்டது",
    warning: "இந்த பதிவில் மோசடி உள்ளடக்கம் உள்ளது",
    description:
      "எங்கள் இணைக்கப்பட்ட AI முகவர்கள் இந்த படத்தில் இருந்து OCR மூலம் உரையை எடுத்தனர் மற்றும் MCP அச்சுறுத்தல் நுண்ணறிவின் மூலம், அறிந்த மோசடி யுக்திகளுடன் பொருந்தும் சந்தேகப்படும் மாதிரிகளை கண்டறிந்தனர்",
    riskLevel: "அபாய நிலை",
    high: "உயர் அபாயம்",
    hidePost: "இந்த பதிவை மறைக்கவும்",
    showPost: "பதிவைக் காட்டு (அபாயத்தை நான் புரிந்துள்ளேன்)",
    reportScam: "மோசடியை புகாரளிக்கவும்",
    whyBlocked: "ஏன் இது தடுக்கப்பட்டது?",
    reasons: [
      "போலி அரசு அறிவிப்புகள்",
      "யதார்த்தமற்ற சலுகைகள் அல்லது வாக்குறுதிகள்",
      "தனிப்பட்ட தகவல் கோரிக்கைகள்",
      "சந்தேகமான இணைப்புகள் அல்லது டொமைன்கள்",
      "சட்டபூர்வமான பிராண்ட்களைப் பின்பற்றும் போலிநடிப்பு",
    ],
  },
};
