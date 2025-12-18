// =============================================
// 1. تهيئة النظام والمتغيرات العالمية
// =============================================
let isRunning = false;
let executionTimeout = null;
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
let touchStartY = 0;
let isModalOpen = false;

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
    
    // إضافة التحسينات الجديدة
    enhanceMobileModalExperience();
    setupSmoothScrolling();
    setupAdditionalLoaders();
    
    // تحسينات إضافية للجوال
    if (isTouchDevice) {
        document.body.classList.add('mobile-optimized');
        setupTouchControls();
    }
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
    addAdditionalStyles();
    addMobileOptimizationsCSS();
}

function setupEventListeners() {
    window.addEventListener('resize', adjustEditorSize);
    
    if (!isTouchDevice) {
        document.addEventListener('keydown', handleKeyboardShortcuts);
    }
    
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
    
    statusElement.textContent = 'معدل';
    statusElement.style.color = '#f39c12';
    
    const lines = codeInput.value.split('\n').length;
    const chars = codeInput.value.length;
    
    const title = `محرر الكود (${lines} سطر, ${chars} حرف)`;
    const editorTitle = document.querySelector('.editor-header span');
    if (editorTitle) {
        editorTitle.innerHTML = `<i class="fas fa-code"></i> ${title}`;
    }
    
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
    
    isRunning = true;
    updateStatus('جاري التشغيل...', '#f39c12');
    
    animateButton('.run-btn', 'pulse');
    
    showLoadingIndicator(output);
    
    if (executionTimeout) {
        clearTimeout(executionTimeout);
    }
    
    executionTimeout = setTimeout(() => {
        executeJavaScriptCode(code, output);
        isRunning = false;
        updateStatus('جاهز', '#27ae60');
    }, 100);
}

function executeJavaScriptCode(code, outputElement) {
    try {
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
        
        const result = eval(code);
        
        console.log = originalConsole.log;
        console.error = originalConsole.error;
        console.warn = originalConsole.warn;
        console.info = originalConsole.info;
        
        displayResults(logs, errors, warnings, infos, result, outputElement);
        showMessage('تم تنفيذ الكود بنجاح! ✅', 'success');
        
    } catch (error) {
        displayError(error, outputElement);
        showMessage('حدث خطأ أثناء التنفيذ ❌', 'error');
    }
}

