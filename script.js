const SECTIONS = {
    'sports': { title: 'Sports', icon: 'fa-basketball-ball' },
    'travel': { title: 'Travel', icon: 'fa-plane' },
    'food': { title: 'Food', icon: 'fa-utensils' },
    'crypto': { 
        title: 'Cryptocurrency', 
        icon: 'fa-bitcoin',
        articles: [
            {
                title: "Crypto Rollercoaster 2025",
                path: "cryptocurrency/article1.html",
                description: "Bitcoin's $84K Peak, Ethereum's Dip, and What's Next?"
            },
            {
                title: "Bitcoin vs. Ethereum: A Comprehensive Comparison",
                path: "cryptocurrency/article2.html",
                description: "Dive deep into the differences between the two largest cryptocurrencies"
            },
            {
                title: "Global Crypto Gateways",
                path: "cryptocurrency/article3.html",
                description: "A Scientific Look at Leading & Trustworthy Trading Platforms"
            },
            {
                title: "Navigating India's Digital Asset Landscape",
                path: "cryptocurrency/article4.html",
                description: "A Scientific Analysis of Top Crypto Trading Platforms"
            },
            {
                title: "How to Start Crypto Trading in India",
                path: "cryptocurrency/article5.html",
                description: "A Step-by-Step Guide for Beginners (2025)"
            },
            {
                title: "Top 5 Cryptocurrencies to Watch in 2025",
                path: "cryptocurrency/article6.html",
                description: "Insights for Indian Investors"
            },
            {
                title: "Crypto Regulations in India, Europe, and the USA",
                path: "cryptocurrency/article7.html",
                description: "What You Need to Know in 2025"
            },
            {
                title: "Crypto Staking and Passive Income",
                path: "cryptocurrency/article8.html",
                description: "A Complete Guide for Indian Investors (2025)"
            },
            {
                title: "The Rise of Web3 in India",
                path: "cryptocurrency/article9.html",
                description: "Opportunities and Challenges for Crypto Enthusiasts"
            },
            {
                title: "Crypto Taxation in India",
                path: "cryptocurrency/article10.html",
                description: "A Comprehensive Guide for Traders and Investors (2025)"
            }
        ]
    },
    'entertainment': { title: 'Entertainment', icon: 'fa-film' },
    'startups': { title: 'Startups', icon: 'fa-rocket' },
    'geopolitics': { title: 'Geo Politics', icon: 'fa-globe' },
    'finance': { title: 'Finance', icon: 'fa-chart-line' }
};

// Debug log to verify script loading
console.log("BuzzVibe script loaded successfully");

// Populate sections grid and setup search
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content loaded, populating sections");
    const sectionsGrid = document.getElementById('sections-grid');

    // Populate sections
    for (const [id, section] of Object.entries(SECTIONS)) {
        const sectionHTML = `
            <div class="col-md-6 col-lg-3">
                <div class="card section-card h-100">
                    <div class="card-body text-center">
                        <i class="fas ${section.icon} fa-3x mb-3"></i>
                        <h5 class="card-title">${section.title}</h5>
                        <a href="${id === 'crypto' ? 'cryptocurrency/index.html' : id === 'travel' ? 'travel/index.html' : '#' + id}" class="btn btn-outline-primary mt-3">
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        `;
        sectionsGrid.insertAdjacentHTML('beforeend', sectionHTML);
    }

    // Enhanced search functionality
    const searchForm = document.querySelector('#searchForm');
    const searchInput = document.querySelector('#searchInput');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results mt-3';

    if (searchForm) {
        searchForm.appendChild(searchResults);

        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (query.length < 2) return;

            const cryptoArticles = SECTIONS.crypto.articles;
            const matches = cryptoArticles.filter(article => 
                article.title.toLowerCase().includes(query) || 
                article.description.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                const resultsHTML = matches.map(article => `
                    <a href="${article.path}" class="search-result-item">
                        <div class="card mb-2">
                            <div class="card-body">
                                <h6 class="card-title">${article.title}</h6>
                                <p class="card-text small">${article.description}</p>
                            </div>
                        </div>
                    </a>
                `).join('');
                searchResults.innerHTML = resultsHTML;
            } else if (query.length > 0) {
                searchResults.innerHTML = '<p class="text-muted">No matching articles found</p>';
            }
        });

        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                console.log(`Search query submitted: ${query}`);
                searchInput.value = '';
                searchResults.innerHTML = '';
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
