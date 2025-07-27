// Language data
const languageData = [
  {"rank": 1, "language": "Mandarin Chinese", "native_speakers": 939237350, "family": "Sino-Tibetan", "region": "East Asia", "countries": ["China", "Taiwan", "Singapore"], "percentage_world_pop": 11.740},
  {"rank": 2, "language": "Spanish", "native_speakers": 485063960, "family": "Indo-European", "region": "Europe, Americas", "countries": ["Spain", "Mexico", "Colombia", "Argentina", "Peru", "Venezuela", "Chile", "Ecuador", "Guatemala", "Cuba"], "percentage_world_pop": 6.063},
  {"rank": 3, "language": "English", "native_speakers": 379682200, "family": "Indo-European", "region": "North America, Europe, Oceania", "countries": ["United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland"], "percentage_world_pop": 4.746},
  {"rank": 4, "language": "Arabic", "native_speakers": 373000000, "family": "Afro-Asiatic", "region": "Middle East, North Africa", "countries": ["Egypt", "Saudi Arabia", "Iraq", "Algeria", "Sudan", "Morocco", "Yemen", "Syria"], "percentage_world_pop": 4.662},
  {"rank": 5, "language": "Hindi", "native_speakers": 344650870, "family": "Indo-European", "region": "South Asia", "countries": ["India"], "percentage_world_pop": 4.308},
  {"rank": 6, "language": "Portuguese", "native_speakers": 236266650, "family": "Indo-European", "region": "South America, Europe, Africa", "countries": ["Brazil", "Portugal", "Angola", "Mozambique"], "percentage_world_pop": 2.953},
  {"rank": 7, "language": "Bengali", "native_speakers": 233808880, "family": "Indo-European", "region": "South Asia", "countries": ["Bangladesh", "India"], "percentage_world_pop": 2.923},
  {"rank": 8, "language": "Russian", "native_speakers": 146954150, "family": "Indo-European", "region": "Eastern Europe, Asia", "countries": ["Russia", "Belarus", "Kazakhstan"], "percentage_world_pop": 1.837},
  {"rank": 9, "language": "Japanese", "native_speakers": 123285670, "family": "Japonic", "region": "East Asia", "countries": ["Japan"], "percentage_world_pop": 1.541},
  {"rank": 10, "language": "Western Punjabi (Lahnda)", "native_speakers": 103000000, "family": "Indo-European", "region": "South Asia", "countries": ["Pakistan", "India"], "percentage_world_pop": 1.287},
  {"rank": 11, "language": "Cantonese", "native_speakers": 86633370, "family": "Sino-Tibetan", "region": "East Asia", "countries": ["China", "Hong Kong", "Macau"], "percentage_world_pop": 1.083},
  {"rank": 12, "language": "Vietnamese", "native_speakers": 85023700, "family": "Austroasiatic", "region": "Southeast Asia", "countries": ["Vietnam"], "percentage_world_pop": 1.063},
  {"rank": 13, "language": "Turkish", "native_speakers": 84010500, "family": "Turkic", "region": "Western Asia, Eastern Europe", "countries": ["Turkey", "Cyprus"], "percentage_world_pop": 1.050},
  {"rank": 14, "language": "Wu Chinese", "native_speakers": 83300000, "family": "Sino-Tibetan", "region": "East Asia", "countries": ["China"], "percentage_world_pop": 1.041},
  {"rank": 15, "language": "Marathi", "native_speakers": 83201270, "family": "Indo-European", "region": "South Asia", "countries": ["India"], "percentage_world_pop": 1.040},
  {"rank": 16, "language": "Telugu", "native_speakers": 82966790, "family": "Dravidian", "region": "South Asia", "countries": ["India"], "percentage_world_pop": 1.037},
  {"rank": 17, "language": "Indonesian", "native_speakers": 82200000, "family": "Austronesian", "region": "Southeast Asia", "countries": ["Indonesia"], "percentage_world_pop": 1.027},
  {"rank": 18, "language": "Korean", "native_speakers": 81721540, "family": "Koreanic", "region": "East Asia", "countries": ["South Korea", "North Korea"], "percentage_world_pop": 1.022},
  {"rank": 19, "language": "French", "native_speakers": 80770190, "family": "Indo-European", "region": "Europe, Africa, North America", "countries": ["France", "Canada", "Belgium", "Switzerland", "Congo", "Madagascar"], "percentage_world_pop": 1.010},
  {"rank": 20, "language": "Tamil", "native_speakers": 78587030, "family": "Dravidian", "region": "South Asia", "countries": ["India", "Sri Lanka", "Singapore"], "percentage_world_pop": 0.982},
  {"rank": 21, "language": "German", "native_speakers": 75282080, "family": "Indo-European", "region": "Europe", "countries": ["Germany", "Austria", "Switzerland"], "percentage_world_pop": 0.941},
  {"rank": 22, "language": "Urdu", "native_speakers": 70555140, "family": "Indo-European", "region": "South Asia", "countries": ["Pakistan", "India"], "percentage_world_pop": 0.882},
  {"rank": 23, "language": "Javanese", "native_speakers": 68278400, "family": "Austronesian", "region": "Southeast Asia", "countries": ["Indonesia"], "percentage_world_pop": 0.853},
  {"rank": 24, "language": "Italian", "native_speakers": 64647380, "family": "Indo-European", "region": "Europe", "countries": ["Italy", "Switzerland", "San Marino"], "percentage_world_pop": 0.808},
  {"rank": 25, "language": "Persian (Farsi)", "native_speakers": 57192350, "family": "Indo-European", "region": "Western Asia", "countries": ["Iran", "Afghanistan", "Tajikistan"], "percentage_world_pop": 0.715},
  {"rank": 26, "language": "Gujarati", "native_speakers": 57076220, "family": "Indo-European", "region": "South Asia", "countries": ["India"], "percentage_world_pop": 0.713},
  {"rank": 27, "language": "Pashto", "native_speakers": 53800000, "family": "Indo-European", "region": "South/Central Asia", "countries": ["Afghanistan", "Pakistan"], "percentage_world_pop": 0.672},
  {"rank": 28, "language": "Thai", "native_speakers": 56000000, "family": "Kra-Dai", "region": "Southeast Asia", "countries": ["Thailand"], "percentage_world_pop": 0.700},
  {"rank": 29, "language": "Bhojpuri", "native_speakers": 51000000, "family": "Indo-European", "region": "South Asia", "countries": ["India", "Nepal"], "percentage_world_pop": 0.637},
  {"rank": 30, "language": "Hausa", "native_speakers": 51000000, "family": "Afro-Asiatic", "region": "Africa", "countries": ["Nigeria", "Niger", "Ghana"], "percentage_world_pop": 0.637},
  {"rank": 31, "language": "Jin Chinese", "native_speakers": 48000000, "family": "Sino-Tibetan", "region": "East Asia", "countries": ["China"], "percentage_world_pop": 0.600},
  {"rank": 32, "language": "Min Chinese", "native_speakers": 47000000, "family": "Sino-Tibetan", "region": "East Asia", "countries": ["China", "Taiwan"], "percentage_world_pop": 0.587},
  {"rank": 33, "language": "Hakka Chinese", "native_speakers": 44000000, "family": "Sino-Tibetan", "region": "East Asia", "countries": ["China", "Taiwan"], "percentage_world_pop": 0.550},
  {"rank": 34, "language": "Polish", "native_speakers": 40000000, "family": "Indo-European", "region": "Europe", "countries": ["Poland"], "percentage_world_pop": 0.500},
  {"rank": 35, "language": "Kannada", "native_speakers": 38000000, "family": "Dravidian", "region": "South Asia", "countries": ["India"], "percentage_world_pop": 0.475},
  {"rank": 36, "language": "Odia", "native_speakers": 37000000, "family": "Indo-European", "region": "South Asia", "countries": ["India"], "percentage_world_pop": 0.462},
  {"rank": 37, "language": "Ukrainian", "native_speakers": 37000000, "family": "Indo-European", "region": "Eastern Europe", "countries": ["Ukraine"], "percentage_world_pop": 0.462},
  {"rank": 38, "language": "Malayalam", "native_speakers": 34000000, "family": "Dravidian", "region": "South Asia", "countries": ["India"], "percentage_world_pop": 0.425},
  {"rank": 39, "language": "Burmese", "native_speakers": 33000000, "family": "Sino-Tibetan", "region": "Southeast Asia", "countries": ["Myanmar"], "percentage_world_pop": 0.412},
  {"rank": 40, "language": "Tagalog", "native_speakers": 28000000, "family": "Austronesian", "region": "Southeast Asia", "countries": ["Philippines"], "percentage_world_pop": 0.350}
];

