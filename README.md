# The-F2E-3rd - 台灣旅遊景點導覽

## Demo-Link:https://nuxt-travel-f2e.vercel.app/

* The F2E 3rd 第一周作品，有串接PTX公共運輸整合資訊的API，使用到的API為觀光V2、公車V2。
* 參考設計師KT的設計圖，https://www.behance.net/gallery/130714243/Taiwan-Tourguide-Project。
* 使用框架Vue.js + Nuxt.js進行開發，並且選用Nuxt Universal模組，原本的Vue是SPA框架，因此採用SSR的來解決SEO的問題，讓一開始讀取頁面就能產出完整的HTML，也讓資料在Serve端就處理好並回傳瀏覽器渲染。
* 引入css預處理器-SCSS，並製作RWD響應式網頁。
* 使用Vuex統一管理組件的狀態。

# 功能介紹

* 瀏覽全台景點、活動、餐廳
* 使用關鍵字搜尋符合的結果的景點、活動、餐廳
* 篩選各縣市的景點、活動、餐廳
* 查詢全台公車路線，15秒刷新。
