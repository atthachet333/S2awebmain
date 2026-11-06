import type { Article } from '@/types';

export const articleCategories = [
  'ทั้งหมด',
  'บัญชี',
  'ภาษี',
  'การเงิน',
  'ต้นทุนและกำไร',
  'ระบบบัญชีและ ERP',
  'การบริหารธุรกิจ',
  'CFO Insight',
  'ข่าวสารกฎหมาย',
];

export const articles: Article[] = [
  {
    slug: 'true-business-costs',
    title: 'ต้นทุนจริงของธุรกิจคืออะไร? ทำไมยอดขายดีแต่กำไรยังน้อย',
    excerpt:
      'ยอดขายไม่ใช่กำไร ทำความเข้าใจต้นทุนตรง ต้นทุนแฝง และ Margin เพื่อหาว่าสินค้าหรือบริการใดสร้างกำไรจริง',
    coverImage: '/images/articles/true-business-costs.png',
    featuredImage: '/images/articles/featured-true-business-costs.png',
    imageAlt: 'การวิเคราะห์ต้นทุนจริงและกำไรของธุรกิจ',
    category: 'ต้นทุนและกำไร',
    author: 'ทีม S2 Accounting Consultant',
    date: '15 กรกฎาคม 2567',
    readTime: '6 นาที',
    featured: true,
    content: [
      'Revenue ไม่เท่ากับ Profit เพราะยอดขายยังไม่ได้หักต้นทุนสินค้า ค่าแรง ค่าใช้จ่ายส่วนกลาง ส่วนลด ของเสีย และต้นทุนแฝงจากกระบวนการที่ไม่มีประสิทธิภาพ ธุรกิจจึงอาจขายได้มากขึ้นแต่เหลือกำไรน้อยลง',
      'การเริ่มวิเคราะห์ควรแยก Direct Cost ออกจาก Indirect Cost และแยก Fixed Cost ออกจาก Variable Cost ให้ชัดเจน จากนั้นจึงกระจายต้นทุนด้วย Cost Driver ที่สะท้อนการใช้ทรัพยากรจริง',
      'ตัวอย่างเช่น เมนูหนึ่งขาย 200 บาท มีวัตถุดิบ 70 บาท ค่าแรงผันแปร 20 บาท และค่าธรรมเนียม 10 บาท Contribution Margin จะเหลือ 100 บาท ก่อนนำไปครอบคลุมค่าเช่า เงินเดือนประจำ และค่าใช้จ่ายส่วนกลาง',
      'เมื่อคำนวณ Gross Margin แยกตามสินค้า บริการ สาขา หรือ Project ผู้บริหารจะเห็นทันทีว่ารายได้มาจากไหน กำไรเกิดจากอะไร และรายการใดกำลังทำให้ Margin ลดลง',
      'เริ่มต้นได้ด้วยข้อมูลยอดขาย รายการต้นทุน ค่าแรง สต็อก ส่วนลด และค่าใช้จ่ายย้อนหลัง 3–6 เดือน แล้วจัดทำ Management Summary เพื่อกำหนดสินค้าที่ควรขยาย ปรับราคา ปรับกระบวนการ หรือหยุดขาย',
    ],
    keywords: ['วิเคราะห์ต้นทุน', 'วิเคราะห์กำไร', 'ต้นทุนธุรกิจ', 'Gross Margin', 'Cost Analysis', 'Profitability Analysis'],
    relatedSlugs: ['gross-margin-guide', 'break-even-point-guide', 'cost-leakage-signs', 'erp-business-readiness'],
    ctaTitle: 'ไม่แน่ใจว่าธุรกิจของคุณมีกำไรจริงจากสินค้า หรือบริการตัวไหน? ให้ S2 ช่วยวิเคราะห์ต้นทุนและกำไรจากข้อมูลจริงของธุรกิจคุณ',
    ctaLabel: 'ขอคำปรึกษาด้านต้นทุนและกำไร',
    ctaHref: '/contact?service=cost-profitability-analysis',
  },
  {
    slug: 'tax-planning-year-end',
    title: 'วางแผนภาษีปลายปี ประหยัดได้อย่างถูกกฎหมาย',
    excerpt:
      'ก่อนสิ้นปีบัญชี มีหลายวิธีที่ช่วยให้ธุรกิจบริหารภาระภาษีได้อย่างเหมาะสม มาดูแนวทางที่ใช้ได้จริงกัน',
    coverImage: '/images/articles/tax-planning-year-end-v2.png',
    imageAlt: 'วางแผนภาษีปลายปี ประหยัดได้อย่างถูกกฎหมาย',
    category: 'ภาษี',
    author: 'คุณเบญจวรรณ พงษ์ไพศาล',
    date: '8 กรกฎาคม 2567',
    readTime: '7 นาที',
    content: [
      'การวางแผนภาษีที่ดีต้องเริ่มก่อนสิ้นปีบัญชี ไม่ใช่รอจนถึงเวลายื่นแบบ เพราะหลายมาตรการต้องดำเนินการภายในรอบบัญชีจึงจะใช้สิทธิได้',
      'ตัวอย่างเช่น การลงทุนในทรัพย์สินที่ได้รับสิทธิหักค่าเสื่อมพิเศษ การบริจาคที่หักลดหย่อนได้ และการใช้สิทธิประโยชน์ตามมาตรการส่งเสริมการลงทุน',
      'สิ่งสำคัญคือต้องวางแผนบนพื้นฐานของกฎหมายอย่างถูกต้อง ไม่ใช่การหลีกเลี่ยงภาษี การมีที่ปรึกษาช่วยประเมินจะทำให้มั่นใจว่าใช้สิทธิได้เต็มที่และปลอดภัย',
      'แนะนำให้ทบทวนโครงสร้างภาษีทุกไตรมาส เพื่อปรับแผนให้สอดคล้องกับผลประกอบการจริงและการเปลี่ยนแปลงของกฎหมาย',
    ],
  },
  {
    slug: 'read-financial-statements',
    title: 'อ่านงบการเงินให้เป็น ผู้บริหารตัดสินใจได้แม่นยำขึ้น',
    excerpt:
      'งบการเงินไม่ใช่แค่เอกสารสำหรับยื่นภาษี แต่คือเครื่องมือสำคัญในการบริหารธุรกิจ เรียนรู้วิธีอ่านให้เข้าใจ',
    coverImage: '/images/articles/read-financial-statements-v2.png',
    imageAlt: 'อ่านงบการเงินให้เป็น ผู้บริหารตัดสินใจได้แม่นยำขึ้น',
    category: 'บัญชี',
    author: 'คุณศิริพร สุวรรณเดช',
    date: '1 กรกฎาคม 2567',
    readTime: '8 นาที',
    content: [
      'ผู้บริหารหลายคนมองงบการเงินเป็นเรื่องของนักบัญชี แต่จริงๆ แล้วงบการเงินคือแผนที่ที่บอกสุขภาพของธุรกิจได้อย่างชัดเจน',
      'เริ่มจากงบกำไรขาดทุน ที่บอกว่าธุรกิจทำรายได้เท่าไร มีต้นทุนและค่าใช้จ่ายอย่างไร และเหลือกำไรสุทธิเท่าไร ควรดูแนวโน้มเทียบหลายงวด',
      'ถัดมาคืองบแสดงฐานะการเงิน ที่บอกว่าธุรกิจมีทรัพย์สิน หนี้สิน และส่วนของเจ้าของเท่าไร ช่วยประเมินความมั่นคงและความสามารถในการชำระหนี้',
      'สุดท้ายคืองบกระแสเงินสด ที่แสดงการเคลื่อนไหวของเงินจริง เมื่ออ่านทั้งสามงบร่วมกัน ผู้บริหารจะเห็นภาพรวมและตัดสินใจได้อย่างมั่นใจ',
    ],
  },
  {
    slug: 'when-to-hire-cfo',
    title: 'ธุรกิจควรมี CFO เมื่อไร และทางเลือกแบบ CFO Advisory',
    excerpt:
      'เมื่อธุรกิจเติบโตถึงจุดหนึ่ง การตัดสินใจการเงินซับซ้อนขึ้น บทความนี้ช่วยประเมินว่าเมื่อไรควรมีที่ปรึกษาระดับ CFO',
    coverImage: '/images/articles/when-to-hire-cfo-v2.png',
    imageAlt: 'ธุรกิจควรมี CFO เมื่อไร และทางเลือกแบบ CFO Advisory',
    category: 'CFO Insight',
    author: 'คุณอนุชา ธีรวัฒน์',
    date: '24 มิถุนายน 2567',
    readTime: '6 นาที',
    content: [
      'CFO หรือประธานเจ้าหน้าที่บริหารการเงิน มีบทบาทมากกว่าการดูแลบัญชี แต่คือผู้วางกลยุทธ์การเงินและช่วยผู้บริหารตัดสินใจเชิงธุรกิจ',
      'สัญญาณที่บอกว่าธุรกิจควรมี CFO ได้แก่ การเติบโตเร็วจนควบคุมการเงินยาก การเตรียมระดมทุน การขยายสู่ตลาดใหม่ หรือการมีบริษัทในเครือหลายแห่ง',
      'อย่างไรก็ตาม ธุรกิจขนาดกลางอาจยังไม่พร้อมมี CFO ประจำเต็มเวลา ทางเลือกแบบ CFO Advisory จึงตอบโจทย์ เพราะได้มุมมองระดับผู้บริหารในต้นทุนที่เหมาะสม',
      'บริการ CFO Advisory ช่วยตั้งแต่การวิเคราะห์การเงิน วางงบประมาณ ไปจนถึงการให้คำปรึกษาการลงทุน โดยไม่ต้องแบกต้นทุนพนักงานประจำ',
    ],
  },
  {
    slug: 'ecommerce-accounting-tips',
    title: 'บัญชีร้านค้าออนไลน์ จัดการอย่างไรให้ไม่ปวดหัว',
    excerpt:
      'ธุรกิจ E-Commerce มีรายการจำนวนมากและหลายช่องทาง การวางระบบบัญชีที่ดีจึงสำคัญมาก มาดูแนวทางกัน',
    coverImage: '/images/articles/ecommerce-accounting-tips-v2.png',
    imageAlt: 'บัญชีร้านค้าออนไลน์ จัดการอย่างไรให้ไม่ปวดหัว',
    category: 'บัญชี',
    author: 'คุณกฤษณะ วัฒนกุล',
    date: '17 มิถุนายน 2567',
    readTime: '5 นาที',
    content: [
      'ร้านค้าออนไลน์มักขายผ่านหลายช่องทาง ทั้งเว็บไซต์ มาร์เก็ตเพลส และโซเชียลมีเดีย ทำให้มีรายการจำนวนมากที่ต้องบันทึกให้ครบถ้วน',
      'กุญแจสำคัญคือการเชื่อมต่อระบบ ให้ข้อมูลการขายไหลจากแพลตฟอร์มเข้าสู่ระบบบัญชีโดยอัตโนมัติ ลดการบันทึกซ้ำและความผิดพลาด',
      'อีกเรื่องที่ต้องระวังคือค่าธรรมเนียมแพลตฟอร์ม ค่าขนส่ง และภาษี ซึ่งต้องบันทึกให้ถูกต้องเพื่อให้เห็นกำไรที่แท้จริงของแต่ละช่องทาง',
      'การมีระบบบัญชีที่ดีตั้งแต่ต้น จะช่วยให้เจ้าของร้านเห็นตัวเลขชัดเจน และตัดสินใจเรื่องสินค้าและช่องทางได้อย่างมีข้อมูล',
    ],
  },
  {
    slug: 'new-tax-law-update',
    title: 'อัปเดตกฎหมายภาษีที่ผู้ประกอบการควรรู้ปีนี้',
    excerpt:
      'กฎหมายภาษีมีการเปลี่ยนแปลงอยู่เสมอ สรุปประเด็นสำคัญที่ธุรกิจควรติดตามและเตรียมพร้อมรับมือ',
    coverImage: '/images/articles/tax-law-update.png',
    imageAlt: 'อัปเดตกฎหมายภาษีที่ผู้ประกอบการควรรู้ปีนี้',
    category: 'ข่าวสารกฎหมาย',
    author: 'คุณเบญจวรรณ พงษ์ไพศาล',
    date: '10 มิถุนายน 2567',
    readTime: '5 นาที',
    content: [
      'การติดตามการเปลี่ยนแปลงของกฎหมายภาษีเป็นสิ่งจำเป็น เพราะมีผลโดยตรงต่อภาระภาษีและการวางแผนของธุรกิจ',
      'ประเด็นที่ควรจับตาได้แก่ มาตรการภาษีเพื่อส่งเสริมการลงทุน การปรับปรุงหลักเกณฑ์ภาษีมูลค่าเพิ่ม และแนวทางการจัดเก็บภาษีจากธุรกิจดิจิทัล',
      'ธุรกิจควรทบทวนว่าการเปลี่ยนแปลงเหล่านี้กระทบกับตนเองอย่างไร และปรับกระบวนการให้สอดคล้อง เพื่อลดความเสี่ยงจากการปฏิบัติไม่ถูกต้อง',
      'การมีที่ปรึกษาที่ติดตามกฎหมายอย่างใกล้ชิด จะช่วยให้ธุรกิจปรับตัวได้ทันและใช้สิทธิประโยชน์ใหม่ๆ ได้อย่างเต็มที่',
    ],
  },
  {
    slug: 'gross-margin-guide', title: 'Gross Margin คืออะไร และเจ้าของธุรกิจควรดูตัวเลขนี้อย่างไร',
    excerpt: 'เข้าใจ Gross Profit และ Gross Margin พร้อมวิธีดู Margin แยกสินค้าเพื่อจับสัญญาณกำไรที่กำลังลดลง',
    coverImage: '/images/articles/gross-margin-guide.png', imageAlt: 'การวิเคราะห์ Gross Margin แยกตามสินค้า', category: 'ต้นทุนและกำไร', author: 'ทีม S2 Accounting Consultant', date: '22 กรกฎาคม 2567', readTime: '7 นาที',
    content: ['Gross Profit คือรายได้หักต้นทุนขาย ส่วน Gross Margin คือ Gross Profit หารด้วยรายได้และแสดงเป็นเปอร์เซ็นต์ ตัวเลขนี้ช่วยเปรียบเทียบความสามารถในการทำกำไรระหว่างสินค้าและช่วงเวลาได้ชัดเจน', 'การดูค่าเฉลี่ยทั้งบริษัทอย่างเดียวอาจซ่อนปัญหา ควรแยก Margin ตามสินค้า บริการ ช่องทาง และสาขา เพราะสินค้ายอดขายสูงอาจมีกำไรต่ำจากส่วนลด ค่าธรรมเนียม หรือของเสีย', 'Margin erosion มักเกิดเมื่อต้นทุนวัตถุดิบ ค่าแรง หรือค่าขนส่งเพิ่ม แต่ราคาขายไม่ได้ปรับ ผู้บริหารควรกำหนดเกณฑ์เตือนและทบทวนต้นทุนมาตรฐานอย่างสม่ำเสมอ', 'ข้อมูล Margin ที่ถูกต้องช่วยตัดสินใจเรื่อง Pricing, Product Mix, Promotion และสินค้าที่ควรผลักดันหรือหยุดขายได้บนข้อมูลจริง'],
    keywords: ['Gross Margin', 'Gross Profit', 'วิเคราะห์กำไร', 'Pricing Analysis'], relatedSlugs: ['true-business-costs', 'break-even-point-guide', 'cost-leakage-signs'], ctaTitle: 'ต้องการเห็น Margin จริงแยกตามสินค้า บริการ หรือสาขา?', ctaLabel: 'ขอคำปรึกษาด้านต้นทุนและกำไร', ctaHref: '/contact?service=cost-profitability-analysis',
  },
  {
    slug: 'break-even-point-guide', title: 'Break-even Point: ต้องขายเท่าไร ธุรกิจถึงจะไม่ขาดทุน',
    excerpt: 'คำนวณยอดขายขั้นต่ำจาก Fixed Cost และ Contribution Margin เพื่อวางเป้ายอดขาย ราคา และกำลังการผลิตอย่างมีเหตุผล',
    coverImage: '/images/articles/break-even-point-guide.png', imageAlt: 'การคำนวณจุดคุ้มทุนของธุรกิจ', category: 'ต้นทุนและกำไร', author: 'ทีม S2 Accounting Consultant', date: '29 กรกฎาคม 2567', readTime: '7 นาที',
    content: ['Break-even Point คือระดับยอดขายที่รายได้รวมเท่ากับต้นทุนรวม ธุรกิจยังไม่มีกำไรแต่ก็ไม่ขาดทุน จึงเป็นเส้นฐานสำคัญของการวางแผน', 'สูตรพื้นฐานคือ Fixed Cost หารด้วย Contribution Margin ต่อหน่วย หากค่าใช้จ่ายคงที่เดือนละ 300,000 บาท และสินค้าสร้าง Contribution Margin หน่วยละ 150 บาท ต้องขาย 2,000 หน่วยจึงจะคุ้มทุน', 'ธุรกิจบริการสามารถใช้ชั่วโมงทำงานหรือจำนวน Project เป็นหน่วย ส่วนธุรกิจหลายสินค้าควรใช้ Weighted Average Contribution Margin ตาม Product Mix จริง', 'ควรทำ Scenario เปรียบเทียบเมื่อราคา ต้นทุน หรือยอดขายเปลี่ยน เพื่อกำหนดเป้าหมายและ Safety Margin ก่อนตัดสินใจลงทุนหรือขยายสาขา'],
    keywords: ['Break-even Point', 'Contribution Margin', 'จุดคุ้มทุน'], relatedSlugs: ['true-business-costs', 'gross-margin-guide', 'read-financial-statements'], ctaTitle: 'อยากรู้ว่ายอดขายเท่าไรจึงครอบคลุมต้นทุนจริง?', ctaLabel: 'ขอวิเคราะห์จุดคุ้มทุน', ctaHref: '/contact?service=cost-profitability-analysis',
  },
  {
    slug: 'cost-leakage-signs', title: '5 สัญญาณว่าธุรกิจของคุณมี Cost Leakage',
    excerpt: 'สต็อกสูญหาย ส่วนลดมากเกินไป ของเสีย OT และขั้นตอนซ้ำซ้อน อาจกำลังกินกำไรโดยที่รายงานรวมมองไม่เห็น',
    coverImage: '/images/articles/cost-leakage-signs.png', imageAlt: 'จุดรั่วไหลของต้นทุนในธุรกิจ', category: 'ต้นทุนและกำไร', author: 'ทีม S2 Accounting Consultant', date: '5 สิงหาคม 2567', readTime: '6 นาที',
    content: ['สัญญาณแรกคือสต็อกจริงไม่ตรงระบบหรือมีของเสียสูง สัญญาณที่สองคือส่วนลดและโปรโมชั่นเพิ่มยอดขายแต่ไม่เพิ่ม Contribution Margin', 'สัญญาณที่สามคือราคาจัดซื้อเปลี่ยนโดยไม่มีการติดตาม Standard Cost สัญญาณที่สี่คือ OT และค่าแรงเพิ่มเร็วกว่าปริมาณงาน', 'สัญญาณที่ห้าคือขั้นตอนทำงานซ้ำ การกรอกข้อมูลหลายระบบ และเวลารออนุมัติ ซึ่งเป็น Hidden Cost ที่ไม่ปรากฏตรงๆ ในต้นทุนสินค้า', 'เริ่มแก้ด้วยการกำหนด Cost Owner, ตัวชี้วัด และรายงาน Exception แยกตามสาขาหรือหน่วยธุรกิจ แล้วติดตามผลเป็นรอบแทนการลดค่าใช้จ่ายแบบเหวี่ยงแห'],
    keywords: ['Cost Leakage', 'ลดต้นทุน', 'ต้นทุนแฝง'], relatedSlugs: ['true-business-costs', 'gross-margin-guide', 'erp-business-process'], ctaTitle: 'สงสัยว่ากำไรกำลังรั่วไหลจากจุดใด?', ctaLabel: 'ขอคำปรึกษาด้าน Cost Leakage', ctaHref: '/contact?service=cost-profitability-analysis',
  },
  {
    slug: 'erp-business-readiness', title: 'ธุรกิจโตถึงจุดไหน จึงควรเริ่มใช้ ERP?', excerpt: 'ประเมินความพร้อมจากความซับซ้อนของ Process ปริมาณข้อมูล จำนวนสาขา และข้อจำกัดของระบบเดิมก่อนลงทุน ERP',
    coverImage: '/images/articles/erp-business-readiness.png', imageAlt: 'การประเมินความพร้อมก่อนเริ่มใช้ ERP', category: 'ระบบบัญชีและ ERP', author: 'ทีม S2 Accounting Consultant', date: '12 สิงหาคม 2567', readTime: '7 นาที',
    content: ['สัญญาณสำคัญคือทีมใช้ Excel หลายชุด ข้อมูลขาย สต็อก และบัญชีไม่ตรงกัน ต้องบันทึกซ้ำ หรือใช้เวลาปิดงบนานขึ้นตามการเติบโต', 'ERP เหมาะเมื่อ Process เริ่มเชื่อมโยงหลายฝ่ายและผู้บริหารต้องการข้อมูลที่ทันเวลา แต่การซื้อระบบก่อนจัดระเบียบ Process มักเพียงย้ายความสับสนเข้าไปในโปรแกรมใหม่', 'ก่อนเลือก ERP ควรทำ As-Is Analysis ออกแบบ To-Be Process กำหนด Master Data, Chart of Accounts, สิทธิผู้ใช้ และ Reporting Requirement ให้ชัดเจน', 'S2 ทำหน้าที่ที่ปรึกษาฝั่งธุรกิจและบัญชี ช่วยจัดทำ Requirement ที่เป็นกลางเพื่อให้บริษัทเปรียบเทียบ Vendor และควบคุมโครงการได้ ไม่ได้ขายซอฟต์แวร์ ERP'],
    keywords: ['ERP Consultant Thailand', 'ที่ปรึกษา ERP', 'ERP Implementation', 'Business Process'], relatedSlugs: ['erp-business-process', 'erp-implementation-mistakes', 'true-business-costs'], ctaTitle: 'ระบบเดิมเริ่มไม่รองรับการเติบโตของธุรกิจ?', ctaLabel: 'ปรึกษาระบบบัญชีและ ERP', ctaHref: '/contact?service=accounting-systems-erp-advisory',
  },
  {
    slug: 'erp-business-process', title: 'ERP ไม่ใช่แค่โปรแกรมบัญชี: ระบบ ERP เชื่อมธุรกิจอย่างไร', excerpt: 'เข้าใจการเชื่อม Sales, Purchase, Inventory, Costing, Accounting และ Management Reporting บนข้อมูลชุดเดียวกัน',
    coverImage: '/images/articles/erp-business-process.png', imageAlt: 'ERP เชื่อมโยงกระบวนการธุรกิจและบัญชี', category: 'ระบบบัญชีและ ERP', author: 'ทีม S2 Accounting Consultant', date: '19 สิงหาคม 2567', readTime: '8 นาที',
    content: ['ERP เชื่อม Order-to-Cash ตั้งแต่รับคำสั่งขาย ส่งสินค้า ออกใบแจ้งหนี้ ไปจนถึงรับชำระ และเชื่อม Purchase-to-Pay ตั้งแต่ขอซื้อ รับสินค้า ตั้งเจ้าหนี้ จนถึงจ่ายเงิน', 'ข้อมูล Inventory และ Costing ที่ออกแบบดีจะทำให้ยอดสต็อก ต้นทุนสินค้า และบัญชีแยกประเภทสอดคล้องกัน ลดการกระทบยอดด้วยมือ', 'Accounting และ Finance จึงรับข้อมูลจากต้นทางโดยอัตโนมัติ ขณะที่ Management Reporting ใช้ข้อมูลชุดเดียวกันเพื่อวิเคราะห์ยอดขาย Margin กระแสเงินสด และ KPI', 'หัวใจไม่ใช่จำนวน Module แต่คือ Process Owner, Master Data, Approval Workflow และ Internal Control ที่ทุกฝ่ายเข้าใจร่วมกัน'],
    keywords: ['ระบบบัญชี ERP', 'Business Process', 'Accounting System Consultant'], relatedSlugs: ['erp-business-readiness', 'erp-implementation-mistakes', 'cost-leakage-signs'], ctaTitle: 'ต้องการออกแบบ Process และข้อมูลก่อนเลือก ERP?', ctaLabel: 'ปรึกษาระบบบัญชีและ ERP', ctaHref: '/contact?service=accounting-systems-erp-advisory',
  },
  {
    slug: 'erp-implementation-mistakes', title: '7 ข้อผิดพลาดที่ธุรกิจมักเจอก่อนเริ่ม Implement ERP', excerpt: 'หลีกเลี่ยง Requirement ไม่ชัด ข้อมูลไม่พร้อม Scope บานปลาย และการทดสอบที่ไม่สะท้อนงานจริง',
    coverImage: '/images/articles/erp-implementation-mistakes.png', imageAlt: 'ข้อผิดพลาดก่อนเริ่มโครงการ ERP', category: 'ระบบบัญชีและ ERP', author: 'ทีม S2 Accounting Consultant', date: '26 สิงหาคม 2567', readTime: '8 นาที',
    content: ['ข้อผิดพลาดที่พบบ่อยคือเลือกซอฟต์แวร์ก่อนออกแบบ Process, ไม่มี Project Owner, Requirement เขียนตามหน้าจอเดิม และไม่กำหนดขอบเขตให้ชัด', 'อีกสามข้อคือ Master Data ไม่สะอาด ไม่ออกแบบ Chart of Accounts และ Internal Control ร่วมกัน และประเมิน Data Migration ต่ำกว่าความเป็นจริง', 'ข้อสุดท้ายคือ UAT ทดสอบเฉพาะ Happy Path ไม่ครอบคลุมรายการคืนสินค้า ส่วนลด การแก้ไขเอกสาร การปิดงวด และสิทธิอนุมัติ', 'โครงการควรมี Business Blueprint, RACI, Test Scenario, Cutover Plan และเกณฑ์รับมอบที่ตรวจสอบได้ ก่อนเริ่ม Configuration กับ Vendor'],
    keywords: ['ERP Implementation', 'UAT', 'Data Migration', 'ERP Requirements'], relatedSlugs: ['erp-business-readiness', 'erp-business-process', 'true-business-costs'], ctaTitle: 'กำลังเตรียม Implement ERP และต้องการ Requirement ที่ตรวจสอบได้?', ctaLabel: 'ปรึกษาระบบบัญชีและ ERP', ctaHref: '/contact?service=accounting-systems-erp-advisory',
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
export const popularArticles = articles.slice(1, 5);
