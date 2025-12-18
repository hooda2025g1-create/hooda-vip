// =============================================
// 1. إعدادات النظام والمتغيرات
// =============================================
let isRunning = false;
let executionTimeout = null;

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
        category: "متقدم",
        tags: ["Classes", "OOP"],
        level: "advanced",
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
// 3. وظائف النظام الأساسية
// =============================================

// عند تحميل الصفحة
window.addEventListener('load', function() {
    console.log("✅ مشغل JavaScript جاهز!");
    
    // ضبط حجم المحرر
    adjustEditorSize();
    window.addEventListener('resize', adjustEditorSize);
    
    // إعداد النقر على الأمثلة
    setupExampleClick();
    
    // استرجاع الكود المحفوظ
    loadSavedCode();
});

// ضبط حجم المحرر
function adjustEditorSize() {
    const editor = document.getElementById('code-input');
    const output = document.getElementById('output');
    
    if (window.innerWidth < 768) {
        editor.style.minHeight = '300px';
        output.style.minHeight = '300px';
    } else {
        const availableHeight = window.innerHeight - 200;
        editor.style.minHeight = availableHeight + 'px';
        output.style.minHeight = availableHeight + 'px';
    }
}

// إعداد النقر على الأمثلة
function setupExampleClick() {
    document.querySelectorAll('.example-code pre').forEach(pre => {
        pre.style.cursor = 'pointer';
        pre.addEventListener('click', function() {
            const exampleCode = this.textContent;
            document.getElementById('code-input').value = exampleCode;
            showMessage('تم نسخ المثال إلى المحرر', 'success');
            
            // أنيميشن
            this.classList.add('pulse');
            setTimeout(() => this.classList.remove('pulse'), 300);
        });
    });
}

// =============================================
// 4. وظائف نافذة الأمثلة
// =============================================

// فتح نافذة الأمثلة
function openExamplesModal() {
    console.log("فتح نافذة الأمثلة...");
    
    const modal = document.getElementById('examplesModal');
    const container = document.getElementById('examplesContainer');
    
    if (!modal) {
        showMessage("حدث خطأ في فتح الأمثلة", "error");
        return;
    }
    
    // تعبئة الأمثلة
    container.innerHTML = '';
    examplesLibrary.forEach(example => {
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
        
        card.addEventListener('click', () => {
            selectExample(example);
        });
        
        container.appendChild(card);
    });
    
    // إظهار النافذة
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // أنيميشن
    modal.classList.add('fade-in');
}

// إغلاق نافذة الأمثلة
function closeExamplesModal() {
    const modal = document.getElementById('examplesModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// اختيار مثال
function selectExample(example) {
    document.getElementById('code-input').value = example.code;
    closeExamplesModal();
    showMessage(`تم تحميل مثال: ${example.title}`, 'success');
    
    // أنيميشن للمحرر
    const editor = document.querySelector('.editor-box');
    editor.classList.add('glow-animation');
    setTimeout(() => {
        editor.classList.remove('glow-animation');
    }, 2000);
    
    // تحديث حالة المحرر
    document.getElementById('status').textContent = 'معدل';
    document.getElementById('status').style.color = '#f39c12';
    
    // حفظ المثال
    saveCurrentCode();
}

// منع إغلاق النافذة بالنقر خارجها
document.addEventListener('click', function(e) {
    const modal = document.getElementById('examplesModal');
    if (modal && e.target === modal) {
        closeExamplesModal();
    }
});

// إغلاق النافذة بـ ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeExamplesModal();
    }
});

// =============================================
// 5. وظائف تشغيل الكود
// =============================================

