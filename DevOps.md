# DevOps Avril 2023 (DANON Arthur, BAZIN Thibault, KREBS Rémi)
## Prérequis
    - npm install -g git-cz (pour installer sur sa machine git cz pour faire de meilleurs messages de commit

## Bonnes pratiques

- Il est impératif d'**indenter son code avec des tabs** et évidemment ajouter **des commentaires**.
- On utilise **des single quotes pour les strings** ('texte').
- On **met des ";" à la fin du code**.
- On **utilise des mots-clés français pour les messages de commit** (ajout/supression/modif [...]).

## Récupérer le site sur GitHub
1. Aller sur le répo GitHub : https://github.com/ThibaultBazin/devops-remi-arthur-thibault (vérifier qu'on est bien collaborateur du projet)
2. Dans VSCode, après avoir pointé dans le répertoire dans lequel on veut cloner le projet (le créer au préalable) : 
`git clone https://github.com/ThibaultBazin/devops-remi-arthur-thibault.git`

## Commandes 
Après avoir ouvert le projet dans VSCode, ouvrir un terminal, pointer sur le répertoire du projet en local et :

### Pour commencer à travailler

    - npm install (pour installer les dépendences)
    - npm install -D tailwindcss (installe le package tailwind)

### Pour run le site en local

    - npm start

### Pour effectuer les tests en local

    - npm test

### Pour commit & push ses modifications

    - git add .
    - git cz (choisir son type de commit, bien respecter la nomenclature des messages de commit)
    - git push origin dev (pour push ses modifs sur la branche dev)

## Documentation

- Le site officiel de [React](https://reactjs.org/), [ESLint](https://eslint.org/).
- Le setup d'installation de [NodeJS](https://nodejs.org/en/download/), [pNpm](https://pnpm.io/fr/installation) et de [TailWind](https://tailwindcss.com/docs/installation).
-  L'outil [ChatGPT](https://chat.openai.com/).
- [Vercel](https://vercel.com/) pour la mise en production du site.

## Lexique
**DevOps** : Développeur (web, applicatif, ...) + Ops (Opérateur de toute autre opération IT comme les tests, la mise en PROD, l'amélioration continue, ...).

## URL vers l'application en PROD
https://devops-remi-arthur-thibault-arhvffop3-thibaultbazin.vercel.app/
