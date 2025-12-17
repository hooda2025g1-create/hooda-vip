// التطبيق الرئيسي
const JSPlayground = {
    config: {
        isRunning: false,
        runCount: 0,
        successCount: 0,
        errorCount: 0,
        currentTab: 'editor',
        theme: 'light',
        fontSize: 15
    },
    
    examples: [
        {
            title: "عمليات حسابية",
            description: "تعلم العمليات الحسابية الأساسية في JavaScript",
            code: `// العمليات الحسابية الأساسية
console.log("الجمع: 15 + 10 =", 15 + 10);
console.log("الطرح: 30 - 12 =", 30 - 12);
console.log("الضرب: 7 × 8 =", 7 * 8);
console.log("القسمة: 50 ÷ 5 =", 50 / 5);
console.log("الباقي: 17 % 5 =", 17 % 5);

// المتغيرات
let price = 100;
let discount = 20;
let finalPrice = price - discount;
console.log("السعر النهائي:", finalPrice);`
        },
        {
            title: "النصوص والتعامل معها",
            description: "كيفية التعامل مع النصوص في JavaScript",
            code: `// النصوص والتعامل معها
let firstName = "محمود";
let lastName = "أحمد";
let fullName = firstName + " " + lastName;

console.log("الاسم الكامل:", fullName);
console.log("طول الاسم:", fullName.length);
console.log("الأحرف الكبيرة:", fullName.toUpperCase());
console.log("الأحرف الصغيرة:", fullName.toLowerCase());

// البحث في النص
let sentence = "أحب تعلم البرمجة";
console.log("هل يحتوي النص على 'برمجة'؟", sentence.includes("برمجة"));
console.log("موقع كلمة 'تعلم':", sentence.indexOf("تعلم"));

// القوالب النصية
let age = 25;
let city = "القاهرة";
console.log(\`أنا \${fullName}، عمري \${age} سنة وأعيش في \${city}\`);`
        },
        {
            title: "المصفوفات",
            description: "التعامل مع المصفوفات في JavaScript",
            code: `// إنشاء مصفوفة
let fruits = ["تفاح", "موز", "برتقال", "فراولة"];
console.log("المصفوفة الأصلية:", fruits);

// الوصول للعناصر
console.log("العنصر الأول:", fruits[0]);
console.log("العنصر الأخير:", fruits[fruits.length - 1]);

// إضافة العناصر
fruits.push("عنب");
console.log("بعد إضافة عنب:", fruits);

// حذف العناصر
let removedFruit = fruits.pop();
console.log("تم حذف:", removedFruit);
console.log("المصفوفة الآن:", fruits);

// البحث في المصفوفة
console.log("هل يوجد موز؟", fruits.includes("موز"));
console.log("موقع البرتقال:", fruits.indexOf("برتقال"));

// حلقة على المصفوفة
console.log("جميع الفواكه:");
fruits.forEach((fruit, index) => {
    console.log(\`\${index + 1}. \${fruit}\`);
});`
        },
        {
            title: "الدوال",
            description: "تعريف واستخدام الدوال في JavaScript",
            code: `// دالة بسيطة
function greet(name) {
    return "مرحباً " + name + "! 👋";
}

console.log(greet("محمود"));
console.log(greet("سلمي"));

// دالة مع معاملات
function calculate(a, b, operation) {
    switch(operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "عملية غير معروفة";
    }
}

console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 × 3 =", calculate(10, 3, '*'));
console.log("20 ÷ 4 =", calculate(20, 4, '/'));

// الدوال السهمية
const square = (x) => x * x;
const cube = (x) => x * x * x;

console.log("مربع 5 هو:", square(5));
console.log("مكعب 3 هو:", cube(3));

// دالة داخلية
function outerFunction() {
    let counter = 0;
    
    return function innerFunction() {
        counter++;
        return counter;
    };
}

const increment = outerFunction();
console.log("العداد:", increment());
console.log("العداد:", increment());
console.log("العداد:", increment());`
        },
        {
            title: "الشروط والقرارات",
            description: "اتخاذ القرارات باستخدام if و switch",
            code: `// if else
let temperature = 28;

if (temperature > 30) {
    console.log("الجو حار ☀️");
} else if (temperature > 20) {
    console.log("الجو معتدل 😊");
} else if (temperature > 10) {
    console.log("الجو بارد ❄️");
} else {
    console.log("الجو شديد البرودة 🥶");
}

// switch
let day = "السبت";

switch(day) {
    case "السبت":
    case "الأحد":
        console.log("إجازة نهاية الأسبوع 🏖️");
        break;
    case "الجمعة":
        console.log("يوم الجمعة 🕌");
        break;
    default:
        console.log("يوم عمل 💼");
}

// العامل الثلاثي
let age = 18;
let message = age >= 18 ? "يمكنك التصويت" : "لا يمكنك التصويت بعد";
console.log(message);

// شروط متداخلة
let score = 85;
let attendance = 95;

if (score >= 50) {
    if (attendance >= 75) {
        console.log("ناجح ومتفوق 🎓");
    } else {
        console.log("ناجح ولكن يحتاج تحسين الحضور");
    }
} else {
    console.log("راسب 💔");
}`
        },
        {
            title: "الحلقات والتكرار",
            description: "استخدام الحلقات for و while للتكرار",
            code: `// for loop بسيط
console.log("الأرقام من 1 إلى 5:");
for (let i = 1; i <= 5; i++) {
    console.log("الرقم:", i);
}

// while loop
console.log("\\nعد تنازلي:");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("انطلق! 🚀");

// do while
console.log("\\ndo while:");
let number = 1;
do {
    console.log("الرقم:", number);
    number++;
} while (number <= 3);

// for loop على مصفوفة
let colors = ["أحمر", "أخضر", "أزرق", "أصفر"];
console.log("\\nالألوان:");
for (let i = 0; i < colors.length; i++) {
    console.log(\`اللون رقم \${i + 1}: \${colors[i]}\`);
}

// for...of
console.log("\\nباستخدام for...of:");
for (let color of colors) {
    console.log(color);
}

// for...in (للكائنات)
let person = {
    name: "أحمد",
    age: 25,
    city: "الرياض"
};

console.log("\\nخصائص الكائن:");
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}`
        }
    ]
};

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadExamples();
    setupEventListeners();
    showWelcomeAnimation();
});