// تشغيل الكود
function runCode() {
    if (isRunning) {
        showMessage('جاري تشغيل كود آخر...', 'error');
        return;
    }
    
    const code = document.getElementById('code-input').value.trim();
    const output = document.getElementById('output');
    
    if (!code) {
        showMessage('اكتب بعض الكود أولاً!', 'error');
        return;
    }
    
    // تعيين حالة التشغيل
    isRunning = true;
    document.getElementById('status').textContent = 'جاري التشغيل...';
    document.getElementById('status').style.color = '#f39c12';
    
    // أنيميشن للزر
    const runBtn = document.querySelector('.run-btn');
    runBtn.classList.add('pulse');
    setTimeout(() => runBtn.classList.remove('pulse'), 300);
    
    // إظهار مؤشر التحميل
    output.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 15px; color: #3498db; font-weight: bold;">جاري تنفيذ الكود...</p>
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
    
    // إلغاء أي وقت سابق
    if (executionTimeout) {
        clearTimeout(executionTimeout);
    }
    
    // تنفيذ الكود بعد تأخير قصير
    executionTimeout = setTimeout(() => {
        try {
            // حفظ console الأصلي
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn
            };
            
            let logs = [];
            let errors = [];
            let warnings = [];
            
            // تجميع الإخراج
            console.log = function(...args) {
                logs.push({ type: 'log', args: args });
                originalConsole.log.apply(console, args);
            };
            
            console.error = function(...args) {
                errors.push({ type: 'error', args: args });
                originalConsole.error.apply(console, args);
            };
            
            console.warn = function(...args) {
                warnings.push({ type: 'warn', args: args });
                originalConsole.warn.apply(console, args);
            };
            
            // تنفيذ الكود
            const result = eval(code);
            
            // استعادة console الأصلي
            console.log = originalConsole.log;
            console.error = originalConsole.error;
            console.warn = originalConsole.warn;
            
            // عرض النتائج
            displayResults(logs, errors, warnings, result);
            
            // إظهار نجاح التنفيذ
            showMessage('تم تنفيذ الكود بنجاح! ✅', 'success');
            
        } catch (error) {
            // في حالة حدوث خطأ
            displayError(error);
            showMessage('حدث خطأ أثناء التنفيذ ❌', 'error');
        }
        
        // إعادة تعيين الحالة
        isRunning = false;
        document.getElementById('status').textContent = 'جاهز';
        document.getElementById('status').style.color = '#27ae60';
        
    }, 300);
}

// عرض النتائج
function displayResults(logs, errors, warnings, returnValue) {
    const output = document.getElementById('output');
    let html = '';
    
    // إضافة النتيجة الرئيسية
    if (logs.length > 0 || errors.length > 0 || warnings.length > 0) {
        html += `<div class="slide-in">`;
        
        // عرض الـ logs
        if (logs.length > 0) {
            html += `<div class="success message">
                <i class="fas fa-check-circle"></i>
                <strong>الإخراج (${logs.length})</strong>
            </div>`;
            
            logs.forEach(log => {
                html += `<div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; border-left: 3px solid #28a745; direction: ltr;">
                    ${log.args.map(arg => formatOutput(arg)).join(' ')}
                </div>`;
            });
        }
        
        // عرض الأخطاء
        if (errors.length > 0) {
            html += `<div class="error message">
                <i class="fas fa-exclamation-circle"></i>
                <strong>الأخطاء (${errors.length})</strong>
            </div>`;
            
            errors.forEach(error => {
                html += `<div style="margin: 10px 0; padding: 10px; background: #fef5f5; border-radius: 5px; border-left: 3px solid #dc3545; direction: ltr;">
                    ${error.args.map(arg => formatOutput(arg)).join(' ')}
                </div>`;
            });
        }
        
        // عرض التحذيرات
        if (warnings.length > 0) {
            html += `<div class="info message">
                <i class="fas fa-exclamation-triangle"></i>
                <strong>تحذيرات (${warnings.length})</strong>
            </div>`;
            
            warnings.forEach(warning => {
                html += `<div style="margin: 10px 0; padding: 10px; background: #fefce8; border-radius: 5px; border-left: 3px solid #f59e0b; direction: ltr;">
                    ${warning.args.map(arg => formatOutput(arg)).join(' ')}
                </div>`;
            });
        }
        
        html += `</div>`;
    } else {
        html += `<div class="info message slide-in">
            <i class="fas fa-info-circle"></i>
            <strong>تم التنفيذ</strong>
            <p>الكود تم تنفيذه لكن لم يظهر أي إخراج</p>
        </div>`;
    }
    
    // عرض القيمة المعادة من الكود
    if (returnValue !== undefined) {
        html += `<div class="success message pulse">
            <i class="fas fa-arrow-right"></i>
            <strong>القيمة المعادة:</strong>
            <div style="margin-top: 5px; padding: 10px; background: #e8f5e9; border-radius: 5px; direction: ltr;">
                ${formatOutput(returnValue)}
            </div>
        </div>`;
    }
    
    // إضافة إحصائيات
    const totalOutputs = logs.length + errors.length + warnings.length;
    html += `<div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; text-align: center;">
        <strong>📊 الإحصائيات:</strong>
        <div style="display: flex; justify-content: space-around; margin-top: 10px;">
            <span style="color: #28a745;">✅ ${logs.length} إخراج</span>
            <span style="color: #dc3545;">❌ ${errors.length} خطأ</span>
            <span style="color: #f59e0b;">⚠️ ${warnings.length} تحذير</span>
        </div>
    </div>`;
    
    output.innerHTML = html;
    output.scrollTop = 0;
}

