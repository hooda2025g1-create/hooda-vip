// =============================================
// 1. تهيئة النظام والمتغيرات العالمية
// =============================================
let isRunning = false;
let executionTimeout = null;
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// =============================================
// 2. مكتبة الأمثلة الكاملة (15 مثال)
// =============================================
const examplesLibrary = [
    {
        id: 1,
        title: "أساسيات الجمع والطرح",
        description: "عمليات حسابية بسيطة للمبتدئين",
        category: "مبتدئ",
        tags: ["حساب", "مبتدئ"],
        level: "beginner",
        code: `// العمليات الحسابية الأساسية
console.log("الجمع: 10 + 5 =", 10 + 5);
console.log("الطرح: 10 - 5 =", 10 - 5);
console.log("الضرب: 10 * 5 =", 10 * 5);
console.log("القسمة: 10 / 5 =", 10 / 5);
console.log("الباقي: 10 % 3 =", 10 % 3);`
    },
    {
        id: 2,
        title: "المتغيرات وأنواع البيانات",
        description: "تعريف واستخدام المتغيرات",
        category: "مبتدئ",
        tags: ["متغيرات", "أنواع"],
        level: "beginner",
        code: `// تعريف المتغيرات
let name = "أحمد";
const age = 25;
var city = "القاهرة";

console.log("الاسم:", name);
console.log("العمر:", age);
console.log("المدينة:", city);

// أنواع البيانات
let number = 100;
let text = "مرحباً";
let isStudent = true;
let fruits = ["تفاح", "موز", "برتقال"];
let person = { name: "سارة", age: 30 };

console.log("نوع الرقم:", typeof number);
console.log("نوع النص:", typeof text);
console.log("نوع المصفوفة:", typeof fruits);`
    },
    {
        id: 3,
        title: "الدوال البسيطة",
        description: "إنشاء واستدعاء الدوال",
        category: "مبتدئ",
        tags: ["دوال", "برمجة"],
        level: "beginner",
        code: `// دالة بسيطة
function greet(name) {
    return "مرحباً " + name + "!";
}

console.log(greet("محمد"));
console.log(greet("سارة"));

// دالة حسابية
function square(x) {
    return x * x;
}

console.log("مربع 8 هو:", square(8));
console.log("مربع 12 هو:", square(12));`
    },
    {
        id: 4,
        title: "المصفوفات الأساسية",
        description: "التعامل مع المصفوفات",
        category: "مبتدئ",
        tags: ["مصفوفات", "بيانات"],
        level: "beginner",
        code: `// إنشاء مصفوفة
let fruits = ["تفاح", "موز", "برتقال", "فراولة"];

console.log("المصفوفة:", fruits);
console.log("الطول:", fruits.length);
console.log("العنصر الأول:", fruits[0]);

// إضافة وإزالة
fruits.push("مانجو");
console.log("بعد إضافة مانجو:", fruits);

fruits.pop();
console.log("بعد إزالة آخر عنصر:", fruits);

// التكرار
console.log("عرض جميع الفواكه:");
for(let i = 0; i < fruits.length; i++) {
    console.log(i + 1 + ". " + fruits[i]);
}`
    },
    {
        id: 5,
        title: "الشروط الأساسية",
        description: "استخدام if و else",
        category: "مبتدئ",
        tags: ["شروط", "منطق"],
        level: "beginner",
        code: `// if بسيط
let age = 20;

if (age >= 18) {
    console.log("يمكنك التصويت");
} else {
    console.log("لا يمكنك التصويت");
}

// else if
let score = 85;

if (score >= 90) {
    console.log("ممتاز - A");
} else if (score >= 80) {
    console.log("جيد جداً - B");
} else if (score >= 70) {
    console.log("جيد - C");
} else {
    console.log("يحتاج تحسين");
}

// Ternary Operator
let temperature = 25;
let weather = temperature > 30 ? "حار" : "معتدل";
console.log("الجو:", weather);`
    },
    {
        id: 6,
        title: "الحلقات Loops",
        description: "استخدام for و while",
        category: "مبتدئ",
        tags: ["حلقات", "تكرار"],
        level: "beginner",
        code: `// for loop
console.log("الأرقام من 1 إلى 5:");
for(let i = 1; i <= 5; i++) {
    console.log("رقم:", i);
}

// while loop
console.log("العد التنازلي:");
let count = 5;
while(count > 0) {
    console.log(count);
    count--;
}

// for...of مع المصفوفات
let fruits = ["تفاح", "موز", "برتقال"];
console.log("عرض الفواكه:");
for(let fruit of fruits) {
    console.log("فاكهة:", fruit);
}

// break و continue
console.log("الأرقام من 1 إلى 10 (تخطي 5):");
for(let i = 1; i <= 10; i++) {
    if(i === 5) continue;
    console.log(i);
}`
    },
    {
        id: 7,
        title: "الكائنات Objects",
        description: "إنشاء واستخدام الكائنات",
        category: "متوسط",
        tags: ["كائنات", "بيانات"],
        level: "intermediate",
        code: `// إنشاء كائن
let person = {
    name: "أحمد",
    age: 30,
    city: "الإسكندرية",
    isStudent: false,
    
    // دالة داخل الكائن
    greet: function() {
        return "مرحباً، أنا " + this.name;
    }
};

console.log("الكائن:", person);
console.log("الاسم:", person.name);
console.log("العمر:", person['age']);
console.log(person.greet());

// إضافة خصائص جديدة
person.email = "ahmed@example.com";
console.log("بعد إضافة الإيميل:", person);

// التكرار على الخصائص
console.log("خصائص الكائن:");
for(let key in person) {
    if(typeof person[key] !== 'function') {
        console.log(key + ": " + person[key]);
    }
}`
    },
    {
        id: 8,
        title: "الدوال المتقدمة",
        description: "الدوال مع معاملات ودوال السهم",
        category: "متوسط",
        tags: ["دوال", "متقدم"],
        level: "intermediate",
        code: `// دالة مع معاملات متعددة
function calculate(num1, num2, operation) {
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 === 0) return "لا يمكن القسمة على صفر";
            return num1 / num2;
        default:
            return "عملية غير صحيحة";
    }
}

console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 * 5 =", calculate(10, 5, '*'));

// دالة السهم (Arrow Function)
const square = (x) => x * x;
console.log("مربع 9 هو:", square(9));

const sumArray = (arr) => {
    let total = 0;
    for(let num of arr) {
        total += num;
    }
    return total;
};

console.log("مجموع [1,2,3,4,5] هو:", sumArray([1,2,3,4,5]));

// دالة مع قيمة افتراضية
function greet(name = "زائر") {
    return "أهلاً وسهلاً " + name;
}

console.log(greet("محمود"));
console.log(greet());`
    },
    {
        id: 9,
        title: "المصفوفات المتقدمة",
        description: "الدوال المدمجة في المصفوفات",
        category: "متوسط",
        tags: ["مصفوفات", "متقدم"],
        level: "intermediate",
        code: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - تحويل المصفوفة
let squares = numbers.map(num => num * num);
console.log("مربعات الأرقام:", squares);

// filter - تصفية المصفوفة
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("الأرقام الزوجية:", evenNumbers);

// reduce - جمع المصفوفة
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("مجموع الأرقام:", sum);

// find - البحث في المصفوفة
let found = numbers.find(num => num > 5);
console.log("أول رقم أكبر من 5:", found);

// sort - ترتيب المصفوفة
let randomNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
let sorted = randomNumbers.sort((a, b) => a - b);
console.log("الأرقام المرتبة:", sorted);`
    },
    {
        id: 10,
        title: "التعامل مع النصوص",
        description: "الدوال المدمجة في النصوص",
        category: "متوسط",
        tags: ["نصوص", "معالجة"],
        level: "intermediate",
        code: `let text = "مرحباً بك في عالم JavaScript";

console.log("طول النص:", text.length);
console.log("أحرف كبيرة:", text.toUpperCase());
console.log("أحرف صغيرة:", text.toLowerCase());
console.log("هل يحتوي على 'JavaScript'؟", text.includes("JavaScript"));
console.log("موقع كلمة 'عالم':", text.indexOf("عالم"));

// تقسيم النص
let words = text.split(" ");
console.log("الكلمات:", words);
console.log("عدد الكلمات:", words.length);

// استبدال النص
let newText = text.replace("JavaScript", "البرمجة");
console.log("النص الجديد:", newText);

// أخذ جزء من النص
console.log("الأول 7 أحرف:", text.substring(0, 7));`
    },
    {
        id: 11,
        title: "التاريخ والوقت",
        description: "التعامل مع Date object",
        category: "متوسط",
        tags: ["تاريخ", "وقت"],
        level: "intermediate",
        code: `// التاريخ الحالي
let now = new Date();
console.log("التاريخ الكامل:", now);
console.log("السنة:", now.getFullYear());
console.log("الشهر:", now.getMonth() + 1);
console.log("اليوم:", now.getDate());
console.log("الساعة:", now.getHours());
console.log("الدقائق:", now.getMinutes());
console.log("الثواني:", now.getSeconds());

// تنسيق التاريخ
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
console.log("التاريخ المنسق:", now.toLocaleDateString('ar-SA', options));

// حساب الفرق بين تاريخين
let date1 = new Date(2024, 0, 1);
let date2 = new Date(2024, 11, 31);
let difference = date2 - date1;
let days = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log("عدد الأيام بين 1 يناير و31 ديسمبر 2024:", days);`
    },
    {
        id: 12,
        title: "معالجة الأخطاء",
        description: "try...catch و throw",
        category: "متقدم",
        tags: ["أخطاء", "معالجة"],
        level: "advanced",
        code: `// try...catch الأساسي
try {
    console.log("بداية البرنامج");
    let result = 10 / 2;
    console.log("نتيجة القسمة:", result);
    
    // خطأ متعمد
    let x = y + 5;
    
} catch(error) {
    console.log("حدث خطأ!");
    console.log("الرسالة:", error.message);
}

console.log("البرنامج مستمر...");

// throw - خطأ مخصص
function divide(a, b) {
    if(b === 0) {
        throw new Error("لا يمكن القسمة على صفر");
    }
    return a / b;
}

try {
    console.log("10 / 2 =", divide(10, 2));
    console.log("10 / 0 =", divide(10, 0));
} catch(error) {
    console.log("خطأ في القسمة:", error.message);
}`
    },
    {
        id: 13,
        title: "الوعود Promises",
        description: "التعامل مع العمليات غير المتزامنة",
        category: "متقدم",
        tags: ["Promises", "غير متزامن"],
        level: "advanced",
        code: `// إنشاء Promise
let promise = new Promise((resolve, reject) => {
    console.log("جاري تنفيذ العملية...");
    
    setTimeout(() => {
        let success = Math.random() > 0.5;
        
        if(success) {
            resolve("تمت العملية بنجاح!");
        } else {
            reject("فشلت العملية");
        }
    }, 2000);
});

// استخدام Promise
promise
    .then(result => {
        console.log("النتيجة:", result);
    })
    .catch(error => {
        console.log("خطأ:", error);
    })
    .finally(() => {
        console.log("انتهت العملية");
    });`
    },
    {
        id: 14,
        title: "الفئات Classes",
        description: "البرمجة الكائنية في JavaScript",
        category: "متوسط",
        tags: ["Classes", "OOP"],
        level: "intermediate",
        code: `// تعريف class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return "مرحباً، أنا " + this.name + " وعمري " + this.age;
    }
}

