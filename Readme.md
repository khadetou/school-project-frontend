# Nom de l'application : Compare price 
L' aplication Compare price permet d'afficher des produits du moin cher au plus cher.

## Technologies utilisées
- [Ionic React](https://ionicframework.com/) : pour la création du front-end
- [NestJS](https://nestjs.com/) : pour la création du back-end
- [Mysql](https://www.mysql.com/) : pour la base de données

## Utilisation
- [Front-end Github](https://github.com/khadetou/school-project-frontend.git) : lien github du front-end
- [Back-end Github](https://github.com/khadetou/school-project-backend.git) : pour le back-end

Apres avoir cloner les deux repositories, il faut installer les dependances avec la commande suivante:

``` bash
 pnpm install
```
Apres avoir installé mysql et mysql workbench, il faut creer une base de données nommé "compareapp" les table serons ajoutées automatiquement après avoire demarrer le serveur du backend.

Pour demarrer le serveur du backend, il faut executer la commande suivante:

``` bash
pnpm start:dev
```

Et pour demarrer le serveur du front-end, il faut executer la commande suivante:

``` bash
ionic serve
```

Apres avoir demarrer le serveur du front-end il faut clicker sur le boutton "generer les données" pour generer les données dans la base de données.