// عرض الأخطاء
function displayError(error) {
    const output = document.getElementById('output');
    
    const html = `
        <div class="error message slide-in">
            <i class="fas fa-bug"></i>
            <strong>حدث خطأ!</strong>
            <p>${error.name}: ${error.message}</p>
        </div>
        
        <div style="margin: 15px 0; padding: 15px; background: #fef5f5; border-radius: 8px; direction: ltr;">
            <strong>تفاصيل الخطأ:</strong>
            <pre style="margin-top: 10px; color: #dc3545; overflow-x: auto;">${error.stack || 'لا توجد تفاصيل إضافية'}</pre>
        </div>
        
        <div class="info message">
            <i class="fas fa-lightbulb"></i>
            <strong>نصائح للحل:</strong>
            <ul style="margin-top: 10px; padding-right: 15px;">
                <li>تأكد من صيغة الكود</li>
                <li>تحقق من الأقواس والنقاط</li>
                <li>تأكد من تعريف المتغيرات قبل استخدامها</li>
            </ul>
        </div>
    `;
    
    output.innerHTML = html;
}

// تنسيق الإخراج
function formatOutput(value) {
    if (value === null) return '<span style="color: #777;">null</span>';
    if (value === undefined) return '<span style="color: #777;">undefined</span>';
    
    if (typeof value === 'object') {
        try {
            if (Array.isArray(value)) {
                return `[${value.map(item => formatOutput(item)).join(', ')}]`;
            }
            return JSON.stringify(value, null, 2)
                .replace(/\n/g, '<br>')
                .replace(/ /g, '&nbsp;');
        } catch {
            return String(value);
        }
    }
    
    if (typeof value === 'string') {
        return `"${value}"`;
    }
    
    if (typeof value === 'number') {
        return `<span style="color: #2980b9;">${value}</span>`;
    }
    
    if (typeof value === 'boolean') {
        return `<span style="color: #e74c3c;">${value}</span>`;
    }
    
    return String(value);
}

// مسح المحرر
function clearCode() {
    if (confirm('هل تريد مسح الكود؟')) {
        document.getElementById('code-input').value = '';
        document.getElementById('output').innerHTML = `
            <div class="info message fade-in">
                <i class="fas fa-info-circle"></i>
                <strong>المحرر نظيف</strong>
                <p>اكتب كود JavaScript جديد واضغط على "تشغيل الكود"</p>
            </div>
        `;
        
        // أنيميشن للزر
        const clearBtn = document.querySelector('.clear-btn');
        clearBtn.classList.add('shake-animation');
        setTimeout(() => clearBtn.classList.remove('shake-animation'), 500);
        
        showMessage('تم مسح المحرر', 'success');
        
        document.getElementById('status').textContent = 'جاهز';
        document.getElementById('status').style.color = '#27ae60';
        
        // مسح من الذاكرة
        localStorage.removeItem('lastCode');
    }
}

// =============================================
// 6. وظائف الرسائل والإشعارات
// =============================================