// إنشاء كائن
let person1 = new Person("أحمد", 25);
console.log("الكائن:", person1);
console.log(person1.greet());

// الوراثة
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    
    study() {
        return "أدرس " + this.major;
    }
}

// إنشاء طالب
let student = new Student("سارة", 20, "علوم حاسب");
console.log("\\nالطالب:", student);
console.log(student.greet());
console.log(student.study());`
    },
    {
        id: 15,
        title: "حاسبة متكاملة",
        description: "مشروع كامل مع واجهة برمجة",
        category: "مشروع",
        tags: ["مشروع", "حاسبة", "كامل"],
        level: "advanced",
        code: `// حاسبة متكاملة
class Calculator {
    constructor() {
        this.history = [];
    }
    
    add(a, b) {
        const result = a + b;
        this.history.push(a + " + " + b + " = " + result);
        return result;
    }
    
    subtract(a, b) {
        const result = a - b;
        this.history.push(a + " - " + b + " = " + result);
        return result;
    }
    
    multiply(a, b) {
        const result = a * b;
        this.history.push(a + " × " + b + " = " + result);
        return result;
    }
    
    divide(a, b) {
        if(b === 0) {
            throw new Error("لا يمكن القسمة على صفر");
        }
        const result = a / b;
        this.history.push(a + " ÷ " + b + " = " + result);
        return result;
    }
    
