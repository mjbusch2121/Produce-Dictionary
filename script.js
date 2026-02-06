/* PRODUCE DICTIONARY - SCRIPT.JS */
/* Search & Dark Mode */

/* DARK MODE FUNCTIONALITY */

// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to the elements we'll be working with
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check if user had dark mode enabled in a previous visit
    // localStorage saves data in the browser even after closing the tab
    const savedTheme = localStorage.getItem('theme');
    
    // If they had dark mode on before, turn it on now
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    // Add click event listener to the dark mode button
    darkModeToggle.addEventListener('click', function() {
        // Toggle means: if it's there, remove it; if it's not there, add it
        body.classList.toggle('dark-mode');
        
        // Save the user's preference for next time
        if (body.classList.contains('dark-mode')) {
            // User turned on dark mode
            localStorage.setItem('theme', 'dark');
        } else {
            // User turned off dark mode
            localStorage.setItem('theme', 'light');
        }
    });
    
});


/* ========================================
   SEARCH FUNCTIONALITY
   ======================================== */

// Get the search input box
const searchInput = document.getElementById('searchInput');

// Listen for when the user types in the search box
searchInput.addEventListener('input', function() {
    
    // Get what the user typed and convert to lowercase
    const searchTerm = this.value.toLowerCase().trim();
    
    // Get all the produce cards
    const cards = document.querySelectorAll('.card');
    
    // Counter to track how many cards are visible
    let visibleCount = 0;
    
    // Loop through each card and check if it matches the search
    cards.forEach(function(card) {
        // Get the English and Spanish names from data attributes
        const englishName = card.dataset.name.toLowerCase();
        const spanishName = card.dataset.spanish.toLowerCase();
        
        // Check if search term appears in either name
        const matchesSearch = englishName.includes(searchTerm) || 
                            spanishName.includes(searchTerm);
        
        if (matchesSearch) {
            // Show the card
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            // Hide the card
            card.classList.add('hidden');
        }
    });
    
    // Show "no results" message if no cards match
    const noResults = document.getElementById('noResults');
    if (visibleCount === 0 && searchTerm !== '') {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    
});


console.log("✅ JavaScript loaded!");
console.log("🥑 Phase 2 & 3 Complete!");
console.log("✨ Try searching or toggling dark mode!");
console.log("📱 Try resizing your browser or toggling dark mode!");