// Global variables
let filteredData = [...languageData];
let selectedLanguage = null;
let currentView = 20;
let sortColumn = null;
let sortDirection = 'asc';
let barChart, pieChart, regionalChart;
let searchQuery = '';
let familyFilter = '';

// Chart colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeStats();
    initializeFilters();
    initializeCharts();
    initializeTable();
    initializeEventListeners();
});

// Initialize summary statistics
function initializeStats() {
    const totalSpeakers = languageData.reduce((sum, lang) => sum + lang.native_speakers, 0);
    const families = [...new Set(languageData.map(lang => lang.family))];
    const totalPercentage = languageData.reduce((sum, lang) => sum + lang.percentage_world_pop, 0);
    
    document.getElementById('totalSpeakers').textContent = formatNumber(totalSpeakers);
    document.getElementById('familyCount').textContent = families.length;
    document.getElementById('worldCoverage').textContent = totalPercentage.toFixed(1) + '%';
}

// Initialize filter options
function initializeFilters() {
    const familyFilterEl = document.getElementById('familyFilter');
    const families = [...new Set(languageData.map(lang => lang.family))].sort();
    
    families.forEach(family => {
        const option = document.createElement('option');
        option.value = family;
        option.textContent = family;
        familyFilterEl.appendChild(option);
    });
}