    getHistory() {
        return this.history;
    }
}

// اختبار الحاسبة
console.log("=== حاسبة متكاملة ===");
const calc = new Calculator();

try {
    console.log("10 + 5 =", calc.add(10, 5));
    console.log("10 - 5 =", calc.subtract(10, 5));
    console.log("10 × 5 =", calc.multiply(10, 5));
    console.log("10 ÷ 5 =", calc.divide(10, 5));
    
    console.log("\\nسجل العمليات:");
    calc.getHistory().forEach((operation, index) => {
        console.log(index + 1 + ". " + operation);
    });
    
} catch(error) {
    console.log("\\nخطأ:", error.message);
}`
    }
];

// =============================================
// 3. تهيئة النظام عند تحميل الصفحة
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ مشغل JavaScript جاهز!");
    
    initializeSystem();
    setupEventListeners();
    loadSavedCode();
});

// =============================================
// 4. وظائف التهيئة الأساسية
// =============================================
function initializeSystem() {
    adjustEditorSize();
    setupMobileOptimizations();
    createExamplesModal();
    addExamplesButton();
    displayRandomExamples();
}

function setupEventListeners() {
    // حجم النافذة
    window.addEventListener('resize', adjustEditorSize);
    
    // اختصارات لوحة المفاتيح (للكمبيوتر فقط)
    if (!isTouchDevice) {
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }
    
    // استماع لتغيرات المحرر
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.addEventListener('input', handleCodeInput);
        codeInput.addEventListener('blur', saveCurrentCode);
    }
}

// =============================================
// 5. وظائف التحكم بالمحرر
// =============================================
function adjustEditorSize() {
    const editor = document.getElementById('code-input');
    const output = document.getElementById('output');
    
    if (!editor || !output) return;
    
    if (window.innerWidth < 768) {
        editor.style.minHeight = '250px';
        output.style.minHeight = '200px';
    } else {
        const availableHeight = window.innerHeight - 250;
        editor.style.minHeight = Math.max(300, availableHeight) + 'px';
        output.style.minHeight = Math.max(300, availableHeight) + 'px';
    }
}

function handleCodeInput() {
    const codeInput = document.getElementById('code-input');
    const statusElement = document.getElementById('status');
    
    if (!codeInput || !statusElement) return;
    
    // تحديث الحالة
    statusElement.textContent = 'معدل';
    statusElement.style.color = '#f39c12';
    
    // عد الأسطر والأحرف
    const lines = codeInput.value.split('\n').length;
    const chars = codeInput.value.length;
    
    // تحديث العنوان
    const title = `محرر الكود (${lines} سطر, ${chars} حرف)`;
    const editorTitle = document.querySelector('.editor-header span');
    if (editorTitle) {
        editorTitle.innerHTML = `<i class="fas fa-code"></i> ${title}`;
    }
    
    // حفظ تلقائي
    saveCurrentCode();
}

// =============================================
// 6. وظائف تشغيل الكود
// =============================================
function runCode() {
    if (isRunning) {
        showMessage('جاري تشغيل كود آخر...', 'error');
        return;
    }
    
    const codeInput = document.getElementById('code-input');
    const output = document.getElementById('output');
    
    if (!codeInput || !output) {
        showMessage('عناصر DOM غير موجودة', 'error');
        return;
    }
    
    const code = codeInput.value.trim();
    
    if (!code) {
        showMessage('اكتب بعض الكود أولاً!', 'error');
        return;
    }
    
    // تعيين حالة التشغيل
    isRunning = true;
    updateStatus('جاري التشغيل...', '#f39c12');
    
    // أنيميشن للزر
    animateButton('.run-btn', 'pulse');
    
    // إظهار مؤشر التحميل
    showLoadingIndicator(output);
    
    // إلغاء أي وقت سابق
    if (executionTimeout) {
        clearTimeout(executionTimeout);
    }
    
    // تنفيذ الكود بعد تأخير قصير
    executionTimeout = setTimeout(() => {
        executeJavaScriptCode(code, output);
        isRunning = false;
        updateStatus('جاهز', '#27ae60');
    }, 100);
}

function executeJavaScriptCode(code, outputElement) {
    try {
        // حفظ console الأصلي
        const originalConsole = {
            log: console.log,
            error: console.error,
            warn: console.warn,
            info: console.info
        };
        
        const logs = [];
        const errors = [];
        const warnings = [];
        const infos = [];
        
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
        
        // تنفيذ الكود
        const result = eval(code);
        
        // استعادة console الأصلي
        console.log = originalConsole.log;
        console.error = originalConsole.error;
        console.warn = originalConsole.warn;
        console.info = originalConsole.info;
        
        // عرض النتائج
        displayResults(logs, errors, warnings, infos, result, outputElement);
        showMessage('تم تنفيذ الكود بنجاح! ✅', 'success');
        
    } catch (error) {
        displayError(error, outputElement);
        showMessage('حدث خطأ أثناء التنفيذ ❌', 'error');
    }
}

function displayResults(logs, errors, warnings, infos, result, outputElement) {
    let html = '<div class="slide-in">';
    
    // عرض جميع أنواع الإخراج
    const allOutputs = [
        { data: logs, title: 'الإخراج', icon: 'check-circle', color: '#28a745', className: 'success' },
        { data: errors, title: 'الأخطاء', icon: 'exclamation-circle', color: '#dc3545', className: 'error' },
        { data: warnings, title: 'تحذيرات', icon: 'exclamation-triangle', color: '#f39c12', className: 'warning' },
        { data: infos, title: 'معلومات', icon: 'info-circle', color: '#17a2b8', className: 'info' }
    ];
    
    allOutputs.forEach(outputType => {
        if (outputType.data.length > 0) {
            html += `
                <div class="${outputType.className} message">
                    <i class="fas fa-${outputType.icon}"></i>
                    <strong>${outputType.title} (${outputType.data.length})</strong>
                </div>
            `;
            
            outputType.data.forEach(item => {
                html += `
                    <div class="output-line" style="border-left-color: ${outputType.color}">
                        ${item.args.map(arg => formatOutput(arg)).join(' ')}
                    </div>
                `;
            });
        }
    });
    
    html += '</div>';
    
    // عرض القيمة المعادة
    if (result !== undefined) {
        html += `
            <div class="success message pulse">
                <i class="fas fa-arrow-right"></i>
                <strong>القيمة المعادة:</strong>
                <div class="return-value">
                    ${formatOutput(result)}
                </div>
            </div>
        `;
    }
    
    // إضافة إحصائيات
    const totalOutputs = logs.length + errors.length + warnings.length + infos.length;
    html += `
        <div class="statistics">
            <strong>📊 الإحصائيات:</strong>
            <div class="stats-grid">
                <span style="color: #28a745;">✅ ${logs.length} إخراج</span>
                <span style="color: #dc3545;">❌ ${errors.length} خطأ</span>
                <span style="color: #f39c12;">⚠️ ${warnings.length} تحذير</span>
                <span style="color: #17a2b8;">ℹ️ ${infos.length} معلومات</span>
            </div>
        </div>
    `;
    
    outputElement.innerHTML = html;
    outputElement.scrollTop = 0;
}

function displayError(error, outputElement) {
    const html = `
        <div class="error message slide-in">
            <i class="fas fa-bug"></i>
            <strong>حدث خطأ!</strong>
            <p>${error.name}: ${error.message}</p>
        </div>
        
        <div class="error-details">
            <strong>تفاصيل الخطأ:</strong>
            <pre>${error.stack || 'لا توجد تفاصيل إضافية'}</pre>
        </div>
        
        <div class="info message">
            <i class="fas fa-lightbulb"></i>
            <strong>نصائح للحل:</strong>
            <ul>
                <li>تأكد من صيغة الكود</li>
                <li>تحقق من الأقواس والنقاط</li>
                <li>تأكد من تعريف المتغيرات قبل استخدامها</li>
                <li>تحقق من أسماء الدوال والمتغيرات</li>
            </ul>
        </div>
    `;
    
    outputElement.innerHTML = html;
}

// =============================================
// 7. وظائف الأمثلة
// =============================================
function openExamplesModal() {
    const modal = document.getElementById('examplesModal');
    const container = document.getElementById('examplesContainer');
    
    if (!modal || !container) return;
    
    // تعبئة الأمثلة
    container.innerHTML = '';
    examplesLibrary.forEach(example => {
        const card = createExampleCard(example);
        container.appendChild(card);
    });
    
    // إظهار النافذة
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modal.classList.add('fade-in');
    
    // منع التمرير على الجوال
    if (isTouchDevice) {
        document.addEventListener('touchmove', preventModalBackgroundScroll, { passive: false });
    }
}

function createExampleCard(example) {
    const card = document.createElement('div');
    card.className = 'example-card';
    card.innerHTML = `
        <h4><i class="fas fa-code"></i> ${example.title}</h4>
        <p>${example.description}</p>
        <div class="example-tags">
            <span class="tag ${example.level}">${example.category}</span>
            ${example.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    // إضافة مستمع الأحداث
    const eventType = isTouchDevice ? 'touchstart' : 'click';
    card.addEventListener(eventType, function(e) {
        if (isTouchDevice) e.preventDefault();
        selectExample(example);
    });
    
    if (isTouchDevice) {
        card.style.touchAction = 'manipulation';
    }
    
    return card;
}

