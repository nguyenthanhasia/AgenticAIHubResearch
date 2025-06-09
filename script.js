// Repository Data
const repositories = [
    {
        name: "The AI Scientist",
        url: "https://github.com/SakanaAI/AI-Scientist",
        description: "Comprehensive system for automated scientific discovery, enabling Foundation Models to perform research independently and generate complete research papers",
        category: "Scientific Research Automation",
        stars: "11.1k",
        starsNumeric: 11100,
        features: ["Automated idea generation", "Experiment execution", "Paper writing", "Peer review simulation"],
        organization: "Sakana AI",
        cost: "Research Tool",
        costDetails: "Academic Research",
        tags: ["research", "automation", "scientific-discovery", "llm"],
        isNew: false
    },
    {
        name: "The AI Scientist v2",
        url: "https://github.com/SakanaAI/AI-Scientist-v2",
        description: "Generalized end-to-end agentic system that generated the first workshop paper written entirely by AI",
        category: "Scientific Research Automation",
        stars: "New",
        starsNumeric: 0,
        features: ["Workshop-level research", "End-to-end automation", "Peer review acceptance"],
        organization: "Sakana AI",
        cost: "Open Source",
        costDetails: "Open Source Research",
        tags: ["research", "automation", "workshop", "ai-generated"],
        isNew: true
    },
    {
        name: "AutoGen",
        url: "https://github.com/microsoft/autogen",
        description: "Programming framework for creating multi-agent AI applications that can act autonomously or work alongside humans",
        category: "Multi-Agent Frameworks",
        stars: "45.7k",
        starsNumeric: 45700,
        features: ["Multi-agent conversation", "Human participation", "Customizable agents"],
        organization: "Microsoft",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["multi-agent", "framework", "conversation", "microsoft"],
        isNew: false
    },
    {
        name: "LangGraph",
        url: "https://github.com/langchain-ai/langgraph",
        description: "Build resilient language agents as graphs with stateful, multi-actor applications",
        category: "Multi-Agent Frameworks",
        stars: "8.9k",
        starsNumeric: 8900,
        features: ["Graph-based agents", "Stateful applications", "LangChain integration"],
        organization: "LangChain",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["graph", "stateful", "langchain", "agents"],
        isNew: false
    },
    {
        name: "CrewAI",
        url: "https://github.com/crewAIInc/crewAI",
        description: "Fast and Flexible Multi-Agent Automation Framework for role-playing AI agents collaboration",
        category: "Multi-Agent Frameworks",
        stars: "32.7k",
        starsNumeric: 32700,
        features: ["Role-playing agents", "Fast automation", "Flexible framework"],
        organization: "CrewAI Inc",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["role-playing", "automation", "collaboration", "fast"],
        isNew: false
    },
    {
        name: "MetaGPT",
        url: "https://github.com/geekan/MetaGPT",
        description: "Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming",
        category: "Multi-Agent Systems",
        stars: "56.3k",
        starsNumeric: 56300,
        features: ["Software company simulation", "Natural language programming", "Multi-agent collaboration"],
        organization: "Foundation Agents",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["software-company", "nlp", "programming", "simulation"],
        isNew: false
    },
    {
        name: "Semantic Kernel",
        url: "https://github.com/microsoft/semantic-kernel",
        description: "Model-agnostic SDK empowering developers to build, orchestrate, and deploy AI agents and multi-agent systems",
        category: "Multi-Agent Frameworks",
        stars: "22.4k",
        starsNumeric: 22400,
        features: ["Model-agnostic", "SDK framework", "Agent orchestration"],
        organization: "Microsoft",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["sdk", "model-agnostic", "orchestration", "microsoft"],
        isNew: false
    },
    {
        name: "OpenAI Swarm",
        url: "https://github.com/openai/swarm",
        description: "Educational framework exploring ergonomic, lightweight multi-agent orchestration",
        category: "Multi-Agent Frameworks",
        stars: "19.9k",
        starsNumeric: 19900,
        features: ["Lightweight orchestration", "Educational framework", "Client-side coordination"],
        organization: "OpenAI",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["educational", "lightweight", "orchestration", "openai"],
        isNew: false
    },
    {
        name: "AI-Researcher",
        url: "https://github.com/HKUDS/AI-Researcher",
        description: "Autonomous Scientific Innovation with comprehensive automation for the complete scientific research lifecycle",
        category: "Scientific Research Automation",
        stars: "New",
        starsNumeric: 0,
        features: ["Integrated pipeline", "Research lifecycle automation", "Scientific innovation"],
        organization: "HKUDS",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["research", "lifecycle", "innovation", "autonomous"],
        isNew: true
    },
    {
        name: "Curie",
        url: "https://github.com/Just-Curieous/Curie",
        description: "First AI-agent framework designed for automated and rigorous scientific experimentation",
        category: "Scientific Research Automation",
        stars: "New",
        starsNumeric: 0,
        features: ["Rigorous experimentation", "Automated testing", "Scientific methodology"],
        organization: "Just-Curieous",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["experimentation", "rigorous", "scientific", "methodology"],
        isNew: true
    },
    {
        name: "AgentOps",
        url: "https://github.com/AgentOps-AI/agentops",
        description: "Python SDK for AI agent monitoring, LLM cost tracking, benchmarking, and comprehensive observability",
        category: "Monitoring & Observability",
        stars: "2.1k",
        starsNumeric: 2100,
        features: ["Performance monitoring", "Cost tracking", "Real-time insights", "Benchmarking"],
        organization: "AgentOps AI",
        cost: "Research Tool",
        costDetails: "Research Tool with Premium Features",
        tags: ["monitoring", "observability", "tracking", "benchmarking"],
        isNew: false
    },
    {
        name: "data-to-paper",
        url: "https://github.com/Technion-Kishony-lab/data-to-paper",
        description: "Backward-traceable AI-driven scientific research automation framework with interacting AI agents",
        category: "Scientific Research Automation",
        stars: "New",
        starsNumeric: 0,
        features: ["Backward-traceable", "End-to-end research", "Interacting agents"],
        organization: "Technion Kishony Lab",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["traceable", "research", "interacting", "scientific"],
        isNew: true
    },
    {
        name: "Awesome AI Agents",
        url: "https://github.com/e2b-dev/awesome-ai-agents",
        description: "Comprehensive list of AI autonomous agents with structured categories and use-cases",
        category: "Resources & Collections",
        stars: "8.7k",
        starsNumeric: 8700,
        features: ["Comprehensive list", "Categorized agents", "Use-case examples"],
        organization: "E2B",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["awesome-list", "comprehensive", "categorized", "examples"],
        isNew: false
    },
    {
        name: "AutoResearcher",
        url: "https://github.com/eimenhmdt/autoresearcher",
        description: "Open-source Python package leveraging AI models and external knowledge sources to automate scientific workflows",
        category: "Scientific Research Automation",
        stars: "New",
        starsNumeric: 0,
        features: ["Python package", "External knowledge", "Workflow automation"],
        organization: "Independent",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["python", "workflows", "knowledge", "automation"],
        isNew: true
    },
    {
        name: "Deep Research",
        url: "https://github.com/dzhng/deep-research",
        description: "AI-powered research assistant performing iterative, deep research combining search engines, web scraping, and LLMs",
        category: "Research Tools",
        stars: "New",
        starsNumeric: 0,
        features: ["Iterative research", "Web scraping", "Search integration", "LLM powered"],
        organization: "Independent",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["research", "iterative", "scraping", "search"],
        isNew: true
    },
    {
        name: "Research Crew",
        url: "https://github.com/factoredai/research-crew",
        description: "CrewAI-based agentic workflow that executes research and produces different types of content",
        category: "Research Tools",
        stars: "New",
        starsNumeric: 0,
        features: ["CrewAI integration", "Content production", "Research execution"],
        organization: "FactoredAI",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["crewai", "content", "execution", "workflow"],
        isNew: true
    },
    {
        name: "AG2 (formerly AutoGen)",
        url: "https://github.com/ag2ai/ag2",
        description: "Open-source programming framework for building AI agents and facilitating cooperation among multiple agents",
        category: "Multi-Agent Frameworks",
        stars: "New",
        starsNumeric: 0,
        features: ["Agent cooperation", "Open-source", "Programming framework"],
        organization: "AG2 AI",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["cooperation", "framework", "open-source", "agents"],
        isNew: true
    },
    {
        name: "Open Agent Platform",
        url: "https://github.com/langchain-ai/open-agent-platform",
        description: "Modern, web-based interface for creating, managing, and interacting with LangGraph agents",
        category: "Agent Platforms",
        stars: "New",
        starsNumeric: 0,
        features: ["Web interface", "Agent management", "LangGraph integration"],
        organization: "LangChain",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["web-interface", "management", "langgraph", "platform"],
        isNew: true
    },
    {
        name: "OpenAI Agents Python SDK",
        url: "https://github.com/openai/openai-agents-python",
        description: "Lightweight yet powerful framework for building multi-agent workflows with provider-agnostic support",
        category: "Multi-Agent Frameworks",
        stars: "New",
        starsNumeric: 0,
        features: ["Provider-agnostic", "Lightweight", "Multi-agent workflows"],
        organization: "OpenAI",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["provider-agnostic", "lightweight", "workflows", "openai"],
        isNew: true
    },
    {
        name: "DurableSwarm",
        url: "https://github.com/dbos-inc/durable-swarm",
        description: "Reliable Multi-Agent Orchestration augmenting OpenAI's Swarm with durable execution",
        category: "Multi-Agent Systems",
        stars: "New",
        starsNumeric: 0,
        features: ["Durable execution", "Reliable orchestration", "Swarm augmentation"],
        organization: "DBOS Inc",
        cost: "Open Source",
        costDetails: "Open Source Framework",
        tags: ["durable", "reliable", "orchestration", "swarm"],
        isNew: true
    }
];

