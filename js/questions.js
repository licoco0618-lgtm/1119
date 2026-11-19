/**
 * 《數位科技概論（上）》練習題庫資料
 * 包含第 3 章至第 6 章之習作本與隨堂測驗卷題目，共 103 題
 */
const QUESTION_BANK = [
  // ==========================================
  // 第 3 章 系統平台的組成架構－硬體 (35 題)
  // ==========================================
  {
    id: 1,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "隨機存取記憶體（RAM）區分為動態隨機存取記憶體（DRAM）及靜態隨機存取記憶體（SRAM）兩種，請問下列哪一項是 SRAM 優於 DRAM 的特點？",
    options: [
      { key: "A", text: "單位資料的存取速度較快" },
      { key: "B", text: "單位面積所能儲存資料量較小" },
      { key: "C", text: "需要持續充電更新（refresh），才能確保資料完整" },
      { key: "D", text: "每單位資料的儲存成本較低" }
    ],
    answer: "A",
    explanation: "SRAM 存取速度比 DRAM 快；SRAM 不需持續充電更新即可保存資料；但 DRAM 成本較低、積體度（單位面積儲存量）較高。"
  },
  {
    id: 2,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "傑克將 iPhone 手機拍攝的照片轉存到電腦中，並列印出來與朋友分享。請問列印設備在電腦的五大單元中，是歸屬為下列哪一種單元？",
    options: [
      { key: "A", text: "控制單元" },
      { key: "B", text: "輸入單元" },
      { key: "C", text: "輸出單元" },
      { key: "D", text: "記憶單元" }
    ],
    answer: "C",
    explanation: "印表機負責將電腦運算處理後的資料輸出列印在紙張上，屬於輸出單元（Output Unit）。"
  },
  {
    id: 3,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "下列對於電腦硬體五大單元的敘述何者有誤？",
    options: [
      { key: "A", text: "輸入單元：待處理的資料須經由此單元進入電腦" },
      { key: "B", text: "輸出單元：處理完成之資料由此單元送出" },
      { key: "C", text: "算術邏輯單元：所有的算術運算均在此單元完成" },
      { key: "D", text: "記憶單元：僅儲存輸入待處理之資料" }
    ],
    answer: "D",
    explanation: "記憶單元（MU）除了儲存輸入待處理的資料外，亦儲存執行中的程式以及運算後的暫存與輸出資料。"
  },
  {
    id: 4,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "電腦基本架構中有數個主要的組成單元（或部門），其中負責存放電腦程式與資料的單元是：",
    options: [
      { key: "A", text: "算術與邏輯單元" },
      { key: "B", text: "輸入單元" },
      { key: "C", text: "記憶單元" },
      { key: "D", text: "控制單元" }
    ],
    answer: "C",
    explanation: "記憶單元（Memory Unit）負責存放電腦的程式與資料。"
  },
  {
    id: 5,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "在電腦的組成單元中，下列哪兩個單元合稱為中央處理單元（CPU）？",
    options: [
      { key: "A", text: "輸入單元及控制單元" },
      { key: "B", text: "控制單元及算術／邏輯單元" },
      { key: "C", text: "輸入單元及輸出單元" },
      { key: "D", text: "算術／邏輯單元及記憶單元" }
    ],
    answer: "B",
    explanation: "中央處理單元（CPU）主要由控制單元（CU）與算術邏輯單元（ALU）組成（內部亦包含暫存器與快取快取記憶體）。"
  },
  {
    id: 6,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "請問所謂的 I/O 指的是下列何者？",
    options: [
      { key: "A", text: "1 跟 0" },
      { key: "B", text: "物聯網（IoT）" },
      { key: "C", text: "輸入與輸出（Input / Output）" },
      { key: "D", text: "整合式辦公室系統（integrated office system）" }
    ],
    answer: "C",
    explanation: "I/O 是 Input/Output（輸入/輸出）的縮寫。"
  },
  {
    id: 7,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "關於「熱插拔」（Hot Swapping）的敘述，何者為真？",
    options: [
      { key: "A", text: "只能在開機的情況下插拔" },
      { key: "B", text: "只能在關機的情況下插拔" },
      { key: "C", text: "在關機及開機的情況下皆可插拔" },
      { key: "D", text: "只有當主機溫度高於一定溫度時才可插拔" }
    ],
    answer: "C",
    explanation: "熱插拔指在電腦運作開機狀態下即可直接安全插拔連接設備（如 USB），關機時當然也能插拔。"
  },
  {
    id: 8,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "阿布想要為自己的筆記型電腦擴充 2G 的 RAM，請問他應該將 RAM 安插在下列哪一種插槽？",
    options: [
      { key: "A", text: "記憶體插槽" },
      { key: "B", text: "PCI-E 插槽" },
      { key: "C", text: "CPU 插槽" },
      { key: "D", text: "M.2 插槽" }
    ],
    answer: "A",
    explanation: "RAM（主記憶體）需安裝在專屬的記憶體插槽（DIMM / SO-DIMM）上。"
  },
  {
    id: 9,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "微軟公司在台灣成立了亞洲第一座「雲端運算」中心，以整合電腦的運算資源，提供給國內各項創新研究計畫使用。一般而言，研究計畫都需要大量的運算，包括計算、比對、配對等不同的處理，請問電腦中負責這些運算工作的是下列哪一個單元？",
    options: [
      { key: "A", text: "CU" },
      { key: "B", text: "MU" },
      { key: "C", text: "ALU" },
      { key: "D", text: "OU" }
    ],
    answer: "C",
    explanation: "ALU（Arithmetic Logic Unit，算術邏輯單元）負責各類算術運算與邏輯判斷比較。"
  },
  {
    id: 10,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "MIPS 為一種衡量電腦 CPU 之測量指標，其中字母「I」代表：",
    options: [
      { key: "A", text: "資訊（Information）" },
      { key: "B", text: "指令（Instruction）" },
      { key: "C", text: "輸入（Input）" },
      { key: "D", text: "內部（Internal）" }
    ],
    answer: "B",
    explanation: "MIPS 為 Million Instructions Per Second（每秒執行百萬個指令數）之英文縮寫。"
  },
  {
    id: 11,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "在《星際迷航記》影集中，船長寇克領導眾船員一同探索宇宙，當遇上危機時，船長便會指派船員完成各自的工作，並引導船員們脫離險境。請問若以船長扮演的角色來看，可比喻成電腦的哪一個單元最恰當？",
    options: [
      { key: "A", text: "輸入單元" },
      { key: "B", text: "記憶單元" },
      { key: "C", text: "輸出單元" },
      { key: "D", text: "控制單元" }
    ],
    answer: "D",
    explanation: "控制單元（CU）扮演中樞指揮官角色，負責排定、控制並協調各單元協同運作。"
  },
  {
    id: 12,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "志華購買了一台安插 8GB 記憶體的 64 位元電腦，下列有關該台電腦的敘述何者正確？",
    options: [
      { key: "A", text: "8GB 指的是快取記憶體的容量" },
      { key: "B", text: "一般用途暫存器的位元數為 8GB" },
      { key: "C", text: "CPU 時脈頻率為 64 位元" },
      { key: "D", text: "64 位元指的是一般用途暫存器的位元數" }
    ],
    answer: "D",
    explanation: "通常稱 64 位元電腦是指 CPU 內部一般用途暫存器（Register）或資料匯流排寬度為 64 位元。"
  },
  {
    id: 13,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "高雄六龜區為了成立社區數位機會中心（DOC），打算將原社區教室的電腦全數移轉至該中心。如果你是電腦管理員，為了提升電腦執行效能，下列何者最不可能是你優先考慮更換的設備？",
    options: [
      { key: "A", text: "CPU" },
      { key: "B", text: "主記憶體" },
      { key: "C", text: "顯示卡" },
      { key: "D", text: "鍵盤" }
    ],
    answer: "D",
    explanation: "更換鍵盤僅改變輸入舒適度，無法提升電腦系統整體的運算與執行效能。"
  },
  {
    id: 14,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "電腦的基本架構可分為五大單元，其中輸出單元（output unit）的功用為？",
    options: [
      { key: "A", text: "接收使用者所輸入的資料" },
      { key: "B", text: "執行程式和處理資料" },
      { key: "C", text: "進行算術運算與邏輯運算" },
      { key: "D", text: "將資料輸出到顯示器或儲存媒體" }
    ],
    answer: "D",
    explanation: "輸出單元的作用是將電腦運算後的結果送出給使用者查看（如螢幕、印表機）或輸出到相關媒體。"
  },
  {
    id: 15,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "聯想推出搭載 Intel Core i7-1165G7 2.80GHz CPU 的變形筆電，其螢幕可以 360 度翻轉變身為平板。請根據以上敘述判斷下列何者正確？",
    options: [
      { key: "A", text: "Intel 為 CPU 的產品型號" },
      { key: "B", text: "Core i7-1165G7 為 CPU 的製造廠商" },
      { key: "C", text: "CPU 的時脈頻率為 2.80GHz" },
      { key: "D", text: "石英振盪器每秒振盪 2.80 億次" }
    ],
    answer: "C",
    explanation: "Intel 是廠商名稱，Core i7-1165G7 是型號，2.80GHz 為 CPU 的工作時脈頻率（2.8GHz = 每秒 28 億次）。"
  },
  {
    id: 16,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "有關固態硬碟（SSD）與傳統機械硬碟（HDD）的敘述，下列何者正確？",
    options: [
      { key: "A", text: "HDD 中的儲存元件是採用快閃記憶體" },
      { key: "B", text: "SSD 採用低噪音馬達驅動讀寫頭並具抗震特點" },
      { key: "C", text: "HDD 沒有旋轉及搜尋資料時間，僅須考量資料傳輸時間" },
      { key: "D", text: "SSD 在經過長時間及多次使用致使內部儲存資料零散，仍可不須進行磁碟重組" }
    ],
    answer: "D",
    explanation: "SSD 是晶片電子存取，尋找檔案時間幾乎為零，且磁碟重組會消耗快閃記憶體的寫入壽命，因此 SSD 不須也不建議重組。"
  },
  {
    id: 17,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "為了減少對主記憶體的存取次數，以提昇電腦整體執行速度，個人電腦的快取記憶體（cache memory）通常以下列何者為材質？",
    options: [
      { key: "A", text: "DRAM" },
      { key: "B", text: "EPROM" },
      { key: "C", text: "ROM" },
      { key: "D", text: "SRAM" }
    ],
    answer: "D",
    explanation: "快取記憶體要求極高的讀寫速度，一般採用價格較高但速度極快的 SRAM（靜態隨機存取記憶體）製造。"
  },
  {
    id: 18,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "加、減、乘、除是程式中常需進行的算術運算，請問在電腦中負責這些運算處理的是哪一個單元？",
    options: [
      { key: "A", text: "算術邏輯單元" },
      { key: "B", text: "控制單元" },
      { key: "C", text: "輸出單元" },
      { key: "D", text: "輸入單元" }
    ],
    answer: "A",
    explanation: "算術運算（加、減、乘、除）由算術邏輯單元（ALU）負責執行。"
  },
  {
    id: 19,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "民眾只要持悠遊卡在台鐵剪票口刷卡，就可以進入月台搭車，且可隨時在超商利用儲值設備進行加值。請問悠遊卡最可能是利用下列哪一種元件來儲存資料？",
    options: [
      { key: "A", text: "DRAM" },
      { key: "B", text: "EEPROM" },
      { key: "C", text: "PROM" },
      { key: "D", text: "HDD" }
    ],
    answer: "B",
    explanation: "悠遊卡為非揮發性儲存晶片，斷電資料不消失，且能用電子訊號抹除重寫資料，常用 EEPROM 或快閃記憶體技術。"
  },
  {
    id: 20,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "大雄在光華數位新天地買了一部桌上型電腦，配備了四種記憶或儲存裝置，請問其中何者之存取速度最快？",
    options: [
      { key: "A", text: "快取記憶體（cache）" },
      { key: "B", text: "輔助記憶體－固態硬碟（SSD）" },
      { key: "C", text: "主記憶體（DRAM）" },
      { key: "D", text: "輔助記憶體－硬碟（HDD）" }
    ],
    answer: "A",
    explanation: "記憶體速度層級排序：快取記憶體（Cache） > 主記憶體（RAM） > 固態硬碟（SSD） > 機械硬碟（HDD）。"
  },
  {
    id: 21,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "MacBook Air 採用固態硬碟大幅降低機身厚度，機身最薄處僅 0.3 公分，請問該筆電採用的固態硬碟與傳統硬碟，差異為何？",
    options: [
      { key: "A", text: "固態硬碟的體積較大" },
      { key: "B", text: "傳統硬碟的耐震度較佳" },
      { key: "C", text: "固態硬碟是使用快閃記憶體來作為儲存元件" },
      { key: "D", text: "傳統硬碟的儲存容量通常較小" }
    ],
    answer: "C",
    explanation: "SSD 是使用快閃記憶體晶片製成，體積小、重量輕、無機械旋轉部件、耐震且速度遠快於傳統硬碟。"
  },
  {
    id: 22,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "三星公司推出的某款 Android 智慧型手機，宣稱採用 AMOLED 技術，可使螢幕色彩更加鮮豔，請問此款手機的螢幕最可能是採用下列哪一種材質所製成的？",
    options: [
      { key: "A", text: "陰極射線管" },
      { key: "B", text: "液晶" },
      { key: "C", text: "有機發光二極體" },
      { key: "D", text: "電漿" }
    ],
    answer: "C",
    explanation: "OLED 全名為 Organic Light-Emitting Diode（有機發光二極體），AMOLED 屬於主動矩陣式有機發光二極體。"
  },
  {
    id: 23,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "玫芳想要自己挑選一台印表機，如果她對列印品質的要求特別高，請問當她在購買時，應特別考量下列哪一項印表機的規格？",
    options: [
      { key: "A", text: "解析度" },
      { key: "B", text: "外殼顏色" },
      { key: "C", text: "尺寸大小" },
      { key: "D", text: "重量" }
    ],
    answer: "A",
    explanation: "列印品質由「解析度（Resolution）」決定，常用單位為 dpi（Dots Per Inch，每英吋點數），數值越高列印越細膩。"
  },
  {
    id: 24,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "裕書的筆記型電腦內建有 Type-C、HDMI、line out 等連接埠，下列為他使用這些連接埠的操作，請問何者不正確？",
    options: [
      { key: "A", text: "利用 line out 連接埠來上網" },
      { key: "B", text: "利用 Type-C 連接埠來為手機充電" },
      { key: "C", text: "利用 Type-C 連接埠將手機中的資料傳送至電腦" },
      { key: "D", text: "利用 HDMI 連接埠將手機畫面傳送至電視播放" }
    ],
    answer: "A",
    explanation: "Line out 是音源輸出埠（連接耳機或喇叭），無法用作網路傳輸連線上網。"
  },
  {
    id: 25,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "隨堂測驗卷",
    question: "《史記》記載秦始皇聽從李斯建議焚書。若秦朝擁有現代資訊科技，可利用下列哪一種設備將紙本書籍內容「數位化」儲存以備份？",
    options: [
      { key: "A", text: "印表機" },
      { key: "B", text: "QLED 液晶螢幕" },
      { key: "C", text: "滑鼠" },
      { key: "D", text: "掃描器" }
    ],
    answer: "D",
    explanation: "掃描器（Scanner）能透過光電感測將實體書頁圖文轉換為電腦可儲存的數位檔案。"
  },
  {
    id: 26,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "請問電腦的五大單元，除了 IU（輸入單元）、OU（輸出單元）之外，還包含哪些？",
    options: [
      { key: "A", text: "CU、ALU、MU" },
      { key: "B", text: "CPU、ALU、MU" },
      { key: "C", text: "CPU、MU、CU" },
      { key: "D", text: "ALU、CU、CPU" }
    ],
    answer: "A",
    explanation: "電腦五大單元分別為：輸入單元（IU）、輸出單元（OU）、控制單元（CU）、算術邏輯單元（ALU）與記憶單元（MU）。"
  },
  {
    id: 27,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "USB 是 3C 產品普遍使用的連接埠，有關 USB 的敘述，下列何者錯誤？",
    options: [
      { key: "A", text: "USB 3.0、USB4 的插頭皆為 Type-C 規格" },
      { key: "B", text: "隨身碟上標示有 USB 圖示，表示該隨身碟是使用 USB 與電腦連接" },
      { key: "C", text: "可作為週邊設備充電使用的連接埠" },
      { key: "D", text: "支援熱插拔" }
    ],
    answer: "A",
    explanation: "USB 3.0 的標準接頭主要是傳統長方形的 Type-A 規格（藍色），USB4 則統一規定採用 Type-C 規格。"
  },
  {
    id: 28,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "中央處理單元（CPU）的組成不包含下列何者？",
    options: [
      { key: "A", text: "快取記憶體" },
      { key: "B", text: "輔助記憶體" },
      { key: "C", text: "控制單元" },
      { key: "D", text: "暫存器" }
    ],
    answer: "B",
    explanation: "輔助記憶體（如 HDD、SSD 等）位於主機板或外部，不是 CPU 的內部組件。"
  },
  {
    id: 29,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "下列有關暫存器（Register）的敘述，何者不正確？",
    options: [
      { key: "A", text: "累加器用來存放運算的結果" },
      { key: "B", text: "位址暫存器用來存放指令或資料的位址" },
      { key: "C", text: "指令暫存器用來存放下一個要執行的指令位址" },
      { key: "D", text: "旗標暫存器用來存放 CPU 運算後的各種狀態" }
    ],
    answer: "C",
    explanation: "指令暫存器（IR）存放「目前正在執行」的指令；存放「下一個要執行指令的位址」的是程式計數器（PC）。"
  },
  {
    id: 30,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "個人電腦購買傳單上所標示的記憶體規格（如 16GB RAM），通常是指下列哪一種記憶體？",
    options: [
      { key: "A", text: "ROM" },
      { key: "B", text: "DRAM" },
      { key: "C", text: "SRAM" },
      { key: "D", text: "EEPROM" }
    ],
    answer: "B",
    explanation: "電腦日常選購的主記憶體規格，都是指動態隨機存取記憶體（DRAM，如 DDR4/DDR5）。"
  },
  {
    id: 31,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "比較 RAM、cache、磁碟機（Hard Disk）等記憶體或儲存設備的存取速度，由快至慢依序排列，正確的選項是：",
    options: [
      { key: "A", text: "RAM ＞ cache ＞ 磁碟機" },
      { key: "B", text: "磁碟機 ＞ RAM ＞ cache" },
      { key: "C", text: "cache ＞ RAM ＞ 磁碟機" },
      { key: "D", text: "cache ＞ 磁碟機 ＞ RAM" }
    ],
    answer: "C",
    explanation: "存取速度由快至慢：快取記憶體（Cache）＞ 主記憶體（RAM）＞ 輔助儲存磁碟機。"
  },
  {
    id: 32,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "下列各項記憶體中，讀寫速度比 ROM 快的有幾項？ a. DRAM  b. L2 cache  c. HDD  d. L3 cache  e. Blu-ray Disc",
    options: [
      { key: "A", text: "4 項" },
      { key: "B", text: "3 項" },
      { key: "C", text: "2 項" },
      { key: "D", text: "1 項" }
    ],
    answer: "B",
    explanation: "讀寫速度：L2 cache ＞ L3 cache ＞ DRAM ＞ ROM ＞ HDD ＞ 藍光光碟。比 ROM 快的共有 a, b, d 共 3 項。"
  },
  {
    id: 33,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "請問固態硬碟（SSD）與傳統硬碟（HDD）差異為何？",
    options: [
      { key: "A", text: "固態硬碟的體積較大" },
      { key: "B", text: "傳統硬碟的耐震度較佳" },
      { key: "C", text: "固態硬碟是使用快閃記憶體來作為儲存元件" },
      { key: "D", text: "傳統硬碟的儲存容量通常較小" }
    ],
    answer: "C",
    explanation: "固態硬碟使用快閃記憶體（Flash Memory）作為儲存介質，不具機械臂，抗震耐摔且讀寫速度快。"
  },
  {
    id: 34,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "校刊社團經常需要列印大量的文稿，指導老師要求購買一部列印速度較快的印表機。應該依據下列哪一個單位來判斷列印速度？",
    options: [
      { key: "A", text: "dpi" },
      { key: "B", text: "bps" },
      { key: "C", text: "pixel" },
      { key: "D", text: "ppm" }
    ],
    answer: "D",
    explanation: "ppm（Pages Per Minute）代表每分鐘可列印的頁數，是列印速度指標；dpi 代表解析度；bps 代表傳輸速率；pixel 代表像素。"
  },
  {
    id: 35,
    chapter: 3,
    chapterName: "第 3 章 系統平台的組成架構－硬體",
    source: "習作本第三回",
    question: "宜琳在 Apple 官網得知新款 iPhone 尺寸標示為 6.7 吋，請問這代表手機螢幕的何處長度為 6.7 吋？",
    options: [
      { key: "A", text: "寬度" },
      { key: "B", text: "對角線" },
      { key: "C", text: "高度" },
      { key: "D", text: "厚度" }
    ],
    answer: "B",
    explanation: "螢幕規格大小（吋數）一律指的是螢幕可視區域的「對角線長度」（1 吋 = 2.54 公分）。"
  },

  // ==========================================
  // 第 4 章 系統平台的組成架構－軟體與網路 (35 題)
  // ==========================================
  {
    id: 36,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列關於雲端資源的組成架構之敘述，何者正確？",
    options: [
      { key: "A", text: "單一公司通常難以同時提供 IaaS、PaaS、SaaS 等多項服務" },
      { key: "B", text: "Amazon、YouTube、Oracle Cloud 皆屬於雲端架構中的 SaaS" },
      { key: "C", text: "即使網路斷線也不會影響使用 SaaS 提供商所提供的應用軟體" },
      { key: "D", text: "若需要大量的儲存空間，可不必自行購置設備，向 IaaS 提供商租用雲端空間即可" }
    ],
    answer: "D",
    explanation: "IaaS（基礎架構即服務）提供虛擬伺服器、硬碟儲存空間與網路基礎設備出租；使用 SaaS 必須具備網路連線。"
  },
  {
    id: 37,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列何者不屬於「應用軟體」？",
    options: [
      { key: "A", text: "Firefox 瀏覽器" },
      { key: "B", text: "PhotoImpact 影像處理軟體" },
      { key: "C", text: "macOS 作業系統" },
      { key: "D", text: "Word 文書處理軟體" }
    ],
    answer: "C",
    explanation: "macOS 是蘋果電腦的作業系統，屬於「系統軟體」。"
  },
  {
    id: 38,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "「大臺北公車」是專為台北市民所開發的系統，用來線上查詢公車的行進狀況。請問這套系統是屬於下列哪一種軟體？",
    options: [
      { key: "A", text: "作業系統" },
      { key: "B", text: "專案開發軟體" },
      { key: "C", text: "套裝軟體" },
      { key: "D", text: "公用程式" }
    ],
    answer: "B",
    explanation: "針對特定機構或特定用途客製開發的軟體，屬於專案開發軟體（專案軟體）。"
  },
  {
    id: 39,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "Windows 作業系統中「磁碟清理」的主要功能是下列何者？",
    options: [
      { key: "A", text: "將磁碟還原至原廠設定" },
      { key: "B", text: "將電腦還原到先前運作正常的狀態" },
      { key: "C", text: "檢查磁碟中的磁區是否損毀" },
      { key: "D", text: "清除不需長期保存的檔案（如暫存檔）" }
    ],
    answer: "D",
    explanation: "磁碟清理工具主要搜尋並清除暫存檔、快取、資源回收筒檔案以釋放儲存空間。"
  },
  {
    id: 40,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列關於電腦軟體的說明，何者錯誤？",
    options: [
      { key: "A", text: "校務行政、銀行存提款等系統應歸屬為系統軟體" },
      { key: "B", text: "扮演使用者與電腦硬體間的溝通橋樑，是作業系統的功能之一" },
      { key: "C", text: "專案開發軟體是為特定對象的需求所設計的軟體" },
      { key: "D", text: "重組並最佳化磁碟機屬於公用程式，可提升電腦讀寫資料的效能" }
    ],
    answer: "A",
    explanation: "校務行政系統與銀行存提款系統是針對特定業務處理所開發的應用軟體，非系統軟體。"
  },
  {
    id: 41,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列哪些軟體是屬於系統軟體？ a. Office文書處理軟體  b. 重組並最佳化磁碟機  c. 作業系統  d. 網路訂票系統",
    options: [
      { key: "A", text: "abc" },
      { key: "B", text: "bc" },
      { key: "C", text: "bcd" },
      { key: "D", text: "ad" }
    ],
    answer: "B",
    explanation: "系統軟體包含作業系統（c）與公用程式（b）；Office 與網路訂票系統為應用軟體。"
  },
  {
    id: 42,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "OpenOffice、Microsoft Office、PhotoImpact 等軟體，歸屬於下列哪一類軟體最恰當？",
    options: [
      { key: "A", text: "作業系統" },
      { key: "B", text: "公用程式" },
      { key: "C", text: "專案開發軟體" },
      { key: "D", text: "套裝軟體" }
    ],
    answer: "D",
    explanation: "為了滿足普遍大眾工作或娛樂需求，量產封裝並公開發行銷售的軟體屬於套裝軟體。"
  },
  {
    id: 43,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列何者屬於應用軟體（Application Software）？",
    options: [
      { key: "A", text: "作業系統（Operating System）" },
      { key: "B", text: "語言編譯程式（Programming Language Translators）" },
      { key: "C", text: "公用服務程式（System Utilities）" },
      { key: "D", text: "文書處理軟體" }
    ],
    answer: "D",
    explanation: "文書處理軟體為解決特定文字編修需求所開發，屬於應用軟體；前三者皆為系統軟體。"
  },
  {
    id: 44,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列有關軟體的敘述，何者錯誤？",
    options: [
      { key: "A", text: "平板電腦 iPad 使用的 iOS 作業系統，屬於應用軟體" },
      { key: "B", text: "財政部提供的報稅軟體，屬於應用軟體" },
      { key: "C", text: "驅動程式是為了使作業系統能辨識及管理硬體設備，屬於系統軟體" },
      { key: "D", text: "Office 2019 內含 Word、PowerPoint 及 Excel 軟體，屬於套裝軟體" }
    ],
    answer: "A",
    explanation: "iOS 是作業系統（Operating System），是系統軟體的核心，絕非應用軟體。"
  },
  {
    id: 45,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列有關軟體的敘述，何者錯誤？",
    options: [
      { key: "A", text: "重組並最佳化磁碟機可提昇磁碟的運作效率，屬於專案開發軟體" },
      { key: "B", text: "Google 文件可用來編輯文件、試算處理等，屬於應用軟體" },
      { key: "C", text: "Windows 11 可作為使用者與電腦硬體間的溝通橋樑，屬於系統軟體" },
      { key: "D", text: "修復磁碟機屬於系統軟體" }
    ],
    answer: "A",
    explanation: "磁碟重組工具屬於系統軟體中的「公用程式」，而非特定客製的專案開發軟體。"
  },
  {
    id: 46,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "Linux 作業系統屬於下列哪一類軟體？",
    options: [
      { key: "A", text: "系統軟體" },
      { key: "B", text: "應用軟體" },
      { key: "C", text: "文書處理軟體" },
      { key: "D", text: "資料庫軟體" }
    ],
    answer: "A",
    explanation: "Linux 為著名的開源作業系統，作業系統一律屬於系統軟體。"
  },
  {
    id: 47,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "Windows 11 家用版允許單一使用者在同一時間內，處理多項操作與程式，請問該作業系統屬於下列何種類型？",
    options: [
      { key: "A", text: "單人單工" },
      { key: "B", text: "多人多工" },
      { key: "C", text: "單人多工" },
      { key: "D", text: "多人單工" }
    ],
    answer: "C",
    explanation: "Windows 11 家用版同一時間供一位本機使用者使用，但能同時進行多個任務（如一邊聽歌一邊打字），為單人多工。"
  },
  {
    id: 48,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "網際網路上的網站伺服器，通常必須在同一時間內執行多項工作，以便處理多位瀏覽者瀏覽網頁的需求。請問網站伺服器適合使用下列哪一種類型的作業系統？",
    options: [
      { key: "A", text: "單人單工作業系統" },
      { key: "B", text: "多人多工作業系統" },
      { key: "C", text: "單人多工作業系統" },
      { key: "D", text: "多人單工作業系統" }
    ],
    answer: "B",
    explanation: "伺服器必須同時服務來自全球的多個使用者並並行多個服務行程，需採用多人多工作業系統（如 Linux, Windows Server）。"
  },
  {
    id: 49,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "「開放格式」是公開文件檔案的格式及版權，以結合眾人的力量來維護與推廣這種格式。請問下列何者的概念最接近開放格式？",
    options: [
      { key: "A", text: "開放原始碼（Open Source）" },
      { key: "B", text: "智慧財產權" },
      { key: "C", text: "綠色軟體" },
      { key: "D", text: "創用CC" }
    ],
    answer: "A",
    explanation: "開放原始碼公開程式核心代碼，讓全球社群共同檢視、改進與擴充，與開放格式的精神最為相近。"
  },
  {
    id: 50,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列 3 種電腦網路，請依據其規模（涵蓋範圍）由大到小排列順序： a. 區域網路  b. 網際網路  c. 廣域網路",
    options: [
      { key: "A", text: "abc" },
      { key: "B", text: "bca" },
      { key: "C", text: "acb" },
      { key: "D", text: "cab" }
    ],
    answer: "B",
    explanation: "範圍大小順序：網際網路（Internet，全球） ＞ 廣域網路（WAN，跨國/跨縣市） ＞ 區域網路（LAN，建築物內）。"
  },
  {
    id: 51,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "小明受命規劃公司內部的網路連線，假設公司的範圍涵蓋同一棟大樓，請問此種網路是屬於下列哪一種？",
    options: [
      { key: "A", text: "區域網路" },
      { key: "B", text: "廣域網路" },
      { key: "C", text: "網際網路" },
      { key: "D", text: "衛星網路" }
    ],
    answer: "A",
    explanation: "同一棟大樓、辦公室或校園內的連線網絡屬於區域網路（LAN, Local Area Network）。"
  },
  {
    id: 52,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "「WAN」是下列哪一種網路的英文簡稱？",
    options: [
      { key: "A", text: "廣域網路" },
      { key: "B", text: "整體服務數位網路" },
      { key: "C", text: "區域網路" },
      { key: "D", text: "加值型網路" }
    ],
    answer: "A",
    explanation: "WAN 為 Wide Area Network（廣域網路）的簡稱。"
  },
  {
    id: 53,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "「LAN」是哪一種網路的簡稱？",
    options: [
      { key: "A", text: "廣域網路" },
      { key: "B", text: "網際網路" },
      { key: "C", text: "區域網路" },
      { key: "D", text: "全球資訊網" }
    ],
    answer: "C",
    explanation: "LAN 為 Local Area Network（區域網路）的簡稱。"
  },
  {
    id: 54,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列哪一種網路所涵蓋的地理範圍最小？",
    options: [
      { key: "A", text: "LAN" },
      { key: "B", text: "MAN" },
      { key: "C", text: "WAN" },
      { key: "D", text: "Internet" }
    ],
    answer: "A",
    explanation: "範圍比較：LAN（區域網路，最小） ＜ MAN（都會網路） ＜ WAN（廣域網路） ＜ Internet（全球網際網路）。"
  },
  {
    id: 55,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列何者不屬於應用軟體？",
    options: [
      { key: "A", text: "磁碟清理工具" },
      { key: "B", text: "電腦遊戲" },
      { key: "C", text: "薪資系統" },
      { key: "D", text: "資料庫管理系統" }
    ],
    answer: "A",
    explanation: "磁碟清理工具為作業系統維護與輔助工具，屬於系統軟體中的公用程式。"
  },
  {
    id: 56,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "請問適合用來進行文書處理的軟體「Word」是屬於下列哪一類軟體？",
    options: [
      { key: "A", text: "系統軟體" },
      { key: "B", text: "應用軟體" },
      { key: "C", text: "工具程式" },
      { key: "D", text: "作業系統" }
    ],
    answer: "B",
    explanation: "Microsoft Word 是為了日常辦公與文件排版所設計的應用軟體（套裝軟體）。"
  },
  {
    id: 57,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列有關作業系統的敘述，何者不正確？",
    options: [
      { key: "A", text: "MS-DOS 為單人單工作業系統" },
      { key: "B", text: "Windows 為單人多工作業系統" },
      { key: "C", text: "Android 為多人單工作業系統" },
      { key: "D", text: "Linux 為多人多工作業系統" }
    ],
    answer: "C",
    explanation: "Android 手機系統主要由一位使用者操作，且能背景多工執行程式，屬於「單人多工」，非多人單工。"
  },
  {
    id: 58,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "遊戲橘子（Gamania）公司所代理的天堂、新楓之谷等線上遊戲，是屬於下列哪一種類型的電腦軟體？",
    options: [
      { key: "A", text: "系統軟體" },
      { key: "B", text: "應用軟體" },
      { key: "C", text: "工具軟體" },
      { key: "D", text: "辦公室應用軟體" }
    ],
    answer: "B",
    explanation: "線上遊戲軟體是為了娛樂用途所設計的應用軟體。"
  },
  {
    id: 59,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "知名迴轉壽司店「藏壽司」引進了一套全自動管理監視系統，負責座位掌控、平板點餐、軌道送餐、結帳等程序。請問該套專門開發的軟體歸屬於下列哪一類軟體最恰當？",
    options: [
      { key: "A", text: "公用軟體" },
      { key: "B", text: "專案開發軟體" },
      { key: "C", text: "套裝軟體" },
      { key: "D", text: "系統軟體" }
    ],
    answer: "B",
    explanation: "為了滿足該企業特殊營運流程而量身定制的軟體系統，屬於專案開發軟體（客製化軟體）。"
  },
  {
    id: 60,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "隨堂測驗卷",
    question: "下列敘述何者正確？",
    options: [
      { key: "A", text: "編譯器（Compiler）可編譯應用程式，故屬於應用軟體" },
      { key: "B", text: "會計系統輔助會計作業，屬於應用軟體" },
      { key: "C", text: "作業系統不能編譯程式，所以不是系統軟體" },
      { key: "D", text: "作業系統（OS）可以編譯程式，所以屬於系統軟體" }
    ],
    answer: "B",
    explanation: "會計軟體為商業應用用途，屬於應用軟體；編譯器屬於系統軟體中的語言翻譯程式；作業系統本身不負責編譯原始碼。"
  },
  {
    id: 61,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "《傳說對決》、《英雄聯盟：激鬥峽谷》等熱門手機遊戲，是屬於下列哪一種軟體？",
    options: [
      { key: "A", text: "系統軟體" },
      { key: "B", text: "應用軟體" },
      { key: "C", text: "工具軟體" },
      { key: "D", text: "辦公室應用軟體" }
    ],
    answer: "B",
    explanation: "遊戲屬於娛樂性質的應用軟體。"
  },
  {
    id: 62,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "「Double Driver」是一套免費軟體，可用來備份硬體的驅動程式，以幫助在重灌後快速回復運作。請問它歸屬於下列哪一類最恰當？",
    options: [
      { key: "A", text: "公用程式" },
      { key: "B", text: "語言翻譯程式" },
      { key: "C", text: "應用軟體" },
      { key: "D", text: "自由軟體" }
    ],
    answer: "A",
    explanation: "負責維護、管理或備份硬體驅動程式的輔助工具屬於公用程式（Utility）。"
  },
  {
    id: 63,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "下列有關軟體的敘述，何者錯誤？",
    options: [
      { key: "A", text: "重組並最佳化磁碟機可提升磁碟的讀寫效率，屬於專案開發軟體" },
      { key: "B", text: "Google 文件可用來編輯文件、試算處理等，屬於應用軟體" },
      { key: "C", text: "Windows 可作為使用者與電腦硬體間的溝通橋樑，屬於系統軟體" },
      { key: "D", text: "語言翻譯程式屬於系統軟體" }
    ],
    answer: "A",
    explanation: "重組磁碟是維護電腦運作效能的工具，屬於系統軟體中的「公用程式」。"
  },
  {
    id: 64,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "下列作業系統中，何者不屬於「多人多工作業系統」？",
    options: [
      { key: "A", text: "iOS" },
      { key: "B", text: "UNIX" },
      { key: "C", text: "Linux" },
      { key: "D", text: "Windows Server" }
    ],
    answer: "A",
    explanation: "iOS 是設計給 iPhone/iPad 等個人行動裝置使用的單人多工作業系統。"
  },
  {
    id: 65,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "Samsung 公司推出具有 2 億畫素的新款智慧型手機，請問該款手機最可能是使用下列哪一套作業系統？",
    options: [
      { key: "A", text: "Windows" },
      { key: "B", text: "Linux" },
      { key: "C", text: "iOS" },
      { key: "D", text: "Android" }
    ],
    answer: "D",
    explanation: "三星智慧型手機主流均搭載 Google 開發之 Android 作業系統；iOS 為蘋果專屬。"
  },
  {
    id: 66,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "iOS 作業系統僅允許使用者透過其內建的「App Store」下載安裝軟體，不允許自由側載其他來源軟體，這類系統可稱為？",
    options: [
      { key: "A", text: "封閉系統" },
      { key: "B", text: "開放系統" },
      { key: "C", text: "開放原始碼" },
      { key: "D", text: "自由軟體" }
    ],
    answer: "A",
    explanation: "軟體生態由廠商全面控管審查、不對外部自由開放安裝的生態系統稱為封閉系統（Closed System）。"
  },
  {
    id: 67,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "下列哪一套作業系統是由美國貝爾實驗室發展，採用 C 語言開發，常應用在大型伺服器與工作站上？",
    options: [
      { key: "A", text: "Linux" },
      { key: "B", text: "UNIX" },
      { key: "C", text: "Windows" },
      { key: "D", text: "macOS" }
    ],
    answer: "B",
    explanation: "UNIX 最早於 1969 年在 AT&T 貝爾實驗室誕生，後來由肯·湯普遜與丹尼斯·里奇使用 C 語言重寫。"
  },
  {
    id: 68,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "我們經常使用 LINE 通訊軟體與親友傳訊，在組成雲端資源的架構中，LINE 是屬於下列哪一種服務層級？",
    options: [
      { key: "A", text: "IaaS" },
      { key: "B", text: "PaaS" },
      { key: "C", text: "BaaS" },
      { key: "D", text: "SaaS" }
    ],
    answer: "D",
    explanation: "LINE 讓終端使用者直接使用軟體應用服務，屬於 SaaS（Software as a Service，軟體即服務）。"
  },
  {
    id: 69,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "語欣發現 Linux 作業系統有許多版本（例如 Ubuntu、RedHat、Fedora 等）。請問 Linux 有這麼多不同發行版本的主要原因為何？",
    options: [
      { key: "A", text: "Linux 是免費軟體" },
      { key: "B", text: "Linux 支援多種語言" },
      { key: "C", text: "Linux 開放原始碼（Open Source）" },
      { key: "D", text: "Linux 支援多點觸控技術" }
    ],
    answer: "C",
    explanation: "因為 Linux 核心採取開源授權，世界各地的開發組織與企業都能基於其核心打造並發行各自客製的作業系統版本。"
  },
  {
    id: 70,
    chapter: 4,
    chapterName: "第 4 章 系統平台的組成架構－軟體與網路",
    source: "習作本第四回",
    question: "阿雄將手機拍攝的照片備份到 Google 雲端硬碟，累積了 20GB。請問這些照片實際上是儲存於何處？",
    options: [
      { key: "A", text: "存在阿雄的手機中" },
      { key: "B", text: "存在網際網路的路由器中" },
      { key: "C", text: "分散存放在使用 Google 服務的其他人手機中" },
      { key: "D", text: "存放在 Google 公司分散在各處的資料中心伺服器中" }
    ],
    answer: "D",
    explanation: "「雲端」並非虛無飄渺，實質上是由雲端廠商在各地設立的龐大資料中心（Data Center）伺服器集群與硬碟陣列來儲存維護。"
  },

  // ==========================================
  // 第 5 章 系統平台的運作與未來發展 (23 題)
  // ==========================================
  {
    id: 71,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "根據一般作業系統的概念，一個行程（process）可能的狀態包含了建立（new）、執行（running）、就緒（ready）、結束（terminated），以及下列哪一項狀態？",
    options: [
      { key: "A", text: "忙碌（busy）" },
      { key: "B", text: "恢復（resumed）" },
      { key: "C", text: "排程（scheduling）" },
      { key: "D", text: "等待（waiting / blocked）" }
    ],
    answer: "D",
    explanation: "行程生命週期五大狀態為：建立（New）、就緒（Ready）、執行（Running）、等待（Waiting）、結束（Terminated）。"
  },
  {
    id: 72,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "人工智慧（AI）主要研究如何讓電腦模仿人類思考模式。關於涵蓋範疇大小的描述，下列哪一項正確？",
    options: [
      { key: "A", text: "人工智慧 ＞ 機器學習 ＞ 深度學習" },
      { key: "B", text: "機器學習 ＞ 人工智慧 ＞ 深度學習" },
      { key: "C", text: "深度學習 ＞ 機器學習 ＞ 人工智慧" },
      { key: "D", text: "人工智慧 ＞ 深度學習 ＞ 機器學習" }
    ],
    answer: "A",
    explanation: "人工智慧包含範圍最廣，機器學習為實現 AI 的方法之一，而深度學習則是機器學習中以深度神經網路為核心的技術。"
  },
  {
    id: 73,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "請問下列哪一項電腦狀況，無法透過 Windows「工作管理員」視窗來檢視？",
    options: [
      { key: "A", text: "處理程序佔用狀況" },
      { key: "B", text: "CPU 與記憶體效能" },
      { key: "C", text: "應用程式歷程紀錄" },
      { key: "D", text: "瀏覽器網頁瀏覽紀錄" }
    ],
    answer: "D",
    explanation: "工作管理員主要監看系統行程、硬體資源負載與開機項目；瀏覽紀錄需在特定網頁瀏覽器內查看。"
  },
  {
    id: 74,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "在作業系統中，安排與管理每項工作（行程）處理先後順序的功能，稱之為？",
    options: [
      { key: "A", text: "程序管理（排程）" },
      { key: "B", text: "通訊管理" },
      { key: "C", text: "檔案管理" },
      { key: "D", text: "輸出／輸入管理" }
    ],
    answer: "A",
    explanation: "程序管理（Process Management）包含調度演算法，負責排定各項工作取得 CPU 資源的先後順序。"
  },
  {
    id: 75,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "下列為常見的系統平台： a. 個人電腦  b. Instagram  c. 校務行政平台。請問其架構與服務規模大小應如何排列？",
    options: [
      { key: "A", text: "a ＞ b ＞ c" },
      { key: "B", text: "b ＞ c ＞ a" },
      { key: "C", text: "b ＞ a ＞ c" },
      { key: "D", text: "c ＞ b ＞ a" }
    ],
    answer: "B",
    explanation: "Instagram 為全球數十億用戶的超大規模雲端平台；校務平台為全校級；個人電腦為單一使用者終端，故為 b ＞ c ＞ a。"
  },
  {
    id: 76,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "丹鳳使用印表機列印文件時，發現文件會依據她送出列印的先後依序列印，請問這是作業系統具有下列哪一項管理功能？",
    options: [
      { key: "A", text: "檔案管理" },
      { key: "B", text: "記憶體管理" },
      { key: "C", text: "輸出／輸入管理" },
      { key: "D", text: "通訊管理" }
    ],
    answer: "C",
    explanation: "列印假脫機（Print Spooling）屬於作業系統的輸出/輸入（I/O）管理機制。"
  },
  {
    id: 77,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "不同輔助儲存設備（如傳統硬碟、隨身碟、光碟）的機械特性皆不同，作業系統包含了下列何種功能，讓使用者不須因硬體不同而用不同方式存取檔案？",
    options: [
      { key: "A", text: "記憶體管理系統" },
      { key: "B", text: "輸出入系統" },
      { key: "C", text: "自動偵測系統" },
      { key: "D", text: "檔案管理系統" }
    ],
    answer: "D",
    explanation: "檔案系統（File System）提供統一的樹狀目錄與檔案讀寫介面，屏蔽底層儲存媒介的硬體差異。"
  },
  {
    id: 78,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "下列何者是系統平台中十分重要的一個項目，它除了作為使用者介面之外，也負責協調整體軟體與硬體的運作？",
    options: [
      { key: "A", text: "雲端資源" },
      { key: "B", text: "作業系統" },
      { key: "C", text: "顯示卡" },
      { key: "D", text: "防毒軟體" }
    ],
    answer: "B",
    explanation: "作業系統（OS）是掌管硬體資源並為各類應用程式提供執行環境的中樞系統軟體。"
  },
  {
    id: 79,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "管理「使用者帳號」、「密碼」與「檔案使用權限」等功能，是作業系統的哪一項主要職責？",
    options: [
      { key: "A", text: "輸入管理" },
      { key: "B", text: "效能監督" },
      { key: "C", text: "系統保護與安全控制" },
      { key: "D", text: "記憶體管理" }
    ],
    answer: "C",
    explanation: "身分認證、存取控制列表（ACL）與許可權限控管屬於作業系統的系統保護機制。"
  },
  {
    id: 80,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "圖片辨識系統通常先蒐集大量的圖片資料，並利用下列哪一項技術，訓練系統學會辨識圖片中的特定物體或人臉身分？",
    options: [
      { key: "A", text: "人工智慧（AI / 機器學習）" },
      { key: "B", text: "擴增實境（AR）" },
      { key: "C", text: "虛擬實境（VR）" },
      { key: "D", text: "平行處理" }
    ],
    answer: "A",
    explanation: "以大量圖像訓練卷積神經網路（CNN）或其他視覺模型來識別物體，是人工智慧的經典應用。"
  },
  {
    id: 81,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "下列何者是常見的自然語言對話「聊天機器人」？",
    options: [
      { key: "A", text: "Midjourney" },
      { key: "B", text: "EMIEW3" },
      { key: "C", text: "DALL·E 2" },
      { key: "D", text: "ChatGPT" }
    ],
    answer: "D",
    explanation: "ChatGPT 為知名大型語言模型對話應用；Midjourney 與 DALL-E 為圖像生成模型。"
  },
  {
    id: 82,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "下列有關系統平台運作流程 3 步驟（輸入、處理、輸出）的敘述，何者錯誤？",
    options: [
      { key: "A", text: "輸入是透過傳輸媒介，將資料輸入至系統中" },
      { key: "B", text: "處理是系統利用平台處理器來處理資料" },
      { key: "C", text: "輸出是透過傳輸媒介，將資料輸出至顯示器、儲存設備或雲端" },
      { key: "D", text: "輸入、處理、輸出的步驟都必須在單一設備平台內完成" }
    ],
    answer: "D",
    explanation: "在物聯網與雲端世代，輸入（感測器/手機）、處理（雲端伺服器）與輸出（電視/電腦）常分散在不同硬體上協同完成。"
  },
  {
    id: 83,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "隨堂測驗卷",
    question: "在 Windows 作業系統中，可以同時按 Ctrl 鍵加 Alt 鍵再加下列哪一個鍵開啟選單或工作管理員？",
    options: [
      { key: "A", text: "Enter" },
      { key: "B", text: "Delete" },
      { key: "C", text: "Backspace" },
      { key: "D", text: "Tab" }
    ],
    answer: "B",
    explanation: "Ctrl + Alt + Delete 是 Windows 最著名的中斷鍵組合，可用以啟動安全選單與工作管理員。"
  },
  {
    id: 84,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "在一個大型的系統平台中，何者較不可能做為「輸入」的設備？",
    options: [
      { key: "A", text: "智慧型手機" },
      { key: "B", text: "電腦" },
      { key: "C", text: "CPU" },
      { key: "D", text: "GPS 晶片" }
    ],
    answer: "C",
    explanation: "CPU 是負責資料運算與邏輯控制的處理單元，本身不是輸入週邊設備。"
  },
  {
    id: 85,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "系統平台運作的基本流程中，通常不包含下列何者？",
    options: [
      { key: "A", text: "偵錯" },
      { key: "B", text: "輸入" },
      { key: "C", text: "處理" },
      { key: "D", text: "輸出" }
    ],
    answer: "A",
    explanation: "系統平台三大基礎運作步驟為「輸入（Input）→ 處理（Process）→ 輸出（Output）」；偵錯是程式開發的排錯手段。"
  },
  {
    id: 86,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "系統平台運作過程中，由誰負責安排每項工作的處理順序，並管理程序的啟動與結束？",
    options: [
      { key: "A", text: "應用軟體" },
      { key: "B", text: "作業系統" },
      { key: "C", text: "雲端伺服器" },
      { key: "D", text: "網路硬碟" }
    ],
    answer: "B",
    explanation: "作業系統核心（Kernel）負責程序管理與排程調度。"
  },
  {
    id: 87,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "在 Windows 作業系統中，透過按下列哪一組組合鍵，可叫出工作管理員相關畫面？",
    options: [
      { key: "A", text: "Shift + Enter" },
      { key: "B", text: "Ctrl + Alt + Delete" },
      { key: "C", text: "Ctrl + Shift + Delete" },
      { key: "D", text: "Enter + Delete" }
    ],
    answer: "B",
    explanation: "Ctrl + Alt + Delete（或 Ctrl + Shift + Esc）可用於叫出工作管理員。"
  },
  {
    id: 88,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "在系統平台中，透過印表機來列印文件，是屬於下列哪一種系統平台的內部運作？",
    options: [
      { key: "A", text: "記憶體管理" },
      { key: "B", text: "工作排程" },
      { key: "C", text: "檔案管理" },
      { key: "D", text: "輸入／輸出管理" }
    ],
    answer: "D",
    explanation: "印表機為輸出設備，列印服務屬於作業系統的 I/O（輸入/輸出）管理。"
  },
  {
    id: 89,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "作業系統會使用不同的排程演算法，請問下列哪一種排程演算法最可能發生「飢餓」（Starvation）情況，造成低優先級程序被長時間擱置？",
    options: [
      { key: "A", text: "後來先服務" },
      { key: "B", text: "最短工作優先" },
      { key: "C", text: "優先排程（Priority Scheduling）" },
      { key: "D", text: "先來先服務" }
    ],
    answer: "C",
    explanation: "優先排程會優先執行高優先順序工作，若高優先工作源源不絕，低優先級工作將永遠輪不到（飢餓現象）。"
  },
  {
    id: 90,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "一般來說，使用多核心 CPU，每個核心同時工作，適合用來實現下列何項技術？",
    options: [
      { key: "A", text: "分散處理" },
      { key: "B", text: "平行處理" },
      { key: "C", text: "單工處理" },
      { key: "D", text: "交談式處理" }
    ],
    answer: "B",
    explanation: "單機內多核心 CPU 同步分工計算稱為平行處理（Parallel Processing）；跨多台主機分工則稱為分散式處理。"
  },
  {
    id: 91,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "資訊科技不停發展，下列何者較不可能是未來系統平台發展的趨勢？",
    options: [
      { key: "A", text: "消耗更多能源與資源" },
      { key: "B", text: "使用更多人工智慧技術" },
      { key: "C", text: "硬體設備的體積愈來愈小" },
      { key: "D", text: "系統從實體設備移至雲端" }
    ],
    answer: "A",
    explanation: "綠色運算與節能省電是未來關鍵指標，消耗更多資源違反現代科技演進方針。"
  },
  {
    id: 92,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "薇薇使用電腦時，發現電腦運作速度愈來愈慢，懷疑有惡意軟體在偷偷佔用資源。她可以透過 Windows 的哪一項功能來查看電腦中有哪些程序正在執行與資源佔用？",
    options: [
      { key: "A", text: "重組並最佳化磁碟機" },
      { key: "B", text: "磁碟檢查工具" },
      { key: "C", text: "檔案總管" },
      { key: "D", text: "工作管理員" }
    ],
    answer: "D",
    explanation: "工作管理員可即時監測每一個軟體程序所耗用的 CPU、記憶體、硬碟讀寫與網路頻寬。"
  },
  {
    id: 93,
    chapter: 5,
    chapterName: "第 5 章 系統平台的運作與未來發展",
    source: "習作本第五回",
    question: "大雄在 Windows 作業系統中嘗試將檔案屬性設定成「隱藏」，結果找不到該檔案了！請問要如何操作才能讓隱藏檔案顯現？",
    options: [
      { key: "A", text: "在被隱藏的檔案上按右鍵選內容並取消隱藏" },
      { key: "B", text: "在檔案總管按功能表列的『檢視』，勾選顯示隱藏的項目" },
      { key: "C", text: "按功能表列的『檔案』，開啟資料夾選項來顯示" },
      { key: "D", text: "在任一檔案上按右鍵選內容並取消隱藏" }
    ],
    answer: "B",
    explanation: "在 Windows 檔案總管「檢視」功能表列中，勾選「隱藏的項目」即可讓隱藏檔案以半透明圖示顯現。"
  },

  // ==========================================
  // 第 6 章 辦公室軟體與影像／影音軟體 (10 題)
  // ==========================================
  {
    id: 94,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "下列軟體中，何者的主要功用與 Microsoft Word 不同？",
    options: [
      { key: "A", text: "Writer" },
      { key: "B", text: "Pages" },
      { key: "C", text: "Google 文件" },
      { key: "D", text: "Keynote" }
    ],
    answer: "D",
    explanation: "Word、Writer（LibreOffice/OpenOffice）、Pages、Google 文件均為文書處理軟體；Keynote 是蘋果公司的「簡報製作」軟體。"
  },
  {
    id: 95,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "在行政院主計總處工作的志宏，要統計消費者物價指數，並將統計結果繪製成分析圖表。請問志宏最可能使用下列哪一套軟體來完成？",
    options: [
      { key: "A", text: "3ds Max" },
      { key: "B", text: "SketchUp" },
      { key: "C", text: "Word" },
      { key: "D", text: "Excel" }
    ],
    answer: "D",
    explanation: "Microsoft Excel 為專業電子試算表軟體，具備強大數值統計函數與圖表生成功能。"
  },
  {
    id: 96,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "下列何者最適合利用 PowerPoint 軟體來製作？",
    options: [
      { key: "A", text: "期末專題成果展簡報" },
      { key: "B", text: "建築室內設計工程圖" },
      { key: "C", text: "圖書館圖書管理系統" },
      { key: "D", text: "3D 多媒體動畫長片" }
    ],
    answer: "A",
    explanation: "PowerPoint 是投影片簡報設計軟體，專門用於發表報告與演說展示。"
  },
  {
    id: 97,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "請問下列哪一項工作，最適合使用影像處理軟體（如 PhotoImpact / Photoshop）來達成？",
    options: [
      { key: "A", text: "為生活照片中的主角加上幽默對話泡泡" },
      { key: "B", text: "內政部統計各縣市全年總生育率" },
      { key: "C", text: "剪輯行車紀錄器拍攝的高畫質影片" },
      { key: "D", text: "撰寫一篇萬字的攝影心得論文" }
    ],
    answer: "A",
    explanation: "修飾圖片、合成特效、加上圖文對話泡泡屬於影像處理軟體的功能。"
  },
  {
    id: 98,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "網路上流傳許多逼真合成的照片（如惡搞合成圖、超現實場景），請問下列哪一套軟體最常被用來進行這類影像合成與修圖？",
    options: [
      { key: "A", text: "Audacity" },
      { key: "B", text: "Photoshop" },
      { key: "C", text: "PowerPoint" },
      { key: "D", text: "Excel" }
    ],
    answer: "B",
    explanation: "Adobe Photoshop 是全球業界最普遍的點陣圖修整、圖層濾鏡與相片合成軟體。"
  },
  {
    id: 99,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "下列各應用軟體之主要功用描述，何者正確？",
    options: [
      { key: "A", text: "威力導演主要功用為影像點陣修圖" },
      { key: "B", text: "Photoshop 主要功用為預防電腦病毒" },
      { key: "C", text: "Excel 主要功用為製作電子試算表" },
      { key: "D", text: "Windows Media Player 主要功用為製作 3D 動畫" }
    ],
    answer: "C",
    explanation: "威力導演為影片剪輯；Photoshop 為影像處理；Windows Media Player 為播放器；Excel 為電子試算表軟體。"
  },
  {
    id: 100,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "《玩具總動員》、《冰雪奇緣》等好萊塢立體 3D 動畫電影，適合使用下列哪一種軟體來製作模型與動畫？",
    options: [
      { key: "A", text: "威力導演" },
      { key: "B", text: "GIMP" },
      { key: "C", text: "3ds Max（或 Maya、Blender）" },
      { key: "D", text: "PotPlayer" }
    ],
    answer: "C",
    explanation: "3ds Max 與 Maya 是頂尖 3D 建模、材質貼圖與骨架動畫製作軟體。"
  },
  {
    id: 101,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "珮珮想要設計一個 3D 立體模型公仔，並用 3D 印表機列印實體出來，請問她適合使用下列哪一套軟體？",
    options: [
      { key: "A", text: "PhotoImpact" },
      { key: "B", text: "SketchUp" },
      { key: "C", text: "Animate" },
      { key: "D", text: "Keynote" }
    ],
    answer: "B",
    explanation: "SketchUp 是一套直覺且廣泛應用於建築與物件 3D 建模的軟體，可匯出 STL 供 3D 印表機列印。"
  },
  {
    id: 102,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "網紅在 YouTube 分享自己錄唱的歌曲，想為錄音加入混響、降噪與音高校正等音訊特效，請問他適合使用下列哪一套軟體來「後製聲音檔案」？",
    options: [
      { key: "A", text: "Audacity" },
      { key: "B", text: "Animate" },
      { key: "C", text: "GOM Player" },
      { key: "D", text: "Impress" }
    ],
    answer: "A",
    explanation: "Audacity 是一款開源且專業的數位多軌錄音與音效後製軟體。"
  },
  {
    id: 103,
    chapter: 6,
    chapterName: "第 6 章 辦公室軟體與影像／影音軟體",
    source: "習作本第六回",
    question: "曉菁在畢業旅行拍了許多照片，想先利用「甲」軟體來編修美化照片，再透過「乙」軟體將照片串連配樂剪成短影片，請問甲與乙應分別為何？",
    options: [
      { key: "A", text: "Audacity、Photoshop" },
      { key: "B", text: "PowerPoint、小畫家 3D" },
      { key: "C", text: "Photoshop、會聲會影" },
      { key: "D", text: "Windows Media Player、威力導演" }
    ],
    answer: "C",
    explanation: "照片編修美化使用影像處理軟體（Photoshop）；相片影片串接配樂使用視訊剪輯軟體（會聲會影或威力導演）。"
  }
];