function selectExample(example) {
    const codeInput = document.getElementById('code-input');
    if (!codeInput) return;
    
    codeInput.value = example.code;
    closeExamplesModal();
    
    showMessage(`تم تحميل مثال: ${example.title}`, 'success');
    animateElement('.editor-box', 'glow-animation');
    
    updateStatus('معدل', '#f39c12');
    saveCurrentCode();
}

function closeExamplesModal() {
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modal.classList.remove('fade-in');
    
    if (isTouchDevice) {
        document.removeEventListener('touchmove', preventModalBackgroundScroll);
    }
}

function preventModalBackgroundScroll(e) {
    const modal = document.getElementById('examplesModal');
    if (modal && modal.style.display === 'flex') {
        e.preventDefault();
    }
}

// =============================================
// 8. وظائف المساعدة والرسائل
// =============================================
function showMessage(text, type = 'info') {
    // إزالة الرسائل القديمة
    removeExistingMessages();
    
    // إنشاء الرسالة الجديدة
    const message = createMessageElement(text, type);
    document.body.appendChild(message);
    
    // إزالة الرسالة بعد 3 ثوان
    setTimeout(() => removeMessage(message), 3000);
}

function createMessageElement(text, type) {
    const message = document.createElement('div');
    message.className = `temp-message ${type} message pulse`;
    
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    
    const icon = icons[type] || 'info-circle';
    
    // تصميم متجاوب
    message.style.cssText = `
        position: fixed;
        ${isTouchDevice ? `
            top: 10px;
            right: 10px;
            left: 10px;
            padding: 12px;
            font-size: 14px;
        ` : `
            top: 20px;
            right: 20px;
            min-width: 300px;
            padding: 15px;
        `}
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        border-radius: ${isTouchDevice ? '10px' : '8px'};
        text-align: ${isTouchDevice ? 'center' : 'left'};
        display: flex;
        align-items: center;
        gap: 10px;
        backdrop-filter: blur(10px);
    `;
    
    message.innerHTML = `
        <i class="fas fa-${icon}" style="font-size: 20px;"></i>
        <span>${text}</span>
    `;
    
    return message;
}

