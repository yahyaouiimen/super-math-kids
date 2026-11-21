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



## Contrôles qualité recommandés

Tester sur Chrome/Edge Android et sur Safari iOS : langues et direction RTL, chaque mini-jeu, boss, défi quotidien, rafraîchissement hors ligne, synthèse vocale, statistiques, migration depuis la v2.