// 核心考點速記卡資料
const FLASHCARDS = [
  {
    chapter: 3,
    title: "電腦硬體五大單元",
    badge: "第 3 章 硬體架構",
    content: "• 輸入單元 (IU)：接受外部指令與資料輸入（鍵盤、滑鼠、掃描器）\n• 輸出單元 (OU)：將運算結果送出（螢幕、印表機、喇叭）\n• 控制單元 (CU)：指揮協調各單元運作（CPU 內部）\n• 算術邏輯單元 (ALU)：數值計算與邏輯比較判斷（CPU 內部）\n• 記憶單元 (MU)：儲存資料與程式（主記憶體、快取記憶體）"
  },
  {
    chapter: 3,
    title: "CPU 機器週期四步驟",
    badge: "第 3 章 核心概念",
    content: "1. 擷取 (Fetch)：由記憶體中取出下一個要執行的指令\n2. 解碼 (Decode)：將指令翻譯為控制訊號\n3. 執行 (Execute)：由 ALU 或相關單元執行運算\n4. 儲存 (Store)：將運算結果寫回暫存器或記憶體"
  },
  {
    chapter: 3,
    title: "DRAM vs SRAM 記憶體比較",
    badge: "第 3 章 必考對照",
    content: "• SRAM（靜態）：速度快、不需持續充電更新、單位成本高、積體度低 ➔ 用於 CPU 快取 (Cache)\n• DRAM（動態）：速度較慢、需週期性充電 (Refresh)、成本低、積體度高 ➔ 用於 主記憶體 (RAM)"
  },
  {
    chapter: 3,
    title: "記憶體與儲存裝置存取速度排行",
    badge: "第 3 章 速度比較",
    content: "速度由快至慢：\n暫存器 (Register) ＞ 快取 (L1/L2/L3 Cache) ＞ 主記憶體 (DRAM) ＞ 唯讀記憶體 (ROM) ＞ 固態硬碟 (SSD) ＞ 傳統硬碟 (HDD) ＞ 藍光光碟 (Blu-ray)"
  },
  {
    chapter: 4,
    title: "雲端服務三層架構",
    badge: "第 4 章 雲端運算",
    content: "• IaaS (基礎架構即服務)：租借運算伺服器、硬碟儲存空間、網路頻寬（如 AWS EC2、GCP Compute Engine）\n• PaaS (平台即服務)：提供開發環境、資料庫、部署平台（如 Google App Engine、Heroku）\n• SaaS (軟體即服務)：使用者直接使用完成的應用軟體（如 Google Docs、Gmail、LINE、Office 365）"
  },
  {
    chapter: 4,
    title: "電腦網路涵蓋範圍比較",
    badge: "第 4 章 網路通訊",
    content: "範圍由小到大：\nPAN（個人網路） ＜ LAN（區域網路，大樓/校園） ＜ MAN（都會網路，城市） ＜ WAN（廣域網路，跨國跨洲） ＜ Internet（網際網路，全球連接）"
  },
  {
    chapter: 5,
    title: "作業系統行程 (Process) 五大狀態",
    badge: "第 5 章 作業系統",
    content: "1. 建立 (New)：行程剛被建立\n2. 就緒 (Ready)：等待分配 CPU 運算時間\n3. 執行 (Running)：正在由 CPU 運算處理\n4. 等待 (Waiting / Blocked)：等待 I/O 或特定事件觸發\n5. 結束 (Terminated)：工作執行完畢終止"
  },
  {
    chapter: 5,
    title: "作業系統三大工作排程演算法",
    badge: "第 5 章 排程演算法",
    content: "• 先來先服務 (FCFS)：依照進入佇列的順序依序處理，公平但易有護航效應\n• 最短工作優先 (SJF)：估算處理時間最短的優先執行，平均等待時間最短\n• 優先排程 (Priority)：依優先等級高低排程，但低等級容易產生「飢餓現象」(Starvation)"
  },
  {
    chapter: 6,
    title: "主流辦公室軟體套件對照表",
    badge: "第 6 章 辦公室軟體",
    content: "• 文書處理：Word、Writer (Libre/OpenOffice)、Pages、Google 文件\n• 電子試算表：Excel、Calc、Numbers、Google 試算表\n• 簡報設計：PowerPoint、Impress、Keynote、Google 簡報\n• 資料庫管理：Access、Base"
  },
  {
    chapter: 6,
    title: "多媒體影音軟體類型區分",
    badge: "第 6 章 多媒體軟體",
    content: "• 影像修圖與合成：Photoshop、GIMP、PhotoImpact\n• 聲音剪輯與特效：Audacity\n• 影片剪輯後製：威力導演、會聲會影、Premiere\n• 3D 建模與動畫：3ds Max、Maya、Blender、SketchUp"
  }
];