function removeExistingMessages() {
    const messages = document.querySelectorAll('.temp-message');
    messages.forEach(msg => {
        msg.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => msg.remove(), 300);
    });
}

function removeMessage(message) {
    if (message && message.parentNode) {
        message.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 300);
    }
}

// =============================================
// 9. وظائف التخزين
// =============================================
function saveCurrentCode() {
    const codeInput = document.getElementById('code-input');
    if (!codeInput) return;
    
    const code = codeInput.value.trim();
    if (code) {
        try {
            localStorage.setItem('lastCode', code);
        } catch (e) {
            console.warn('تعذر حفظ الكود في localStorage:', e);
        }
    }
}

function loadSavedCode() {
    try {
        const savedCode = localStorage.getItem('lastCode');
        if (savedCode) {
            const codeInput = document.getElementById('code-input');
            if (codeInput) {
                codeInput.value = savedCode;
                showMessage('تم استرجاع الكود السابق', 'info');
            }
        }
    } catch (e) {
        console.warn('تعذر تحميل الكود من localStorage:', e);
    }
}

// =============================================
// 10. وظائف تحسين الجوال
// =============================================
function setupMobileOptimizations() {
    if (!isTouchDevice) return;
    
    // منع التكبير بالنقر المزدوج
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    // تحسين أداء التمرير
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // تحسين الأداء العام
    document.body.classList.add('touch-device');
}

