// store/ExplanationData.ts

export const EmailExplanations = {
  high: {
    en: `Analysis found this email contains scam characteristics:

• Requests for personal information (account numbers, passwords)
• Uses urgent language to force immediate action
• Suspicious links not from official domain
• Unrealistic cash reward promises
• No official signature or legitimate contact information
• Sender domain does not match claimed organization`,

    ms: `Analisis mendapati e-mel ini mengandungi ciri-ciri penipuan:

• Meminta maklumat peribadi (nombor akaun, kata laluan)
• Menggunakan bahasa yang mendesak untuk tindakan segera
• Pautan yang mencurigakan bukan dari domain rasmi
• Janji hadiah wang tunai yang tidak realistik
• Tiada tandatangan rasmi atau maklumat hubungan yang sah
• Domain pengirim tidak sepadan dengan organisasi yang didakwa`,

    zh: `分析发现此电子邮件包含诈骗特征：

• 要求提供个人信息（账号、密码）
• 使用紧急语言强迫立即行动
• 可疑链接不是来自官方域名
• 不切实际的现金奖励承诺
• 没有官方签名或合法联系信息
• 发件人域名与声称的组织不匹配`,

    vi: `Phân tích cho thấy email này chứa các đặc điểm lừa đảo:

• Yêu cầu thông tin cá nhân (số tài khoản, mật khẩu)
• Ngôn ngữ khẩn cấp để ép thực hiện ngay lập tức
• Liên kết đáng ngờ không đến từ miền chính thức
• Hứa hẹn phần thưởng tiền mặt phi thực tế
• Không có chữ ký chính thức hoặc thông tin liên hệ hợp lệ
• Tên miền người gửi không khớp với tổ chức được tuyên bố`,

    th: `การวิเคราะห์พบว่าอีเมลนี้มีลักษณะของการหลอกลวง:

• ขอข้อมูลส่วนตัว (หมายเลขบัญชี รหัสผ่าน)
• ใช้ถ้อยคำเร่งด่วนเพื่อให้ผู้รับดำเนินการทันที
• ลิงก์น่าสงสัยที่ไม่ใช่โดเมนทางการ
• สัญญารางวัลเงินสดที่เกินจริง
• ไม่มีลายเซ็นหรือข้อมูลติดต่อที่ถูกต้อง
• โดเมนผู้ส่งไม่ตรงกับองค์กรที่กล่าวอ้าง`,

    fil: `Natukoy sa pagsusuri na ang email na ito ay may mga katangian ng panloloko:

• Humihingi ng personal na impormasyon (account number, password)
• Gumagamit ng pananakot o pagmamadali upang kumilos agad
• Mga kahina-hinalang link mula sa hindi opisyal na domain
• Di makatotohanang pangakong gantimpala sa pera
• Walang opisyal na lagda o tamang impormasyon ng contact
• Ang domain ng nagpadala ay hindi tugma sa sinasabing organisasyon`,

    idn: `Analisis menemukan email ini mengandung ciri-ciri penipuan:

• Meminta informasi pribadi (nomor akun, kata sandi)
• Menggunakan bahasa mendesak untuk mendorong tindakan segera
• Tautan mencurigakan yang bukan dari domain resmi
• Janji hadiah uang tunai yang tidak realistis
• Tidak ada tanda tangan resmi atau informasi kontak yang valid
• Domain pengirim tidak cocok dengan organisasi yang diklaim`,

    jv: `Asil analisis nemokake manawa email iki ngemot ciri-ciri penipuan:

• Njaluk informasi pribadi (nomer akun, sandhi)
• Migunakake basa mendesak kanggo nyurung tumindak langsung
• Pranala curiga dudu saka domain resmi
• Janji hadiah dhuwit tunai sing ora realistis
• Ora ana tanda tangan resmi utawa informasi kontak sing sah
• Domain pangirim ora cocog karo organisasi sing diklaim`,

    su: `Hasil analisis nunjukkeun yén email ieu ngandung ciri-ciri panipuan:

• Nyarita informasi pribadi (nomor akun, sandi)
• Nganggo basa nu maksa pikeun langsung ngaréspon
• Tautan curiga anu sanés tina domain resmi
• Janji ganjaran artos tunai anu henteu réalistis
• Henteu aya tapak tangan resmi atanapi informasi kontak anu sah
• Domain pangirim henteu cocog sareng organisasi anu diklaim`,

    km: `ការវិភាគបានរកឃើញថា អ៊ីមែលនេះមានលក្ខណៈសម្គាល់នៃការលួចលួង៖

• ស្នើសុំព័ត៌មានផ្ទាល់ខ្លួន (លេខគណនី ពាក្យសម្ងាត់)
• ប្រើភាសាដែលមានការបង្ខំ ឲ្យអនុវត្តជាបន្ទាន់
• តំណភ្ជាប់គួរឱ្យសង្ស័យមិនមែនមកពីដូម៉ែនផ្លូវការ
• សន្យាផ្តល់ប្រាក់រង្វាន់មិនសមហេតុផល
• គ្មានហត្ថលេខាផ្លូវការ ឬព័ត៌មានទំនាក់ទំនងត្រឹមត្រូវ
• ដូម៉ែនអ្នកផ្ញើមិនដូចនឹងអង្គភាពដែលបានអះអាង`,

    lo: `ການວິເຄາະພົບວ່າອີເມວນີ້ມີລັກສະນະການຫລອກລວງ:

• ຂໍຂໍ້ມູນສ່ວນຕົວ (ເລກບັນຊີ, ລະຫັດຜ່ານ)
• ໃຊ້ພາສາເຮົາໃຫ້ເຮັດການຢ່າງດ່ວນ
• ລິ້ງທີ່ນ່າສົງໃສທີ່ບໍ່ໄດ້ມາຈາກໂດເມນທີ່ເປັນທາງການ
• ສັນຍາວ່າຈະມີເງິນລາງວັນທີ່ບໍ່ເປັນຈິງ
• ບໍ່ມີລາຍເຊັນທາງການ ຫຼື ຂໍ້ມູນຕິດຕໍ່ທີ່ຖືກຕ້ອງ
• ໂດເມນຂອງຜູ້ສົ່ງບໍ່ກົງກັບອົງການທີ່ຖືກອ້າງ`,

    my: `ခပ်သိမ်းသောအချက်အလက်များအရ ဤအီးမေးလ်တွင် လိမ်လည်မှု လက္ခဏာများ ပါဝင်သည်-

• ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို တောင်းဆိုခြင်း (အကောင့်နံပါတ်၊ စကားဝှက်)
• ချက်ချင်းလုပ်ဆောင်ရန် စွဲဆောင်သည့်စကားများကို အသုံးပြုခြင်း
• တရားဝင်မဟုတ်သော domain မှ ဖော်ပြသည့် မသန်စွမ်းသည့်လင့်ခ်များ
• အဖြစ်မရှိနိုင်သော ငွေလက်ဆောင် များကို ကတိပေးခြင်း
• တရားဝင်လက်မှတ် သို့မဟုတ် တရားဝင်ဆက်သွယ်ရန်အချက်အလက် မပါရှိခြင်း
• အီးမေးလ်ပို့သူ၏ domain သည် အဆိုပြုအဖွဲ့အစည်းနှင့် မတူညီပါ`,

    ta: `இந்த மின்னஞ்சல் மோசடியின் லட்சணங்களை கொண்டுள்ளதாக பகுப்பாய்வு கண்டறிந்துள்ளது:

• தனிப்பட்ட தகவல்களை கோருகிறது (கணக்கு எண்கள், கடவுச்சொற்கள்)
• உடனடி நடவடிக்கைக்கு அழுத்தமாக மொழி பயன்படுத்துகிறது
• அதிகாரப்பூர்வ அல்லாத டொமைனிலிருந்து சந்தேகமான இணைப்புகள்
• யதார்த்தமற்ற பணம் பரிசு வாக்குறுதிகள்
• அதிகாரப்பூர்வ கையொப்பம் அல்லது சரியான தொடர்பு தகவல் இல்லை
• அனுப்புநரின் டொமைன் அறிவிக்கப்படும் நிறுவனத்துடன் பொருந்தவில்லை`,
  },
  medium: {
    en: `This email may be suspicious. Please be careful with:

• Requests for personal information
• Unrecognized links
• Offers that are too good to be true`,

    ms: `E-mel ini mungkin mencurigakan. Sila berhati-hati dengan:

• Permintaan maklumat peribadi
• Pautan yang tidak dikenali
• Tawaran yang terlalu baik untuk dipercayai`,

    zh: `此电子邮件可能有可疑之处。请注意：

• 个人信息请求
• 不认识的链接
• 好得不真实的优惠`,

    vi: `Email này có thể đáng ngờ. Hãy cẩn thận với:

• Yêu cầu thông tin cá nhân
• Các liên kết không rõ ràng
• Ưu đãi nghe có vẻ quá hấp dẫn`,

    th: `อีเมลนี้อาจน่าสงสัย โปรดระวัง:

• คำขอข้อมูลส่วนตัว
• ลิงก์ที่ไม่รู้จัก
• ข้อเสนอที่ดีเกินจริง`,

    fil: `Maaaring kahina-hinala ang email na ito. Mag-ingat sa:

• Mga kahilingan ng personal na impormasyon
• Mga hindi pamilyar na link
• Mga alok na mukhang sobrang ganda para maging totoo`,

    idn: `Email ini mungkin mencurigakan. Harap berhati-hati terhadap:

• Permintaan informasi pribadi
• Tautan yang tidak dikenal
• Penawaran yang terlalu bagus untuk menjadi kenyataan`,

    jv: `Email iki bisa wae curiga. Aja sembrono marang:

• Panjaluk informasi pribadi
• Tautan sing ora dikenal
• Tawaran sing ketok banget apik kanggo bener`,

    su: `Email ieu sigana curiga. Punten ati-ati kana:

• Pamundut informasi pribadi
• Tautan anu teu dikenal
• Tawaran anu katingalina kawilang hébat teuing`,

    km: `អ៊ីមែលនេះអាចជារឿង đángสงสัย។ សូមប្រុងប្រយ័ត្នជាមួយ:

• សំណើសុំព័ត៌មានផ្ទាល់ខ្លួន
• តំណភ្ជាប់មិនស្គាល់
• ការផ្ដល់ជូនមើលទៅល្អពេកដើម្បីជាការពិត`,

    lo: `ອີເມວນີ້ອາດຈະເປັນຂໍ້ຄວາມນ່າສົງໃສ. ກະລຸນາລະວັງ:

• ການຮ້ອງຂໍຂໍ້ມູນສ່ວນຕົວ
• ລິ້ງທີ່ບໍ່ຄຸ້ນເຄີຍ
• ຂໍ້ເສນທີ່ຟັງແລ້ວດູດີເກີນໄປ`,

    my: `ဤအီးမေးလ်သည် သံသယဖြစ်စေနိုင်ပါသည်။ အောက်ပါအရာများကို သတိပြုပါ:

• ကိုယ်ရေးကိုယ်တာအချက်အလက်တောင်းဆိုမှုများ
• မသိသောလင့်ခ်များ
• အလွန်အမင်းကောင်းမွန်နေသောအကြောင်းအရာများ`,

    ta: `இந்த மின்னஞ்சல் சந்தேகத்திற்குரியது ஆக இருக்கலாம். கவனமாக இருக்கவும்:

• தனிப்பட்ட தகவல்களை கோருதல்
• அடையாளம் தெரியாத இணைப்புகள்
• நிஜமாக இல்லாத அளவிற்கு நல்ல சலுகைகள்`,
  },
  low: {
    en: "This email appears safe, but always be cautious with online communications.",

    ms: "E-mel ini kelihatan selamat, tetapi sentiasa berhati-hati dengan komunikasi dalam talian.",

    zh: "此电子邮件看起来安全，但始终要对在线通信保持谨慎。",

    vi: "Email này có vẻ an toàn, nhưng bạn vẫn nên cẩn trọng khi giao tiếp trực tuyến.",

    th: "อีเมลนี้ดูปลอดภัย แต่อย่าลืมระมัดระวังในการสื่อสารออนไลน์เสมอ",

    fil: "Mukhang ligtas ang email na ito, ngunit palaging mag-ingat sa online na komunikasyon.",

    idn: "Email ini tampak aman, tetapi tetaplah berhati-hati dalam komunikasi online.",

    jv: "Email iki katon aman, nanging tetep waspada nalika komunikasi online.",

    su: "Email ieu katingalina aman, tapi tetep kudu waspada dina komunikasi online.",

    km: "អ៊ីមែលនេះហាក់ដូចជាដោយសុវត្ថិភាព ប៉ុន្តែត្រូវប្រុងប្រយ័ត្នជានិច្ចនៅពេលប្រើប្រាស់ការទំនាក់ទំនងតាមអ៊ីនធឺណិត។",

    lo: "ອີເມວນີ້ເບິ່ງຄ້າຍວ່າປອດໄພ ແຕ່ຄວນລະວັງໃນການສື່ສານຜ່ານອອນໄລນ໌ຢ່າງສະເໝີ.",

    my: "ဤအီးမေးလ်သည် ဘေးကင်းလုံခြုံသည့်အဖြစ်မြင်ရသည်၊ သို့သော် အွန်လိုင်းအကြောင်းအရာများတွင်အမြဲသတိပြုပါ။",

    ta: "இந்த மின்னஞ்சல் பாதுகாப்பாக தெரிகிறது, ஆனாலும் ஆன்லைன் தொடர்புகளில் எப்போதும் கவனமாக இருங்கள்.",
  },
} as const;

