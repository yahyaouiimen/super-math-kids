# 🦸 Super Math Kids 3.0 — La Ligue des Génies

Jeu éducatif trilingue (français, arabe, anglais) pour enfants, construit à partir de Super Math Kids 2.0. HTML, CSS et JavaScript natifs, sans framework, compte, publicité, suivi ni serveur.

## Fonctionnalités

- 5 mondes avec des boss à vaincre (4 bonnes réponses sur 5), déblocage progressif.
- 8 mini-jeux : calcul éclair, multiplications, divisions, nombre manquant, comparaison, problèmes, boutique (monnaie en dinars tunisiens), horloge (durées en heures).
- Questions générées localement, difficulté ajustée selon la réussite, correction et explication après chaque réponse.
- Héros personnalisable : 6 avatars, 5 couleurs, nom facultatif.
- Récompenses : XP, bonus de série, 8 badges, défi quotidien et bonus de 25 XP.
- Espace parents : contrôle d'accès par calcul simple, scores, progression par jeu, recommandations, historique et suppression des données.
- Lecture vocale facultative via Web Speech API : dépend des voix disponibles sur le navigateur/appareil ; **ne fonctionne pas toujours hors ligne**.
- PWA : service worker pré-cache tous les fichiers du jeu, pour jouer hors ligne après première ouverture en ligne.
- Progression locale : `localStorage`, migration automatique des données de la v2 lorsque présentes sur le même navigateur et la même origine.

## Lancer sur ordinateur

Pour tester le service worker, utiliser un serveur HTTP local (pas `file://`) :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000/`.

## Publier sur GitHub Pages

1. Décompresser le ZIP et placer **le contenu** (dont `index.html`) à la racine du dépôt GitHub, et non le dossier parent.
2. GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
3. Attendre le déploiement puis ouvrir `https://VOTRE-NOM.github.io/NOM-DU-DEPOT/`.
4. Pour mettre à jour l'application installée, rouvrir le site avec une connexion Internet puis recharger. Le cache versionné se renouvelle.

## Structure

- `index.html` : structure et navigation.
- `css/style.css`, `css/v3.css` : design et responsive.
- `js/storage.js` : sauvegarde et migration v2.
- `js/i18n3.js` : dictionnaires trilingues et RTL arabe.
- `js/adventure.js` : mondes, héros, rangs et trophées.
- `js/minigames.js` : génération des 8 types de questions.
- `js/voice.js` : synthèse vocale navigateur.
- `js/sounds.js` : effets sonores.
- `js/app3.js` : navigation, jeu, scores, espace parents.
- `sw.js` : fonctionnement hors ligne.

## Notes pédagogiques et confidentialité

La progression n'est pas synchronisée entre appareils. Effacer les données du navigateur efface les scores. Le contrôle parental par calcul est une barrière ludique, **pas** un mécanisme d'authentification sécurisé. Le mode vocal dépend de la plateforme ; certaines voix peuvent nécessiter Internet. La difficulté s'adapte de façon heuristique, pas via un modèle d'IA. Aucun achat ni connexion externe requis.

## Contrôles qualité recommandés

Tester sur Chrome/Edge Android et sur Safari iOS : langues et direction RTL, chaque mini-jeu, boss, défi quotidien, rafraîchissement hors ligne, synthèse vocale, statistiques, migration depuis la v2.
