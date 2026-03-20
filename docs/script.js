// Sayfa yüklendiğinde konsola bir karşılama mesajı (Mühendis dokunuşu)
document.addEventListener('DOMContentLoaded', () => {
    console.log("%c AO.SYSTEMS | Architectural Integrity Initialized", "color: #4facfe; font-weight: bold; font-size: 14px;");

    // Scroll etkileşimi: Navigasyon çubuğunun opaklığını ayarla
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('bg-[#08080a]/95');
            nav.classList.remove('bg-[#08080a]/80');
        } else {
            nav.classList.add('bg-[#08080a]/80');
            nav.classList.remove('bg-[#08080a]/95');
        }
    });

    // İsteğe bağlı: Linklere smooth scroll için ek kontrol
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
