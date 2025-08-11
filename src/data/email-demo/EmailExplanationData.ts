// store/ExplanationData.ts

export const EmailExplanations = {
  high: {
    short: {
      en: `This email contains multiple scam indicators including requests for personal information, urgent language, and suspicious links.`,

      ms: `E-mel ini mengandungi beberapa petanda penipuan termasuk permintaan maklumat peribadi, bahasa mendesak, dan pautan mencurigakan.`,

      zh: `此电子邮件包含多个诈骗指标，包括索取个人信息、紧急语言和可疑链接。`,

      vi: `Email này chứa nhiều dấu hiệu lừa đảo bao gồm yêu cầu thông tin cá nhân, ngôn ngữ khẩn cấp và liên kết đáng ngờ.`,

      th: `อีเมลนี้มีสัญญาณการหลอกลวงหลายอย่าง รวมถึงการขอข้อมูลส่วนตัว ใช้ภาษาเร่งด่วน และลิงก์น่าสงสัย`,

      fil: `May mga senyales ng scam ang email na ito kasama ang paghingi ng personal na impormasyon, pananakot, at mga kahina-hinalang link.`,

      id: `Email ini mengandung beberapa indikator penipuan termasuk permintaan informasi pribadi, bahasa mendesak, dan tautan mencurigakan.`,

      jv: `Email iki ngemot pirang-pirang indikator penipuan kalebu panjaluk informasi pribadi, basa mendesak, lan pranala curiga.`,

      su: `Email ieu ngandung sababaraha indikator panipuan kalebu pamundut informasi pribadi, basa maksa, sareng tautan curiga.`,

      km: `អ៊ីមែលនេះមានសម្គាល់នៃការលួចលួងច្រើន រួមទាំងការស្នើសុំព័ត៌មានផ្ទាល់ខ្លួន ភាសាបង្ខំ និងតំណភ្ជាប់គួរសង្ស័យ។`,

      lo: `ອີເມວນີ້ມີສັນຍານການຫລອກລວງຫຼາຍອັນ ລວມມີການຂໍຂໍ້ມູນສ່ວນຕົວ ໃຊ້ພາສາເຮົາຮ້ອນ ແລະລິ້ງທີ່ນ່າສົງໃສ`,

      my: `ဤအီးမေးလ်တွင် ကိုယ်ရေးကိုယ်တာအချက်အလက်တောင်းခံမှု၊ စွဲဆောင်သည့်ဘာသာစကား၊ သံသယရှိသောလင့်ခ်များအပါအဝင် လိမ်လည်မှုညွှန်းဆိုချက်များစွာပါရှိသည်။`,

      ta: `இந்த மின்னஞ்சலில் தனிப்பட்ட தகவல்களுக்கான கோரிக்கைகள், அவசர மொழி மற்றும் சந்தேகமான இணைப்புகள் உட்பட பல மోசடி அறிகுறிகள் உள்ளன।`,
    },
    detailed: {
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

      id: `Analisis menemukan email ini mengandung ciri-ciri penipuan:

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
    }
  },
  medium: {
    short: {
      en: `This email may be suspicious and requests sensitive banking information.`,

      ms: `E-mel ini mungkin mencurigakan dan meminta maklumat perbankan sensitif.`,

      zh: `此电子邮件可能有可疑之处，要求提供敏感的银行信息。`,

      vi: `Email này có thể đáng ngờ và yêu cầu thông tin ngân hàng nhạy cảm.`,

      th: `อีเมลนี้อาจน่าสงสัยและขอข้อมูลธนาคารที่ละเอียดอ่อน`,

      fil: `Maaaring kahina-hinala ang email na ito at humihingi ng sensitibong impormasyon sa bangko.`,

      id: `Email ini mungkin mencurigakan dan meminta informasi perbankan sensitif.`,

      jv: `Email iki bisa wae curiga lan njaluk informasi perbankan sing sensitif.`,

      su: `Email ieu sigana mencurigakan sareng nyuhunkeun inpormasi perbankan anu sénsitip.`,

      km: `អ៊ីមែលនេះអាចគួរឱ្យសង្ស័យ និងស្នើសុំព័ត៌មានធនាគារដែលមានឯកជនភាព។`,

      lo: `ອີເມວນີ້ອາດຈະນ່າສົງໄສ ແລະຂໍຂໍ້ມູນທະນາຄານທີ່ລະອຽດອ່ອນ`,

      my: `ဤအီးမေးလ်သည် သံသယရှိနိုင်ပြီး အမိေးအမြတ်ထားရှိရမည့် ဘဏ်အချက်အလက်များကို တောင်းဆိုနေသည်။`,

      ta: `இந்த மின்னஞ்சல் சந்தேகத்திற்குரியதாக இருக்கலாம் மற்றும் நுண்ணிய வங்கி தகவல்களைக் கோருகிறது।`,
    },
    detailed: {
      en: `This email may be suspicious. Based on its content, watch out for:

• Requests for bank account number, online banking password and TAC
• Threat of permanent account closure within 24 hours
• Link to a non‑official domain: secure-banknegara-verification.com
• Promise of RM 1,000 as a reward after "verification"`,

      ms: `E-mel ini mungkin mencurigakan. Berdasarkan kandungannya, sila berhati-hati terhadap:

• Permintaan nombor akaun bank, kata laluan perbankan dalam talian dan TAC
• Ancaman penutupan akaun secara kekal dalam masa 24 jam
• Pautan ke domain bukan rasmi: secure-banknegara-verification.com
• Janji ganjaran RM 1,000 selepas "pengesahan"`,

      zh: `此电子邮件可能有可疑之处。根据其内容，请注意：

• 索取银行账号、网上银行密码和TAC验证码
• 以24小时内永久关闭账户相威胁
• 链接到非官方域名：secure-banknegara-verification.com
• 承诺"验证"后赠送RM 1,000 奖励`,

      vi: `Email này có thể đáng ngờ. Dựa trên nội dung, hãy cảnh giác với:

• Yêu cầu số tài khoản ngân hàng, mật khẩu ngân hàng trực tuyến và mã TAC
• Đe dọa khóa vĩnh viễn tài khoản trong 24 giờ
• Liên kết đến tên miền không chính thức: secure-banknegara-verification.com
• Hứa tặng RM 1,000 sau khi "xác minh"`,

      th: `อีเมลนี้อาจน่าสงสัย จากเนื้อหาโปรดระวัง:

• ขอเลขบัญชีธนาคาร รหัสผ่านธนาคารออนไลน์ และรหัส TAC
• ขู่จะปิดบัญชีแบบถาวรภายใน 24 ชั่วโมง
• ลิงก์ไปยังโดเมนที่ไม่เป็นทางการ: secure-banknegara-verification.com
• สัญญาให้รางวัล RM 1,000 หลังจาก "ยืนยัน"`,

      fil: `Maaaring kahina-hinala ang email na ito. Batay sa nilalaman nito, mag-ingat sa:

• Hinihingi ang numero ng bank account, online banking password, at TAC
• Banta na isasara nang permanente ang account sa loob ng 24 oras
• Link papunta sa di-opisyal na domain: secure-banknegara-verification.com
• Pangakong gantimpalang RM 1,000 pagkatapos ng "pag-verify"`,

      id: `Email ini mungkin mencurigakan. Berdasarkan isinya, waspadai:

• Permintaan nomor rekening bank, kata sandi perbankan online, dan TAC
• Ancaman penutupan akun permanen dalam 24 jam
• Tautan ke domain tidak resmi: secure-banknegara-verification.com
• Janji hadiah RM 1.000 setelah "verifikasi"`,

      jv: `Email iki bisa wae curiga. Adhedhasar isine, waspada marang:

• Njaluk nomer rekening bank, sandhi perbankan online, lan TAC
• Ancaman nutup akun permanen sajrone 24 jam
• Pranala menyang domain ora resmi: secure-banknegara-verification.com
• Janji ganjaran RM 1.000 sawisé "verifikasi"`,

      su: `Email ieu sigana mencurigakan. Dumasar kana eusi na, punten ati-ati kana:

• Pamundut nomer rekening bank, sandi perbankan online, sareng TAC
• Ancaman nutup akun permanén dina 24 jam
• Tautan ka domain henteu resmi: secure-banknegara-verification.com
• Janji ganjaran RM 1.000 sanggeus "verifikasi"`,

      km: `អ៊ីមែលនេះអាចគួរឱ្យសង្ស័យ។ អាស្រ័យលើមាតិកា សូមប្រុងប្រយ័ត្ន៖

• ស្នើសុំលេខគណនីធនាគារ ពាក្យសម្ងាត់អ៊ីនធឺណិត និងលេខ TAC
• គំរាមកំហែងបិទគណនីអចិន្ត្រៃយ៍ក្នុងរយៈពេល 24 ម៉ោង
• តំណភ្ជាប់ទៅដូម៉ែនមិនផ្លូវការ: secure-banknegara-verification.com
• សន្យាផ្តល់រង្វាន់ RM 1,000 បន្ទាប់ពី "ផ្ទៀងផ្ទាត់"`,

      lo: `ອີເມວນີ້ອາດຈະນ່າສົງໄສ. ອີງຕາມເນື້ອໃນ ຂໍໃຫ້ລະວັງ:

• ຮ້ອງຂໍເລກບັນຊີທະນາຄານ, ລະຫັດຜ່ານທະນາຄານອອນລາຍ ແລະ TAC
• ຂູ່ວ່າຈະປິດບັນຊີຖາວອນພາຍໃນ 24 ຊົ່ວໂມງ
• ລິ້ງໄປຫາໂດເມນທີ່ບໍ່ແມ່ນທາງການ: secure-banknegara-verification.com
• ສັນຍາໃຫ້ລາງວັນ RM 1,000 ຫຼັງ "ການຢືນຢັນ"`,

      my: `ဤအီးမေးလ်တွင် သံသယရှိနိုင်ပါသည်။ အကြောင်းအရာအရ အောက်ပါအချက်များကို သတိပြုပါ:

• ဘဏ်အကောင့်နံပါတ်၊ အွန်လိုင်းဘဏ် စကားဝှက် နှင့် TAC တောင်းဆိုခြင်း
• 24 နာရီအတွင်း အကောင့်ကို အမြဲတမ်းပိတ်မည်ဟု ခြိမ်းခြောက်မှု
• တရားဝင်မဟုတ်သော domain သို့ လင့်ခ်: secure-banknegara-verification.com
• "အတည်ပြု" ပြီးနောက် RM 1,000 ပေးမည်ဟု ကတိပြုမှု`,

      ta: `இந்த மின்னஞ்சல் சந்தேகத்திற்குரியது இருக்கலாம். அதன் உள்ளடக்கத்தின் அடிப்படையில் கவனமாக இருக்கவும்:

• வங்கி கணக்கு எண், ஆன்லைன் வங்கி கடவுச்சொல் மற்றும் TAC கோரிக்கை
• 24 மணிநேரத்தில் கணக்கை நிரந்தரமாக மூடுவதாக மிரட்டல்
• அதிகாரப்பூர்வமற்ற டொமைனுக்கு இணைப்பு: secure-banknegara-verification.com
• "சரிபார்ப்பு"க்கு பிறகு RM 1,000 பரிசு வாக்குறுதி`,
    }
  },
  low: {
    short: {
      en: "This email appears safe, but always be cautious with online communications.",

      ms: "E-mel ini kelihatan selamat, tetapi sentiasa berhati-hati dengan komunikasi dalam talian.",

      zh: "此电子邮件看起来安全，但始终要对在线通信保持谨慎。",

      vi: "Email này có vẻ an toàn, nhưng bạn vẫn nên cẩn trọng khi giao tiếp trực tuyến.",

      th: "อีเมลนี้ดูปลอดภัย แต่อย่าลืมระมัดระวังในการสื่อสารออนไลน์เสมอ",

      fil: "Mukhang ligtas ang email na ito, ngunit palaging mag-ingat sa online na komunikasyon.",

      id: "Email ini tampak aman, tetapi tetaplah berhati-hati dalam komunikasi online.",

      jv: "Email iki katon aman, nanging tetep waspada nalika komunikasi online.",

      su: "Email ieu katingalina aman, tapi tetep kudu waspada dina komunikasi online.",

      km: "អ៊ីមែលនេះហាក់ដូចជាដោយសុវត្ថិភាព ប៉ុន្តែត្រូវប្រុងប្រយ័ត្នជានិច្ចនៅពេលប្រើប្រាស់ការទំនាក់ទំនងតាមអ៊ីនធឺណិត។",

      lo: "ອີເມວນີ້ເບິ່ງຄ້າຍວ່າປອດໄພ ແຕ່ຄວນລະວັງໃນການສື່ສານຜ່ານອອນໄລນ໌ຢ່າງສະເໝີ.",

      my: "ဤအီးမေးလ်သည် ဘေးကင်းလုံခြုံသည့်အဖြစ်မြင်ရသည်၊ သို့သော် အွန်လိုင်းအကြောင်းအရာများတွင်အမြဲသတိပြုပါ။",

      ta: "இந்த மின்னஞ்சல் பாதுகாப்பாக தெரிகிறது, ஆனாலும் ஆன்லைன் தொடர்புகளில் எப்போதும் கவனமாக இருங்கள்.",
    },
    detailed: {
      en: "This email appears safe, but always be cautious with online communications.",

      ms: "E-mel ini kelihatan selamat, tetapi sentiasa berhati-hati dengan komunikasi dalam talian.",

      zh: "此电子邮件看起来安全，但始终要对在线通信保持谨慎。",

      vi: "Email này có vẻ an toàn, nhưng bạn vẫn nên cẩn trọng khi giao tiếp trực tuyến.",

      th: "อีเมลนี้ดูปลอดภัย แต่อย่าลืมระมัดระวังในการสื่อสารออนไลน์เสมอ",

      fil: "Mukhang ligtas ang email na ito, ngunit palaging mag-ingat sa online na komunikasyon.",

      id: "Email ini tampak aman, tetapi tetaplah berhati-hati dalam komunikasi online.",

      jv: "Email iki katon aman, nanging tetep waspada nalika komunikasi online.",

      su: "Email ieu katingalina aman, tapi tetep kudu waspada dina komunikasi online.",

      km: "អ៊ីមែលនេះហាក់ដូចជាដោយសុវត្ថិភាព ប៉ុន្តែត្រូវប្រុងប្រយ័ត្នជានិច្ចនៅពេលប្រើប្រាស់ការទំនាក់ទំនងតាមអ៊ីនធឺណិត។",

      lo: "ອີເມວນີ້ເບິ່ງຄ້າຍວ່າປອດໄພ ແຕ່ຄວນລະວັງໃນການສື່ສານຜ່ານອອນໄລນ໌ຢ່າງສະເໝີ.",

      my: "ဤအီးမေးလ်သည် ဘေးကင်းလုံခြုံသည့်အဖြစ်မြင်ရသည်၊ သို့သော် အွန်လိုင်းအကြောင်းအရာများတွင်အမြဲသတိပြုပါ။",

      ta: "இந்த மின்னஞ்சல் பாதுகாப்பாக தெரிகிறது, ஆனாலும் ஆன்லைன் தொடர்புகளில் எப்போதும் கவனமாக இருங்கள்.",
    }
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
  keyof (typeof EmailExplanations)["high"]["short"];