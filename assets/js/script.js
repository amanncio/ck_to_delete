// Typing effect
const text = "Transforme seu futuro com tecnologia";
const typingText = document.getElementById('typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Testimonial Slider
const testimonials = [
    {
        image: "/assets/images/amancio.jpeg",
        quote: "A Código Kid transformou minha carreira. O curso de Desenvolvimento Web Full Stack me deu as habilidades e a confiança necessárias para conseguir meu primeiro emprego como desenvolvedor em uma startup de tecnologia.",
        author: "Matheus Amâncio",
        role: "Desenvolvedor Web Full Stack"
    },
    {
        image: "/assets/images/basic-computing.jpg",
        quote: "O curso de Ciência de Dados da Código Kid é simplesmente excepcional. A abordagem prática e os projetos reais me permitiram construir um portfólio sólido, que foi fundamental para minha transição de carreira para a área de dados.",
        author: "Maria Santos",
        role: "Cientista de Dados"
    },
    {
        image: "/assets/images/cat.png",
        quote: "Graças ao curso de Desenvolvimento Mobile da Código Kid, consegui criar e lançar meu próprio aplicativo na App Store e Google Play. A qualidade do ensino e o suporte da comunidade foram essenciais para meu sucesso.",
        author: "Pedro Oliveira",
        role: "Desenvolvedor Mobile Independente"
    }
];

let currentTestimonial = 0;
const testimonialCard = document.querySelector('.testimonial-card');
const prevButton = document.getElementById('prevTestimonial');
const nextButton = document.getElementById('nextTestimonial');

function showTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialCard.innerHTML = `
        <div class="testimonial-image">
            <img src="${testimonial.image}" alt="${testimonial.author}">
        </div>
        <p class="testimonial-quote">"${testimonial.quote}"</p>
        <p class="testimonial-author">${testimonial.author}</p>
        <p class="testimonial-role">${testimonial.role}</p>
    `;
}

prevButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

showTestimonial(currentTestimonial);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.course-card, .testimonial-card, .cta, .tech-item, .faq-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize elements with initial styles
const initializeStyles = () => {
    const elements = document.querySelectorAll('.course-card, .testimonial-card, .cta, .tech-item, .faq-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
};

initializeStyles();

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Animated Counter
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
            clearInterval(timer);
            element.textContent = target;
        }
    }, 16);
}

const studentCount = document.getElementById('studentCount');
const courseCount = document.getElementById('courseCount');
const instructorCount = document.getElementById('instructorCount');

animateCounter(studentCount, 10000, 2000);
animateCounter(courseCount, 50, 2000);
animateCounter(instructorCount, 100, 2000);

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Chatbot
const chatbot = document.querySelector('.chatbot');
chatbot.addEventListener('click', () => {
    alert('Olá! Como posso ajudar você hoje?');
});