function vibrateIfSupported() {
    if (isTouchDevice && 'vibrate' in navigator) {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', () => {
                navigator.vibrate(10);
            }, { passive: true });
        });
    }
}

// =============================================
// 11. وظائف الأنيميشن والتأثيرات
// =============================================
function animateButton(selector, animationClass) {
    const button = document.querySelector(selector);
    if (!button) return;
    
    button.classList.add(animationClass);
    setTimeout(() => button.classList.remove(animationClass), 300);
}

function animateElement(selector, animationClass) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    element.classList.add(animationClass);
    setTimeout(() => element.classList.remove(animationClass), 2000);
}

function updateStatus(text, color) {
    const statusElement = document.getElementById('status');
    if (!statusElement) return;
    
    statusElement.textContent = text;
    statusElement.style.color = color;
}

// =============================================
// 12. وظائف تنسيق الإخراج
// =============================================
function formatOutput(value) {
    if (value === null) return '<span class="null-value">null</span>';
    if (value === undefined) return '<span class="undefined-value">undefined</span>';
    
    const type = typeof value;
    
    switch (type) {
        case 'string':
            return `<span class="string-value">"${value}"</span>`;
        
        case 'number':
            return `<span class="number-value">${value}</span>`;
        
        case 'boolean':
            return `<span class="boolean-value">${value}</span>`;
        
        case 'object':
            if (Array.isArray(value)) {
                const items = value.map(item => formatOutput(item)).join(', ');
                return `[${items}]`;
            }
            
            try {
                const json = JSON.stringify(value, null, 2)
                    .replace(/\n/g, '<br>')
                    .replace(/ /g, '&nbsp;');
                return `<pre class="object-value">${json}</pre>`;
            } catch {
                return `<span class="object-value">${String(value)}</span>`;
            }
        
        default:
            return String(value);
    }
}