// Apply all filters to data
function applyFilters() {
    filteredData = languageData.filter(lang => {
        const matchesSearch = searchQuery === '' || 
            lang.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lang.family.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lang.region.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesFamily = familyFilter === '' || lang.family === familyFilter;
        
        return matchesSearch && matchesFamily;
    });
}

// Initialize charts
function initializeCharts() {
    createBarChart();
    createPieChart();
    createRegionalChart();
}

// Create bar chart
function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    const data = getViewData();
    
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(lang => lang.language),
            datasets: [{
                label: 'Native Speakers',
                data: data.map(lang => lang.native_speakers),
                backgroundColor: chartColors[0],
                borderColor: chartColors[0],
                borderWidth: 1,
                hoverBackgroundColor: chartColors[1],
                hoverBorderColor: chartColors[1]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            onHover: (event, activeElements) => {
                event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
            },
            onClick: (event, activeElements) => {
                if (activeElements.length > 0) {
                    const index = activeElements[0].index;
                    const viewData = getViewData();
                    if (viewData[index]) {
                        selectLanguage(viewData[index]);
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${formatNumber(context.parsed.y)} native speakers`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Create pie chart for language families
function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    const familyData = aggregateByFamily();
    
    pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: familyData.labels,
            datasets: [{
                data: familyData.data,
                backgroundColor: chartColors,
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false
            },
            onHover: (event, activeElements) => {
                event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
            },
            onClick: (event, activeElements) => {
                if (activeElements.length > 0) {
                    const index = activeElements[0].index;
                    const familyData = aggregateByFamily();
                    const family = familyData.labels[index];
                    filterByFamily(family);
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${formatNumber(context.parsed)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Create regional distribution chart
function createRegionalChart() {
    const ctx = document.getElementById('regionalChart').getContext('2d');
    const regionalData = aggregateByRegion();
    
    regionalChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: regionalData.labels,
            datasets: [{
                data: regionalData.data,
                backgroundColor: chartColors,
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${formatNumber(context.parsed)} speakers`;
                        }
                    }
                }
            }
        }
    });
}

// Aggregate data by family
function aggregateByFamily() {
    const familyMap = {};
    filteredData.forEach(lang => {
        if (!familyMap[lang.family]) {
            familyMap[lang.family] = 0;
        }
        familyMap[lang.family] += lang.native_speakers;
    });
    
    const sorted = Object.entries(familyMap).sort((a, b) => b[1] - a[1]);
    return {
        labels: sorted.map(item => item[0]),
        data: sorted.map(item => item[1])
    };
}

// Aggregate data by region
function aggregateByRegion() {
    const regionMap = {};
    filteredData.forEach(lang => {
        if (!regionMap[lang.region]) {
            regionMap[lang.region] = 0;
        }
        regionMap[lang.region] += lang.native_speakers;
    });
    
    const sorted = Object.entries(regionMap).sort((a, b) => b[1] - a[1]);
    return {
        labels: sorted.map(item => item[0]),
        data: sorted.map(item => item[1])
    };
}

// Get data for current view
function getViewData() {
    return filteredData.slice(0, currentView);
}

// Initialize data table
function initializeTable() {
    renderTable();
}

