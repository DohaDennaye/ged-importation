const ctx = document.getElementById('chartImportations').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Dossiers', 'Expéditions', 'Paiements', 'Produits'],
        datasets: [{
            label: 'Importations',
            data: [24, 8, 45230, 1247],
            backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#6366f1']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10000,
                    callback: function (value) {
                        return value.toLocaleString();
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Filtrage des alertes par type (info, error, success)
function filterAlerts(type) {
    const alerts = document.querySelectorAll('.alerts li');
    alerts.forEach(alert => {
        if (type === 'all' || alert.classList.contains(type)) {
            alert.style.display = 'flex';
        } else {
            alert.style.display = 'none';
        }
    });
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    sidebar.classList.toggle('collapsed');
    container.classList.toggle('sidebar-collapsed');

    // Change l’icône du bouton
    const icon = document.querySelector('.toggle-sidebar-btn i');
    if (sidebar.classList.contains('collapsed')) {
        icon.setAttribute('data-lucide', 'chevron-right');
    } else {
        icon.setAttribute('data-lucide', 'chevron-left');
    }
    lucide.createIcons(); // Met à jour l’icône
}
