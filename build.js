// 檔案用途：系統自動化建置、環境打包與部署腳本。
// 備註：負責將開發環境設定轉換為可部署的執行狀態。
// ===================================================================================
// 🤖 【總部全自動資安編譯清洗引擎】
// ===================================================================================
const fs = require('fs');
const minify = require('html-minifier').minify;

function compileSystem() {
    try {
        console.log("⏳ 機器人啟動：正在讀取含有【小白調整區】的 source.html 母體大腦...");
        const rawHtml = fs.readFileSync('source.html', 'utf8');
        
        console.log("🧹 正在進行企業級大清洗：全面拔除中文備註、壓縮程式碼空間...");
        // 啟動資安防禦壓縮
        const cleanHtml = minify(rawHtml, {
            removeComments: true,         // 🎯 核心：全自動拔除所有 collapseWhitespace: true,     // 🎯 核心：消除所有換行與空白，壓縮成一行天書
            minifyJS: true,               // 🎯 核心：連動壓縮鎖死 <script> 內部的 // 與 /* */ 註解
            minifyCSS: true               // 🎯 核心：連動壓縮 <style> 內部的排版樣式
        });
        
        // 將清洗完畢、毫無痕跡的代碼輸出成 index.html 給店長使用
        fs.writeFileSync('index.html', cleanHtml);
        console.log("🎉 [編譯成功] index.html 已無痕生成！店長按 F12 再也看不到任何中文註釋！");
    } catch (err) {
        console.error("❌ 編譯拋錨，錯誤原因：", err);
        process.exit(1);
    }
}

compileSystem();