// =============================================
// 13. وظائف مساعدة إضافية
// =============================================
function clearCode() {
    if (!confirm('هل تريد مسح الكود؟')) return;
    
    const codeInput = document.getElementById('code-input');
    const output = document.getElementById('output');
    
    if (!codeInput || !output) return;
    
    codeInput.value = '';
    
    output.innerHTML = `
        <div class="info message fade-in">
            <i class="fas fa-info-circle"></i>
            <strong>المحرر نظيف</strong>
            <p>اكتب كود JavaScript جديد واضغط على "تشغيل الكود"</p>
        </div>
    `;
    
    animateButton('.clear-btn', 'shake-animation');
    showMessage('تم مسح المحرر', 'success');
    
    updateStatus('جاهز', '#27ae60');
    localStorage.removeItem('lastCode');
}

function showLoadingIndicator(element) {
    element.innerHTML = `
        <div class="loading-indicator">
            <div class="spinner"></div>
            <p>جاري تنفيذ الكود...</p>
        </div>
    `;
}

// =============================================
// 14. اختصارات لوحة المفاتيح
// =============================================
function handleKeyboardShortcuts(e) {
    // Ctrl+Enter لتشغيل الكود
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
        showMessage('تم تشغيل الكود (Ctrl+Enter)', 'success');
    }
    
    // Ctrl+E لفتح الأمثلة
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        openExamplesModal();
    }
    
    // Ctrl+L لمسح المحرر
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        clearCode();
    }
    
    // ESC لإغلاق النوافذ
    if (e.key === 'Escape') {
        closeExamplesModal();
    }
}

