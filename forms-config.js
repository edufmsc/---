// 門市日常 10 大表單的「規格說明書」- 優化調整版
window.FORMS_CONFIG = [
  {
    id: "personnel",
    title: "01. 門市幹部通訊錄",
    icon: "👥",
    type: "dynamic_table", // 1.3 優化：改為動態表格，支援自由自由增減人員
    headers: ["職稱", "姓名", "手機", "住家電話", "備註"],
    fields: [
      { 
        key: "role", 
        type: "select", 
        options: ["處主管", "區主管", "店經理", "店副理", "代班店襄理"] // 1.3 優化：職稱改為下拉選單與指定順序
      },
      { key: "name", type: "text" },
      { key: "phone", type: "text" },
      { key: "home", type: "text" },
      { key: "memo", type: "text" }
    ]
    // 1.2 優化：已徹底刪除黃達昌等預設文字
  },
  {
    id: "cards",
    title: "02. 人事基本資料登記簿",
    icon: "🪪",
    type: "dynamic_table",
    headers: ["編號", "姓名", "出生日期", "電話/手機", "地址", "報到(調入)日期", "加保日期 (勞/健)", "出示駕照", "離職(調出)日期", "離職書", "主管簽核"],
    fields: [
      { key: "no", type: "text" },
      { key: "name", type: "text" },
      { key: "birth", type: "date" },
      { key: "phone", type: "text" },
      { key: "addr", type: "text" },
      { key: "rdate", type: "date" },
      { key: "idate", type: "date" },
      { key: "lic", type: "select", options: ["有", "無"] },
      { key: "ldate", type: "date" },
      { key: "llet", type: "text" },
      { key: "sign", type: "text" }
    ]
  },
  {
    id: "security",
    title: "03. 保全卡與金庫卡持有明細",
    icon: "🔑",
    type: "security_group", // 保持專屬雙表格外觀，但主程式已升級支援動態加減人
    tables: [
      { id: "sec_1", name: "🔒 主系統店卡持有明細", cardLabel: "主系統店卡號" },
      { id: "sec_2", name: "💰 金庫卡持有明細", cardLabel: "金庫卡號" }
    ]
  },
  {
    id: "neighbor",
    title: "04. 管區與鄰里長資料",
    icon: "🏘️",
    type: "grid_sections",
    sections: [
      {
        name: "鄰里長相關資料",
        fields: [
          { id: "nei_1", label: "里名" },
          { id: "nei_2", label: "里長名" },
          { id: "nei_3", label: "里辦公室地址" },
          { id: "nei_4", label: "里辦公室電話 / 里長電話" },
          { id: "nei_5", label: "備註 (與里長相關訊息：鄰里活動贊助、定期水溝清理1999、)", fullWidth: true }
        ]
      },
      {
        name: "管區相關資料",
        fields: [
          { id: "pol_1", label: "管區派出所名" },
          { id: "pol_2", label: "管區警員" },
          { id: "pol_3", label: "管區派出所地址" },
          { id: "pol_4", label: "管區警員電話 / 派出所電話" },
          { id: "pol_5", label: "備註", fullWidth: true }
        ]
      }
    ]
  }
];
