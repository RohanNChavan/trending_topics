// Section data
const SECTIONS = {
    'sports': { title: 'Sports', icon: 'fa-basketball-ball' },
    'travel': { title: 'Travel', icon: 'fa-plane' },
    'food': { title: 'Food', icon: 'fa-utensils' },
    'crypto': { title: 'Cryptocurrency', icon: 'fa-bitcoin' },
    'entertainment': { title: 'Entertainment', icon: 'fa-film' },
    'startups': { title: 'Startups', icon: 'fa-rocket' },
    'geopolitics': { title: 'Geo Politics', icon: 'fa-globe' },
    'finance': { title: 'Finance', icon: 'fa-chart-line' }
};

// Populate sections grid
document.addEventListener('DOMContentLoaded', function() {
    const sectionsGrid = document.getElementById('sections-grid');
    
    for (const [id, section] of Object.entries(SECTIONS)) {
        const sectionHTML = `
            <div class="col-md-6 col-lg-3">
                <div class="card section-card h-100">
                    <div class="card-body text-center">
                        <i class="fas ${section.icon} fa-3x mb-3"></i>
                        <h5 class="card-title">${section.title}</h5>
                        <a href="#${id}" class="btn btn-outline-primary mt-3">
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        `;
        sectionsGrid.insertAdjacentHTML('beforeend', sectionHTML);
    }

    // Search functionality
    const searchForm = document.querySelector('#searchForm');
    const searchInput = document.querySelector('#searchInput');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                alert(`Search functionality would search for: ${query}`);
                searchInput.value = '';
            }
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.navbar-toggler');
    const navContent = document.querySelector('.navbar-collapse');
    
    if (navToggle && navContent) {
        navToggle.addEventListener('click', function() {
            navContent.classList.toggle('show');
        });
    }

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