// =============================================
// 15. وظائف إعداد واجهة المستخدم
// =============================================
function createExamplesModal() {
    if (document.getElementById('examplesModal')) return;
    
    const modalHTML = `
    <div id="examplesModal" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fas fa-code"></i> مكتبة الأمثلة (${examplesLibrary.length} مثال)</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body" id="examplesContainer">
                <!-- الأمثلة ستظهر هنا -->
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // إعداد إغلاق النافذة
    setupModalCloseEvents();
}

function setupModalCloseEvents() {
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    // إغلاق بالزر
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeExamplesModal);
    }
    
    // إغلاق بالنقر خارج النافذة
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeExamplesModal();
        }
    });
}

function addExamplesButton() {
    const controls = document.querySelector('.controls');
    if (!controls) return;
    
    const existingBtn = controls.querySelector('.examples-btn');
    if (existingBtn) return;
    
    const examplesBtn = document.createElement('button');
    examplesBtn.className = 'btn examples-btn';
    examplesBtn.innerHTML = '<i class="fas fa-code"></i> أمثلة';
    
    examplesBtn.addEventListener('click', openExamplesModal);
    
    // إضافة بعد زر التشغيل
    const runBtn = controls.querySelector('.run-btn');
    if (runBtn) {
        runBtn.parentNode.insertBefore(examplesBtn, runBtn.nextSibling);
    } else {
        controls.appendChild(examplesBtn);
    }
}

function displayRandomExamples() {
    const exampleCodeElement = document.querySelector('.example-code pre');
    if (!exampleCodeElement) return;
    
    // أخذ 3 أمثلة عشوائية
    const randomExamples = [...examplesLibrary]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    let examplesHTML = '';
    randomExamples.forEach(example => {
        const preview = example.code.split('\n').slice(0, 2).join('\n');
        examplesHTML += `// ${example.title}\n${preview}\n\n`;
    });
    
    exampleCodeElement.textContent = examplesHTML.trim();
    
    // إعداد النقر على الأمثلة
    if (isTouchDevice) {
        exampleCodeElement.addEventListener('touchstart', handleExampleClick, { passive: false });
    } else {
        exampleCodeElement.addEventListener('click', handleExampleClick);
    }
}

function handleExampleClick(e) {
    if (isTouchDevice) e.preventDefault();
    
    const exampleText = this.textContent;
    const codeInput = document.getElementById('code-input');
    
    if (codeInput) {
        codeInput.value = exampleText;
        showMessage('تم نسخ المثال إلى المحرر', 'success');
        
        this.classList.add('pulse');
        setTimeout(() => this.classList.remove('pulse'), 300);
        
        updateStatus('معدل', '#f39c12');
        saveCurrentCode();
    }
}

// =============================================
// 16. تهيئة CSS الإضافية
// =============================================
function addAdditionalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .output-line {
            margin: 10px 0;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 5px;
            border-left: 3px solid;
            direction: ltr;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
        }
        
        .return-value {
            margin-top: 5px;
            padding: 10px;
            background: #e8f5e9;
            border-radius: 5px;
            direction: ltr;
            font-family: 'Courier New', monospace;
        }
        
        .statistics {
            margin-top: 20px;
            padding: 15px;
            background: #e3f2fd;
            border-radius: 8px;
            text-align: center;
        }
        
        .stats-grid {
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .loading-indicator {
            text-align: center;
            padding: 40px;
        }
        
        .spinner {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        .error-details {
            margin: 15px 0;
            padding: 15px;
            background: #fef5f5;
            border-radius: 8px;
            direction: ltr;
        }
        
        .error-details pre {
            margin-top: 10px;
            color: #dc3545;
            overflow-x: auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .string-value { color: #28a745; }
        .number-value { color: #2980b9; }
        .boolean-value { color: #e74c3c; }
        .null-value, .undefined-value { color: #777; font-style: italic; }
        .object-value { color: #9c27b0; }
        
        .touch-device .btn {
            min-height: 44px;
            min-width: 44px;
        }
    `;
    
    document.head.appendChild(style);
}

// =============================================
// 17. التهيئة النهائية
// =============================================
// إضافة CSS الإضافية
addAdditionalStyles();

// تشغيل vibration إذا متاح
if (isTouchDevice) {
    window.addEventListener('load', vibrateIfSupported);
}

console.log('🚀 نظام مشغل JavaScript جاهز للعمل!');