// تهيئة التطبيق
function initializeApp() {
    // تعيين النص الافتراضي
    const codeInput = document.getElementById('code-input');
    if (!codeInput.value.trim()) {
        codeInput.value = `// مرحباً بك في مشغل JavaScript
// هذا مكان آمن لتعلم وتجربة JavaScript

// 1. يمكنك كتابة أي كود JavaScript
console.log("مرحباً بالعالم! 🌍");

// 2. استخدم console.log() لعرض النتائج
let x = 10;
let y = 5;
console.log("x + y =", x + y);

// 3. جرب الأمثلة من تبويب "أمثلة"
// 4. اضغط على زر التشغيل أو استخدم Ctrl+Enter`;
    }
    
    // تعيين حجم الخط
    codeInput.style.fontSize = `${JSPlayground.config.fontSize}px`;
    
    // تحديث العداد
    updateCounter();
}

// تحميل الأمثلة
function loadExamples() {
    const examplesGrid = document.getElementById('examples-grid');
    examplesGrid.innerHTML = '';
    
    JSPlayground.examples.forEach((example, index) => {
        const exampleCard = document.createElement('div');
        exampleCard.className = 'example-card fade-in';
        exampleCard.style.animationDelay = `${index * 0.1}s`;
        
        exampleCard.innerHTML = `
            <div class="example-title">
                <i class="fas fa-code"></i>
                ${example.title}
            </div>
            <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 15px; line-height: 1.5;">
                ${example.description}
            </p>
            <div class="example-code">${example.code}</div>
        `;
        
        exampleCard.addEventListener('click', function() {
            copyExampleToEditor(example);
        });
        
        examplesGrid.appendChild(exampleCard);
    });
}

