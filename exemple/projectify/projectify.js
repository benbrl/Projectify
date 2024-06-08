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

/**
 * Crée et affiche un élément vidéo sur la page.
 * 
 * @param {string} sourceUrl - L'URL source de la vidéo.
 * @param {number} width - La largeur de la vidéo.
 * @param {number} height - La hauteur de la vidéo.
 * @param {string} [className] - Le nom de la classe CSS à ajouter à l'élément vidéo (optionnel).
 */
function createAndDisplayVideoElement(sourceUrl, width, height, className) {
    // Créer l'élément vidéo
    const videoElement = document.createElement('video');

    // Définir les attributs de la vidéo
    videoElement.src = sourceUrl;
    videoElement.width = width;
    videoElement.height = height;
    videoElement.controls = false; // Désactiver les contrôles de lecture

    // Générer un ID unique pour la vidéo
    const id = sourceUrl.replace(/\W+/g, '_'); // Remplacer les caractères non-alphanumériques par des underscores pour l'ID
    videoElement.id = id;

    // Ajouter la classe CSS si fournie
    if (className) {
        videoElement.classList.add(className);
    }

    // Ajouter l'élément vidéo au DOM
    document.body.appendChild(videoElement);
}

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