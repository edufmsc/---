// 門市日常 10 大表單的「規格說明書」
// 未來如果你想增加第 5、第 6 個檔案，直接在下方複製格式往後加即可，完全不用動到網頁主程式！
window.FORMS_CONFIG = [
  {
    id: "neighbor",
    title: "01. 管區與鄰里長資料",
    icon: "🏘️",
    type: "grid_sections", // 代表是由好幾個區塊組成的填空題
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
  },
  {
    id: "personnel",
    title: "02. 營業二處通訊錄",
    icon: "👥",
    type: "fixed_table", // 代表是固定列數的 Excel 表格
    headers: ["職稱", "姓名", "手機", "住家電話", "備註"],
    rows: ["主管", "區主管", "店經理", "店副理", "店副理", "店副理", "帶班店襄理", "帶班店襄理"],
    defaultValues: { "row_0_cell_1": "黃達昌", "row_0_cell_2": "0906-100-180" } // 預設測試資料
  },
  {
    id: "cards",
    title: "03. 員工建卡與勞健保",
    icon: "🪪",
    type: "dynamic_table", // 代表可以由店長自由增加無限列的表格
    headers: ["編號", "姓名", "出生日期", "電話/手機", "地址", "報到(調入)日期", "加保日期 (勞/健)", "出示駕照", "離職(調出)日期", "離職書", "主管簽核"],
    fields: [
      { key: "no", type: "text" },
      { key: "name", type: "text" },
      { key: "birth", type: "date" },
      { key: "phone", type: "text" },
      { key: "addr", type: "text" },
      { key: "rdate", type: "date" },
      { key: "idate", type: "date" },
      { key: "lic", type: "select", options: ["有", "無"] }, // 下拉選單
      { key: "ldate", type: "date" },
      { key: "llet", type: "text" },
      { key: "sign", type: "text" }
    ]
  },
  {
    id: "security",
    title: "04. 保全與金庫卡持有明細",
    icon: "🔑",
    type: "security_group", // 專屬保全雙表格結構
    tables: [
      { id: "sec_1", name: "🔒 主系統店卡持有明細", cardLabel: "主系統店卡號", rowCount: 6 },
      { id: "sec_2", name: "💰 金庫卡持有明細", cardLabel: "金庫卡號", rowCount: 6 }
    ]
  }
];