function displayResults(logs, errors, warnings, infos, result, outputElement) {
    let html = '<div class="slide-in">';
    
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
// 7. وظائف الأمثلة - معدلة للجوال
// =============================================
function openExamplesModal() {
    const modal = document.getElementById('examplesModal');
    const container = document.getElementById('examplesContainer');
    
    if (!modal || !container) return;
    
    container.innerHTML = '';
    examplesLibrary.forEach(example => {
        const card = createExampleCard(example);
        container.appendChild(card);
    });
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modal.classList.add('fade-in');
    isModalOpen = true;
    
    setupModalTouchHandling();
}

function setupModalTouchHandling() {
    if (!isTouchDevice) return;
    
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    // تحسين اللمس للمحتوى
    const modalBody = modal.querySelector('.modal-body');
    if (modalBody) {
        modalBody.style.cssText = `
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
            max-height: 65vh;
            padding-bottom: 30px;
            will-change: transform;
        `;
    }
}

// دالة محسنة لإنشاء بطاقات الأمثلة مع تحسينات الجوال
function createExampleCard(example) {
    const card = document.createElement('div');
    card.className = 'example-card';
    card.dataset.exampleId = example.id;
    
    // تصميم محسّن مع زوايا دائرية
    card.innerHTML = `
        <div class="card-content">
            <div class="card-header">
                <i class="fas fa-code"></i>
                <h4>${example.title}</h4>
            </div>
            <p>${example.description}</p>
            <div class="example-tags">
                <span class="tag ${example.level}">${example.category}</span>
                ${example.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    // معالجة ذكية للجوال والكمبيوتر
    if (isTouchDevice) {
        // للجوال: معالجة ذكية لللمس - محسنة
        let cardTouchStartY = 0;
        let cardTouchStartTime = 0;
        let cardIsMoving = false;
        const TOUCH_MOVE_THRESHOLD = 15;
        const TOUCH_TIME_THRESHOLD = 250;
        
        card.addEventListener('touchstart', function(e) {
            cardTouchStartY = e.touches[0].clientY;
            cardTouchStartTime = Date.now();
            cardIsMoving = false;
            this.classList.add('touch-active');
        }, { passive: true });
        
        card.addEventListener('touchmove', function(e) {
            const currentY = e.touches[0].clientY;
            const deltaY = Math.abs(currentY - cardTouchStartY);
            
            if (deltaY > TOUCH_MOVE_THRESHOLD) {
                cardIsMoving = true;
                this.classList.remove('touch-active');
            }
        }, { passive: true });
        
        card.addEventListener('touchend', function(e) {
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - cardTouchStartTime;
            
            if (!cardIsMoving && touchDuration < TOUCH_TIME_THRESHOLD) {
                e.preventDefault();
                e.stopPropagation();
                selectExample(example);
                
                this.classList.add('click-effect');
                setTimeout(() => this.classList.remove('click-effect'), 300);
            }
            
            this.classList.remove('touch-active');
        }, { passive: false });
        
        card.addEventListener('touchcancel', function() {
            cardIsMoving = true;
            this.classList.remove('touch-active');
        }, { passive: true });
        
        // تحسينات الشكل للجوال
        card.style.cssText = `
            touch-action: pan-y;
            user-select: none;
            -webkit-user-select: none;
            margin: 10px 0;
            border-radius: 16px !important;
            border: 1px solid #e0e0e0;
            background: white;
            padding: 16px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            transition: all 0.2s ease;
            overflow: hidden;
            cursor: pointer;
        `;
        
    } else {
        // للكمبيوتر: استخدام الماوس فقط
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            selectExample(example);
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
            this.style.borderColor = '#9b59b6';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.borderColor = 'transparent';
        });
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

// إصلاح مشكلة زر الإغلاق
function closeExamplesModal() {
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    console.log('إغلاق النافذة...');
    
    // إزالة مستمع اللمس إذا كان موجوداً
    document.removeEventListener('touchmove', handleTouchMove);
    
    // إخفاء النافذة مع تأثير
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modal.classList.remove('fade-in');
    
    // إعادة تعيين المتغيرات
    isModalOpen = false;
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
                <button class="close-modal" onclick="closeExamplesModal()">&times;</button>
            </div>
            <div class="modal-body" id="examplesContainer">
                <!-- الأمثلة ستظهر هنا -->
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    setupModalCloseEvents();
}

function setupModalCloseEvents() {
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    // إغلاق بالزر
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        // إزالة أي مستمعين سابقين وإضافة جديد
        closeBtn.replaceWith(closeBtn.cloneNode(true));
        const newCloseBtn = modal.querySelector('.close-modal');
        
        newCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeExamplesModal();
        });
    }
    
    // إغلاق بالنقر خارج النافذة
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeExamplesModal();
        }
    });
}

// =============================================
// إضافة هذه الدالة الجديدة في النهاية
// =============================================
function initModalCloseFix() {
    if (!isTouchDevice) return;
    
    // تحسين النقر على زر الإغلاق للجوال
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            this.style.transform = 'scale(0.9)';
            this.style.opacity = '0.8';
        }, { passive: true });
        
        closeBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
            closeExamplesModal();
        }, { passive: false });
        
        closeBtn.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        }, { passive: true });
    }
}

// =============================================
// تحديث تهيئة النظام
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ مشغل JavaScript جاهز!");
    
    initializeSystem();
    setupEventListeners();
    loadSavedCode();
    
    // إضافة التحسينات الجديدة
    enhanceMobileModalExperience();
    setupSmoothScrolling();
    setupAdditionalLoaders();
    
    // تحسينات إضافية للجوال
    if (isTouchDevice) {
        document.body.classList.add('mobile-optimized');
        setupTouchControls();
        initModalCloseFix(); // إضافة هذا السطر
    }
});

// =============================================
// تحديث CSS للإصلاح
// =============================================
function addAdditionalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* تحسينات إضافية للجوال */
        @media (max-width: 767px) {
            .modal-overlay {
                padding: 0;
                align-items: flex-end;
                z-index: 10000;
            }
            
            .modal-content {
                width: 100%;
                max-height: 85vh;
                border-radius: 24px 24px 0 0 !important;
                animation: slideUp 0.3s ease-out;
                margin: 0;
                overflow: hidden;
                position: relative;
                z-index: 10001;
            }
            
            @keyframes slideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .modal-body {
                max-height: 65vh;
                padding-bottom: 30px;
                overscroll-behavior: contain;
                -webkit-overflow-scrolling: touch;
            }
            
            /* إصلاح زر الإغلاق */
            .close-modal {
                width: 44px;
                height: 44px;
                font-size: 24px;
                position: absolute;
                top: 15px;
                left: 15px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10002;
                border: none;
                cursor: pointer;
                color: white;
                transition: all 0.2s;
                -webkit-tap-highlight-color: transparent;
            }
            
            .close-modal:active {
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0.9);
            }
            
            .modal-header h2 {
                padding: 0 50px;
                text-align: center;
                font-size: 20px;
            }
            
            /* تحسين بطاقات الأمثلة */
            .example-card {
                margin: 10px 0;
                border-radius: 16px !important;
                border: 1px solid #e0e0e0;
                background: white;
                padding: 16px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                transition: all 0.2s;
            }
            
            .example-card:active {
                transform: scale(0.98);
                background: #f8f9fa;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// =============================================
// 8. وظائف المساعدة والرسائل
// =============================================
function showMessage(text, type = 'info') {
    removeExistingMessages();
    
    const message = createMessageElement(text, type);
    document.body.appendChild(message);
    
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
        border-radius: ${isTouchDevice ? '12px' : '8px'};
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
    
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    document.body.style.webkitOverflowScrolling = 'touch';
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
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
        showMessage('تم تشغيل الكود (Ctrl+Enter)', 'success');
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        openExamplesModal();
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        clearCode();
    }
    
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
    
    setupModalCloseEvents();
}

function setupModalCloseEvents() {
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeExamplesModal);
    }
    
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
    
    const randomExamples = [...examplesLibrary]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    let examplesHTML = '';
    randomExamples.forEach(example => {
        const preview = example.code.split('\n').slice(0, 2).join('\n');
        examplesHTML += `// ${example.title}\n${preview}\n\n`;
    });
    
    exampleCodeElement.textContent = examplesHTML.trim();
    
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
// 16. تهيئة CSS الإضافية مع تحسينات الجوال
// =============================================
function addAdditionalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* تحسينات إضافية للجوال */
        @media (max-width: 767px) {
            .modal-overlay {
                padding: 0;
                align-items: flex-end;
            }
            
            .modal-content {
                width: 100%;
                max-height: 85vh;
                border-radius: 24px 24px 0 0 !important;
                animation: slideUp 0.3s ease-out;
                margin: 0;
                overflow: hidden;
            }
            
            @keyframes slideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .modal-body {
                max-height: 65vh;
                padding-bottom: 30px;
                overscroll-behavior: contain;
                -webkit-overflow-scrolling: touch;
            }
            
            /* تحسين بطاقات الأمثلة - الزوايا الدائرية */
            .example-card {
                margin: 10px 0;
                transition: transform 0.2s, background-color 0.2s;
                -webkit-tap-highlight-color: transparent;
                border-radius: 16px !important;
                border: 1px solid #e0e0e0;
                overflow: hidden;
                background: white;
                padding: 16px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }
            
            .example-card.touch-active {
                background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                transform: scale(0.98);
            }
            
            .example-card.click-effect {
                animation: clickPulse 0.3s ease-out;
            }
            
            @keyframes clickPulse {
                0% { transform: scale(0.98); }
                50% { transform: scale(0.95); }
                100% { transform: scale(1); }
            }
            
            /* تحسين التصميم الداخلي */
            .card-content {
                position: relative;
            }
            
            .card-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
            }
            
            .card-header i {
                color: #9b59b6;
                font-size: 18px;
            }
            
            .card-header h4 {
                margin: 0;
                font-size: 16px;
                color: #2c3e50;
                font-weight: 600;
            }
            
            .example-card p {
                margin: 0 0 12px 0;
                font-size: 14px;
                color: #7f8c8d;
                line-height: 1.4;
            }
            
            .example-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }
            
            .tag {
                padding: 4px 10px;
                border-radius: 20px;
                font-size: 12px;
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                color: #6c757d;
            }
            
            .tag.beginner {
                background: rgba(46, 204, 113, 0.1);
                color: #27ae60;
                border-color: rgba(46, 204, 113, 0.2);
            }
            
            .tag.intermediate {
                background: rgba(241, 196, 15, 0.1);
                color: #f39c12;
                border-color: rgba(241, 196, 15, 0.2);
            }
            
            .tag.advanced {
                background: rgba(231, 76, 60, 0.1);
                color: #e74c3c;
                border-color: rgba(231, 76, 60, 0.2);
            }
            
            /* تحسين شريط التمرير */
            .modal-body::-webkit-scrollbar {
                width: 6px;
            }
            
            .modal-body::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 3px;
            }
            
            .modal-body::-webkit-scrollbar-thumb {
                background: rgba(155, 89, 182, 0.5);
                border-radius: 3px;
            }
            
            /* تحسين زر الإغلاق */
            .close-modal {
                width: 44px;
                height: 44px;
                font-size: 24px;
                position: absolute;
                top: 15px;
                left: 15px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                border: none;
                cursor: pointer;
                color: white;
            }
            
            .modal-header h2 {
                padding: 0 50px;
                text-align: center;
                font-size: 20px;
            }
            
            /* تحسين الأزرار العامة */
            .btn {
                border-radius: 14px !important;
                padding: 14px 20px !important;
                font-size: 16px;
                min-height: 48px;
                min-width: 48px;
            }
            
            /* تحسين المربعات الكبيرة */
            .editor-box, .output-box {
                border-radius: 18px !important;
                overflow: hidden !important;
                border: 1px solid #ddd !important;
                margin-bottom: 16px;
            }
            
            /* تحسين الحاويات */
            .container, .controls, .code-container {
                border-radius: 16px !important;
            }
            
            .editor-header, .output-header {
                border-radius: 18px 18px 0 0 !important;
            }
        }
        
        /* تحسينات للكمبيوتر أيضاً */
        .example-card {
            border-radius: 12px !important;
            transition: all 0.3s ease;
        }
        
        .btn {
            border-radius: 10px !important;
            transition: all 0.2s;
        }
        
        .editor-box, .output-box {
            border-radius: 12px !important;
            overflow: hidden;
        }
        
        /* تأثير للنقر على البطاقات */
        .example-card:active {
            transform: scale(0.98);
            background: #f8f9fa;
        }
        
        /* تحسين الأداء */
        .modal-body {
            will-change: transform;
            transform: translateZ(0);
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

// =============================================
// 18. تحسينات إضافية للجوال والنافذة المنبثقة
// =============================================
function enhanceMobileModalExperience() {
    if (!isTouchDevice) return;
    
    const modal = document.getElementById('examplesModal');
    if (!modal) return;
    
    modal.style.touchAction = 'none';
    
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.overscrollBehavior = 'contain';
    }
    
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            this.style.transform = 'scale(0.9)';
        }, { passive: true });
        
        closeBtn.addEventListener('touchend', function(e) {
            this.style.transform = 'scale(1)';
            closeExamplesModal();
            e.stopPropagation();
        }, { passive: true });
        
        closeBtn.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        }, { passive: true });
    }
    
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.addEventListener('touchstart', function() {
            this.style.fontSize = '16px';
        }, { passive: true });
    }
    
    if (window.innerWidth < 768) {
        document.querySelectorAll('.example-card h4').forEach(h4 => {
            h4.style.fontSize = '16px';
        });
        
        document.querySelectorAll('.example-card p').forEach(p => {
            p.style.fontSize = '14px';
        });
    }
}

