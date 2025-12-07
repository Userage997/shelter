document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeText = document.getElementById('welcome-text');
    const menuScreen = document.getElementById('menu-screen');
    const priceScreen = document.getElementById('price-screen');
    
    // Кнопки
    const priceBtn = document.getElementById('price-btn');
    const projectBtn = document.getElementById('project-btn');
    const contactBtn = document.getElementById('contact-btn');
    const backFromPriceBtn = document.getElementById('back-from-price');
    
    // Анимация приветствия
    setTimeout(() => {
        // Сначала исчезает текст
        welcomeText.style.animation = 'fadeOut 0.8s ease forwards';
        
        // Затем переключаем экраны
        setTimeout(() => {
            welcomeScreen.classList.add('hidden');
            menuScreen.classList.remove('hidden');
            menuScreen.style.opacity = '1';
        }, 800);
    }, 3000); // Приветствие показывается 3 секунды
    
    // Добавляем стиль для исчезновения текста
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
    
    // Обработчики кнопок
    priceBtn.addEventListener('click', () => {
        menuScreen.classList.add('hidden');
        priceScreen.classList.remove('hidden');
        priceScreen.style.opacity = '1';
        // Прокрутка вверх при переходе
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    projectBtn.addEventListener('click', () => {
        // Открываем проект в новой вкладке
        window.open('https://t.me/swatsnoser4', '_blank');
        // Добавляем эффект нажатия на кнопку
        projectBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            projectBtn.style.transform = '';
        }, 200);
    });
    
    contactBtn.addEventListener('click', () => {
        // Открываем ссылку на Telegram
        window.open('https://t.me/xably', '_blank');
        // Добавляем эффект нажатия на кнопку
        contactBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            contactBtn.style.transform = '';
        }, 200);
    });
    
    backFromPriceBtn.addEventListener('click', () => {
        priceScreen.classList.add('hidden');
        menuScreen.classList.remove('hidden');
        menuScreen.style.opacity = '1';
        // Прокрутка вверх при возврате
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Добавляем эффект при наведении на кнопки
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.03)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Эффект появления элементов прайса с задержкой
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Назначаем анимацию для элементов прайса
    const priceItems = document.querySelectorAll('.price-category');
    priceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.dataset.delay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Анимация для информационного блока прайса
    const priceInfo = document.querySelector('.price-info');
    if (priceInfo) {
        priceInfo.style.opacity = '0';
        priceInfo.style.transform = 'translateY(20px)';
        priceInfo.style.transition = 'opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s';
        
        const priceInfoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        priceInfoObserver.observe(priceInfo);
    }
    
    // Консольное приветствие (опционально)
    console.log('%c🔐 shelter | Сносер, Осинтер, Сватер', 'color: #ff4444; font-size: 16px; font-weight: bold;');
    console.log('%cПриветствую на сайте. Для связи: @xably', 'color: #aaa;');
    console.log('%cСайт создан: @metstyle', 'color: #8844ff; font-weight: bold;');
});
