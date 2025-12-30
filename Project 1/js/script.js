document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Opțional: Animăm liniile hamburgerului să devină X
            hamburger.classList.toggle('open');
        });
    }
});




document.getElementById('calculate-btn').addEventListener('click', function() {
    // 1. Luăm valorile introduse de utilizator
    const pretPerMp = parseFloat(document.getElementById('service-type').value);
    const suprafata = parseFloat(document.getElementById('area').value);
    const afisajPret = document.getElementById('total-price');

    // 2. Verificăm dacă a introdus un număr valid
    if (isNaN(suprafata) || suprafata <= 0) {
        alert("Te rugăm să introduci o suprafață validă!");
        return;
    }

    // 3. Calculăm prețul
    const total = pretPerMp * suprafata;

    // 4. Afișăm rezultatul (cu un mic efect vizual)
    afisajPret.innerText = total.toFixed(2);
    
    // Adăugăm o mică animație de "flash" pe preț
    afisajPret.style.animation = 'none';
    setTimeout(() => {
        afisajPret.style.animation = 'pulse 0.5s ease-in-out';
    }, 10);
});


document.getElementById('calculate-btn').addEventListener('click', function() {
    const pretPerMp = parseFloat(document.getElementById('service-type').value);
    const suprafata = parseFloat(document.getElementById('area').value);
    const afisajPret = document.getElementById('total-price');
    const whatsappBtn = document.getElementById('whatsapp-btn');

    if (isNaN(suprafata) || suprafata <= 0) {
        alert("Te rugăm să introduci o suprafață validă!");
        return;
    }

    const total = pretPerMp * suprafata;
    afisajPret.innerText = total.toFixed(2);

    // 1. Facem butonul de WhatsApp vizibil
    whatsappBtn.style.display = 'block';

    // 2. Configurăm link-ul de WhatsApp cu mesaj predefinit
    const numarTelefon = "407XXXXXXXX"; // Pune aici numărul prietenului tău (cu 40 în față)
    const textServiciu = document.getElementById('service-type').options[document.getElementById('service-type').selectedIndex].text;
    const mesaj = `Bună ziua! Am folosit calculatorul de pe site și doresc o programare pentru ${textServiciu}. Suprafața: ${suprafata}mp. Preț estimat: ${total.toFixed(2)} RON.`;
    
    // Codificăm mesajul pentru URL
    whatsappBtn.href = `https://wa.me/${numarTelefon}?text=${encodeURIComponent(mesaj)}`;
});


// Selectăm toate link-urile din meniul de navigare
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Când se dă click pe un link, eliminăm clasa 'active' a meniului
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Adaugă clasa când elementul intră în ecran
                entry.target.classList.add('active');
            } else {
                // SCOATE clasa când elementul iese din ecran (pentru reutilizare)
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.15 // Se declanșează când 15% din element e vizibil
    });

    // Căutăm toate elementele care au clasa .reveal
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    
});