// =============================================
// 19. تحسين أداء التمرير
// =============================================
function setupSmoothScrolling() {
    const modalBody = document.querySelector('.modal-body');
    if (modalBody) {
        modalBody.style.willChange = 'transform';
        modalBody.style.backfaceVisibility = 'hidden';
        modalBody.style.perspective = '1000px';
    }
    
    const output = document.getElementById('output');
    if (output) {
        output.style.willChange = 'transform';
        output.style.backfaceVisibility = 'hidden';
    }
}

// =============================================
// 20. إعدادات تحميل إضافية
// =============================================
function setupAdditionalLoaders() {
    const originalOpenExamplesModal = openExamplesModal;
    openExamplesModal = function() {
        showMessage('جاري تحميل الأمثلة...', 'info');
        setTimeout(() => {
            originalOpenExamplesModal.call(this);
        }, 100);
    };
    
    const originalRunCode = runCode;
    runCode = function() {
        if (isTouchDevice) {
            executionTimeout = setTimeout(() => {
                const codeInput = document.getElementById('code-input');
                const output = document.getElementById('output');
                if (codeInput && output) {
                    executeJavaScriptCode(codeInput.value.trim(), output);
                }
                isRunning = false;
                updateStatus('جاهز', '#27ae60');
            }, 50);
            
            isRunning = true;
            updateStatus('جاري التشغيل...', '#f39c12');
            showLoadingIndicator(document.getElementById('output'));
        } else {
            originalRunCode.call(this);
        }
    };
}

