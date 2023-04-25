# DevOps

## Introduction

Termes abordes :

- dev: dev logiciel
- ops: toute autre operation IT
- temps de livraison
- collaboration
- automatisation
- livraison continue (methode Agile)

Le terme devOps designe couramment un ensemble de pratiques,
qui combinent le developpement logiciel (Dev) et d'autres pratiques IT (Ops), le devOps a pour but de reduire le temps
de livraison des logiciels et de divers services informatiques.

Ces pratiques privilegient la collaboration, l'automatisation des taches et la livraison en continu. Ces pratiques sont aujourd'hui au coeur des pratiques modernes de developpement logiciel.

## Les methodes agiles

Les termes a retenir :

- gestion de projet IT
- implication du client
- reactivite aux demandes client
- satisafaction du client
- Manifeste agile https://manifesteagile.fr/

## L'integration continue

Les termes a retenir:

-

Exemple 1 : Ca fonctionne sur mon pc!

- Push du code fonctionnel localement
- fichiers de config et variable d'env dependants de votre poste de travail

-> L'equipe de travail est regulierement 'bloquee' a chaque ajout de code.

L'integration continue :
Une pratique de developpement logiciel ou les membres d'une equipe integrent leur travail le plus
frequemment possible, habituellement chacun au moins une fois par jour (pour entrainer plus d'integration par jour). Chaque integration sera validee par un build automatique (qui inclut des tests) pour detecter les erreurs d'integration aussi vite que possible.

L'integration continue se base sur les principes suivants:

- `build often`
- `test often`
- `integrate often`

Voici les bonnes pratiques a mettre en place tout au long de la semaine :

- Maintenir un depot de code source versionne (Git)
- Automatiser les etapes de build\*
- Chaque etape de build entraine une serie de test
- tous les membres de l'equipe commit aussi souvent que possible
- Le systeme de gestion des branches (Git) doit etre adapte au processus d'ajout des features...
- Tout commit doit amener a la creation ou l'utilisation d'une branche d'integration
- Reduire le temps de build au maximum
- Tester le produit dans un environnement de prod duplique
- Rendre disponible facilement le dernier build
- Tous les acteurs du projet doivent avoir un acces facilite au processus d'IC
- Automatiser le deploiement
- Fournir un moyen de visualisation et/ou de reporting de chacune des etaps pour un meilleur suivi

L'objectif de ces pratiques est de s'assurer que chaque modificatio du code source n'entraine pas de regression.

## Les tests

### Les tests unitaires

Les tests unitaires sont des tests automatisés qui permettent de vérifier le bon fonctionnement d'une partie isolée du code, appelée unité. Les unités peuvent être des fonctions, des méthodes ou des classes. Les tests unitaires sont généralement écrits par les développeurs eux-mêmes et sont exécutés à chaque fois que le code est modifié. L'objectif des tests unitaires est de détecter les erreurs de logique et les bugs dès que possible, afin de les corriger rapidement.

### Les test d'integration

Les tests d'intégration sont des tests qui vérifient le bon fonctionnement de plusieurs unités de code ensemble, dans un environnement simulé. Ces tests sont généralement écrits par les développeurs et sont exécutés avant que le code ne soit déployé. L'objectif des tests d'intégration est de s'assurer que les différentes parties du code fonctionnent bien ensemble et qu'il n'y a pas de conflits.

### Les tests E2E (End-to-End)

Les tests E2E (End-to-End) sont des tests qui vérifient le bon fonctionnement de l'application dans son ensemble, de bout en bout. Ils simulent les interactions d'un utilisateur avec l'application, en vérifiant que toutes les fonctionnalités de l'application fonctionnent correctement. Les tests E2E sont généralement écrits par des testeurs ou des automates de test, et sont exécutés avant ou après le déploiement de l'application. L'objectif des tests E2E est de s'assurer que l'application répond aux exigences et aux attentes de l'utilisateur final.




## Les differents types de build 

### Le build du developpeur / prive / local 

- Lance manuellement aussi souvent que possible (plus d'une dizaine par jour est un minimum...)
- Teste les changements apportes par un developpeur


### Le build de ci: 
- Lancement journalier 
- Automatique 
- Tester en routine les changements apportes par tous les developpeurs d'une equipe


### Les builds 'overnight' ou nightly: 
- Lancement journalier par l'outil de CI
- Test afin de verifier l'etat de la prod, les perf, build d'integration le plus complet possible.


### En resume : 
- build de jour: compilation + test unitaires
- build de nuit: compilation + toutes les categories de test abrodes precedemment + deploiement