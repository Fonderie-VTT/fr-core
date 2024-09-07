//\\ Hook quand la sidebar est affichée //\\
Hooks.on("renderSidebarTab", () => {
  function remplacerTexte(element) {
    let text = element.innerText;

    const remplacements = {
      "Créer Acteur": "Créer un acteur",
      "Créer Scène": "Créer une scène",
      "Créer Objet": "Créer un objet",
      "Créer Journal": "Créer un journal",
      "Créer Table aléatoire": "Créer une table aléatoire",
      "Créer Ensemble de carte": "Créer un ensemble de carte",
      "Créer Playlist": "Créer une playlist",
      "Créer Compendium": "Créer un compendium"
    };

    for (const [cle, valeur] of Object.entries(remplacements)) {
      if (text.includes(cle)) {
        element.innerText = text.replace(cle, valeur);
      }
    }
  }
  //\\ Cible les boutons de la Sidebar //\\
  const buttons = document.querySelectorAll('.create-document.create-entry, .create-entry');
  buttons.forEach(remplacerTexte);
});


//\\ Hook pour l'ouverture d'un Dialog //\\
Hooks.on("renderApplication", (app, html) => {
  function remplacerTexte(element) {
    let text = element.innerText;

    const remplacements = {
      "Supprimer Acteur:": "Supprimer l'acteur :",
      "Supprimer Scène:": "Supprimer la scène :",
      "Supprimer Objet:": "Supprimer l'objet :",
      "Supprimer Journal:": "Supprimer le journal :",
      "Supprimer Table aléatoire:": "Supprimer la table aléatoire :",
      "Supprimer Ensemble de carte:": "Supprimer l'ensemble de carte :",
      "Supprimer Playlist:": "Supprimer la playlist :",
      "Créer Acteur": "Créer un acteur",
      "Créer Scène": "Créer une scène",
      "Créer Objet": "Créer un objet",
      "Créer Journal": "Créer un journal",
      "Créer Table aléatoire": "Créer une table aléatoire",
      "Créer Ensemble de carte": "Créer un ensemble de carte",
      "Créer Playlist": "Créer une playlist"
    };

    for (const [cle, valeur] of Object.entries(remplacements)) {
      if (text.includes(cle)) {
        element.innerText = text.replace(cle, valeur);
      }
    }
  }

  //\\ Cible les en-têtes des Dialog //\\
  const headers = html[0].querySelectorAll('.window-header .window-title');
  headers.forEach(remplacerTexte);

  //\\ Cible les boutons de validation des fenêtres de dialogue //\\
  const buttons = html[0].querySelectorAll('.dialog .dialog-buttons button.default');
  buttons.forEach(remplacerTexte);
});