// =============================================
// 21. CSS إضافي للتحسينات
// =============================================
function addMobileOptimizationsCSS() {
    const mobileCSS = document.createElement('style');
    mobileCSS.textContent = `
        /* تحسينات للجوال */
        .mobile-optimized .btn {
            min-height: 48px;
            min-width: 48px;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 14px !important;
            touch-action: manipulation;
            user-select: none;
            -webkit-user-select: none;
        }
        
        .mobile-optimized .example-card {
            padding: 16px;
            margin: 10px 0;
            border-radius: 18px !important;
            transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid #e8e8e8;
            background: white;
        }
        
        .mobile-optimized .example-card:active {
            transform: scale(0.97);
            background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
        }
        
        .mobile-optimized .modal-overlay {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: none;
            backdrop-filter: blur(5px);
        }
        
        .mobile-optimized .modal-content {
            max-height: 85vh;
            border-radius: 24px 24px 0 0 !important;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.2);
        }
        
        .mobile-optimized .modal-body {
            padding-bottom: 30px;
        }
        
        /* تحسين شريط التمرير للجوال */
        .mobile-optimized ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        
        .mobile-optimized ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #9b59b6, #8e44ad);
            border-radius: 4px;
        }
        
        .mobile-optimized ::-webkit-scrollbar-thumb:hover {
            background: rgba(155, 89, 182, 0.8);
        }
        
        /* تحسينات للأزرار */
        .btn:active {
            transform: scale(0.95);
            opacity: 0.9;
        }
        
        /* تحسينات للحاويات */
        .container {
            border-radius: 20px !important;
            overflow: hidden;
        }
        
        .controls {
            border-radius: 16px !important;
            padding: 12px;
            background: #f8f9fa;
        }
        
        /* تحسين التمرير اللطيف */
        .smooth-scroll {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
        }
        
        /* تحسين الأداء */
        .performance-optimized {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
        }
        
        /* زوايا دائرية للعناصر الأساسية */
        .code-container {
            border-radius: 16px;
            overflow: hidden;
            background: white;
        }
        
        .editor-header, .output-header {
            border-radius: 16px 16px 0 0 !important;
            padding: 15px 20px;
            background: linear-gradient(135deg, #9b59b6, #8e44ad);
            color: white;
        }
        
        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 480px) {
            .btn {
                padding: 10px 16px !important;
                font-size: 14px !important;
            }
            
            .example-card {
                padding: 12px !important;
                border-radius: 14px !important;
            }
            
            .modal-content {
                border-radius: 20px 20px 0 0 !important;
            }
        }
    `;
    
    document.head.appendChild(mobileCSS);
}

