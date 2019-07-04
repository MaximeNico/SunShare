
# Contexte du projet

## Point de départ

<img src="https://www.monprojetpourlaplanete.gouv.fr/media/cache/default_profile/default/0001/01/3b76a871f1976cf21fcdfb9b4dea828ce98c1828.png" alt="Sunshare Logo" align="right" style="margin-right: 25px" height=130></a>
Dans le cadre d'un projet d'expérimentation pour l'école IMIE, le projet "Sunshare" nous a été soumis.
Pour bien comprendre l'existant voici quelques liens :
	- [Contexte du projet & Consignes](http://imie.sunshare.fr/)
	- [Projet de base sur Git (Serious Game)](https://github.com/sunsharebox)
	- [Dashboard, interface locale utilisateur (Boxénergie)](https://github.com/sunsharebox/sunshare-APP)
	- [Connexion en javascript aux capteurs (Boxénergie)](https://github.com/sunsharebox/sunshare-API)

Les objectifs concrets de ce projet sont :
1. Créer une démo fonctionnelle du "Serious Game"
1.1. Créer une interface utilisateur/équipe/administrateur
1.2 Créer une base de données utilisateurs
1.3 Créer une API sur l'interface de développement de la société ENEDIS
1.4 Création d'un portail sécurisé
1.5 Création d'un mode simplifié
1.6 Établir les règles du jeu
2. Améliorer les couches existantes sur la partie Boxénergie
2.1 Changement graphique de l'interface utilisateur actuelle
2.2 Connexion en JavaScript avec les capteurs (TIC et compteur à impulsions)
2.3 Mettre en place l'API ENEDIS pour le point de livraison de l'utilisateur.
2.4 Création d'une alerte sonore et/ou visuelle
3. Réaliser certaines des fonctionnalités supplémentaires (si le temps nous le permet)
3.1 Création de compte, nouvel utilisateur
3.2 Commande de déclenchement électrique (réalisation d'effacement de puissance)

## Architecture initiale

<a href="https://www.raspberrypi.org"><img src="https://www.raspberrypi.org/wp-content/uploads/2012/03/raspberry-pi-logo.png" alt="Raspberry Pi Logo" align="right" style="margin-left: 25px; margin-bottom: 10px" height=100></a>

Dans le but de réaliser ce projet l'école nous a fourni deux RaspberryPi V3B+. La demande initiale était d'utiliser ces deux RaspberryPi en tant qu' "utilisateurs". Au vu des contraintes de temps et de ressources nous avons choisi de les exploiter de manière différentes. Le premier est utilisé comme base de données No-SQL ([MongoDB](https://www.mongodb.com/)). Le second est utilisé comme serveur web avec [Docker](https://www.docker.com/). L'enjeu sur le second est de mettre en place deux containers. Le premier conteneur servira à faire tourner la Boxénergie et le second le Serious Game.
Voici un schéma de l'architecture envisagée en sa version initiale :
<img src="https://raw.githubusercontent.com/MaximeNico/SunShare/master/ArchitectureV0.png" alt="ArchitectureV0" align="center" style="margin-bottom: 10px; margin-top: 30px">

# Serious Game

## Création des visuels
Pour cette partie il nous a été demandé de créer deux interfaces graphiques distinctes :
	- Une dédiée à l'utilisateur
	- Une dédiée à l'équipe
### Page  utilisateur
Voici la maquette de la page :
<img src="https://raw.githubusercontent.com/MaximeNico/SunShare/develop/ressource/Web%201920%20%E2%80%93%20Interface%20utilisateur%20(Dashboard).png" alt="Maquette User" style="margin-bottom: 10px; margin-top: 30px" height = 500>
Cette page comprend un menu, des encarts de conseil pour améliorer son score et des graphiques.

### Page groupes
Voici la maquette de la page :
<img src="https://raw.githubusercontent.com/MaximeNico/SunShare/develop/ressource/Web%201920%20%E2%80%93%20Interface%20utilisateur%20(TeamBoard).png" alt="Maquette User" style="margin-bottom: 10px; margin-top: 30px" height = 500>
Cette page comprend le classement de son équipe avec le podium de l'équipe et un classement global avec l'affichage des 3 meilleures équipes.

## Base de données

En attente d'éléments de Nico

## API ENEDIS

En attente des éléments d'ENEDIS

## Portail sécurisé

Soon...

## Création d'un mode simplifié

Soon...

## Établir les règles du jeu

Soon...

# EnergyBox

Développement sur la deuxième semaine.

## Changement graphique de l'interface utilisateur actuelle

Soon...

## Connexion en JavaScript avec les capteurs (TIC et compteur à impulsions)

Soon...
Préparer les éléments (GCE Electronics USB TIC & GPIO compteur à impulsions)

## Mettre en place l'API ENEDIS pour le point de livraison de l'utilisateur.

En attente des éléments d'ENEDIS

## Création d'une alerte sonore et/ou visuelle

Soon...

# Fonctions supplémentaires

Soon...

# Réalisation

Soon...
