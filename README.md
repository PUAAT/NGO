🚁 SkyBridge Foundation: Operation Heping (V25 Ultimate)

"Bridging Distances, Delivering Hope." > 透過自主無人機技術，為偏鄉獨居長者建立空中的生命補給線。

📖 專案簡介 (Project Overview)

Project SkyBridge 是一個國際級 NGO 示範計畫。針對台灣台中市和平區（Heping District）的地理隔絕問題，我們提出了一套混合物流解決方案。

透過整合「食物銀行」的資源與「無人機」的最後一哩路配送，我們將原本 90 分鐘 的山路車程，縮短為 15 分鐘 的自主飛行，解決獨居長者的斷糧危機並降低物流成本。

🌟 V25 版本核心亮點 (Key Features)

此版本 (V25 Ultimate) 是專為政府提案與企業募資設計的完整展示平台：

1. 🛡️ 風險管理與對策 (Risk & Solutions)

法規突破：針對民航局 BVLOS（視距外飛行）限制，提出「監理沙盒 (Regulatory Sandbox)」申請策略。

混合運補：建立天氣備援機制，當風速 >10m/s 時自動切換為地面機車隊。

安全投放：展示 "Winch-Drop"（吊掛垂降）技術，確保長者不接觸螺旋槳。

2. 💰 財務透明儀表板 (Financial Transparency)

資金流向視覺化：清楚列出資本支出 (CAPEX) 與營運支出 (OPEX)。

零食材成本：強調與食物銀行的合作模式，證明 100% 捐款用於物流運作。

3. 🗺️ 真實 GIS 營運地圖 (Live Operations Map)

整合 Leaflet.js 與 OpenStreetMap。

真實定位於台中和平區雙崎部落，顯示轉運站 (Hub) 與受助戶座標。

4. 🔬 技術研發實驗室 (Tech Labs)

展示 Python 路徑優化演算法 (Energy Optimization)。

展示 C++ 飛控韌體 (Flight Controller Firmware) 模擬代碼。

📂 專案檔案結構 (File Structure)

請確保您的資料夾包含以下檔案，以確保網站功能完整：

SkyBridge_V25_Ultimate/
├── index.html          # [入口] 戰情儀表板、核心願景、地圖預覽
├── challenges.html     # [重點] 挑戰與解決方案（回答教授質疑專用）
├── financials.html     # [重點] 財務透明報告（回答資金流向專用）
├── donate.html         # [互動] 募資計算機與企業 CSR 合作
├── technology.html     # [技術] 開發者實驗室 (展示程式碼實力)
├── style.css           # [樣式] 國際 NGO 標準配色 (深藍/青/金)
├── main.js             # [邏輯] 地圖渲染、互動特效、計算機邏輯
├── route_optimizer.py  # [後端] 路徑耗能計算模擬腳本
├── drone_core.cpp      # [後端] 飛控安全檢查模擬程式
└── README.md           # [文件] 專案說明檔


🚀 快速啟動 (Quick Start)

本專案採用靜態網頁架構 (Static Web App)，無需安裝資料庫。

方式一：使用 VS Code Live Server (推薦)

安裝 VS Code 與 Live Server 插件。

右鍵點擊 index.html。

選擇 Open with Live Server。

方式二：直接開啟

進入資料夾。

雙擊 index.html 使用 Chrome / Edge / Safari 開啟。

🗣️ 簡報答辯指南 (Presentation Cheat Sheet)

當評審或教授提出質疑時，請切換到以下頁面進行防禦：

評審問題 (Killer Questions)

防禦頁面 (Defensive Page)

關鍵回答點 (Key Talking Points)

"法規怎麼過？台灣不能亂飛！"

challenges.html

展示「監理沙盒」申請計畫與專業飛手執照。

"山區風這麼大，掉下來怎麼辦？"

challenges.html

展示 "Hybrid Protocol"（混合模式），天氣不好就不飛，改騎車。

"募資的錢如果不買食物，花去哪？"

financials.html

展示資金圓餅圖，強調資金用於「建置物流網」與「在地青年培訓」。

"這真的比開車送餐划算嗎？"

financials.html

展示 5 年成本比較圖，證明長期維運成本低於傳統人力。

"你們懂技術嗎？還是只是空想？"

technology.html

展示 Python 路徑演算法，證明有考慮重力位能與電池耗損。

🛠️ 技術棧 (Tech Stack)

Frontend: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)

Mapping: Leaflet.js + OpenStreetMap

Charts: Chart.js

Backend Sim: Python, C++

🤝 合作夥伴 (Partners)

Taichung Social Bureau (台中市社會局)

Food Bank (愛心食物銀行)

ThunderTiger Corp (雷虎科技)

© 2025 SkyBridge Foundation. Empowering Communities through Technology.