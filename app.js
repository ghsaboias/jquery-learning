$(document).ready(function() {
    // Sample news data structure
    const newsArticles = [
        {
            title: "EXPLOSIONS HEARD IN VORONEZH, RUSSIA",
            content: "Explosions have been reported in the Russian city of Voronezh, according to multiple sources. The nature and origin of these explosions remain unclear at this time. This development comes amid heightened tensions along the Russia-Ukraine border, where both sides have accused the other of ceasefire violations and the threat of missile and drone attacks.\n\nEarlier on January 9th, authorities in the neighboring Bryansk region sounded emergency sirens, urging residents to seek shelter. The Bryansk warning was linked to the reported threat in the Kursk and Voronezh regions, though the specifics of the threat have not been confirmed.\n\nThese incidents follow the announcement by the United Kingdom and several NATO allies to provide Ukraine with 30,000 FPV (first-person view) drones. The delivery is intended to bolster Ukraine's defenses as the country continues to grapple with the economic impact of the ongoing conflict, with its national debt reaching over 90% of GDP.\n\nThe situation remains highly volatile, with both Russia and Ukraine accusing each other of provocative actions. Ukrainian President Volodymyr Zelensky's recent visit to Italy has further exacerbated tensions between the two sides.",
            date: "2025-01-09",
            category: "world"
        },
        {
            title: "VENEZUELAN OPPOSITION LEADER KIDNAPPED DURING CARACAS PROTEST",
            content: "Prominent Venezuelan opposition figure María Corina Machado was violently intercepted and kidnapped by forces of the Maduro regime while leaving a massive protest rally in the Chacao district of Caracas. Eyewitness accounts and social media reports indicate that approximately 17 motorcycles, drones, and Jeep trucks opened fire on the vehicles transporting Machado, injuring one of the motorcyclists. Both Machado and the injured motorcyclist were then taken away by the regime forces.\n\nThe kidnapping of Machado, who had been in hiding from the government, is seen as a significant escalation in the ongoing political crisis in Venezuela. Protesters had gathered in response to Machado's call, with demonstrators chanting \"Who are we? Venezuela. What do we want? Freedom.\" The situation remains fluid, with the potential for further unrest and violence.\n\nIn a separate development, the elected president of Venezuela, Edmundo González, is currently meeting with Luis Abinader, the president of the Dominican Republic. This meeting comes as the Venezuelan military remains a key factor in the crisis, with protesters urging the armed forces to \"stand on the right side\" and \"fight with us also for freedom.\"\n\nThe kidnapping of Machado has drawn swift international condemnation, with the US House of Representatives Speaker, John Johnson, reaffirming his support for González as the legitimate leader of Venezuela and pledging to work with the incoming Trump administration to confront the Maduro regime. Calls for Machado's immediate release and respect for her personal integrity have also come from Panamanian authorities and members of the US Congress.\n\nAs the situation in Venezuela continues to escalate, the actions of the Maduro government and the response of the international community will be closely watched. The fate of Machado and the broader political crisis remain uncertain, with the potential for further unrest and violence on the horizon.",
            date: "2025-01-09",
            category: "world"
        },
        {
            title: "CRITICAL FIRE CONDITIONS PERSIST AROUND LOS ANGELES AS EATON FIRE APPROACHES MOUNT WILSON",
            content: "Dangerous Santa Ana winds continue to sweep through Southern California, raising critical fire risk as the Eaton Fire rapidly advances toward the communication towers atop Mount Wilson. Firefighters are engaged in a desperate battle to protect the vital infrastructure on the mountain, with Air tankers temporarily grounded due to turbulence and high winds.\n\nThe Eaton Fire has now grown to over 16,600 acres, with no containment reported. Authorities have warned that the fire's rapid spread could threaten millions who rely on the communications equipment located on Mount Wilson. In response, the California and Nevada National Guard are deploying additional resources, including 8 C-130 aircraft, to aid firefighting efforts. The U.S. Navy is also sending 10 Blackhawk helicopters to assist.\n\nAcross the region, the situation remains dire, with the Palisades Fire now exceeding 17,200 acres and the Hurst Fire surpassing 850 acres. A State of Emergency has been declared by California's governor, and the federal government has issued a Disaster Declaration, unlocking additional funding and resources to combat the blazes. Authorities have reported 20 arrests for looting related to the fires.\n\nDespite the challenges, the Los Angeles Fire Department maintains it is in a \"much better posture\" to battle the wildfires compared to earlier in the week. However, officials warn that failing to heed evacuation orders could result in misdemeanor charges, as protecting lives remains the top priority.",
            date: "2025-01-09",
            category: "environment"
        },
        {
            title: "LEBANESE PRESIDENT-ELECT TAKES OFFICE AMID REGIONAL DIPLOMACY",
            content: "Joseph Aoun has officially assumed the presidency of Lebanon, marking a transition of power following recent political turmoil. In a related development, French President Emmanuel Macron has announced plans to visit Lebanon \"very soon,\" underscoring France's continued involvement in the region.\n\nPresident-elect Aoun spoke with his Egyptian counterpart, Abdel Fattah El-Sisi, in a move that highlights regional diplomatic efforts to address the situation in Lebanon. However, not all reactions have been positive, with some political figures expressing skepticism about the nature of Aoun's ascension to power.\n\nDr. Samir Geagea, a prominent Lebanese politician, stated that Aoun's election was not a \"consensus\" but rather the result of the \"resistance group\" being unable to do anything but vote in favor of the new president. This suggests continued divisions within the Lebanese political landscape.\n\nIn contrast, U.S. President Joe Biden has congratulated Aoun on his election, expressing confidence in the new president and stating that the \"people of Lebanon have exercised their democratic right to choose their own future.\" Biden pledged that the U.S. will support Lebanon as it moves forward.\n\nThe transition of power in Lebanon comes amid concerns from Israeli officials that Hezbollah, the Shiite militant group, might resume fighting once the current ceasefire ends on January 27. This underscores the broader regional tensions and the potential for further instability in the area.",
            date: "2025-01-09",
            category: "politics"
        },
        {
            title: "HOUSE PASSES BILL TO SANCTION ICC OFFICIALS OVER WARRANTS FOR ISRAELI LEADERS",
            content: "The House of Representatives has voted 243-140-1 to pass legislation imposing sanctions on International Criminal Court (ICC) officials involved in seeking arrest warrants for Israeli Prime Minister Netanyahu and former Defense Minister Gallant. The bill, which now heads to the Senate, received support from 45 Democrats and Rep. Thomas Massie (R-KY), who voted \"present.\"\n\nPennsylvania Senator John Fetterman has announced plans to visit former President Donald Trump at his Mar-a-Lago resort, making him the first sitting Democratic U.S. senator to do so. Fetterman stated, \"I'm the Senator for all Pennsylvanians — not just Democrats in Pennsylvania.\"\n\nSenate Majority Leader Chuck Schumer has indicated he will vote in favor of a key procedural motion to advance the Laken Riley Act, a piece of legislation that has drawn bipartisan support. Schumer said this vote is \"not a vote on the bill itself, this is a motion to proceed, a vote that says we should have a debate and should have amendments.\"\n\nIn response to questions about the Laken Riley Act, Senator Katie Britt of Alabama clarified that the bill's detention requirements only apply to \"criminal illegal aliens\" who have entered the country illegally and committed at least one crime thereafter. She emphasized that the legislation does not affect those who are in the U.S. illegally but have not committed additional crimes.",
            date: "2025-01-09",
            category: "politics"
        }
    ];

    function displayNews(articles) {
        const container = $('#news-container');
        container.fadeOut(300, function() {
            container.empty();
            articles.forEach(article => {
                // Split content into paragraphs
                const paragraphs = article.content.split('\n\n');
                const previewContent = paragraphs[0];
                const fullContent = paragraphs.join('</p><p>');
                
                const articleElement = $(`
                    <article class="news-article">
                        <div class="article-header">
                            <span class="category">${article.category}</span>
                            <button class="bookmark-btn" title="Bookmark this article">🔖</button>
                        </div>
                        <h2>${article.title}</h2>
                        <div class="date">${formatDate(article.date)}</div>
                        <div class="content">
                            <div class="preview-content"><p>${previewContent}</p></div>
                            <div class="full-content hidden"><p>${fullContent}</p></div>
                            <div class="scroll-progress"></div>
                        </div>
                        <button class="read-more-btn">Read More</button>
                    </article>
                `);

                // Add bookmark functionality
                const bookmarkBtn = articleElement.find('.bookmark-btn');
                const isBookmarked = isArticleBookmarked(article);
                if (isBookmarked) {
                    bookmarkBtn.addClass('active');
                }

                bookmarkBtn.click(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleBookmark(article, $(this));
                });
                
                // Add reading time
                addReadingTime(articleElement, article.content);
                
                // Add click handler for Read More button
                articleElement.find('.read-more-btn').click(function() {
                    const btn = $(this);
                    const content = btn.siblings('.content');
                    const preview = content.find('.preview-content');
                    const full = content.find('.full-content');
                    
                    preview.toggleClass('hidden');
                    full.toggleClass('hidden');
                    btn.text(full.hasClass('hidden') ? 'Read More' : 'Show Less');
                    
                    // Smooth scroll to top of article if collapsing
                    if (full.hasClass('hidden')) {
                        $('html, body').animate({
                            scrollTop: articleElement.offset().top - 20
                        }, 500);
                    }
                });
                
                container.append(articleElement);
                articleElement.hide().fadeIn(500);
            });

            // Initialize features after articles are added
            addTextSelection();
            updateReadingProgress();
            addShareButtons();
            
            container.fadeIn(300);
        });
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // Event handlers for category buttons
    $('.category-btn').click(function() {
        const category = $(this).data('category');
        
        // Update active button
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter and display articles
        const filteredArticles = category === 'all' 
            ? newsArticles 
            : newsArticles.filter(article => article.category === category);
        
        displayNews(filteredArticles);
    });

    // Initial display
    displayNews(newsArticles);

    // 2. Add loading state
    function showLoading() {
        const container = $('#news-container');
        container.html('<div class="loading">Loading articles...</div>');
    }

    // 3. Add article counter
    function updateArticleCount(count) {
        const countHtml = $(`<div class="article-count">Showing ${count} articles</div>`);
        $('header').append(countHtml);
    }

    // 4. Add category button animations
    $('.category-btn').click(function() {
        $(this).addClass('clicked');
        setTimeout(() => $(this).removeClass('clicked'), 200);
    });

    // 5. Add scroll progress indicator
    $('.full-content').scroll(function() {
        const scrollPercent = ($(this).scrollTop() / ($(this)[0].scrollHeight - $(this).height())) * 100;
        $(this).closest('.news-article').find('.scroll-progress').css('width', `${scrollPercent}%`);
    });

    // 6. Add article sharing
    function addShareButtons() {
        const shareHtml = `
            <div class="share-buttons">
                <button class="share-btn" data-platform="twitter">Tweet</button>
                <button class="share-btn" data-platform="facebook">Share</button>
                <button class="share-btn" data-platform="copy">Copy Link</button>
            </div>
        `;
        $('.news-article').append(shareHtml);
    }

    // 7. Add keyboard navigation
    $(document).keydown(function(e) {
        if (e.key === 'Escape') {
            $('.full-content:not(.hidden)').each(function() {
                $(this).closest('.news-article').find('.read-more-btn').click();
            });
        }
    });

    // 8. Add double-click to expand
    $('.news-article').dblclick(function() {
        $(this).find('.read-more-btn').click();
    });

    // Add estimated reading time
    function addReadingTime(articleElement, content) {
        const words = content.split(' ').length;
        const minutes = Math.ceil(words / 200);
        const readingTime = $(`
            <div class="reading-time">
                <span>${minutes} min read</span>
                <div class="progress-indicator"></div>
            </div>
        `);
        articleElement.find('.date').after(readingTime);
    }

    // Add text selection sharing
    function addTextSelection() {
        $('.news-article').on('mouseup', function() {
            const selection = window.getSelection();
            if (selection.toString().length > 0) {
                const popup = $(`
                    <div class="selection-popup">
                        <button class="copy-btn">Copy</button>
                        <button class="share-btn">Share</button>
                    </div>
                `);
                
                // Remove any existing popups
                $('.selection-popup').remove();
                
                // Position and show new popup
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                popup.css({
                    top: rect.top + window.scrollY - 40,
                    left: rect.left + (rect.width / 2)
                });
                
                // Add click handlers
                popup.find('.copy-btn').click(function() {
                    navigator.clipboard.writeText(selection.toString());
                    $(this).text('Copied!');
                    setTimeout(() => $(this).text('Copy'), 1500);
                });
                
                popup.find('.share-btn').click(function() {
                    const text = selection.toString();
                    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                    window.open(shareUrl, '_blank');
                });
                
                $('body').append(popup);
            }
        });

        // Hide popup when clicking elsewhere
        $(document).on('mousedown', function(e) {
            if (!$(e.target).closest('.selection-popup').length) {
                $('.selection-popup').remove();
            }
        });
    }

    // Update reading progress
    function updateReadingProgress() {
        $('.full-content').scroll(function() {
            const article = $(this).closest('.news-article');
            const progress = ($(this).scrollTop() / 
                ($(this)[0].scrollHeight - $(this).height())) * 100;
            
            article.find('.progress-indicator').css('width', `${progress}%`);
        });
    }

    // Add search functionality
    function initializeSearch() {
        let searchTimeout;
        
        $('#search-input').on('input', function() {
            clearTimeout(searchTimeout);
            const searchTerm = $(this).val().toLowerCase();
            
            searchTimeout = setTimeout(() => {
                const currentCategory = $('.category-btn.active').data('category');
                let filteredArticles = newsArticles;
                
                // Filter by category if not "all"
                if (currentCategory !== 'all') {
                    filteredArticles = filteredArticles.filter(
                        article => article.category === currentCategory
                    );
                }
                
                // Filter by search term
                if (searchTerm) {
                    filteredArticles = filteredArticles.filter(article => 
                        article.title.toLowerCase().includes(searchTerm) ||
                        article.content.toLowerCase().includes(searchTerm)
                    );
                }
                
                // Update search stats
                $('.search-stats').text(
                    `Found ${filteredArticles.length} article${filteredArticles.length !== 1 ? 's' : ''}`
                );
                
                displayNews(filteredArticles);
            }, 300);
        });
    }

    // Initialize search functionality
    initializeSearch();
    
    // Set "All News" as active by default
    $('.category-btn[data-category="all"]').addClass('active');
    
    // Add loading indicator
    $(document).ajaxStart(function() {
        showLoading();
    }).ajaxStop(function() {
        $('#news-container').find('.loading').remove();
    });

    // Theme toggle functionality
    const themeToggle = $('#theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme based on system preference or stored preference
    function initializeTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.body.classList.toggle('dark-mode', storedTheme === 'dark');
            updateThemeToggleIcon();
        } else if (prefersDarkScheme.matches) {
            document.body.classList.add('dark-mode');
            updateThemeToggleIcon();
        }
    }

    function updateThemeToggleIcon() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.text(isDarkMode ? '☀️' : '🌙');
    }

    themeToggle.click(function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateThemeToggleIcon();
    });

    // Bookmarks functionality
    const bookmarksToggle = $('#bookmarks-toggle');
    const bookmarksSidebar = $('#bookmarks-sidebar');
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

    function toggleBookmarksSidebar() {
        bookmarksSidebar.removeClass('hidden').toggleClass('active');
    }

    function isArticleBookmarked(article) {
        return bookmarks.some(bookmark => bookmark.title === article.title);
    }

    function toggleBookmark(article, buttonElement) {
        const isBookmarked = isArticleBookmarked(article);
        
        if (isBookmarked) {
            bookmarks = bookmarks.filter(bookmark => bookmark.title !== article.title);
            buttonElement.removeClass('active');
        } else {
            bookmarks.push({
                title: article.title,
                date: article.date,
                category: article.category,
                preview: article.content.split('\n\n')[0]
            });
            buttonElement.addClass('active');
        }
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        updateBookmarksSidebar();
    }

    function updateBookmarksSidebar() {
        const bookmarksList = $('#bookmarks-list');
        bookmarksList.empty();
        
        if (bookmarks.length === 0) {
            bookmarksList.append('<p>No bookmarks yet</p>');
            return;
        }
        
        bookmarks.forEach(bookmark => {
            const bookmarkItem = $(`
                <div class="bookmark-item">
                    <h4>${bookmark.title}</h4>
                    <div class="date">${formatDate(bookmark.date)}</div>
                    <p>${bookmark.preview}</p>
                </div>
            `);
            
            bookmarkItem.click(function() {
                const article = newsArticles.find(a => a.title === bookmark.title);
                if (article) {
                    bookmarksSidebar.removeClass('active');
                    displayNews([article]);
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500);
                }
            });
            
            bookmarksList.append(bookmarkItem);
        });
    }

    // Initialize bookmarks
    bookmarksToggle.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmarksSidebar();
    });

    // Close bookmarks sidebar when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#bookmarks-sidebar, #bookmarks-toggle').length && bookmarksSidebar.hasClass('active')) {
            bookmarksSidebar.removeClass('active');
        }
    });

    // Initialize bookmarks sidebar
    updateBookmarksSidebar();

    // Initialize features
    initializeTheme();
    updateBookmarksSidebar();
}); 