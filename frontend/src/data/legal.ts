import type { LegalContent } from '@/components/legal/LegalDocument';
import type { Locale } from '@/locales';

/**
 * เนื้อหานโยบายความเป็นส่วนตัวและข้อกำหนดการใช้งาน (EP24)
 * เขียนให้ตรงกับการทำงานจริงของเว็บไซต์:
 * - แบบฟอร์มส่งข้อมูลผ่าน HTTPS ไปยัง Backend ซึ่งตรวจสอบข้อมูลแล้วส่งต่อเป็นอีเมลผ่าน Resend
 * - Backend ไม่บันทึกข้อมูลแบบฟอร์มหรือไฟล์แนบลงฐานข้อมูลหรือดิสก์
 * - ไม่มีคุกกี้วิเคราะห์/โฆษณา; ภาษาและธีมเก็บใน localStorage ของเบราว์เซอร์
 * - หน้า Contact ฝังแผนที่ Google Maps
 * ห้ามเพิ่มระยะเวลาเก็บรักษา มาตรฐาน หรือการรับรองที่ยังไม่ได้ดำเนินการจริง
 */

const COMPANY_TH = 'บริษัท เอสทู แอคเคาน์ติ้ง คอนซัลแตนท์ จำกัด';
const COMPANY_EN = 'S2 Accounting Consultant Co., Ltd. (บริษัท เอสทู แอคเคาน์ติ้ง คอนซัลแตนท์ จำกัด)';
const REG_NO = '0105562095016';
const EMAIL = 'office@s2aconsultant.com';
const PHONE = '064-924-5544';
const ADDRESS_TH = '14/14 ซอยกรุงเทพ-นนท์ 21 ถ.กรุงเทพ-นนท์ แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800';
const ADDRESS_EN = '14/14 Soi Krungthep-Non 21, Krungthep-Non Road, Bang Sue, Bangkok 10800, Thailand';

export const TAX_DISCLAIMER: Record<Locale, string> = {
  th: 'ข้อมูลบนเว็บไซต์เป็นข้อมูลทั่วไปและอาจเปลี่ยนแปลงตามกฎหมายหรือประกาศที่เกี่ยวข้อง ควรประเมินตามข้อเท็จจริงของแต่ละกรณี',
  en: 'Information on this website is general in nature and may change with the relevant laws or announcements. Each case should be assessed on its own facts.',
  zh: '本网站信息仅为一般性资料，可能随相关法律或公告变化而变更，应根据每个案例的具体事实进行评估。',
};

