# Projectify

**Projectify** est une librairie JavaScript conçue pour simplifier la création de vidéomapping en permettant l'affichage fluide et flexible de texte, de vidéos et d'autres médias. Cette librairie est idéale pour les artistes, les développeurs et les créateurs de contenu souhaitant intégrer facilement des éléments multimédias dans leurs projets de vidéomapping.

## Fonctionnalités

- **Affichage de texte** : Affichez du texte dynamique sur vos surfaces de projection.
- **Lecture de vidéos** : Intégrez des vidéos et contrôlez leur lecture.
- **Support des images** : Ajoutez des images et des graphiques à vos projections.
- **Animations** : Créez des animations fluides pour rendre vos projections plus captivantes.
- **Interactions en temps réel** : Gérez les interactions utilisateur en temps réel pour des performances interactives.

## Installation

Pour installer **Projectify**, vous pouvez inclure directement la bibliothèque dans votre projet.


## Utilisation de base

Voici un exemple d'utilisation de base de **Projectify** pour afficher du texte et une vidéo dans un projet de vidéomapping.

### HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple Projectify</title>
    <script src="https://cdn.example.com/projectify.min.js" defer></script>
    <script src="./script/script.js" defer></script>
</head>
<body>
</body>
</html>
```

### JavaScript

```javascript
// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', async function () {
    // Créer et afficher un élément de texte
    createAndDisplayElement('p', 'Texte pour le Vidéomapping', 'projectify-text', 'red', '24px');

    // Attendre 5 secondes
    await waitTime(5);

    // Utiliser projectify pour supprimer l'élément de texte
    projectify('Texte_pour_le_Vidéomapping').removeElement();
});
```

## API

### Créer et afficher un élément

```javascript
/**
 * Crée et affiche un élément sur la page.
 * 
 * @param {string} tag - Le tag HTML de l'élément à créer.
 * @param {string} textContent - Le texte à inclure dans l'élément.
 * @param {string} [className] - Le nom de la classe CSS à ajouter à l'élément (optionnel).
 * @param {string} [color] - La couleur du texte de l'élément (optionnel).
 * @param {string} [fontSize] - La taille de la police du texte de l'élément (optionnel).
 */
function createAndDisplayElement(tag, textContent, className, color, fontSize) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    const id = textContent.replace(/\s+/g, '_'); // Remplacer les espaces par des underscores pour l'ID
    element.id = id;
    if (className) {
        element.classList.add(className);
    }
    if (color) {
        element.style.color = color;
    }
    if (fontSize) {
        element.style.fontSize = fontSize;
    }
    document.body.appendChild(element);
}
```

### Supprimer un élément

```javascript
/**
 * Supprime un élément de la page.
 * 
 * @param {HTMLElement} element - L'élément à supprimer.
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
```

### Attendre un certain temps

```javascript
/**
 * Attend un certain nombre de secondes avant de continuer l'exécution.
 * 
 * @param {number} seconds - Le nombre de secondes à attendre.
 * @returns {Promise} - Une promesse qui se résout après le temps spécifié.
 */
function waitTime(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}
```

### Créer et afficher un bouton

```javascript
/**
 * Crée et affiche un bouton sur la page.
 * 
 * @param {string} text - Le texte du bouton.
 * @param {string} [className] - Le nom de la classe CSS à ajouter au bouton (optionnel).
 * @param {Function} onClickHandler - La fonction à appeler lors du clic sur le bouton.
 */
function createButton(text, className, onClickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    if (className) {
        button.classList.add(className);
    }
    button.addEventListener('click', onClickHandler);
    document.body.appendChild(button);
}
```

### Créer et afficher un élément vidéo

```javascript
/**
 * Crée et affiche un élément vidéo sur la page.
 * 
 * @param {string} sourceUrl - L'URL source de la vidéo.
 * @param {number} width - La largeur de la vidéo.
 * @param {number} height - La hauteur de la vidéo.
 * @param {string} [className] - Le nom de la classe CSS à ajouter à l'élément vidéo (optionnel).
 */
function createAndDisplayVideoElement(sourceUrl, width, height, className) {
    const videoElement = document.createElement('video');
    videoElement.src = sourceUrl;
    videoElement.width = width;
    videoElement.height = height;
    videoElement.controls = false; // Désactiver les contrôles de lecture
    const id = sourceUrl.replace(/\W+/g, '_'); // Remplacer les caractères non-alphanumériques par des underscores pour l'ID
    videoElement.id = id;
    if (className) {
        videoElement.classList.add(className);
    }
    document.body.appendChild(videoElement);
}
```

### Sélectionner et interagir avec un élément

```javascript
/**
 * Sélectionne un élément par son ID et retourne un objet avec des méthodes pour interagir avec cet élément.
 * 
 * @param {string} id - L'ID de l'élément à sélectionner.
 * @returns {Object} - Un objet avec des méthodes pour interagir avec l'élément sélectionné.
 */
function projectify(id) {
    const element = document.getElementById(id);
    return {
        element: element,
        removeElement: function () {
            removeElement(element);
        },
        // Vous pouvez ajouter d'autres méthodes pour interagir avec l'élément ici
    };
}
```

## Licence

**Projectify** est sous licence MIT.

---

**Projectify** vous offre les outils nécessaires pour transformer vos idées en expériences visuelles immersives. Que vous soyez un novice ou un professionnel, cette librairie vous aidera à réaliser des projections innovantes et captivantes.