// نسخ المثال إلى المحرر
function copyExampleToEditor(example) {
    const codeInput = document.getElementById('code-input');
    codeInput.value = example.code;
    
    // التبديل إلى تبويب المحرر
    switchTab('editor');
    
    // إظهار إشعار
    showNotification(`تم تحميل مثال: ${example.title}`, 'info');
    
    // تأثير أنيميشن
    codeInput.style.animation = 'pulseBorder 1s ease';
    setTimeout(() => {
        codeInput.style.animation = '';
    }, 1000);
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // التبديل بين التبويبات
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            switchTab(tabId);
        });
    });
    
    // زر التشغيل
    document.getElementById('run-btn').addEventListener('click', function() {
        runCode();
    });
    
    // زر المسح
    document.getElementById('clear-btn').addEventListener('click', function() {
        clearCode();
    });
    
    // اختصار لوحة المفاتيح: Ctrl+Enter
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
            showNotification('تم تشغيل الكود (Ctrl+Enter)', 'success');
        }
    });
    
    // تتبع التغييرات في المحرر
    const codeInput = document.getElementById('code-input');
    codeInput.addEventListener('input', function() {
        updateStatus('معدل', 'info');
    });
}

// التبديل بين التبويبات
function switchTab(tabId) {
    // تحديث التبويبات النشطة
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === tabId) {
            tab.classList.add('active');
        }
    });
    
    // تحديث المحتوى النشط
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabId}-tab`) {
            content.classList.add('active');
        }
    });
    
    // حفظ التبويب الحالي
    JSPlayground.config.currentTab = tabId;
    
    // تأثير أنيميشن
    const activeTab = document.querySelector(`#${tabId}-tab`);
    if (activeTab) {
        activeTab.style.animation = 'slideUp 0.4s ease-out';
        setTimeout(() => {
            activeTab.style.animation = '';
        }, 400);
    }
}

// تشغيل الكود
function runCode() {
    if (JSPlayground.config.isRunning) {
        showNotification('جاري تشغيل كود آخر...', 'error');
        return;
    }
    
    const code = document.getElementById('code-input').value.trim();
    const outputContent = document.getElementById('output-content');
    
    if (!code) {
        showNotification('اكتب بعض الكود أولاً!', 'error');
        return;
    }
    
    // تعيين حالة التشغيل
    JSPlayground.config.isRunning = true;
    JSPlayground.config.runCount++;
    updateStatus('جاري التشغيل...', 'running');
    
    // التبديل إلى تبويب النتيجة
    switchTab('output');
    
    // إظهار مؤشر التحميل
    outputContent.innerHTML = `
        <div class="loading-container" style="text-align: center; padding: 60px 20px;">
            <div class="loading-spinner" style="width: 60px; height: 60px; border: 4px solid var(--border-color); border-top: 4px solid var(--primary-color); border-radius: 50%; margin: 0 auto 20px; animation: spin 1s linear infinite;"></div>
            <h3 style="color: var(--primary-color); margin-bottom: 10px;">جاري تنفيذ الكود...</h3>
            <p style="color: var(--text-secondary);">يرجى الانتظار بينما نقوم بتنفيذ كود JavaScript</p>
        </div>
    `;
    
    // إضافة أنيميشن الدوران
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // تنفيذ الكود بعد تأخير قصير
    setTimeout(() => {
        try {
            // حفظ console الأصلي
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info,
                table: console.table
            };
            
            let logs = [];
            let errors = [];
            let warnings = [];
            let infos = [];
            let tables = [];
            
            // تجميع الإخراج
            console.log = function(...args) {
                logs.push({ type: 'log', args });
                originalConsole.log.apply(console, args);
            };
            
            console.error = function(...args) {
                errors.push({ type: 'error', args });
                originalConsole.error.apply(console, args);
            };
            
            console.warn = function(...args) {
                warnings.push({ type: 'warn', args });
                originalConsole.warn.apply(console, args);
            };
            
            console.info = function(...args) {
                infos.push({ type: 'info', args });
                originalConsole.info.apply(console, args);
            };
            
            console.table = function(data) {
                tables.push({ type: 'table', data });
                originalConsole.table.call(console, data);
            };
            
            // تنفيذ الكود
            const result = eval(code);
            
            // استعادة console الأصلي
            Object.assign(console, originalConsole);
            
            // عرض النتائج
            displayResults(logs, errors, warnings, infos, tables, result);
            
            // نجاح التنفيذ
            JSPlayground.config.successCount++;
            showNotification('تم تنفيذ الكود بنجاح! 🎉', 'success');
            
        } catch (error) {
            // في حالة حدوث خطأ
            JSPlayground.config.errorCount++;
            displayError(error);
            showNotification('حدث خطأ أثناء التنفيذ ⚠️', 'error');
        }
        
        // إعادة تعيين الحالة
        JSPlayground.config.isRunning = false;
        updateStatus('جاهز', 'ready');
        
        // تحديث العداد
        updateCounter();
        
    }, 500); // تأخير قصير للمحاكاة
}

