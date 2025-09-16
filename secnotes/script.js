// Base64 encoding/decoding functions
function encodeSearch(query) {
    return btoa(encodeURIComponent(query));
}

function decodeSearch(encodedQuery) {
    try {
        return decodeURIComponent(atob(encodedQuery));
    } catch (e) {
        console.error('Error decoding search query:', e);
        return '';
    }
}

// Fungsi untuk menampilkan artikel
function displayArticles(articlesToShow, isSearchResult = false, searchQuery = '') {
    const container = document.getElementById('articlesContainer');
    const pageTitle = document.getElementById('pageTitle');
    const noResults = document.getElementById('noResults');
    
    // Reset tampilan
    container.innerHTML = '';
    noResults.style.display = 'none';
    
    if (articlesToShow.length === 0) {
        // Tampilkan pesan tidak ada hasil
        noResults.style.display = 'block';
        pageTitle.textContent = 'Hasil Pencarian';
        return;
    }
    
    // Update judul
    if (isSearchResult) {
        pageTitle.textContent = `Hasil Pencarian: "${searchQuery}"`;
    } else {
        pageTitle.textContent = 'Artikel Terbaru Cyber Security';
    }
    
    // Tampilkan artikel
    articlesToShow.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.onclick = () => openModal(article);
        
        const tagsHTML = article.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        articleCard.innerHTML = `
            <h3 class="article-title">${article.title}</h3>
            <div class="article-meta">
                <span>📅 ${formatDate(article.date)}</span>
                <span>📂 ${article.category}</span>
            </div>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-tags">
                ${tagsHTML}
            </div>
            <button class="read-more-btn">Baca Selengkapnya</button>
        `;
        
        container.appendChild(articleCard);
    });
}

// Fungsi untuk membuka modal artikel
function openModal(article) {
    const modal = document.getElementById('articleModal');
    const articleDetail = document.getElementById('articleDetail');
    
    const tagsHTML = article.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    articleDetail.innerHTML = `
        <div class="article-detail">
            <h1 class="detail-title">${article.title}</h1>
            <div class="detail-meta">
                📅 ${formatDate(article.date)} | 📂 ${article.category}
                <div style="margin-top: 1rem;">
                    ${tagsHTML}
                </div>
            </div>
            <div class="detail-content">
                ${article.content}
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('articleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fungsi untuk memformat tanggal
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Fungsi untuk melakukan pencarian
function performSearch(event) {
    event.preventDefault();
    
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (!query) return;
    
    // Encode query dan update URL
    const encodedQuery = encodeSearch(query);
    const newURL = `${window.location.pathname}?q=${encodedQuery}`;
    
    // Update URL tanpa reload halaman
    window.history.pushState({ query: query }, '', newURL);
    
    // Lakukan pencarian
    const results = searchArticles(query);
    
    // Tampilkan hasil
    displayArticles(results, true, query);
    
    // Scroll ke hasil
    document.getElementById('articlesContainer').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Fungsi untuk menangani URL dengan query parameter
function handleURLQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedQuery = urlParams.get('q');
    
    if (encodedQuery) {
        // Decode query
        const decodedQuery = decodeSearch(encodedQuery);
        
        if (decodedQuery) {
            // Set nilai input
            document.getElementById('searchInput').value = decodedQuery;
            
            // Lakukan pencarian
            const results = searchArticles(decodedQuery);
            displayArticles(results, true, decodedQuery);
        }
    } else {
        // Tampilkan semua artikel jika tidak ada query
        displayArticles(getAllArticles());
    }
}

// Fungsi untuk menangani tombol back/forward browser
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.query) {
        document.getElementById('searchInput').value = event.state.query;
        const results = searchArticles(event.state.query);
        displayArticles(results, true, event.state.query);
    } else {
        // Kembali ke halaman utama
        document.getElementById('searchInput').value = '';
        displayArticles(getAllArticles());
    }
});

// Inisialisasi ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Handle URL query jika ada
    handleURLQuery();
    
    // Fokus ke input pencarian
    document.getElementById('searchInput').focus();
    
    // Debug info di console
    console.log('🛡️ CyberSecure News - Website loaded successfully!');
    console.log('📊 Total articles loaded:', articles.length);
    
    // Contoh encoding untuk demonstrasi
    const exampleQuery = "malware";
    const encoded = encodeSearch(exampleQuery);
    console.log(`🔐 Example: "${exampleQuery}" encoded as "${encoded}"`);
    console.log(`🔓 Decoded back: "${decodeSearch(encoded)}"`);
});

// Fungsi utilitas tambahan
function clearSearch() {
    document.getElementById('searchInput').value = '';
    window.history.pushState({}, '', window.location.pathname);
    displayArticles(getAllArticles());
}

// Event listener untuk input pencarian (pencarian real-time)
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    // Pencarian real-time dengan delay
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        
        const query = this.value.trim();
        
        if (query.length === 0) {
            displayArticles(getAllArticles());
            return;
        }
        
        if (query.length >= 2) {
            searchTimeout = setTimeout(() => {
                const results = searchArticles(query);
                displayArticles(results, true, query);
            }, 300);
        }
    });
});

// Fungsi untuk filter artikel berdasarkan kategori
function filterByCategory(category) {
    const filteredArticles = getAllArticles().filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
    );
    displayArticles(filteredArticles, true, `Kategori: ${category}`);
}

// Fungsi untuk filter artikel berdasarkan tag
function filterByTag(tag) {
    const filteredArticles = getAllArticles().filter(article => 
        article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
    displayArticles(filteredArticles, true, `Tag: ${tag}`);
}

// Fungsi untuk mengurutkan artikel berdasarkan tanggal
function sortArticlesByDate(ascending = false) {
    const articles = getAllArticles();
    articles.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return ascending ? dateA - dateB : dateB - dateA;
    });
    displayArticles(articles);
}

// Fungsi untuk share artikel ke media sosial
function shareArticle(article) {
    const shareData = {
        title: article.title,
        text: article.excerpt,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Berhasil membagikan artikel'))
            .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback untuk browser yang tidak mendukung Web Share API
        const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(shareURL, '_blank');
    }
}

// Fungsi untuk bookmark artikel
function bookmarkArticle(article) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    
    const isBookmarked = bookmarks.some(b => b.id === article.id);
    
    if (isBookmarked) {
        bookmarks = bookmarks.filter(b => b.id !== article.id);
        console.log('Artikel dihapus dari bookmark');
    } else {
        bookmarks.push({
            id: article.id,
            title: article.title,
            date: article.date,
            savedAt: new Date().toISOString()
        });
        console.log('Artikel ditambahkan ke bookmark');
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    return !isBookmarked; // returns true if bookmarked, false if unbookmarked
}

// Fungsi untuk mendapatkan artikel terkait
function getRelatedArticles(article, limit = 3) {
    return getAllArticles()
        .filter(a => a.id !== article.id) // Exclude current article
        .filter(a => 
            a.category === article.category || 
            a.tags.some(tag => article.tags.includes(tag))
        )
        .slice(0, limit);
}

// Event listener untuk keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Alt + S untuk fokus ke search input
    if (event.altKey && event.key === 's') {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Esc untuk menutup modal
    if (event.key === 'Escape') {
        closeModal();
    }
});