// =============================================
// 22. دالة جديدة لتحسين تجربة اللمس على الجوال
// =============================================
function setupTouchControls() {
    if (!isTouchDevice) return;
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.style.cssText = `
            min-height: 44px;
            min-width: 44px;
            padding: 12px 16px;
            border-radius: 14px;
            font-size: 16px;
            touch-action: manipulation;
            user-select: none;
            -webkit-user-select: none;
            transition: all 0.15s ease;
        `;
        
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.opacity = '0.9';
        });
        
        btn.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '1';
        });
    });
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('touchstart', function() {
            this.style.fontSize = '16px';
        });
    });
}

// =============================================
// 23. التهيئة النهائية المحسنة
// =============================================
// تشغيل vibration إذا متاح
if (isTouchDevice) {
    window.addEventListener('load', function() {
        setTimeout(vibrateIfSupported, 500);
    });
}

// تسجيل معلومات التحميل
console.log('🚀 نظام مشغل JavaScript جاهز للعمل مع تحسينات الجوال المتقدمة!');
console.log('📱 وضع الجهاز:', isTouchDevice ? 'جوال' : 'كمبيوتر');
console.log('🖥️ حجم الشاشة:', window.innerWidth + 'x' + window.innerHeight);

// تحسين أداء التنفيذ
if (window.requestIdleCallback) {
    requestIdleCallback(() => {
        console.log('⚡ تحسينات الأداء جاهزة');
    });
}

// تحديث مستمر لحالة النظام
setInterval(() => {
    const memory = window.performance && window.performance.memory;
    if (memory) {
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
        if (usedMB > totalMB * 0.8) {
            console.warn('⚠️ استخدام عالي للذاكرة:', usedMB + 'MB / ' + totalMB + 'MB');
        }
    }
}, 30000);