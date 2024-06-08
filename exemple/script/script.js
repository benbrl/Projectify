// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', async function () {
    // Créer et afficher un élément de texte
    createAndDisplayElement('p', 'Texte pour le Vidéomapping', 'projectify-text', 'red', '24px');

    // Attendre 5 secondes
    await waitTime(5);

    // Utiliser projectify pour supprimer l'élément de texte
    projectify('Texte_pour_le_Vidéomapping').removeElement();
});