// Global variables
let filteredRepositories = [...repositories];
let currentSort = 'name';

// DOM Elements
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryFilter = document.getElementById('category-filter');
const starsFilter = document.getElementById('stars-filter');
const costFilter = document.getElementById('cost-filter');
const sortSelect = document.getElementById('sort-select');
const resultsCount = document.getElementById('results-count');
const repositoriesGrid = document.getElementById('repositories-grid');
const noResults = document.getElementById('no-results');
const resetFiltersBtn = document.getElementById('reset-filters');
const backToTopBtn = document.getElementById('back-to-top');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderRepositories();
    updateStatistics();
    setupScrollEffects();
    setupAnimations();
});

// Initialize application
function initializeApp() {
    // Set initial values
    searchInput.value = '';
    categoryFilter.value = 'all';
    starsFilter.value = '0';
    costFilter.value = 'all';
    sortSelect.value = 'name';
    
    // Update total repositories count in hero
    document.getElementById('total-repos').textContent = repositories.length;
    document.getElementById('research-tools').textContent = repositories.filter(repo => repo.cost === 'Open Source' || repo.cost === 'Research Tool').length;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // Filter functionality
    categoryFilter.addEventListener('change', handleFilters);
    starsFilter.addEventListener('change', handleFilters);
    costFilter.addEventListener('change', handleFilters);
    
    // Sort functionality
    sortSelect.addEventListener('change', handleSort);
    
    // Reset filters
    resetFiltersBtn.addEventListener('click', resetFilters);
    
    // Back to top button
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Footer category links
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            categoryFilter.value = category;
            handleFilters();
            document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle search
function handleSearch() {
    applyFilters();
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    applyFilters();
}

// Handle filters
function handleFilters() {
    applyFilters();
}

// Handle sorting
function handleSort() {
    currentSort = sortSelect.value;
    sortRepositories();
    renderRepositories();
}

// Apply all filters
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const minStars = parseInt(starsFilter.value);
    const selectedCost = costFilter.value;
    
    filteredRepositories = repositories.filter(repo => {
        // Search filter
        const matchesSearch = !searchTerm || 
            repo.name.toLowerCase().includes(searchTerm) ||
            repo.description.toLowerCase().includes(searchTerm) ||
            repo.organization.toLowerCase().includes(searchTerm) ||
            repo.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Category filter
        const matchesCategory = selectedCategory === 'all' || repo.category === selectedCategory;
        
        // Stars filter
        const matchesStars = repo.starsNumeric >= minStars;
        
        // Cost filter
        const matchesCost = selectedCost === 'all' || repo.cost === selectedCost;
        
        return matchesSearch && matchesCategory && matchesStars && matchesCost;
    });
    
    sortRepositories();
    renderRepositories();
    updateResultsCount();
}