// إظهار رسالة عابرة
function showMessage(text, type) {
    // إزالة أي رسالة سابقة
    const existingMessage = document.querySelector('.temp-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // إنشاء الرسالة الجديدة
    const message = document.createElement('div');
    message.className = `temp-message ${type} message pulse`;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        min-width: 300px;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        border-radius: 10px;
    `;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    message.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${icon}" style="font-size: 20px;"></i>
            <span>${text}</span>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // إزالة الرسالة بعد 3 ثوان
    setTimeout(() => {
        if (message.parentNode) {
            message.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => message.remove(), 300);
        }
    }, 3000);
}

// إضافة أنيميشن الرسائل العابرة
const messageStyles = document.createElement('style');
messageStyles.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(20px); }
    }
`;
document.head.appendChild(messageStyles);

// =============================================
// 7. وظائف التخزين والمفاتيح
// =============================================

// حفظ الكود الحالي
function saveCurrentCode() {
    const code = document.getElementById('code-input').value;
    if (code.trim().length > 0) {
        localStorage.setItem('lastCode', code);
    }
}

// استرجاع الكود المحفوظ
function loadSavedCode() {
    const savedCode = localStorage.getItem('lastCode');
    if (savedCode) {
        document.getElementById('code-input').value = savedCode;
        showMessage('تم استرجاع الكود السابق', 'info');
    }
}

// اختصارات لوحة المفاتيح
document.addEventListener('keydown', function(e) {
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
});

// تحديث حالة المحرر عند الكتابة
document.getElementById('code-input').addEventListener('input', function() {
    document.getElementById('status').textContent = 'معدل';
    document.getElementById('status').style.color = '#f39c12';
    
    // عد الأسطر
    const lines = this.value.split('\n').length;
    const chars = this.value.length;
    
    // تحديث العنوان
    const title = lines > 1 ? `محرر الكود (${lines} أسطر, ${chars} حرف)` : 'محرر الكود';
    const editorTitle = document.querySelector('.editor-header span');
    if (editorTitle) {
        editorTitle.innerHTML = `<i class="fas fa-code"></i> ${title}`;
    }
    
    // حفظ تلقائي
    saveCurrentCode();
});

// حفظ عند الخروج من المحرر
document.getElementById('code-input').addEventListener('blur', saveCurrentCode);

// =============================================
// 8. تهيئة النظام النهائية
// =============================================

// تعيين نسخة الأمثلة في الصفحة الرئيسية
function setupHomeExamples() {
    const exampleCodeElement = document.querySelector('.example-code pre');
    if (exampleCodeElement) {
        let examplesHTML = '';
        // أخذ 3 أمثلة عشوائية
        const randomExamples = [...examplesLibrary]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        
        randomExamples.forEach(example => {
            const preview = example.code.split('\n').slice(0, 2).join('\n');
            examplesHTML += `// ${example.title}\n${preview}\n\n`;
        });
        
        exampleCodeElement.textContent = examplesHTML.trim();
    }
}

// تشغيل التهيئة عند تحميل الصفحة
window.addEventListener('load', function() {
    setupHomeExamples();
    
    // إضافة زر الأمثلة إذا لم يكن موجوداً
    const controls = document.querySelector('.controls');
    if (controls && !document.querySelector('.examples-btn')) {
        const examplesBtn = document.createElement('button');
        examplesBtn.className = 'btn examples-btn';
        examplesBtn.innerHTML = '<i class="fas fa-code"></i> أمثلة';
        examplesBtn.onclick = openExamplesModal;
        
        // إضافة الزر بعد زر التشغيل
        const runBtn = document.querySelector('.run-btn');
        if (runBtn) {
            runBtn.parentNode.insertBefore(examplesBtn, runBtn.nextSibling);
        } else {
            controls.appendChild(examplesBtn);
        }
    }
    
    console.log('🚀 نظام مشغل JavaScript جاهز للعمل!');
});

// إضافة نافذة الأمثلة إذا لم تكن موجودة
if (!document.getElementById('examplesModal')) {
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
}