export const WebsiteExplanations = {
  en: "This website shows many warning signs of online scam.",

  ms: "Laman web ini menunjukkan banyak tanda amaran penipuan dalam talian.",

  zh: "此网站显示了许多在线诈骗的警告信号。",

  vi: "Trang web này cho thấy nhiều dấu hiệu cảnh báo của lừa đảo trực tuyến.",

  th: "เว็บไซต์นี้แสดงสัญญาณเตือนหลายอย่างของการหลอกลวงออนไลน์.",

  fil: "Ipinapakita ng website na ito ang maraming palatandaan ng online scam.",

  idn: "Situs web ini menunjukkan banyak tanda peringatan dari penipuan online.",

  jv: "Situs web iki nuduhake akeh tandha peringatan babagan penipuan online.",

  su: "Situs web ieu nunjukkeun seueur tanda peringatan ngeunaan panipuan online.",

  km: "គេហទំព័រនេះបង្ហាញសញ្ញាព្រមានជាច្រើននៃការលួចលួងតាមអ៊ីនធឺណិត។",

  lo: "ເວັບໄຊນີ້ສະແດງເຖິງສັນຍານເຕືອນຫຼາຍຢ່າງຂອງການຫລອກລວງຜ່ານອອນໄລນ໌.",

  my: "ဤဝဘ်ဆိုက်တွင် အွန်လိုင်းလိမ်လည်မှုအတွက် သတိပေးချက်များစွာတွေ့ရှိသည်။",

  ta: "இந்த இணையதளம் ஆன்லைன் மோசடியின் பல எச்சரிக்கைக் குறிப்புகளை காட்டுகிறது.",
} as const;

export type RiskLevel = keyof typeof EmailExplanations;
export type SupportedWebsiteLanguage = keyof typeof WebsiteExplanations;
export type SupportedExplanationLanguage =
  keyof (typeof EmailExplanations)["high"];
