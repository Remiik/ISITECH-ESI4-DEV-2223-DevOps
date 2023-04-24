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
 - Automatiser les etapes de build*
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
