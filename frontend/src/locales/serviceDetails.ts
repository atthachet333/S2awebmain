import type { Locale } from './index';

type DetailLists = { deliverables: string[]; process: string[]; documents: string[] };
type LocalizedDetail = { en: DetailLists; zh: DetailLists };

export const localizedServiceDetails: Record<string, LocalizedDetail> = {
  'monthly-accounting': {
    en: { deliverables: ['Complete bookkeeping and accounting ledgers', 'Monthly trial balance and financial reports', 'VAT and withholding tax preparation and filing', 'Monthly financial overview for management'], process: ['Collect and review monthly documents', 'Record entries under financial reporting standards', 'Reconcile accounts and prepare reports', 'File taxes and deliver reports'], documents: ['Purchase and sales tax invoices', 'Bank account statements', 'Expense documents and receipts', 'Employee payroll documents'] },
    zh: { deliverables: ['完整记账及会计账簿', '月度试算表与财务报告', '增值税及预扣税编制与申报', '每月向管理层汇报财务概况'], process: ['收集并审查月度文件', '依据财务报告准则记账', '对账并编制报告', '申报税务并交付报告'], documents: ['进销项税务发票', '银行账户流水', '费用文件与收据', '员工薪资文件'] },
  },
  'accounting-system': {
    en: { deliverables: ['Chart of accounts tailored to the business', 'Accounting policies and recording guidelines', 'Document flow and approval sequence', 'AR / AP and receipts-and-payments processes', 'Inventory flow linked to accounting entries', 'Month-end closing steps and internal control points', 'Accounting and management reporting structure', 'Accounting software configuration requirements and operating manual'], process: ['Review current processes and documents', 'Design the chart of accounts, policies and document flow', 'Define control points, approvals and closing steps', 'Summarize software configuration requirements and coordinate with the software administrator', 'Train the team and hand over manuals'], documents: ['Organization structure and workflow', 'Samples of current documents', 'Product, service and pricing data', 'Current accounting software (if any)'] },
    zh: { deliverables: ['适合企业的会计科目表', '会计政策与记账准则', '单据流程与审批顺序', '应收应付（AR / AP）及收付款流程', '与会计记录衔接的库存流程', '月末结账步骤与内部控制点', '会计报表与管理报表结构', '会计软件配置需求与操作手册'], process: ['调研现有流程与单据', '设计会计科目、政策与单据流程', '确定控制点、审批与结账步骤', '汇总软件配置需求并与软件管理方协调', '培训团队并交付手册'], documents: ['组织架构与流程图', '现用文件样本', '产品、服务与价格信息', '现用会计软件（如有）'] },
  },
  'financial-statements': {
    en: { deliverables: ['Statement of financial position and income statement', 'Notes to the financial statements', 'Auditor coordination', 'Filing with the DBD and Revenue Department'], process: ['Collect and review annual data', 'Post adjustments and reconcile accounts', 'Prepare final financial statements', 'File statements and supporting documents'], documents: ['Annual trial balance and ledgers', 'Asset and liability details', 'Tax filings made during the year'] },
    zh: { deliverables: ['财务状况表与利润表', '财务报表附注', '协调审计师', '向商业发展厅及税务局申报'], process: ['收集并审核全年数据', '调整分录并完成对账', '编制最终财务报表', '提交报表及相关文件'], documents: ['全年试算表与账簿', '资产与负债明细', '年度内税务申报文件'] },
  },
  'tax-filing': {
    en: { deliverables: ['VAT and withholding tax filing', 'Mid-year and annual corporate income tax filing', 'Complete tax forms and supporting documents', 'Monitoring tax-law changes'], process: ['Validate accounting data', 'Calculate tax and review available benefits', 'Prepare forms and file taxes', 'Retain evidence and monitor status'], documents: ['Purchase and sales tax reports', 'Withholding tax details', 'Financial statements and revenue details'] },
    zh: { deliverables: ['增值税与预扣税申报', '企业所得税半年及年度申报', '完整税表及支持文件', '持续跟踪税法变化'], process: ['核验数据准确性', '计算税额并检查优惠', '准备表格并申报', '留存凭证并跟踪结果'], documents: ['进销项税报告', '预扣税明细', '财务报表与收入明细'] },
  },
  'tax-planning': {
    en: { deliverables: ['Current tax-structure analysis', 'Plan for available tax incentives', 'Recommended business structure', 'Estimated tax effect of each option'], process: ['Study business information and goals', 'Analyze options and risks', 'Design the tax plan', 'Monitor and refine the plan'], documents: ['Historical financial statements', 'Shareholder and group structure', 'Business and investment plans'] },
    zh: { deliverables: ['当前税务结构分析', '税务优惠使用方案', '合适的企业架构建议', '各方案的预计税务影响'], process: ['了解业务信息与目标', '分析方案与风险', '设计税务计划', '持续跟踪与调整'], documents: ['历史财务报表', '股东及关联公司架构', '商业与投资计划'] },
  },
  'cfo-advisory': {
    en: { deliverables: ['Financial health and key KPI analysis', 'Management reporting and financial modelling', 'Scenario analysis and cash planning', 'Budget and forecast monitoring', 'Financial preparation for fundraising or business transactions', 'Performance reviews and management decision support'], process: ['Assess organizational finances', 'Define KPIs and targets', 'Build and monitor the financial plan', 'Provide ongoing strategic advice'], documents: ['Financial statements and management reports', 'Business plan and capital budget', 'Detailed sales and cost data'] },
    zh: { deliverables: ['财务健康与关键KPI分析', '管理报告与财务模型', '情景分析与资金规划', '预算与预测跟踪', '为融资或商业交易做财务准备', '经营复盘与管理决策支持'], process: ['评估企业财务状况', '设定指标与目标', '制定并跟踪财务计划', '持续提供战略建议'], documents: ['财务报表与管理报告', '商业计划与资本预算', '详细销售及成本数据'] },
  },
  'financial-analysis': {
    en: { deliverables: ['Key financial ratio analysis', 'Company-level profitability analysis', 'Cash flow and liquidity analysis', 'Comparison against targets and prior periods', 'Actionable recommendations'], process: ['Collect financial and operating data', 'Analyze and build KPIs', 'Summarize key findings', 'Present and plan improvements'], documents: ['Historical financial statements', 'Sales and cost reports', 'Targets and budgets'] },
    zh: { deliverables: ['关键财务比率分析', '企业整体盈利能力分析', '现金流与流动性分析', '与目标及往期对比', '可执行改进建议'], process: ['收集财务及运营数据', '分析并建立指标', '总结关键发现', '汇报并制定改进计划'], documents: ['历史财务报表', '销售与成本报告', '目标与预算'] },
  },
  'cost-profitability-analysis': {
    en: { deliverables: ['Fixed, variable, direct and indirect cost analysis', 'Gross Profit, Gross Margin and Contribution Margin analysis', 'Break-even Point calculation', 'Profitability by product, service, branch and project', 'Cost leakage and unusual expense analysis', 'Pricing analysis and selling-price recommendations', 'Cost-control opportunities without harming operations', 'Executive management summary'], process: ['Collect revenue, cost and expense data', 'Classify costs and define cost drivers', 'Analyze true cost, margins and break-even', 'Compare products, services, branches and projects', 'Identify cost leakage and improvement areas', 'Deliver a management report with pricing, cost and profit recommendations'], documents: ['Sales data by product, service, branch or project', 'Materials, labor and operating-expense data', 'Pricing, discount and promotion structures', 'Inventory, loss and waste data'] },
    zh: { deliverables: ['固定、变动、直接与间接成本分析', '毛利、毛利率与贡献毛利分析', '盈亏平衡点计算', '按产品、服务、分店及项目分析盈利', '成本流失与异常费用分析', '定价分析与售价调整建议', '不影响运营的成本控制方案', '管理层摘要报告'], process: ['收集收入、成本及费用数据', '成本分类并确定成本动因', '分析真实成本、利润率与盈亏平衡点', '比较产品、服务、分店与项目', '识别成本流失及改进重点', '提交管理报告及定价、成本与利润建议'], documents: ['按产品、服务、分店或项目划分的销售数据', '材料、人工及运营费用数据', '售价、折扣与促销结构', '库存、损耗与废料数据'] },
  },
  'budgeting-forecasting': {
    en: { deliverables: ['Annual departmental budgets', 'Revenue, expense and cash flow forecasts', 'Actual-versus-budget variance analysis', 'Quarterly forecast updates'], process: ['Set assumptions and targets', 'Build budgets with the team', 'Track actuals against budget', 'Review and adjust the plan'], documents: ['Historical operating results', 'Business plan and departmental targets', 'Cost and pricing assumptions'] },
    zh: { deliverables: ['按部门编制年度预算', '收入、费用与现金流预测', '实际与预算差异分析', '季度预测更新'], process: ['设定假设与目标', '与团队共同编制预算', '跟踪实际与预算差异', '复盘并调整计划'], documents: ['历史经营成果', '商业计划与部门目标', '成本与定价假设'] },
  },
  payroll: {
    en: { deliverables: ['Payroll processing: salary, deductions, tax and contribution calculation', 'Employee payslips', 'Social security and payroll withholding tax filing (PND 1)', 'Annual PND 1 Kor and withholding tax certificates', 'Monthly payroll reports for management and accounting'], process: ['Receive employee data and conditions', 'Calculate payroll and deductions', 'Prepare payslips and reports', 'File documents with authorities'], documents: ['Employee and salary data', 'Leave and overtime data', 'Social security and bank details'] },
    zh: { deliverables: ['薪资处理：计算工资、扣款、税款及缴费', '员工工资单', '社会保险及工资预扣税申报（PND 1）', '年度 PND 1 Kor 及预扣税证明', '面向管理层与会计的月度薪资报告'], process: ['接收员工资料与条件', '计算薪资及扣款', '编制工资单与报告', '向相关机构提交文件'], documents: ['员工与薪资数据', '请假与加班数据', '社保及银行账户信息'] },
  },
  'company-registration': {
    en: { deliverables: ['Company or partnership registration', 'VAT and employer registration', 'Memorandum and company regulations', 'Shareholding structure advice'], process: ['Consult and prepare information', 'Reserve the name and prepare documents', 'Submit registration to authorities', 'Complete tax registration and handover'], documents: ['Founders’ ID copies', 'Registered office information', 'Registered capital and shareholder details'] },
    zh: { deliverables: ['公司或合伙企业注册', '增值税及雇主登记', '公司章程与相关规定', '股权结构建议'], process: ['咨询并准备信息', '预留名称并编制文件', '向相关机构提交注册', '完成税务登记并交付文件'], documents: ['创始人身份证件复印件', '注册办公地址信息', '注册资本与股东明细'] },
  },
  'accounting-systems-erp-advisory': {
    en: { deliverables: ['Business process assessment and As-Is analysis', 'Cross-functional To-Be processes: Purchase-to-Pay, Order-to-Cash, inventory, costing and production', 'ERP readiness assessment', 'Business and system requirements', 'Vendor-neutral system and vendor evaluation criteria', 'Master-data design', 'Integration, roles & permissions and reporting requirements', 'Data-migration and UAT plans', 'Business-side implementation governance', 'Post-go-live review'], process: ['Interview stakeholders and assess current processes', 'Identify pain points, readiness and system gaps', 'Design To-Be processes and data structures', 'Prepare requirements and evaluate systems or vendors neutrally', 'Plan migration and UAT and govern business-side implementation', 'Review the system after go-live and propose improvements'], documents: ['Current processes and working documents', 'Chart of accounts and report samples', 'Master-data lists and integration landscape', 'Approval policies, user roles and internal controls'] },
    zh: { deliverables: ['业务流程评估与现状分析', '跨部门目标流程：采购到付款、订单到收款、库存、成本及生产', 'ERP 实施准备度评估', '业务需求与系统需求', '中立的系统与供应商评估标准', '主数据设计', '集成、角色权限与报表需求', '数据迁移与 UAT 计划', '业务端实施治理', '上线后复盘'], process: ['访谈相关人员并评估当前流程', '识别痛点、准备度及系统缺口', '设计目标流程与数据结构', '编制需求并中立评估系统或供应商', '规划迁移与 UAT，并治理业务端实施', '上线后评估系统并提出改进'], documents: ['当前流程与工作文件', '会计科目表及报表示例', '主数据清单与系统集成情况', '审批政策、用户角色与内部控制'] },
  },
};

export function getLocalizedServiceDetails(slug: string, locale: Locale): DetailLists | null {
  if (locale === 'th') return null;
  return localizedServiceDetails[slug]?.[locale] ?? null;
}