// عرض النتائج
function displayResults(logs, errors, warnings, infos, tables, returnValue) {
    const outputContent = document.getElementById('output-content');
    let html = '';
    
    const totalOutputs = logs.length + errors.length + warnings.length + infos.length + tables.length;
    
    if (totalOutputs === 0 && returnValue === undefined) {
        html += `
            <div class="output-message message-info">
                <div class="message-icon">ℹ️</div>
                <div class="message-content">
                    <h4>تم التنفيذ بنجاح</h4>
                    <p>الكود تم تنفيذه لكن لم يظهر أي إخراج.</p>
                    <p style="margin-top: 8px; font-size: 13px;">استخدم console.log() لعرض النتائج في المستقبل.</p>
                </div>
            </div>
        `;
    } else {
        // عرض الإخراج العادي
        if (logs.length > 0) {
            html += `<div class="execution-result fade-in">`;
            html += `<div class="result-header">`;
            html += `<div class="result-title">الإخراج العادي (${logs.length})</div>`;
            html += `<div class="result-stats"><span style="color: var(--success-color);">✅ ${logs.length}</span></div>`;
            html += `</div>`;
            html += `<div class="result-body">`;
            
            logs.forEach((log, index) => {
                html += `<div style="padding: 8px 0; border-bottom: ${index < logs.length - 1 ? '1px dashed var(--border-color)' : 'none'};">`;
                html += log.args.map(arg => formatOutput(arg)).join(' ');
                html += `</div>`;
            });
            
            html += `</div></div>`;
        }
        
        // عرض المعلومات
        if (infos.length > 0) {
            html += `<div class="output-message message-info slide-in">`;
            html += `<div class="message-icon">📘</div>`;
            html += `<div class="message-content">`;
            html += `<h4>المعلومات (${infos.length})</h4>`;
            
            infos.forEach(info => {
                html += `<p>${info.args.map(arg => formatOutput(arg)).join(' ')}</p>`;
            });
            
            html += `</div></div>`;
        }
        
        // عرض التحذيرات
        if (warnings.length > 0) {
            html += `<div class="output-message message-warning slide-in">`;
            html += `<div class="message-icon">⚠️</div>`;
            html += `<div class="message-content">`;
            html += `<h4>تحذيرات (${warnings.length})</h4>`;
            
            warnings.forEach(warning => {
                html += `<p>${warning.args.map(arg => formatOutput(arg)).join(' ')}</p>`;
            });
            
            html += `</div></div>`;
        }
        
        // عرض الأخطاء
        if (errors.length > 0) {
            html += `<div class="output-message message-error slide-in">`;
            html += `<div class="message-icon">❌</div>`;
            html += `<div class="message-content">`;
            html += `<h4>أخطاء (${errors.length})</h4>`;
            
            errors.forEach(error => {
                html += `<p>${error.args.map(arg => formatOutput(arg)).join(' ')}</p>`;
            });
            
            html += `</div></div>`;
        }
        
        // عرض الجداول
        if (tables.length > 0) {
            html += `<div class="execution-result fade-in">`;
            html += `<div class="result-header">`;
            html += `<div class="result-title">الجداول (${tables.length})</div>`;
            html += `</div>`;
            html += `<div class="result-body">`;
            
            tables.forEach(table => {
                html += `<pre style="background: var(--background-color); padding: 15px; border-radius: 8px; overflow-x: auto;">`;
                html += JSON.stringify(table.data, null, 2);
                html += `</pre>`;
            });
            
            html += `</div></div>`;
        }
        
        // عرض القيمة المعادة
        if (returnValue !== undefined) {
            html += `<div class="output-message message-success slide-in">`;
            html += `<div class="message-icon">↩️</div>`;
            html += `<div class="message-content">`;
            html += `<h4>القيمة المعادة</h4>`;
            html += `<div style="margin-top: 10px; padding: 12px; background: rgba(102, 187, 106, 0.1); border-radius: 8px; border-right: 3px solid var(--success-color);">`;
            html += `<pre style="margin: 0; white-space: pre-wrap;">${formatOutput(returnValue)}</pre>`;
            html += `</div>`;
            html += `</div></div>`;
        }
        
        // إضافة إحصائيات
        html += `
            <div class="execution-result fade-in" style="background: linear-gradient(45deg, rgba(139, 95, 191, 0.05), rgba(255, 138, 101, 0.05));">
                <div class="result-header">
                    <div class="result-title">📊 إحصائيات التنفيذ</div>
                </div>
                <div class="result-body">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px; text-align: center;">
                        <div style="padding: 15px; background: white; border-radius: 10px; box-shadow: var(--shadow-sm);">
                            <div style="color: var(--primary-color); font-weight: 600; font-size: 20px;">${logs.length}</div>
                            <div style="color: var(--text-secondary); font-size: 13px;">إخراج عادي</div>
                        </div>
                        <div style="padding: 15px; background: white; border-radius: 10px; box-shadow: var(--shadow-sm);">
                            <div style="color: var(--info-color); font-weight: 600; font-size: 20px;">${infos.length}</div>
                            <div style="color: var(--text-secondary); font-size: 13px;">معلومات</div>
                        </div>
                        <div style="padding: 15px; background: white; border-radius: 10px; box-shadow: var(--shadow-sm);">
                            <div style="color: var(--warning-color); font-weight: 600; font-size: 20px;">${warnings.length}</div>
                            <div style="color: var(--text-secondary); font-size: 13px;">تحذيرات</div>
                        </div>
                        <div style="padding: 15px; background: white; border-radius: 10px; box-shadow: var(--shadow-sm);">
                            <div style="color: var(--error-color); font-weight: 600; font-size: 20px;">${errors.length}</div>
                            <div style="color: var(--text-secondary); font-size: 13px;">أخطاء</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    outputContent.innerHTML = html;
    
    // التمرير إلى الأعلى
    outputContent.scrollTop = 0;
}

// عرض الأخطاء
function displayError(error) {
    const outputContent = document.getElementById('output-content');
    
    const html = `
        <div class="output-message message-error">
            <div class="message-icon">🚨</div>
            <div class="message-content">
                <h4>${error.name}</h4>
                <p>${error.message}</p>
            </div>
        </div>
        
        <div class="execution-result" style="background: rgba(239, 83, 80, 0.05); border-color: rgba(239, 83, 80, 0.2);">
            <div class="result-header">
                <div class="result-title" style="color: var(--error-color);">تفاصيل الخطأ</div>
            </div>
            <div class="result-body">
                <pre style="color: var(--error-color); background: rgba(239, 83, 80, 0.1); padding: 15px; border-radius: 8px; overflow-x: auto; white-space: pre-wrap;">
${error.stack || 'لا توجد تفاصيل إضافية'}</pre>
            </div>
        </div>
        
        <div class="output-message message-info">
            <div class="message-icon">💡</div>
            <div class="message-content">
                <h4>نصائح لإصلاح الخطأ</h4>
                <ul style="margin-right: 20px; margin-top: 10px;">
                    <li>تحقق من الأقواس والأقواس المعقوفة</li>
                    <li>تأكد من تعريف المتغيرات قبل استخدامها</li>
                    <li>تحقق من أسماء الدوال والمتغيرات</li>
                    <li>تأكد من الفواصل والنقاط في الكود</li>
                    <li>جرب تقسيم الكود إلى أجزاء واختبار كل جزء</li>
                </ul>
            </div>
        </div>
    `;
    
    outputContent.innerHTML = html;
    outputContent.scrollTop = 0;
}

// تنسيق الإخراج
function formatOutput(value) {
    if (value === null) return '<span style="color: #AB47BC;">null</span>';
    if (value === undefined) return '<span style="color: #AB47BC;">undefined</span>';
    
    if (typeof value === 'boolean') {
        return `<span style="color: #7E57C2;">${value}</span>`;
    }
    
    if (typeof value === 'number') {
        return `<span style="color: #2E7D32; font-weight: 500;">${value}</span>`;
    }
    
    if (typeof value === 'string') {
        return `<span style="color: #C62828;">"${value}"</span>`;
    }
    
    if (typeof value === 'function') {
        return `<span style="color: #1565C0; font-style: italic;">[Function: ${value.name || 'anonymous'}]</span>`;
    }
    
    if (Array.isArray(value)) {
        const items = value.map(item => formatOutput(item)).join(', ');
        return `<span style="color: #0277BD;">[${items}]</span>`;
    }
    
    if (typeof value === 'object') {
        try {
            const json = JSON.stringify(value, null, 2);
            return `<pre style="color: #00695C; margin: 0; white-space: pre-wrap;">${json}</pre>`;
        } catch {
            return `<span style="color: #546E7A;">${String(value)}</span>`;
        }
    }
    
    return String(value);
}

// مسح الكود
function clearCode() {
    const codeInput = document.getElementById('code-input');
    
    // تأثير أنيميشن
    codeInput.style.opacity = '0.5';
    codeInput.style.transform = 'translateX(-10px)';
    
    setTimeout(() => {
        codeInput.value = '';
        codeInput.style.opacity = '1';
        codeInput.style.transform = 'translateX(0)';
        codeInput.style.animation = 'pulseBorder 1s ease';
        
        setTimeout(() => {
            codeInput.style.animation = '';
        }, 1000);
        
        showNotification('تم مسح الكود', 'info');
        updateStatus('جاهز', 'ready');
    }, 300);
}

// تحديث الحالة
function updateStatus(text, type) {
    const statusElement = document.getElementById('status');
    const indicator = statusElement.querySelector('.status-indicator');
    
    statusElement.querySelector('span:not(.status-indicator)').textContent = text;
    indicator.className = 'status-indicator';
    
    switch(type) {
        case 'ready':
            indicator.classList.add('ready');
            break;
        case 'running':
            indicator.classList.add('running');
            break;
        case 'error':
            indicator.classList.add('error');
            break;
        case 'info':
            indicator.style.background = 'var(--info-color)';
            break;
    }
}

// إظهار إشعار
function showNotification(message, type = 'info') {
    const notificationArea = document.getElementById('notification-area');
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
        </div>
        <div class="notification-content">
            <h4>${message}</h4>
        </div>
    `;
    
    notificationArea.appendChild(notification);
    
    // إزالة الإشعار بعد 3 ثوان
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// تحديث العداد
function updateCounter() {
    // يمكن استخدام هذا لتحديث أي عدادات في المستقبل
}

// أنيميشن الترحيب
function showWelcomeAnimation() {
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.style.opacity = '0';
        welcomeMessage.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            welcomeMessage.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            welcomeMessage.style.opacity = '1';
            welcomeMessage.style.transform = 'translateY(0)';
        }, 300);
    }
}

// وظائف إضافية
function formatCode() {
    const codeInput = document.getElementById('code-input');
    const code = codeInput.value;
    
    // محاولة تنظيم الكود (تنسيق بسيط)
    const formatted = code
        .replace(/\t/g, '    ')
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/\{\s*\n/g, '{\n')
        .replace(/\n\s*\}/g, '\n}');
    
    codeInput.value = formatted;
    showNotification('تم تنظيم الكود', 'success');
}

function saveCode() {
    const code = document.getElementById('code-input').value;
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'javascript-code.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('تم حفظ الكود في الملف', 'success');
}

// تهيئة الأنيميشن للعناصر
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.example-card, .stat').forEach(el => {
        observer.observe(el);
    });
}

// تشغيل التهيئة النهائية
initializeAnimations();