// Sort repositories
function sortRepositories() {
    filteredRepositories.sort((a, b) => {
        switch (currentSort) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'stars':
                return b.starsNumeric - a.starsNumeric;
            case 'category':
                return a.category.localeCompare(b.category);
            case 'organization':
                return a.organization.localeCompare(b.organization);
            default:
                return 0;
        }
    });
}

// Render repositories
function renderRepositories() {
    if (filteredRepositories.length === 0) {
        repositoriesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    repositoriesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    repositoriesGrid.innerHTML = filteredRepositories.map(repo => createRepositoryCard(repo)).join('');
    
    // Add animation to cards
    const cards = repositoriesGrid.querySelectorAll('.repo-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('slide-up');
    });
}

// Create repository card HTML
function createRepositoryCard(repo) {
    const starsDisplay = repo.isNew ? '🆕 New' : `⭐ ${repo.stars}`;
    const costClass = repo.cost.toLowerCase().replace(' ', '-');
    const costIcon = repo.cost === 'Open Source' ? '🔓' : repo.cost === 'Research Tool' ? '🔬' : '🏢';
    
    const featuresHtml = repo.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');
    
    const tagsHtml = repo.tags.map(tag => 
        `<span class="tag">#${tag}</span>`
    ).join('');
    
    return `
        <div class="repo-card">
            <div class="repo-header">
                <h3 class="repo-title">
                    <a href="${repo.url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
                </h3>
                <div class="repo-meta">
                    <span class="repo-stars">${starsDisplay}</span>
                    <span class="repo-cost ${costClass}">${costIcon} ${repo.costDetails}</span>
                </div>
            </div>
            
            <div class="repo-org">🏢 ${repo.organization}</div>
            <div class="repo-category">📂 ${repo.category}</div>
            
            <p class="repo-description">${repo.description}</p>
            
            <div class="repo-features">
                <h4>✨ Key Features:</h4>
                <div class="features-list">${featuresHtml}</div>
            </div>
            
            <div class="repo-tags">
                <h4>🏷️ Tags:</h4>
                <div class="tags-list">${tagsHtml}</div>
            </div>
            
            <div class="repo-actions">
                <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                    <i class="fab fa-github"></i>
                    View Repository
                </a>
                <a href="${repo.url}/stargazers" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                    <i class="fas fa-star"></i>
                    Stargazers
                </a>
            </div>
        </div>
    `;
}