// Render data table
function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    const data = getViewData();
    data.forEach(lang => {
        const row = document.createElement('tr');
        row.dataset.language = lang.language;
        row.addEventListener('click', () => selectLanguage(lang));
        
        row.innerHTML = `
            <td class="rank-cell">${lang.rank}</td>
            <td class="language-cell">${lang.language}</td>
            <td class="speakers-cell">${formatNumber(lang.native_speakers)}</td>
            <td>${lang.family}</td>
            <td>${lang.region}</td>
            <td class="percentage-cell">${lang.percentage_world_pop.toFixed(2)}%</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Select language and show details
function selectLanguage(language) {
    selectedLanguage = language;
    showLanguageDetails(language);
    highlightSelectedLanguage(language);
}

// Show language details in panel
function showLanguageDetails(language) {
    const detailContent = document.getElementById('detailContent');
    
    const countriesHtml = language.countries.map(country => 
        `<span class="country-tag">${country}</span>`
    ).join('');
    
    detailContent.innerHTML = `
        <div class="detail-item">
            <div class="detail-label">Language</div>
            <div class="detail-value">${language.language}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Rank</div>
            <div class="detail-value">#${language.rank} worldwide</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Native Speakers</div>
            <div class="detail-value">${formatNumber(language.native_speakers)}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Language Family</div>
            <div class="detail-value">${language.family}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Region</div>
            <div class="detail-value">${language.region}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">World Population %</div>
            <div class="detail-value">${language.percentage_world_pop.toFixed(2)}%</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">Countries</div>
            <div class="detail-countries">${countriesHtml}</div>
        </div>
    `;
    
    detailContent.classList.add('slide-in');
}

// Highlight selected language in table
function highlightSelectedLanguage(language) {
    document.querySelectorAll('#tableBody tr').forEach(row => {
        row.classList.remove('selected');
        if (row.dataset.language === language.language) {
            row.classList.add('selected');
        }
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // View toggle
    const viewToggle = document.getElementById('viewToggle');
    viewToggle.addEventListener('change', handleViewChange);
    
    // Family filter
    const familyFilterEl = document.getElementById('familyFilter');
    familyFilterEl.addEventListener('change', handleFamilyFilter);
    
    // Table sorting
    document.querySelectorAll('[data-sort]').forEach(th => {
        th.addEventListener('click', () => handleSort(th.dataset.sort));
    });
    
    // Close detail panel
    const closeDetailBtn = document.getElementById('closeDetail');
    closeDetailBtn.addEventListener('click', closeDetailPanel);
}

// Handle search
function handleSearch(event) {
    searchQuery = event.target.value;
    applyFilters();
    updateVisualizations();
}

// Handle view change
function handleViewChange(event) {
    currentView = parseInt(event.target.value);
    updateVisualizations();
}

// Handle family filter
function handleFamilyFilter(event) {
    familyFilter = event.target.value;
    applyFilters();
    updateVisualizations();
}

// Filter by family (called from pie chart click)
function filterByFamily(family) {
    const familyFilterEl = document.getElementById('familyFilter');
    familyFilterEl.value = family;
    familyFilter = family;
    applyFilters();
    updateVisualizations();
}

// Handle table sorting
function handleSort(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    // Update header indicators
    document.querySelectorAll('[data-sort]').forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
        if (th.dataset.sort === column) {
            th.classList.add(sortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc');
        }
    });
    
    // Sort data
    filteredData.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (sortDirection === 'asc') {
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
            return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
    });
    
    renderTable();
}

// Close detail panel
function closeDetailPanel() {
    selectedLanguage = null;
    document.querySelectorAll('#tableBody tr').forEach(row => {
        row.classList.remove('selected');
    });
    document.getElementById('detailContent').innerHTML = 
        '<p>Select a language from the chart or table to view detailed information.</p>';
}

// Update all visualizations
function updateVisualizations() {
    // Update bar chart
    const viewData = getViewData();
    barChart.data.labels = viewData.map(lang => lang.language);
    barChart.data.datasets[0].data = viewData.map(lang => lang.native_speakers);
    barChart.update();
    
    // Update pie chart
    const familyData = aggregateByFamily();
    pieChart.data.labels = familyData.labels;
    pieChart.data.datasets[0].data = familyData.data;
    pieChart.update();
    
    // Update regional chart
    const regionalData = aggregateByRegion();
    regionalChart.data.labels = regionalData.labels;
    regionalChart.data.datasets[0].data = regionalData.data;
    regionalChart.update();
    
    // Update table
    renderTable();
}

// Format numbers with commas
function formatNumber(num) {
    return num.toLocaleString();
}