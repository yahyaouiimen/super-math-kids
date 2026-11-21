# 🦸 Super Math Kids 2.0 — Académie des super-héros

Jeu éducatif PWA pour les enfants (environ 8 ans), basé sur le projet original **SuperMathKids**.

## Fonctionnalités

- 6 missions : calcul rapide, multiplication, division exacte, nombre manquant, comparaison, problèmes.
- 3 langues : français, العربية (RTL), English.
- 10 questions par mission, 5 questions pour le défi quotidien.
- XP, 4 rangs, 5 trophées, bonus pour séries de 3 bonnes réponses.
- Difficulté ajustée au fil des réponses, corrections expliquées.
- Espace parents : questions, bonnes réponses, missions et résultats par mode.
- Sauvegarde locale sur l'appareil (localStorage), sans compte ni serveur.
- PWA avec cache pour jouer hors ligne après un premier chargement réussi.
- Sons générés localement, désactivables.

## Tester localement

Depuis le dossier du projet :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`. Le mode hors ligne PWA nécessite une première visite en ligne et un navigateur compatible. Éviter d'ouvrir directement `index.html` via `file://` pour tester le service worker.


## Architecture

- `index.html` : écrans et structure HTML.
- `css/style.css` : interface responsive.
- `js/i18n.js` : dictionnaires de traduction.
- `js/questions.js` : générateur de questions et réponses.
- `js/storage.js` : sauvegarde de progression.
- `js/rewards.js` : rangs et trophées.
- `js/sounds.js` : sons.
- `js/app.js` : navigation et logique du jeu.
- `sw.js` : cache PWA.

## Confidentialité

Les progrès restent sur l'appareil dans le stockage du navigateur. Ils ne sont pas synchronisés entre appareils et peuvent disparaître si le stockage du site est effacé. Le bouton « Effacer les progrès » demande confirmation.

## Notes

Les questions sont générées aléatoirement. L'espace parents est un tableau de bord local simple, sans verrou parental. La première version est volontairement sans dépendances externes.
