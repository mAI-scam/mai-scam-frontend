import type { LanguageCode } from "@/data/store/Languages";

export type RiskAnalysisTranslation = {
  spamWarning: string;
  reportNotSpam: string;
  highRiskWarning: string;
  risk: string;
  high: string;
  medium: string;
  low: string;
  emailSubject: string;
  noPersonalization: string;
  enterInfo: string;
  suspiciousLinks: string;
  falseUrgency: string;
  suspiciousPromo: string;
  lackPersonalization: string;
  fraudPotential: string;
  recommendedAction: string;
  recommendedActionText: string;
  reportFraud: string;
  dismiss: string;
};

export const RiskAnalysisData: Record<LanguageCode, RiskAnalysisTranslation> = {
  en: {
    spamWarning:
      "Why is this message in spam? It is similar to messages that have been identified as spam in the past.",
    reportNotSpam: "Report not spam",
    highRiskWarning: "HIGH RISK WARNING",
    risk: "RISK",
    high: "HIGH",
    medium: "MEDIUM",
    low: "LOW",
    emailSubject:
      "The subject 'IMPORTANT: Your Account Has Been Frozen - Immediate Action Required' creates a sense of urgency, a common tactic in phishing attempts to encourage immediate action without careful consideration.",
    noPersonalization:
      "This email lacks legitimate personalization for real banking offers.",
    enterInfo:
      "Additionally, the instruction to 'enter information' is a major red flag and could be part of fraudulent practices to steal your credentials.",
    suspiciousLinks:
      "This email also contains several suspicious links that could potentially lead to malicious websites.",
    falseUrgency: "False urgency",
    suspiciousPromo: "Suspicious promotional offers",
    lackPersonalization: "Lack of personalization",
    fraudPotential: "Potential for fraudulent practices",
    recommendedAction: "Recommended Action:",
    recommendedActionText:
      "Do not interact with any links or download any attachments from this email. Mark the email as spam and delete it. If you're interested in verifying your account status, contact your bank directly through their official website or customer service to confirm.",
    reportFraud: "REPORT FRAUD",
    dismiss: "DISMISS",
  },
  ms: {
    spamWarning:
      "Mengapa mesej ini dalam spam? Ia serupa dengan mesej yang telah dikenal pasti sebagai spam pada masa lalu.",
    reportNotSpam: "Laporkan bukan spam",
    highRiskWarning: "AMARAN RISIKO TINGGI",
    risk: "RISIKO",
    high: "TINGGI",
    medium: "SEDERHANA",
    low: "RENDAH",
    emailSubject:
      "Subjek 'PENTING: Akaun Anda Telah Dibekukan - Tindakan Segera Diperlukan' mencipta rasa keperluan segera, taktik biasa dalam percubaan pancingan data untuk mendorong tindakan segera tanpa pertimbangan yang teliti.",
    noPersonalization:
      "E-mel ini tidak mempunyai personalisasi yang sah untuk tawaran perbankan yang sebenar.",
    enterInfo:
      "Selain itu, arahan untuk 'masukkan maklumat' adalah amaran besar dan boleh menjadi sebahagian daripada amalan menipu untuk mencuri kredensial anda.",
    suspiciousLinks:
      "E-mel ini juga mengandungi beberapa pautan yang mencurigakan yang berpotensi membawa ke laman web berniat jahat.",
    falseUrgency: "Keperluan palsu",
    suspiciousPromo: "Tawaran promosi yang mencurigakan",
    lackPersonalization: "Kekurangan personalisasi",
    fraudPotential: "Potensi untuk amalan menipu",
    recommendedAction: "Tindakan Yang Disyorkan:",
    recommendedActionText:
      "Jangan berinteraksi dengan mana-mana pautan atau muat turun sebarang lampiran dari e-mel ini. Tandakan e-mel sebagai spam dan padamkannya. Jika anda berminat untuk mengesahkan status akaun anda, hubungi bank anda secara langsung melalui laman web rasmi mereka atau perkhidmatan pelanggan untuk mengesahkan.",
    reportFraud: "LAPORKAN PENIPUAN",
    dismiss: "TOLAK",
  },
  zh: {
    spamWarning:
      "为什么此消息在垃圾邮件中？它与过去被识别为垃圾邮件的消息相似。",
    reportNotSpam: "报告非垃圾邮件",
    highRiskWarning: "高风险警告",
    risk: "风险",
    high: "高",
    medium: "中",
    low: "低",
    emailSubject:
      '主题"重要：您的账户已被冻结 - 需要立即采取行动"制造了紧迫感，这是网络钓鱼企图中的常见策略，鼓励立即采取行动而不仔细考虑。',
    noPersonalization: "此电子邮件缺乏真实银行优惠的合法个性化。",
    enterInfo:
      '此外，"输入信息"的指示是一个重大危险信号，可能是窃取您凭据的欺诈行为的一部分。',
    suspiciousLinks: "此电子邮件还包含几个可疑链接，可能会导致恶意网站。",
    falseUrgency: "虚假紧急性",
    suspiciousPromo: "可疑的促销优惠",
    lackPersonalization: "缺乏个性化",
    fraudPotential: "欺诈行为的可能性",
    recommendedAction: "建议采取的行动：",
    recommendedActionText:
      "不要与此电子邮件中的任何链接互动或下载任何附件。将电子邮件标记为垃圾邮件并删除。如果您有兴趣验证您的账户状态，请直接通过其官方网站或客户服务联系您的银行进行确认。",
    reportFraud: "举报欺诈",
    dismiss: "忽略",
  },
  vi: {
    spamWarning:
      "Tại sao thư này vào mục spam? Nó tương tự với những thư trước đây đã được xác định là spam.",
    reportNotSpam: "Báo cáo không phải spam",
    highRiskWarning: "CẢNH BÁO RỦI RO CAO",
    risk: "RỦI RO",
    high: "CAO",
    medium: "TRUNG BÌNH",
    low: "THẤP",
    emailSubject:
      "Tiêu đề 'QUAN TRỌNG: Tài khoản của bạn đã bị đóng băng - Cần hành động ngay lập tức' tạo cảm giác cấp bách, là chiến thuật phổ biến trong các cuộc lừa đảo nhằm thúc đẩy hành động không suy nghĩ kỹ.",
    noPersonalization:
      "Email này không có cá nhân hóa hợp lệ cho các ưu đãi ngân hàng thật.",
    enterInfo:
      "Ngoài ra, hướng dẫn 'nhập thông tin' là dấu hiệu đáng lo ngại và có thể là một phần của hành vi lừa đảo để lấy cắp thông tin đăng nhập của bạn.",
    suspiciousLinks:
      "Email này cũng chứa nhiều liên kết đáng ngờ có thể dẫn đến các trang web độc hại.",
    falseUrgency: "Cấp bách giả",
    suspiciousPromo: "Ưu đãi khuyến mãi đáng ngờ",
    lackPersonalization: "Thiếu cá nhân hóa",
    fraudPotential: "Nguy cơ gian lận",
    recommendedAction: "Hành động được đề xuất:",
    recommendedActionText:
      "Không nhấp vào liên kết hoặc tải xuống tệp đính kèm từ email này. Hãy đánh dấu là spam và xóa nó. Nếu bạn muốn xác minh tình trạng tài khoản, hãy liên hệ với ngân hàng thông qua trang web chính thức hoặc dịch vụ khách hàng.",
    reportFraud: "BÁO CÁO GIAN LẬN",
    dismiss: "BỎ QUA",
  },
  th: {
    spamWarning:
      "ทำไมข้อความนี้ถึงอยู่ในสแปม? ข้อความนี้คล้ายกับข้อความที่เคยถูกระบุว่าเป็นสแปมมาก่อน",
    reportNotSpam: "รายงานว่าไม่ใช่สแปม",
    highRiskWarning: "คำเตือนความเสี่ยงสูง",
    risk: "ความเสี่ยง",
    high: "สูง",
    medium: "ปานกลาง",
    low: "ต่ำ",
    emailSubject:
      "หัวข้อ 'สำคัญ: บัญชีของคุณถูกระงับ - ต้องดำเนินการทันที' สร้างความเร่งด่วน ซึ่งเป็นกลยุทธ์ทั่วไปในฟิชชิ่งเพื่อให้ดำเนินการโดยไม่ไตร่ตรอง",
    noPersonalization:
      "อีเมลนี้ไม่มีการปรับแต่งที่ถูกต้องสำหรับข้อเสนอของธนาคารจริง",
    enterInfo:
      "คำแนะนำให้ 'กรอกข้อมูล' เป็นสัญญาณอันตราย และอาจเป็นส่วนหนึ่งของการฉ้อโกงเพื่อขโมยข้อมูลของคุณ",
    suspiciousLinks:
      "อีเมลนี้มีลิงก์ที่น่าสงสัยหลายลิงก์ที่อาจนำไปสู่เว็บไซต์ที่เป็นอันตราย",
    falseUrgency: "ความเร่งด่วนปลอม",
    suspiciousPromo: "ข้อเสนอโปรโมชั่นน่าสงสัย",
    lackPersonalization: "ขาดการปรับแต่ง",
    fraudPotential: "มีแนวโน้มว่าเป็นการฉ้อโกง",
    recommendedAction: "คำแนะนำที่ควรทำ:",
    recommendedActionText:
      "อย่าคลิกที่ลิงก์หรือดาวน์โหลดไฟล์แนบจากอีเมลนี้ ให้ทำเครื่องหมายว่าเป็นสแปมและลบออก หากต้องการยืนยันสถานะบัญชีของคุณ โปรดติดต่อธนาคารโดยตรงผ่านเว็บไซต์ทางการหรือฝ่ายบริการลูกค้า",
    reportFraud: "รายงานการฉ้อโกง",
    dismiss: "ปิด",
  },
  fil: {
    spamWarning:
      "Bakit nasa spam ang mensaheng ito? Katulad ito ng mga mensaheng dating na-tag bilang spam.",
    reportNotSpam: "I-report na hindi spam",
    highRiskWarning: "BABALA: MATAAS NA PANGANIB",
    risk: "PANGANIB",
    high: "MATAAS",
    medium: "KATAMTAMAN",
    low: "MABABA",
    emailSubject:
      "Ang subject na 'MAHALAGA: Na-freeze ang Iyong Account - Kailangan ng Agarang Aksyon' ay lumilikha ng pagkaapurahan—isang karaniwang taktika ng phishing para mapakilos ka agad nang hindi nag-iisip.",
    noPersonalization:
      "Walang personalisasyon ang email na ito para sa lehitimong banking offer.",
    enterInfo:
      "Ang utos na 'maglagay ng impormasyon' ay senyales ng scam at maaaring bahagi ng pandaraya para kunin ang iyong kredensyal.",
    suspiciousLinks:
      "May mga kahina-hinalang link ang email na ito na maaaring magdala sa mga malisyosong website.",
    falseUrgency: "Maling pagkaapurahan",
    suspiciousPromo: "Kahina-hinalang promosyon",
    lackPersonalization: "Walang personalisasyon",
    fraudPotential: "Posibilidad ng pandaraya",
    recommendedAction: "Inirerekomendang Aksyon:",
    recommendedActionText:
      "Huwag mag-click sa kahit anong link o mag-download ng attachment mula sa email na ito. I-mark ito bilang spam at i-delete. Kung gusto mong kumpirmahin ang status ng account mo, kontakin ang bangko mo sa opisyal na website o customer service.",
    reportFraud: "I-REPORT ANG PANLLOLOKO",
    dismiss: "ISARA",
  },
  id: {
    spamWarning:
      "Mengapa pesan ini masuk spam? Ini mirip dengan pesan yang sebelumnya telah diidentifikasi sebagai spam.",
    reportNotSpam: "Laporkan bukan spam",
    highRiskWarning: "PERINGATAN RISIKO TINGGI",
    risk: "RISIKO",
    high: "TINGGI",
    medium: "SEDANG",
    low: "RENDAH",
    emailSubject:
      "Subjek 'PENTING: Akun Anda Telah Dibekukan - Tindakan Segera Diperlukan' menciptakan rasa urgensi—taktik umum dalam phishing untuk mendorong tindakan cepat tanpa berpikir panjang.",
    noPersonalization:
      "Email ini tidak memiliki personalisasi yang sah untuk penawaran perbankan asli.",
    enterInfo:
      "Instruksi untuk 'masukkan informasi' adalah tanda bahaya dan bisa menjadi bagian dari praktik penipuan untuk mencuri kredensial Anda.",
    suspiciousLinks:
      "Email ini juga berisi beberapa tautan mencurigakan yang bisa mengarah ke situs web berbahaya.",
    falseUrgency: "Urgensi palsu",
    suspiciousPromo: "Promo mencurigakan",
    lackPersonalization: "Kurangnya personalisasi",
    fraudPotential: "Potensi penipuan",
    recommendedAction: "Tindakan yang Disarankan:",
    recommendedActionText:
      "Jangan klik tautan atau unduh lampiran apa pun dari email ini. Tandai sebagai spam dan hapus. Jika ingin memverifikasi status akun Anda, hubungi bank Anda langsung melalui situs resmi atau layanan pelanggan.",
    reportFraud: "LAPORKAN PENIPUAN",
    dismiss: "TUTUP",
  },
  jv: {
    spamWarning:
      "Kenapa pesen iki mlebu spam? Iki padha karo pesen sing wis diidentifikasi minangka spam sadurunge.",
    reportNotSpam: "Laporke dudu spam",
    highRiskWarning: "PERINGATAN RISIKO TINGGI",
    risk: "RISIKO",
    high: "DHUWUR",
    medium: "SEDENG",
    low: "ANDAH",
    emailSubject:
      "Judhul 'PENTING: Akun Sampeyan Wis Dibekukan - Tumindak Cepet Dibutuhake' nggawe rasa keterpaksaan, taktik umum ing phishing kanggo nyurung tumindak tanpa mikir luwih dhisik.",
    noPersonalization:
      "Email iki ora duwe personalisasi sing sah kanggo tawaran bank sing asli.",
    enterInfo:
      "Pitulungan kanggo 'lebokake informasi' minangka pratandha abang lan bisa dadi bagian saka praktik penipuan kanggo nyolong kredensial sampeyan.",
    suspiciousLinks:
      "Email iki uga ngemot pranala mencurigakan sing bisa ngarahake menyang situs berbahaya.",
    falseUrgency: "Keterpaksaan palsu",
    suspiciousPromo: "Promo sing mencurigakan",
    lackPersonalization: "Kurangé personalisasi",
    fraudPotential: "Potensi penipuan",
    recommendedAction: "Tindakan sing Dianjurake:",
    recommendedActionText:
      "Aja klik pranala utawa undhuh lampiran saka email iki. Tandhani minangka spam lan busak. Yen sampeyan pengin mriksa status akun, hubungi bank liwat situs web resmi utawa layanan pelanggan.",
    reportFraud: "LAPORKAN PENIPUAN",
    dismiss: "TUTUP",
  },
  su: {
    spamWarning:
      "Naha seratan ieu asup kana spam? Ieu sarua jeung seratan nu geus kapanggih spam saméméhna.",
    reportNotSpam: "Laporan lain spam",
    highRiskWarning: "PERINGATAN RESIKO TINGGI",
    risk: "RESIKO",
    high: "LILU",
    medium: "SEDENG",
    low: "HANDA",
    emailSubject:
      "Jejer 'PENTING: Akun Anjeun Geus Diblokir - Aksi Gancang Diperyogikeun' nyiptakeun rasa darurat, hiji taktik umum dina phishing pikeun maksakeun aksi gancang tanpa pamikiran.",
    noPersonalization:
      "Email ieu henteu ngagaduhan personalisasi anu sah pikeun tawaran bank anu asli.",
    enterInfo:
      "Pituduh pikeun 'lebetkeun inpormasi' mangrupakeun tanda bahaya sarta bisa jadi bagian tina panipuan pikeun nyolong kredensial anjeun.",
    suspiciousLinks:
      "Email ieu ogé ngandung sababaraha tautan curiga anu tiasa nyababkeun ka situs web jahat.",
    falseUrgency: "Darurat palsu",
    suspiciousPromo: "Promo curiga",
    lackPersonalization: "Kurang personalisasi",
    fraudPotential: "Potensi panipuan",
    recommendedAction: "Tindakan Disarankeun:",
    recommendedActionText:
      "Ulah klik kana tautan atanapi unduh lampiran naon waé tina email ieu. Tandaan salaku spam teras hapus. Upami anjeun hoyong verifikasi status akun anjeun, hubungi bank langsung liwat situs resmi atanapi layanan palanggan.",
    reportFraud: "LAPORKAN PENIPUAN",
    dismiss: "TUTUP",
  },
  km: {
    spamWarning:
      "ហេតុអ្វីបានជាសារនេះស្ថិតក្នុងសំបុត្រឥតបានការ? វាស្រដៀងនឹងសារដែលត្រូវបានកំណត់ថាជាស្ពាមពីមុន។",
    reportNotSpam: "រាយការណ៍ថាមិនមែនស្ពាមទេ",
    highRiskWarning: "ការព្រមានអំពីហានិភ័យខ្ពស់",
    risk: "ហានិភ័យ",
    high: "ខ្ពស់",
    medium: "មធ្យម",
    low: "ទាប",
    emailSubject:
      "ចំណងជើង 'សំខាន់៖ គណនីរបស់អ្នកត្រូវបានបង្ហាញថាធ្លាក់ស្ថានភាព - ត្រូវការដំណើរការបន្ទាន់' បង្កើតអារម្មណ៍ប្រញាប់ប្រញាល់—ជាយុទ្ធសាស្ត្រធម្មតានៃការបោកបញ្ឆោតដើម្បីជម្រុញឱ្យមានប្រតិបត្តិការដោយមិនគិត។",
    noPersonalization:
      "អ៊ីមែលនេះខ្វះការផ្តល់ព័ត៌មានផ្ទាល់ខ្លួនដែលត្រឹមត្រូវសម្រាប់ការផ្ដល់ជូនពីធនាគារ។",
    enterInfo:
      "ការណែនាំឱ្យ 'បញ្ចូលព័ត៌មាន' ជាសញ្ញាអាសន្ន និងអាចជាផ្នែកមួយនៃការលួចយកព័ត៌មាន។",
    suspiciousLinks:
      "អ៊ីមែលនេះមានតំណភ្ជាប់គួរសង្ស័យច្រើនដែលអាចនាំទៅកាន់គេហទំព័រដែលមានគ្រោះថ្នាក់។",
    falseUrgency: "អាសន្នក្លែងក្លាយ",
    suspiciousPromo: "ការផ្ដល់ជូនគួរសង្ស័យ",
    lackPersonalization: "ខ្វះការផ្ទាល់ខ្លួន",
    fraudPotential: "សក្ដានុពលក្នុងការបោកបញ្ឆោត",
    recommendedAction: "សកម្មភាពដែលផ្ដល់អនុសាសន៍៖",
    recommendedActionText:
      "កុំចុចលើតំណភ្ជាប់ណាមួយ ឬទាញយកឯកសារភ្ជាប់ពីអ៊ីមែលនេះ។ សម្គាល់ថាជាស្ពាម និងលុបវាចោល។ ប្រសិនបើអ្នកចង់ពិនិត្យស្ថានភាពគណនី សូមទំនាក់ទំនងធនាគាររបស់អ្នកតាមគេហទំព័រផ្លូវការឬសេវាអតិថិជន។",
    reportFraud: "រាយការណ៍ការបោកបញ្ឆោត",
    dismiss: "បដិសេធ",
  },
  lo: {
    spamWarning:
      "ເປັນຫຍັງອີເມວນີ້ຈຶ່ງຢູ່ໃນກ່ອງຈົດໝາຍຂີ້ເຫຍື້ອ? ເນື່ອງຈາກມັນຄ້າຍຄືກັບອີເມວທີ່ຖືກລາຍງານວ່າເປັນສະແປມ",
    reportNotSpam: "ແຈ້ງວ່າບໍ່ແມ່ນສະແປມ",
    highRiskWarning: "ຄຳເຕືອນຄວາມສ່ຽງສູງ",
    risk: "ຄວາມສ່ຽງ",
    high: "ສູງ",
    medium: "ປານກາງ",
    low: "ຕ່ຳ",
    emailSubject:
      "ຫົວຂໍ້ 'ສຳຄັນ: ບັນຊີຂອງທ່ານຖືກລະງັບ - ຈຳເປັນຕ້ອງດຳເນີນການດ່ວນ' ສ້າງຄວາມຮີບຮ້ອນ ຊຶ່ງແມ່ນກົດລະບຽບທົ່ວໄປໃນການຫຼອກລວງ",
    noPersonalization:
      "ອີເມວນີ້ບໍ່ມີຂໍ້ມູນສ່ວນບຸກຄົນ ຊຶ່ງເປັນສິ່ງທີ່ຂາດໄປໃນອີເມວຈາກທະນາຄານຈິງ",
    enterInfo:
      "ການໃຫ້ປ້ອນຂໍ້ມູນເປັນສັນຍານຂອງການພະຍາຍາມຫຼອກລວງເພື່ອໂຈະລະຫັດຜ່ານຂອງທ່ານ",
    suspiciousLinks: "ອີເມວນີ້ມີລິ້ງໜ້າສົງໄສຈຳນວນຫຼາຍ",
    falseUrgency: "ສ້າງຄວາມຮີບຮ້ອນປອມ",
    suspiciousPromo: "ໂປຣໂມຊັ່ນນ່າສົງໄສ",
    lackPersonalization: "ຂາດການປັບໃຫ້ເຂົ້າກັບບຸກຄົນ",
    fraudPotential: "ອາດເປັນການທຸຈິລິດ",
    recommendedAction: "ການກະທຳທີ່ແນະນຳ:",
    recommendedActionText:
      "ຢ່າຄລິກລິ້ງໃດໆ ຫຼືດາວໂຫຼດໄຟລ໌ແນບ. ໃຫ້ລາຍງານວ່າແມ່ນສະແປມ ແລະລົບອອກ. ຖ້າທ່ານຈະກວດສອບບັນຊີ ກະລຸນາເຂົ້າໄປທີ່ເວັບໄຊທະນາຄານຢ່າງເປັນທາງການ.",
    reportFraud: "ແຈ້ງການຫຼອກລວງ",
    dismiss: "ປິດ",
  },
  my: {
    spamWarning:
      "ဤမက်ဆေ့ခ်ျသည်ဘာကြောင့် spam folder ထဲတွင်ရှိနေသနည်း? ယင်းသည် ယခင် spam မက်ဆေ့ခ်ျများနှင့် ဆင်တူသဖြင့်ဖြစ်သည်။",
    reportNotSpam: "Spam မဟုတ်ကြောင်းรายงานမည်",
    highRiskWarning: "အန္တရာယ်ကြီးမားမှု သတိပေးချက်",
    risk: "အန္တရာယ်",
    high: "မြင့်မားသည်",
    medium: "အလယ်အလတ်",
    low: "နိမ့်သည်",
    emailSubject:
      "'အရေးကြီးသည် - သင့်အကောင့်ကို ရပ်ဆိုင်းပြီးဖြစ်ပါသည်' ဟုခေါင်းစဉ်က အရေးပေါ်တုံ့ပြန်မှုကို ဖြစ်ပေါ်စေပြီး၊ သတိမပြုဘဲ တုန့်ပြန်အောင် ဖြစ်စေသော phishing နည်းလမ်းတစ်ခုဖြစ်သည်။",
    noPersonalization:
      "ဤအီးမေးလ်တွင် တကယ်သောဘဏ်လုပ်ငန်းများအတွက် တစ်ဦးချင်းသတ်မှတ်ချက် မပါဝင်ပါ။",
    enterInfo:
      "သတင်းအချက်အလက်များထည့်ရန်ဖော်ပြချက်သည် သင့် login အချက်အလက်များကိုလိမ်လည်ဖော်ထုတ်ရန် ရည်ရွယ်မှုဖြစ်နိုင်ပါသည်။",
    suspiciousLinks: "ဤအီးမေးလ်တွင် သံသယရှိသော လင့်ခ်အများအပြား ပါဝင်ပါသည်။",
    falseUrgency: "အရေးပေါ်မှုအတု",
    suspiciousPromo: "သံသယရှိသော ပရိုမိုးရှင်း",
    lackPersonalization: "တစ်ဦးချင်းအတွက် မသင့်လျော်သောဖော်ပြချက်",
    fraudPotential: "လိမ်လည်မှု ဖြစ်နိုင်ခြေ",
    recommendedAction: "အကြံပြုလုပ်ဆောင်ရန်:",
    recommendedActionText:
      "ဤအီးမေးလ်တွင်ပါဝင်သော လင့်ခ်များကို မနှိပ်ပါနှင့်၊ attachment များကိုလည်း မဒေါင်းလုပ်ပါနှင့်။ Spam ဟုသတ်မှတ်ပြီး ဖျက်ပါ။ သင့်အကောင့်အခြေအနေကိုစစ်ဆေးလိုပါက၊ သင့်ဘဏ်၏ တရားဝင်ဝက်ဘ်ဆိုဒ် သို့မဟုတ် ဖောက်သည်ဝန်ဆောင်မှုအဖွဲ့အား တိုက်ရိုက်ဆက်သွယ်ပါ။",
    reportFraud: "လိမ်လည်မှုကို တိုင်ကြားမည်",
    dismiss: "ပယ်ဖျက်မည်",
  },

  ta: {
    spamWarning:
      "இந்த மின்னஞ்சல் ஏன் அஞ்சல் அழுக்கு பெட்டியில் உள்ளது? இது முந்தைய ஸ்பேம் என அடையாளம் காணப்பட்ட மின்னஞ்சல்களுக்கு ஒத்துள்ளது.",
    reportNotSpam: "இது ஸ்பேம் அல்ல என்று அறிவிக்கவும்",
    highRiskWarning: "அதிக அபாய எச்சரிக்கை",
    risk: "அபாயம்",
    high: "அதிகம்",
    medium: "நடுத்தர",
    low: "குறைவான",
    emailSubject:
      "'முக்கியம்: உங்கள் கணக்கு முடக்கப்பட்டுள்ளது - உடனடி நடவடிக்கை தேவை' என்ற தலைப்பு பயத்தை ஏற்படுத்துகிறது. இது மோசடி மின்னஞ்சல்களில் பொதுவாக காணப்படும் நுண்ணறிவு முறையாகும்.",
    noPersonalization:
      "இந்த மின்னஞ்சலில் தனிப்பயன் விவரங்கள் இல்லை, இது உண்மையான வங்கிச் சேவையில் வழக்கமாக காணப்படும்.",
    enterInfo:
      "தகவல்களை உள்ளிடுமாறு கூறுவது உங்கள் நுழைவு விபரங்களை திருடும் மோசடி முயற்சிக்கு எச்சரிக்கையாக இருக்கலாம்.",
    suspiciousLinks:
      "இந்த மின்னஞ்சலில் சந்தேகமான இணைப்புகள் உள்ளன, அவை தீங்கிழைக்கும் தளங்களுக்கு வழிகாட்டக்கூடும்.",
    falseUrgency: "பொய்யான அவசரத்தன்மை உருவாக்கப்படுகிறது",
    suspiciousPromo: "சந்தேகமான விளம்பரம்",
    lackPersonalization: "தனிப்பயன் செய்தி இல்லை",
    fraudPotential: "மோசடி வாய்ப்பு உள்ளது",
    recommendedAction: "பரிந்துரைக்கப்படும் நடவடிக்கை:",
    recommendedActionText:
      "இந்த மின்னஞ்சலில் உள்ள எந்தவொரு இணைப்புகளிலும் கிளிக் செய்யவேண்டாம் அல்லது இணைப்புகளை பதிவிறக்கவேண்டாம். ஸ்பேமாக குறிக்கவும் மற்றும் அதை நீக்கவும். உங்கள் கணக்கை சரிபார்க்க விரும்பினால், உங்கள் வங்கியின் உத்தியோகபூர்வ இணையதளத்தை நேரடியாக அணுகவும்.",
    reportFraud: "மோசடியை புகாரளிக்கவும்",
    dismiss: "மறுக்கவும்",
  },
};
