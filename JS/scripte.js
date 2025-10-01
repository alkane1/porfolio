// Script pour la navigation fluide (Smooth Scrolling)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Récupère l'ID de la cible (ex: #competences)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// *Suggestion d'amélioration (optionnel) :
// Utilisez JavaScript pour générer la liste de vos projets
// à partir d'un objet JSON, ce qui rend la mise à jour plus facile.
// Exemple :
/*
const projectsData = [
    { title: "API REST Go", description: "...", tech: ["Go", "PostgreSQL"] },
    { title: "Stage Web", description: "...", tech: ["WordPress", "SEO"] }
];
*/