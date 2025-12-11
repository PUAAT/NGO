// V25 CORE LOGIC

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initCharts();
    initInteractions();
    initCalculator();
});

// 1. Solution/Challenge Accordion (Crucial for Q&A)
function initInteractions() {
    const cards = document.querySelectorAll('.solution-trigger');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const content = card.nextElementSibling;
            const icon = card.querySelector('.fa-chevron-down');
            
            // Toggle
            content.classList.toggle('hidden');
            card.parentElement.classList.toggle('active');
            
            // Rotate Icon
            if(icon) icon.classList.toggle('rotate-180');
        });
    });

    // Animate on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('fade-up');
        });
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// 2. Leaflet Map (Heping District)
function initMap() {
    if(!document.getElementById('map')) return;
    
    // Coordinates: Heping District, Taichung
    const map = L.map('map', {scrollWheelZoom: false}).setView([24.288, 120.945], 13);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(map);

    const hubIcon = L.divIcon({className: 'marker-hub'});
    const userIcon = L.divIcon({className: 'marker-user'});

    // Markers
    L.marker([24.285, 120.940], {icon: hubIcon}).addTo(map).bindPopup("<b>Main Hub:</b> Shuangqi Center").openPopup();
    L.marker([24.298, 120.965], {icon: userIcon}).addTo(map).bindPopup("User A (High Altitude)");
    L.marker([24.275, 120.930], {icon: userIcon}).addTo(map).bindPopup("User B (Riverside)");

    // Flight Path
    L.polyline([[24.285, 120.940], [24.298, 120.965]], {color: '#0ea5e9', dashArray: '5,5', weight: 2}).addTo(map);
    L.polyline([[24.285, 120.940], [24.275, 120.930]], {color: '#0ea5e9', dashArray: '5,5', weight: 2}).addTo(map);
}

// 3. Financial Charts
function initCharts() {
    const ctx = document.getElementById('budgetChart');
    if(!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Drone Hardware (Fleet)', 'Pilot Training (HR)', 'Hub Infrastructure', 'R&D Software', 'Safety/Admin'],
            datasets: [{
                data: [40, 25, 15, 12, 8],
                backgroundColor: ['#0b1120', '#0ea5e9', '#f59e0b', '#64748b', '#cbd5e1'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'right' } }
        }
    });
}

// 4. Donation Calculator
function initCalculator() {
    window.updateImpact = (amount) => {
        // Assumption: 1 Flight costs approx 200 TWD (marginal cost)
        const flights = Math.floor(amount / 200); 
        const meals = flights * 3; // 1 flight carries 3 meals pack
        
        document.getElementById('impact-flights').innerText = flights;
        document.getElementById('impact-meals').innerText = meals;
        document.getElementById('custom-amount').value = amount;
    };
}