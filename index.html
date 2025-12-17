<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مشغل JavaScript</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        /* الهيدر */
        .header {
            background: #2c3e50;
            color: white;
            padding: 15px 20px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }
        
        .header .team {
            font-size: 14px;
            color: #bdc3c7;
        }
        
        /* المحتوى الرئيسي */
        .main {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
        }
        
        @media (min-width: 768px) {
            .main {
                grid-template-columns: 1fr 1fr;
                height: calc(100vh - 180px);
            }
        }
        
        /* محرر الكود */
        .editor-box {
            background: #1e1e1e;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        .editor-header {
            background: #2d2d2d;
            color: white;
            padding: 12px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #444;
        }
        
        .editor-header span {
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .controls {
            display: flex;
            gap: 10px;
        }
        
        .btn {
            padding: 8px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
        }
        
        .run-btn {
            background: #27ae60;
            color: white;
        }
        
        .run-btn:hover {
            background: #219653;
            transform: translateY(-2px);
        }
        
        .clear-btn {
            background: #e74c3c;
            color: white;
        }
        
        .clear-btn:hover {
            background: #c0392b;
            transform: translateY(-2px);
        }
        
        #code-input {
            flex: 1;
            background: #1e1e1e;
            color: #d4d4d4;
            border: none;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 16px;
            line-height: 1.6;
            resize: none;
            outline: none;
            direction: ltr;
        }
        
        /* منطقة النتيجة */
        .output-box {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border: 3px solid #2c3e50;
        }
        
        .output-header {
            background: #34495e;
            color: white;
            padding: 12px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        #output {
            flex: 1;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 18px;
            line-height: 1.8;
            overflow-y: auto;
            background: #f8f9fa;
            min-height: 300px;
        }
        
        /* الأنيميشن */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        
        .slide-in {
            animation: slideIn 0.3s ease-out;
        }
        
        .pulse {
            animation: pulse 0.3s ease-in-out;
        }
        
        /* رسائل */
        .message {
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 5px solid;
        }
        
        .success {
            background: #d4edda;
            color: #155724;
            border-left-color: #28a745;
        }
        
        .error {
            background: #f8d7da;
            color: #721c24;
            border-left-color: #dc3545;
        }
        
        .info {
            background: #d1ecf1;
            color: #0c5460;
            border-left-color: #17a2b8;
        }
        
        /* التكرار */
        .example-code {
            background: #f8f9fa;
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
            border-left: 4px solid #3498db;
        }
        
        .example-code h4 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .example-code pre {
            background: #2c3e50;
            color: white;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            direction: ltr;
        }
        
        /* الفوتر */
        .footer {
            background: #ecf0f1;
            padding: 15px;
            text-align: center;
            color: #2c3e50;
            font-size: 14px;
            border-top: 2px solid #bdc3c7;
        }
        
        /* شريط التمرير */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        
        /* للهواتف */
        @media (max-width: 767px) {
            body {
                padding: 10px;
            }
            
            .main {
                gap: 15px;
            }
            
            .editor-header {
                flex-direction: column;
                gap: 10px;
                text-align: center;
            }
            
            .controls {
                width: 100%;
                justify-content: center;
            }
            
            #code-input {
                font-size: 14px;
                min-height: 250px;
            }
            
            #output {
                font-size: 16px;
                min-height: 200px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- الهيدر -->
        <div class="header">
            <h1>مشغل JavaScript</h1>
            <div class="team">
                <span>مطور: محمود أحمد سعيد | فكرة: سلمي سيد سخيل</span>
            </div>
        
        </div>

        <div class="header">
            
                <span>الفريق: يمني علاء | الفريق:شهد شوقي </span>
            </div>
        
        </div>

        <div class="header">
                <span> الفريق:بتول جورج </span>
            </div>
        
        </div>
        
        <!-- المحتوى الرئيسي -->
        <div class="main">
            <!-- محرر الكود -->
            <div class="editor-box">
                <div class="editor-header">
                    <span><i class="fas fa-code"></i> اكتب كود JavaScript هنا</span>
                    <div class="controls">
                        <button class="btn run-btn" onclick="runCode()">
                            <i class="fas fa-play"></i> تشغيل الكود
                        </button>
                        <button class="btn clear-btn" onclick="clearCode()">
                            <i class="fas fa-redo"></i> مسح
                        </button>
                    </div>
                </div>
                <textarea id="code-input" spellcheck="false" placeholder="اكتب كود JavaScript هنا...">// جرب أي كود JavaScript
console.log(5 + 5); // سيطبع 10

// يمكنك تجربة:
// 1. العمليات الحسابية
console.log(10 * 2); // 20

// 2. الدوال
function greet(name) {
    return "مرحباً " + name;
}
console.log(greet("محمود"));

// 3. المصفوفات
let numbers = [1, 2, 3, 4, 5];
console.log("مجموع المصفوفة:", numbers.reduce((a, b) => a + b, 0));

// 4. الشروط
let age = 20;
if (age >= 18) {
    console.log("يمكنك التصويت");
} else {
    console.log("لا يمكنك التصويت");
}</textarea>
            </div>
            
            <!-- منطقة النتيجة -->
            <div class="output-box">
                <div class="output-header">
                    <span><i class="fas fa-terminal"></i> النتيجة</span>
                    <span id="status">جاهز</span>
                </div>
                <div id="output" class="fade-in">
                    <div class="info message">
                        <i class="fas fa-info-circle"></i>
                        <strong>مرحباً! 👋</strong>
                        <p>اكتب كود JavaScript في المربع على اليسار واضغط على "تشغيل الكود"</p>
                    </div>
                    
                    <div class="example-code">
                        <h4>أمثلة يمكنك تجربتها:</h4>
                        <pre>// جمع أرقام
console.log(100 + 200);

// نص
console.log("مرحباً " + "بالعالم");

// حلقة
for(let i = 1; i <= 5; i++) {
    console.log("رقم: " + i);
}

// دالة حسابية
function square(x) {
    return x * x;
}
console.log("مربع 8 هو: " + square(8));</pre>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- الفوتر -->
        <div class="footer">
            <p>موقع مشغل JavaScript - يشغل الكود مباشرة ويعرض النتيجة فوراً</p>
            <p>© 2026 | يعمل على جميع الأجهزة: الهواتف، الأجهزة اللوحية، والكمبيوتر</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>