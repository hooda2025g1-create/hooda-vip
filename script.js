// متغيرات للتحكم في التنفيذ
let isRunning = false;
let executionTimeout = null;

// عند تحميل الصفحة
window.addEventListener('load', function() {
    // ضبط حجم محرر الكود تلقائياً
    adjustEditorSize();
    
    // إضافة مستمع لحجم النافذة
    window.addEventListener('resize', adjustEditorSize);
    
    // إضافة مثال كود عشوائي عند النقر على مثال
    document.querySelectorAll('.example-code pre').forEach(pre => {
        pre.style.cursor = 'pointer';
        pre.addEventListener('click', function() {
            const exampleCode = this.textContent;
            document.getElementById('code-input').value = exampleCode;
            showMessage('تم نسخ المثال إلى المحرر', 'success');
        });
    });
});

// ضبط حجم المحرر حسب الشاشة
function adjustEditorSize() {
    const editor = document.getElementById('code-input');
    const output = document.getElementById('output');
    
    if (window.innerWidth < 768) {
        // للهواتف
        editor.style.minHeight = '300px';
        output.style.minHeight = '300px';
    } else {
        // للكمبيوتر والتابلت
        const availableHeight = window.innerHeight - 200;
        editor.style.minHeight = availableHeight + 'px';
        output.style.minHeight = availableHeight + 'px';
    }
}

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
    
    // تنفيذ الكود بعد تأخير قصير (لمحاكاة التشغيل)
    executionTimeout = setTimeout(() => {
        try {
            // حفظ console.log الأصلي
            const originalConsoleLog = console.log;
            const originalConsoleError = console.error;
            const originalConsoleWarn = console.warn;
            
            let logs = [];
            let errors = [];
            let warnings = [];
            
            // تجميع كل أنواع الإخراج
            console.log = function(...args) {
                logs.push({ type: 'log', args: args });
                originalConsoleLog.apply(console, args);
            };
            
            console.error = function(...args) {
                errors.push({ type: 'error', args: args });
                originalConsoleError.apply(console, args);
            };
            
            console.warn = function(...args) {
                warnings.push({ type: 'warn', args: args });
                originalConsoleWarn.apply(console, args);
            };
            
            // تنفيذ الكود
            const result = eval(code);
            
            // استعادة console الأصلي
            console.log = originalConsoleLog;
            console.error = originalConsoleError;
            console.warn = originalConsoleWarn;
            
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
        
    }, 300); // تأخير قصير للمحاكاة
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
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    
    if (typeof value === 'object') {
        try {
            if (Array.isArray(value)) {
                return `[${value.map(item => formatOutput(item)).join(', ')}]`;
            }
            return JSON.stringify(value, null, 2);
        } catch {
            return String(value);
        }
    }
    
    if (typeof value === 'string') {
        return value;
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
        showMessage('تم مسح المحرر', 'success');
    }
}

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
        min-width: 200px;
        animation: slideIn 0.3s ease-out;
    `;
    message.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${text}
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

// أمثلة كود سريعة يمكن تجربتها
const quickExamples = [
    `// جمع بسيط
console.log(100 + 200); // 300
console.log(50 * 3); // 150`,

    `// نص
let name = "محمود";
console.log("مرحباً " + name);
console.log("طول النص:", name.length);`,

    `// مصفوفة
let fruits = ["تفاح", "موز", "برتقال"];
console.log("الفواكه:", fruits);
console.log("الفاكهة الأولى:", fruits[0]);`,

    `// كائن
let person = {
    name: "سلمي",
    age: 25,
    city: "القاهرة"
};
console.log(person);
console.log("الاسم:", person.name);`,

    `// دالة
function calculate(a, b, operation) {
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
}

console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 * 5 =", calculate(10, 5, '*'));`
];

// اختصار لوحة المفاتيح: Ctrl+Enter لتشغيل الكود
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
        showMessage('تم تشغيل الكود (Ctrl+Enter)', 'success');
    }
});

// عندما يبدأ المستخدم بالكتابة
document.getElementById('code-input').addEventListener('input', function() {
    document.getElementById('status').textContent = 'معدل';
    document.getElementById('status').style.color = '#f39c12';
});