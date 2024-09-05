//sticky behavior
window.onscroll = function () { makeHeaderSticky() };

var header = document.querySelector("header");
var sticky = header.offsetTop;

function makeHeaderSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}




//Header
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('.navbar ul').classList.toggle('show');
});







// JavaScript for header scroll effect and mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});



//* Header Section *//
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

//About Section
function showMore() {
    alert("Our story is a journey of passion, dedication, and a love for healthy living. Stay tuned for more insights into Nutrieats!");
}


//* Menu Section *//
// Filter Menu Items by Category
const categoryButtons = document.querySelectorAll('.category-button');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        menuItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Modal Functionality
const modal = document.getElementById('menuModal');
const closeBtn = document.querySelector('.modal .close');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        const price = item.querySelector('.price').textContent;

        document.getElementById('modalImage').innerHTML = `<img src="${imgSrc}" alt="${title}" style="width: 100%; border-radius: 10px;">`;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDescription').textContent = description;
        document.getElementById('modalPrice').textContent = price;

        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

//* customizable meal kit *//
document.addEventListener('DOMContentLoaded', () => {
    console.log('NutriEats landing page loaded');

    const mealKitForm = document.getElementById('meal-kit-form');
    const kitSummary = document.getElementById('kit-summary');

    mealKitForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(mealKitForm);
        const protein = formData.get('protein');
        const vegetables = formData.getAll('vegetables');
        const grain = formData.get('grain');
        const sauce = formData.get('sauce');

        const vegetableList = vegetables.length ? vegetables.join(', ') : 'None';

        kitSummary.innerHTML = `
            <strong>Protein:</strong> ${protein}<br>
            <strong>Vegetables:</strong> ${vegetableList}<br>
            <strong>Grain:</strong> ${grain}<br>
            <strong>Sauce:</strong> ${sauce}
        `;
    });
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulate form submission (you can replace this with actual form submission logic)
    alert('Thank you for contacting us! We will get back to you soon.');

    // Optionally, clear the form fields
    document.getElementById('contact-form').reset();
});



// Carousel Controls
const prevButton = document.querySelector('.carousel-controls .prev');
const nextButton = document.querySelector('.carousel-controls .next');
const carousel = document.querySelector('.reviews-carousel');

prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});


// JavaScript for Search Suggestions
const searchInput = document.getElementById('search-container input');
const searchSuggestions = document.getElementById('search-suggestions');
const searchButton = document.getElementById('search-container button');

searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    if (query.length > 2) {
        // Mockup of suggestions (In real scenario, fetch from a database or API)
        const suggestions = [
            'Salads',
            'Smoothies',
            'Protein Wrap',
            'Superfood Bowl',
            'Healthy Eating Tips',
            'Meal Planner',
            'Subscription Service',
            'Nutritional Information',
        ];

        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));

        if (filteredSuggestions.length > 0) {
            searchSuggestions.innerHTML = filteredSuggestions.map(item => `<li>${item}</li>`).join('');
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    } else {
        searchSuggestions.style.display = 'none';
    }
});

searchSuggestions.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        searchInput.value = e.target.textContent;
        searchSuggestions.style.display = 'none';
    }
});

document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.style.display = 'none';
    }
});

searchButton.addEventListener('click', function () {
    // Implement search functionality here
    alert(`Searching for: ${searchInput.value}`);
});


//scroll animation
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});