// Update results count
function updateResultsCount() {
    const count = filteredRepositories.length;
    const text = count === 1 ? 'repository found' : 'repositories found';
    resultsCount.textContent = `${count} ${text}`;
}

// Reset all filters
function resetFilters() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    starsFilter.value = '0';
    costFilter.value = 'all';
    sortSelect.value = 'name';
    currentSort = 'name';
    applyFilters();
}

// Update statistics
function updateStatistics() {
    // Update category chart
    const categoryChart = document.getElementById('category-chart');
    const categoryStats = {};
    
    repositories.forEach(repo => {
        categoryStats[repo.category] = (categoryStats[repo.category] || 0) + 1;
    });
    
    const sortedCategories = Object.entries(categoryStats)
        .sort(([,a], [,b]) => b - a);
    
    categoryChart.innerHTML = sortedCategories.map(([category, count]) => {
        const percentage = ((count / repositories.length) * 100).toFixed(1);
        return `
            <div class="category-item">
                <span class="category-name">${category}</span>
                <span class="category-count">${count} repos (${percentage}%)</span>
            </div>
        `;
    }).join('');
}

// Setup scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header scroll effect
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        // Back to top button
        if (scrollTop > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Setup animations
function setupAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Utility functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

// Add notification styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Lazy loading for images (if any are added later)
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Export functions for potential external use
window.AgenticAIHub = {
    repositories,
    filteredRepositories,
    applyFilters,
    resetFilters,
    formatNumber,
    copyToClipboard,
    showNotification
};