export const privacyContent: Record<Locale, LegalContent> = {
  th: {
    updatedLabel: 'ปรับปรุงล่าสุด: พฤศจิกายน 2569',
    intro:
      'นโยบายนี้อธิบายว่าเราเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลที่ได้รับผ่านเว็บไซต์นี้อย่างไร โดยอธิบายตามการทำงานจริงของเว็บไซต์ในปัจจุบัน',
    sections: [
      {
        title: 'ผู้ควบคุมข้อมูลส่วนบุคคล',
        highlight: true,
        paragraphs: [
          `${COMPANY_TH} (ชื่อทางการค้า “S2 Accounting Consultant”) เลขทะเบียนนิติบุคคล ${REG_NO} เป็นผู้ควบคุมข้อมูลส่วนบุคคลที่ได้รับผ่านเว็บไซต์นี้ ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562`,
          'PDA BLISS COMPANY LIMITED เป็นนิติบุคคลแยกจากบริษัท นโยบายนี้ไม่ครอบคลุมข้อมูลที่ PDA BLISS ประมวลผลภายใต้งานหรือข้อตกลงของตนเอง',
        ],
      },
      {
        title: 'ข้อมูลที่เราเก็บรวบรวม',
        paragraphs: ['เมื่อคุณส่งแบบฟอร์มติดต่อหรือคำขอนัดปรึกษา เราได้รับข้อมูลดังนี้:'],
        items: [
          'ข้อมูลติดต่อ: ชื่อผู้ติดต่อ เบอร์โทรศัพท์ และอีเมล',
          'ข้อมูลธุรกิจ: ชื่อบริษัท ประเภทธุรกิจ และบริการที่สนใจ',
          'ข้อความรายละเอียดเพิ่มเติม และไฟล์แนบที่คุณเลือกส่ง (PDF, JPG, JPEG หรือ PNG ไม่เกิน 10 MB)',
          'การยืนยันความยินยอมตามนโยบายนี้',
          'ข้อมูลทางเทคนิค: ระบบใช้ที่อยู่ IP ชั่วคราวเพื่อจำกัดจำนวนการส่งข้อมูลและป้องกันการใช้งานในทางที่ผิด ผู้ให้บริการโฮสติ้งอาจบันทึกข้อมูลการเข้าถึงทั่วไป เช่น ที่อยู่ IP และเวลาที่เข้าใช้',
        ],
        note: 'กรุณาส่งเฉพาะข้อมูลและเอกสารที่จำเป็นต่อการประเมินบริการ และหลีกเลี่ยงการส่งข้อมูลส่วนบุคคลที่มีความอ่อนไหว เช่น ข้อมูลสุขภาพ เว้นแต่จำเป็นจริง',
      },
      {
        title: 'วัตถุประสงค์และฐานในการประมวลผล',
        items: [
          'ติดต่อกลับตามคำขอของคุณ',
          'ประเมินบริการที่คุณสอบถามหรือขอรับ',
          'จัดทำใบเสนอราคา (ถ้ามี)',
          'จัดการและติดตามคำขอของคุณ',
          'รักษาความปลอดภัยของเว็บไซต์และป้องกันการใช้งานในทางที่ผิด',
        ],
        note: 'เราประมวลผลข้อมูลเพื่อดำเนินการตามคำขอของคุณก่อนเข้าทำสัญญา ตามความยินยอมที่คุณให้ไว้ และเพื่อประโยชน์โดยชอบด้วยกฎหมายในการรักษาความปลอดภัยของเว็บไซต์',
      },
      {
        title: 'วิธีจัดการข้อมูลจากแบบฟอร์ม',
        items: [
          'ข้อมูลส่งจากเบราว์เซอร์ของคุณไปยังระบบของเราผ่านการเชื่อมต่อ HTTPS',
          'ระบบตรวจสอบรูปแบบข้อมูล และตรวจประเภทกับขนาดของไฟล์แนบก่อนส่งต่อ',
          'ข้อมูลและไฟล์แนบถูกส่งต่อเป็นอีเมลถึงกล่องอีเมลของบริษัทผ่านบริการส่งอีเมล Resend',
          'เว็บไซต์ไม่บันทึกข้อมูลแบบฟอร์มหรือไฟล์แนบไว้ในฐานข้อมูลหรือพื้นที่จัดเก็บของเว็บไซต์ และไม่เผยแพร่ไฟล์บนเว็บไซต์',
        ],
      },
      {
        title: 'การเปิดเผยข้อมูลและผู้ให้บริการภายนอก',
        paragraphs: ['เราไม่ขายข้อมูลส่วนบุคคลของคุณ ข้อมูลอาจถูกประมวลผลโดยผู้ให้บริการที่จำเป็นต่อการทำงานของเว็บไซต์ ได้แก่:'],
        items: [
          'Resend — บริการส่งอีเมลที่ใช้ส่งข้อมูลจากแบบฟอร์มถึงบริษัท',
          'ผู้ให้บริการอีเมลของบริษัท — ใช้จัดเก็บอีเมลที่ได้รับ',
          'ผู้ให้บริการโฮสติ้งของเว็บไซต์',
          'Cloudflare — ให้บริการเครือข่ายและความปลอดภัยของเว็บไซต์ และสถิติการเข้าชมแบบไม่ใช้คุกกี้ (Cloudflare Web Analytics)',
          'Google — แผนที่ Google Maps ที่ฝังในหน้าติดต่อเรา ซึ่ง Google อาจเก็บข้อมูลตามนโยบายของ Google เมื่อแผนที่ถูกโหลด',
        ],
        note: 'เราอาจเปิดเผยข้อมูลเมื่อกฎหมายกำหนดหรือเมื่อได้รับคำสั่งจากหน่วยงานที่มีอำนาจ ผู้ให้บริการบางรายอาจประมวลผลข้อมูลบนเซิร์ฟเวอร์นอกประเทศไทย ซึ่งบริษัทจะดำเนินการตามที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลกำหนด',
      },
      {
        title: 'ระยะเวลาการเก็บรักษา',
        paragraphs: [
          'เว็บไซต์ไม่เก็บสำเนาข้อมูลแบบฟอร์มหรือไฟล์แนบ ข้อมูลที่ได้รับทางอีเมลจะถูกเก็บไว้เท่าที่จำเป็นต่อวัตถุประสงค์ข้างต้น และตามหน้าที่ตามกฎหมายที่เกี่ยวข้องหากคุณเข้าใช้บริการกับเรา คุณสามารถขอให้ลบข้อมูลได้ตามหัวข้อสิทธิของเจ้าของข้อมูล',
        ],
      },
      {
        title: 'คุกกี้และการตั้งค่าในเบราว์เซอร์',
        items: [
          'เว็บไซต์นี้ไม่ใช้คุกกี้เพื่อการวิเคราะห์หรือการโฆษณา',
          'ภาษาและธีม (สว่าง/มืด) ที่คุณเลือกถูกเก็บไว้ในพื้นที่จัดเก็บของเบราว์เซอร์ (localStorage) บนอุปกรณ์ของคุณเท่านั้น และลบได้จากการตั้งค่าเบราว์เซอร์',
          'แผนที่ Google Maps ในหน้าติดต่อเราอาจตั้งคุกกี้ของ Google',
        ],
      },
      {
        title: 'การรักษาความปลอดภัย',
        paragraphs: [
          'เราใช้มาตรการที่เหมาะสม เช่น การเชื่อมต่อ HTTPS การตรวจสอบข้อมูลฝั่งเซิร์ฟเวอร์ การจำกัดจำนวนการส่งข้อมูล และการตรวจประเภทไฟล์แนบ อย่างไรก็ตาม ไม่มีวิธีการส่งหรือจัดเก็บข้อมูลทางอินเทอร์เน็ตใดที่ปลอดภัยได้ทั้งหมด',
        ],
      },
      {
        title: 'สิทธิของเจ้าของข้อมูล',
        paragraphs: ['ภายใต้เงื่อนไขที่กฎหมายกำหนด คุณมีสิทธิ:'],
        items: [
          'ขอเข้าถึงและขอรับสำเนาข้อมูลของคุณ',
          'ขอแก้ไขข้อมูลให้ถูกต้องและเป็นปัจจุบัน',
          'ขอให้ลบ ระงับการใช้ หรือคัดค้านการประมวลผลข้อมูล',
          'ขอโอนย้ายข้อมูลในกรณีที่กฎหมายรองรับ',
          'ถอนความยินยอมได้ทุกเมื่อ โดยไม่กระทบการประมวลผลที่ทำไปก่อนหน้า',
          'ร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล',
        ],
        note: 'ติดต่อเราตามช่องทางด้านล่างเพื่อใช้สิทธิ เราอาจขอข้อมูลเพื่อยืนยันตัวตนก่อนดำเนินการ',
      },
      {
        title: 'ผู้เยาว์',
        paragraphs: ['บริการของเราออกแบบสำหรับธุรกิจและผู้ใหญ่ เราไม่ได้ตั้งใจเก็บข้อมูลของผู้เยาว์ผ่านเว็บไซต์นี้'],
      },
      {
        title: 'การเปลี่ยนแปลงนโยบาย',
        paragraphs: ['เราอาจปรับปรุงนโยบายนี้เมื่อการทำงานของเว็บไซต์หรือกฎหมายเปลี่ยนแปลง โดยจะแสดงวันที่ปรับปรุงล่าสุดไว้ที่หน้านี้'],
      },
      {
        title: 'ติดต่อเรา',
        items: [`อีเมล: ${EMAIL}`, `โทรศัพท์: ${PHONE}`, `ที่อยู่: ${ADDRESS_TH}`],
      },
    ],
  },
  en: {
    updatedLabel: 'Last updated: November 2026',
    intro:
      'This policy explains how we collect, use and disclose personal data received through this website, based on how the website currently works.',
    sections: [
      {
        title: 'Data controller',
        highlight: true,
        paragraphs: [
          `${COMPANY_EN}, trading as “S2 Accounting Consultant”, company registration no. ${REG_NO}, is the controller of personal data received through this website under Thailand’s Personal Data Protection Act B.E. 2562 (2019).`,
          'PDA BLISS COMPANY LIMITED is a separate legal entity. This policy does not cover data processed by PDA BLISS under its own engagements or agreements.',
        ],
      },
      {
        title: 'Data we collect',
        paragraphs: ['When you submit the contact form or a consultation request, we receive:'],
        items: [
          'Contact details: contact name, phone number and email',
          'Business details: company name, business type and services of interest',
          'Your message and any file you choose to attach (PDF, JPG, JPEG or PNG, up to 10 MB)',
          'Your confirmation of consent under this policy',
          'Technical data: the system uses your IP address temporarily to limit submissions and prevent abuse. Our hosting provider may keep standard access logs such as IP address and access time.',
        ],
        note: 'Please send only the information and documents needed to assess the service, and avoid sending sensitive personal data such as health information unless it is truly necessary.',
      },
      {
        title: 'Purposes and basis for processing',
        items: [
          'Contacting you about your inquiry',
          'Assessing the services you ask about or request',
          'Preparing a quotation, where applicable',
          'Managing and following up on your inquiry',
          'Keeping the website secure and preventing abuse',
        ],
        note: 'We process data to take steps at your request before entering into a contract, on the basis of the consent you give, and for our legitimate interest in keeping the website secure.',
      },
      {
        title: 'How form data is handled',
        items: [
          'Data travels from your browser to our system over an HTTPS connection',
          'The system validates the data and checks the type and size of any attachment before forwarding it',
          'The data and attachment are forwarded by email to the company mailbox through the Resend email service',
          'The website does not store form data or attachments in a database or website storage, and does not publish files on the website',
        ],
      },
      {
        title: 'Disclosure and service providers',
        paragraphs: ['We do not sell your personal data. Data may be processed by providers needed to run the website:'],
        items: [
          'Resend — the email delivery service used to send form submissions to the company',
          'The company’s email provider — used to store received emails',
          'The website hosting provider',
          'Cloudflare — network and security services for the website, and cookieless visit statistics (Cloudflare Web Analytics)',
          'Google — the Google Maps embed on the Contact page; Google may collect data under its own policies when the map loads',
        ],
        note: 'We may disclose data when required by law or by order of a competent authority. Some providers may process data on servers outside Thailand, in which case the company will follow the requirements of personal data protection law.',
      },
      {
        title: 'Retention',
        paragraphs: [
          'The website keeps no copy of form data or attachments. Information received by email is kept only as long as needed for the purposes above and for related legal obligations if you become a client. You may ask us to delete your data as described under your rights.',
        ],
      },
      {
        title: 'Cookies and browser settings',
        items: [
          'This website does not use analytics or advertising cookies',
          'Your language and theme (light/dark) choices are stored in your browser’s localStorage on your device only, and can be cleared in your browser settings',
          'The Google Maps embed on the Contact page may set Google cookies',
        ],
      },
      {
        title: 'Security',
        paragraphs: [
          'We use reasonable measures such as HTTPS connections, server-side validation, submission rate limiting and attachment type checks. However, no method of transmitting or storing data over the internet is completely secure.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: ['Subject to the conditions set by law, you have the right to:'],
        items: [
          'Access and obtain a copy of your data',
          'Have your data corrected and kept up to date',
          'Request deletion, restriction of use, or object to processing',
          'Request data portability where the law allows',
          'Withdraw consent at any time, without affecting processing carried out before withdrawal',
          'Complain to the Personal Data Protection Committee office',
        ],
        note: 'Contact us using the details below to exercise your rights. We may ask for information to verify your identity first.',
      },
      {
        title: 'Minors',
        paragraphs: ['Our services are designed for businesses and adults. We do not intend to collect data from minors through this website.'],
      },
      {
        title: 'Changes to this policy',
        paragraphs: ['We may update this policy when the website or the law changes. The latest update date is shown on this page.'],
      },
      {
        title: 'Contact us',
        items: [`Email: ${EMAIL}`, `Phone: ${PHONE}`, `Address: ${ADDRESS_EN}`],
      },
    ],
  },
  zh: {
    updatedLabel: '最近更新：2026年11月',
    intro: '本政策根据本网站当前的实际运作方式，说明我们如何收集、使用和披露通过本网站获得的个人数据。',
    sections: [
      {
        title: '数据控制者',
        highlight: true,
        paragraphs: [
          `${COMPANY_TH}（商号“S2 Accounting Consultant”，公司注册号 ${REG_NO}）是依据泰国《2019年个人数据保护法》（B.E. 2562）通过本网站获得之个人数据的控制者。`,
          'PDA BLISS COMPANY LIMITED 为独立的法人实体。本政策不涵盖 PDA BLISS 在其自身业务或协议下处理的数据。',
        ],
      },
      {
        title: '我们收集的数据',
        paragraphs: ['当您提交联系表单或咨询预约时，我们会收到以下信息：'],
        items: [
          '联系信息：联系人姓名、电话号码和电子邮件',
          '企业信息：公司名称、业务类型及感兴趣的服务',
          '补充说明以及您选择附上的文件（PDF、JPG、JPEG 或 PNG，不超过 10 MB）',
          '您依据本政策作出的同意确认',
          '技术数据：系统会临时使用您的 IP 地址来限制提交次数并防止滥用。网站托管服务商可能保留一般访问记录，例如 IP 地址和访问时间。',
        ],
        note: '请仅提供评估服务所需的信息和文件，除非确有必要，请避免提交健康信息等敏感个人数据。',
      },
      {
        title: '处理目的与依据',
        items: [
          '就您的咨询与您联系',
          '评估您咨询或申请的服务',
          '在适用情况下准备报价',
          '管理并跟进您的咨询',
          '维护网站安全并防止滥用',
        ],
        note: '我们处理数据的依据包括：应您的要求在签订合同前采取必要步骤、您所作出的同意，以及为维护网站安全的合法利益。',
      },
      {
        title: '表单数据的处理方式',
        items: [
          '数据通过 HTTPS 连接从您的浏览器传送至我们的系统',
          '系统会验证数据格式，并在转发前检查附件的类型和大小',
          '数据和附件通过 Resend 邮件服务以电子邮件形式转发至公司邮箱',
          '网站不会将表单数据或附件存储在数据库或网站存储空间中，也不会在网站上公开文件',
        ],
      },
      {
        title: '数据披露与外部服务商',
        paragraphs: ['我们不会出售您的个人数据。数据可能由网站运行所需的服务商处理，包括：'],
        items: [
          'Resend：用于将表单内容发送给公司的电子邮件服务',
          '公司的电子邮件服务商：用于存储收到的邮件',
          '网站托管服务商',
          'Cloudflare：为网站提供网络与安全服务，以及不使用 Cookie 的访问统计（Cloudflare Web Analytics）',
          'Google：联系页面嵌入的 Google Maps；地图加载时，Google 可能依据其自身政策收集数据',
        ],
        note: '在法律要求或主管机关命令时，我们可能披露数据。部分服务商可能在泰国境外的服务器上处理数据，公司将遵守个人数据保护法的相关要求。',
      },
      {
        title: '保存期限',
        paragraphs: [
          '网站不保留表单数据或附件的副本。通过电子邮件收到的信息仅在实现上述目的所需的期间内保存；如您成为客户，则依相关法律义务保存。您可依照数据主体权利一节要求删除数据。',
        ],
      },
      {
        title: 'Cookie 与浏览器设置',
        items: [
          '本网站不使用分析或广告类 Cookie',
          '您选择的语言和主题（浅色/深色）仅保存在您设备浏览器的 localStorage 中，可通过浏览器设置清除',
          '联系页面的 Google Maps 可能会设置 Google 的 Cookie',
        ],
      },
      {
        title: '安全措施',
        paragraphs: [
          '我们采取合理措施，例如 HTTPS 连接、服务器端数据验证、提交频率限制及附件类型检查。但任何通过互联网传输或存储数据的方式都无法做到绝对安全。',
        ],
      },
      {
        title: '数据主体的权利',
        paragraphs: ['在法律规定的条件下，您有权：'],
        items: [
          '访问并获取您的数据副本',
          '要求更正数据并保持其最新',
          '要求删除、限制使用或反对处理数据',
          '在法律允许的情况下要求数据可携',
          '随时撤回同意，且不影响撤回前已进行的处理',
          '向个人数据保护委员会办公室投诉',
        ],
        note: '如需行使权利，请通过以下方式联系我们。我们可能会先要求提供信息以核实您的身份。',
      },
      {
        title: '未成年人',
        paragraphs: ['我们的服务面向企业和成年人，我们无意通过本网站收集未成年人的数据。'],
      },
      {
        title: '政策变更',
        paragraphs: ['当网站运作或法律发生变化时，我们可能更新本政策，并在本页显示最近更新日期。'],
      },
      {
        title: '联系我们',
        items: [`电子邮件：${EMAIL}`, `电话：${PHONE}`, `地址：${ADDRESS_TH}`],
      },
    ],
  },
};

export const termsContent: Record<Locale, LegalContent> = {
  th: {
    updatedLabel: 'ปรับปรุงล่าสุด: พฤศจิกายน 2569',
    intro: `ข้อกำหนดนี้ใช้กับการใช้งานเว็บไซต์ของ ${COMPANY_TH} (“S2 Accounting Consultant”) การใช้งานเว็บไซต์ถือว่าคุณรับทราบข้อกำหนดนี้`,
    sections: [
      {
        title: 'วัตถุประสงค์ของเว็บไซต์',
        paragraphs: ['เว็บไซต์นี้ให้ข้อมูลเกี่ยวกับบริการของเรา และเป็นช่องทางให้คุณติดต่อหรือขอรับการประเมินบริการ'],
      },
      {
        title: 'ข้อมูลทั่วไป ไม่ใช่คำแนะนำเฉพาะกรณี',
        paragraphs: [
          'บทความ ตัวอย่าง และข้อมูลบนเว็บไซต์มีไว้เพื่อให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางบัญชี ภาษี กฎหมาย หรือการเงินสำหรับกรณีของคุณ',
          TAX_DISCLAIMER.th,
        ],
      },
      {
        title: 'การเริ่มงานและค่าบริการ',
        items: [
          'การส่งแบบฟอร์มหรือการนัดปรึกษาไม่ถือเป็นการตกลงใช้บริการ',
          'การให้บริการเริ่มเมื่อทั้งสองฝ่ายตกลงขอบเขตงานและใบเสนอราคาหรือข้อตกลงที่เกี่ยวข้องแล้ว',
          'ราคาที่แสดงบนเว็บไซต์เป็นราคาเริ่มต้น ค่าบริการจริงเป็นไปตามใบเสนอราคาที่ตกลงกัน',
        ],
      },
      {
        title: 'ความร่วมมือกับ PDA BLISS',
        paragraphs: [
          'PDA BLISS COMPANY LIMITED เป็นนิติบุคคลแยกจาก S2 Accounting Consultant งานด้านเทคโนโลยีและระบบไม่รวมอยู่ในบริการบัญชีโดยอัตโนมัติ และจะเสนอราคาแยกเมื่อมีการตกลงขอบเขตงานนั้นเท่านั้น',
        ],
      },
      {
        title: 'ทรัพย์สินทางปัญญา',
        paragraphs: [
          'เนื้อหา โลโก้ และการออกแบบบนเว็บไซต์เป็นของบริษัทหรือเจ้าของสิทธิที่เกี่ยวข้อง ชื่อและโลโก้ PDA BLISS เป็นของ PDA BLISS COMPANY LIMITED ห้ามทำซ้ำหรือเผยแพร่เพื่อการค้าโดยไม่ได้รับอนุญาต การอ้างอิงเพื่อใช้งานส่วนตัวโดยระบุแหล่งที่มาทำได้',
        ],
      },
      {
        title: 'การใช้งานที่ไม่อนุญาต',
        items: [
          'ใช้เว็บไซต์ในทางที่ผิดกฎหมายหรือละเมิดสิทธิของผู้อื่น',
          'พยายามรบกวน เจาะระบบ หรือทำให้เว็บไซต์ทำงานผิดปกติ',
          'ส่งข้อมูลอัตโนมัติจำนวนมาก ข้อมูลเท็จ หรือไฟล์ที่เป็นอันตราย',
        ],
      },
      {
        title: 'ลิงก์และบริการภายนอก',
        paragraphs: ['เว็บไซต์อาจมีลิงก์หรือบริการของบุคคลภายนอก เช่น Google Maps และ LINE ซึ่งมีข้อกำหนดและนโยบายของตนเอง เราไม่รับผิดชอบต่อเนื้อหาของบริการเหล่านั้น'],
      },
      {
        title: 'ข้อจำกัดความรับผิด',
        paragraphs: [
          'ภายในขอบเขตที่กฎหมายอนุญาต บริษัทไม่รับผิดต่อความเสียหายที่เกิดจากการนำข้อมูลทั่วไปบนเว็บไซต์ไปใช้โดยไม่ได้ปรึกษาผู้เชี่ยวชาญตามข้อเท็จจริงของกรณี ข้อกำหนดนี้ไม่จำกัดความรับผิดที่กฎหมายไม่อนุญาตให้จำกัด',
        ],
      },
      {
        title: 'การเปลี่ยนแปลง',
        paragraphs: ['ข้อมูล บริการ ราคา และข้อกำหนดนี้อาจเปลี่ยนแปลงได้ โดยจะแสดงวันที่ปรับปรุงล่าสุดไว้ที่หน้านี้'],
      },
      {
        title: 'กฎหมายที่ใช้บังคับ',
        paragraphs: ['ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย'],
      },
      {
        title: 'ติดต่อเรา',
        items: [`อีเมล: ${EMAIL}`, `โทรศัพท์: ${PHONE}`],
      },
    ],
  },
  en: {
    updatedLabel: 'Last updated: November 2026',
    intro: `These terms apply to your use of the website of ${COMPANY_EN} (“S2 Accounting Consultant”). By using the website, you acknowledge these terms.`,
    sections: [
      {
        title: 'Purpose of the website',
        paragraphs: ['This website provides information about our services and a channel for you to contact us or request a service assessment.'],
      },
      {
        title: 'General information, not case-specific advice',
        paragraphs: [
          'Articles, examples and other information on the website are for general knowledge only and are not accounting, tax, legal or financial advice for your situation.',
          TAX_DISCLAIMER.en,
        ],
      },
      {
        title: 'Engagement and fees',
        items: [
          'Submitting a form or booking a consultation does not create a service engagement',
          'Services begin only after both parties agree on the scope and a quotation or related agreement',
          'Prices shown on the website are starting prices; actual fees follow the agreed quotation',
        ],
      },
      {
        title: 'Partnership with PDA BLISS',
        paragraphs: [
          'PDA BLISS COMPANY LIMITED is a separate legal entity from S2 Accounting Consultant. Technology and systems work is not automatically included in accounting services and is quoted separately only when that scope is agreed.',
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'Content, logos and design on this website belong to the company or the relevant rights holders. The PDA BLISS name and logo belong to PDA BLISS COMPANY LIMITED. Do not copy or publish them for commercial purposes without permission. Personal reference with attribution is permitted.',
        ],
      },
      {
        title: 'Prohibited use',
        items: [
          'Using the website unlawfully or in a way that infringes the rights of others',
          'Attempting to disrupt, break into or impair the website',
          'Sending automated bulk submissions, false information or harmful files',
        ],
      },
      {
        title: 'External links and services',
        paragraphs: ['The website may include links to or services from third parties, such as Google Maps and LINE, which have their own terms and policies. We are not responsible for their content.'],
      },
      {
        title: 'Limitation of liability',
        paragraphs: [
          'To the extent permitted by law, the company is not liable for loss arising from relying on general information on the website without consulting a professional on the facts of your case. Nothing in these terms limits liability that cannot be limited by law.',
        ],
      },
      {
        title: 'Changes',
        paragraphs: ['Information, services, prices and these terms may change. The latest update date is shown on this page.'],
      },
      {
        title: 'Governing law',
        paragraphs: ['These terms are governed by the laws of Thailand.'],
      },
      {
        title: 'Contact us',
        items: [`Email: ${EMAIL}`, `Phone: ${PHONE}`],
      },
    ],
  },
  zh: {
    updatedLabel: '最近更新：2026年11月',
    intro: `本条款适用于您对${COMPANY_TH}（“S2 Accounting Consultant”）网站的使用。使用本网站即表示您知悉本条款。`,
    sections: [
      {
        title: '网站目的',
        paragraphs: ['本网站提供有关我们服务的信息，并作为您联系我们或申请服务评估的渠道。'],
      },
      {
        title: '一般信息，并非个案建议',
        paragraphs: ['网站上的文章、示例及其他信息仅供一般参考，并不构成针对您个人情况的会计、税务、法律或财务建议。', TAX_DISCLAIMER.zh],
      },
      {
        title: '服务启动与费用',
        items: [
          '提交表单或预约咨询并不构成服务委托',
          '服务仅在双方确认工作范围及报价或相关协议后开始',
          '网站所示价格为起始价格，实际费用以双方确认的报价为准',
        ],
      },
      {
        title: '与 PDA BLISS 的合作',
        paragraphs: [
          'PDA BLISS COMPANY LIMITED 与 S2 Accounting Consultant 为相互独立的法人实体。技术与系统工作不会自动包含在会计服务中，仅在双方确认该工作范围时另行报价。',
        ],
      },
      {
        title: '知识产权',
        paragraphs: [
          '本网站的内容、标志和设计归公司或相关权利人所有。PDA BLISS 名称和标志归 PDA BLISS COMPANY LIMITED 所有。未经许可，不得复制或用于商业发布；注明出处的个人参考使用不受此限。',
        ],
      },
      {
        title: '禁止行为',
        items: ['以违法或侵犯他人权利的方式使用本网站', '试图干扰、入侵或破坏网站运行', '自动批量提交、提交虚假信息或有害文件'],
      },
      {
        title: '外部链接与服务',
        paragraphs: ['本网站可能包含第三方链接或服务，例如 Google Maps 和 LINE，其各自有独立的条款和政策，我们不对其内容负责。'],
      },
      {
        title: '责任限制',
        paragraphs: [
          '在法律允许的范围内，对于未就个案事实咨询专业人士而依赖网站一般信息所造成的损失，公司不承担责任。本条款不限制法律不允许限制的责任。',
        ],
      },
      {
        title: '变更',
        paragraphs: ['网站信息、服务、价格及本条款可能变更，最近更新日期将显示于本页。'],
      },
      {
        title: '适用法律',
        paragraphs: ['本条款受泰国法律管辖。'],
      },
      {
        title: '联系我们',
        items: [`电子邮件：${EMAIL}`, `电话：${PHONE}`],
      },
    ],
  },
};
