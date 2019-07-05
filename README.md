
# Contexte du projet

## Point de départ

<img src="https://www.monprojetpourlaplanete.gouv.fr/media/cache/default_profile/default/0001/01/3b76a871f1976cf21fcdfb9b4dea828ce98c1828.png" alt="Sunshare Logo" align="right" style="margin-right: 25px" height=130></a>
Dans le cadre d'un projet d'expérimentation pour l'école IMIE, le projet "Sunshare" nous a été soumis.
Pour bien comprendre l'existant voici quelques liens :
1. [Contexte du projet & Consignes](http://imie.sunshare.fr/)
2. [Projet de base sur Git (Serious Game)](https://github.com/sunsharebox) <img src="https://github.blog/wp-content/uploads/2013/04/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.jpg?resize=1234%2C701" alt="Git Logo" height=30></a>
3. [Dashboard, interface locale utilisateur (Boxénergie)](https://github.com/sunsharebox/sunshare-APP)<img src="https://github.blog/wp-content/uploads/2013/04/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.jpg?resize=1234%2C701" alt="Git Logo" height=30></a>
4. [Connexion en javascript aux capteurs (Boxénergie)](https://github.com/sunsharebox/sunshare-API)<img src="https://github.blog/wp-content/uploads/2013/04/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.jpg?resize=1234%2C701" alt="Git Logo" height=30></a>

Les objectifs concrets de ce projet sont :
1. Créer une démo fonctionnelle du "Serious Game"
  - Créer une interface utilisateur/équipe/administrateur
  - Créer une base de données utilisateurs
  - Créer une API sur l'interface de développement de la société ENEDIS
  - Création d'un portail sécurisé
  - Création d'un mode simplifié
  - Établir les règles du jeu
2. Améliorer les couches existantes sur la partie Boxénergie
  - Changement graphique de l'interface utilisateur actuelle
  - Connexion en JavaScript avec les capteurs (TIC et compteur à impulsions)
  - Mettre en place l'API ENEDIS pour le point de livraison de l'utilisateur.
  - Création d'une alerte sonore et/ou visuelle
3. Réaliser certaines des fonctionnalités supplémentaires (si le temps nous le permet)
  - Création de compte, nouvel utilisateur
  - Commande de déclenchement électrique (réalisation d'effacement de puissance)

## Architecture initiale

<a href="https://www.raspberrypi.org"><img src="https://www.raspberrypi.org/wp-content/uploads/2012/03/raspberry-pi-logo.png" alt="Raspberry Pi Logo" align="right" style="margin-left: 25px; margin-bottom: 10px" height=100></a>

Dans le but de réaliser ce projet l'école nous a fourni deux RaspberryPi V3B+. La demande initiale était d'utiliser ces deux RaspberryPi en tant qu' "utilisateurs". Au vu de la demande de produire un code "écoconception",nous avons choisi de les exploiter de manière différentes. La demande initiale concernait la mise en place d'un serveur MongoAtlas. Au vu de l'implantation des serveurs (US) et de la route de l'ensemble des paquets, il ne nous parrait pas judicieux d'utiliser cette architecture. Nous avons donc utilisé le premier comme base de données No-SQL ([MongoDB](https://www.mongodb.com/)). Le second est utilisé comme serveur web avec [Docker](https://www.docker.com/). L'enjeu sur le second est de mettre en place deux containers. Le premier conteneur servira à faire tourner la Boxénergie et le second le Serious Game. L'avantage est de créer un environnement facilement réplicable et simple à mettre en oeuvre.
Voici un schéma de l'architecture envisagée en sa version initiale :
<img src="https://raw.githubusercontent.com/MaximeNico/SunShare/master/ArchitectureV0.png" alt="ArchitectureV0" align="center" style="margin-bottom: 10px; margin-top: 30px">
<em>Architecture V0 </em>

# Serious Game

## Création des visuels
Pour cette partie il nous a été demandé de créer deux interfaces graphiques distinctes :
- Une dédiée à l'utilisateur
- Une dédiée à l'équipe
### Page  utilisateur
Voici la maquette de la page :

<img src="https://raw.githubusercontent.com/MaximeNico/SunShare/develop/ressource/Web%201920%20%E2%80%93%20Interface%20utilisateur%20(Dashboard).png" alt="Maquette User" align="center" style="margin-bottom: 10px; margin-top: 30px" height = 500>

Cette page comprend un menu, des encarts de conseil pour améliorer son score et des graphiques.

### Page groupes
Voici la maquette de la page :

<img src="https://raw.githubusercontent.com/MaximeNico/SunShare/develop/ressource/Web%201920%20%E2%80%93%20Interface%20utilisateur%20(TeamBoard).png" alt="Maquette Team" align="center" style="margin-bottom: 10px; margin-top: 30px" height = 500>

Cette page comprend le classement de son équipe avec le podium de l'équipe et un classement global avec l'affichage des 3 meilleures équipes.

## Base de données

En attente d'éléments de Nico

## API ENEDIS

En attente des éléments d'ENEDIS.

La société ENEDIS souhaite disposer d'une IP fixe pour envoyer ses données vers un serveur. Le matériel mis à disposition par l'école ne nous permet pas de réaliser cette demande. Deux solutions sont alors possible :

- L'entreprise Sunshare met en place un serveur OVH commum à l'ensemble des groupes. Cette initiative permet d'ouvrir une base de données MongoDB avec une IP fixe. De part la nature des bases No-SQL, l'entreprise Sunshare pourra créer une collection par groupe et ainsi rendre autonome chacun des groupes.

- La première possibilité n'est pas possible à mettre en place. Dans ce cas nous prendrons l'initiative d'utiliser une infrastructure personnelle avec le raspberrypi dédié à la base de données (DBPI).

### Choix final ?

- [ ] solution 1
- [ ] solution 2

## Portail sécurisé

Afin d'éviter la mise en place de technique douteuse pour flouer le système nous avons mis en oeuvre plusieurs items :

- A la création du compte utilisateur récupération de l'ID du point de livraison (Identifiant du compteur). Cet identifiant sera stocké en base. Il ne peux y avoir deux numéro de compteur identique. A la création du compte nous interrogerons la base des compteurs pour savoir si celui-ci n'existe pas dans la base. Le cas échéant l'utilisateur ne pourra pas créer son compte. Il pourra utiliser les fonctions locales du raspberrypi mais ne pourra pas participer au Serious Game.

- Pour éviter la modification des consommations et/ou production, on comparera les valeurs de références reçues par Enedis. On positionnera un seuil de tolérance avec la valeur certifiée par ENEDIS. Si l'écart est trop important les données locales ne seront pas prise en compte mais seulement les données ENEDIS


## Création d'un mode simplifié

On distingue deux types d'utilisateurs pour le Serious Game. Une première catégorie utilise à la fois la Boxénergie et le Serious Game. Pour répondre à l'utilisation de la Boxénergie l'utilisateur doit à minima posséder une insallation de panneau solaire et disposer d'un contrat de revente pour son électricité. Si l'utilisateur ne répond pas à cela il a alors la possibilité de créer un compte uniquement pour le Serious Game. Il pourra ainsi participer au jeu et rapporter des points à son équipe sans passer par la Boxénergie. L'ensemble des points seront collectés à travers les divers challenge que nous verrons dans la partie suivante.

## Établir les règles du jeu

Dans une logique vertueuse pour l'environnement un principe de challenges et d'objectifs seront mis en place. On distinguera deux catégories. Ceux possédant la Boxénergie auront accès à l'ensemble des challenges et objectifs. Pour les utilisateurs en mode simplifié seul certains challenges et objectifs seront possibles.

## Règles soumisses

### Tirelire solaire
Les joueurs disposant de panneaux solaires effectuent un total annuel/mensuel/quotidien de leur production / consommation d’énergie.
La tirelire décompte les kwh soutirés (-) et injectés (+) sur le réseau.

Pour les foyers n’ayant pas de toiture solaire, on devra construire un autre mode de jeu (voir plus bas).

### Concours d’autoconsommation
On lance un défi sur plusieurs semaines auprès de tous les joueurs qui réussirons à transférer leur profil de consommation dans les périodes de production solaire.
On minimise le ratio entre énergie soutirée du réseau et énergie totale consommée en la période précédant le jeu et la période de jeu.

Malus : pour les foyers consommant beaucoup d’électricité par individu.

### Défis d’économie d’énergie
Dans cette partie, les économies d’énergie sont réparties par domaines (chauffage, eau chaude, appareils électriques,…) et chaque joueur part de sa situation actuelle et engage des actions qui le font avancer dans le jeu. On atteint un niveau lorsque qu’on a effectué une grappe d’actions dans chaque domaine. Exemple :

- Niveau 1 : Sobriété (conseils de grand mère) - baisser la température du logement à 19°C et 15°C en cas d’absence, mettre des mousseurs pour économiser l’eau chaude, dégivrer son congélateur une fois par an, brancher ses appareils sur des multiprises à interupteur, fermer les volets la nuit, éteindre la clim l’été, jeter toutes les lampes halogènes du foyer…
- Niveau 2 : Efficacité 1 (investissement modéré) : investire dans un thermostat d’ambiance programmable, raccorder ses équipements ménagers sur l’eau chaude centrale, supprimer 1 appareil de plus de 1000W (micro-onde, four, plaque induction, grille pain, seche linge, seche cheveux …),
- Niveau 3 : Efficacité 2 : Remplacer son chauffe eau (par un solaire, gaz ou thermodynamique), inverstir dans un poele à bois
- Niveau 4 : isoler ses combles et ses murs en BBC rénovation
- Malus : changer les fenètres sans isoler vos murs vous fait perdre des points, acheter une piscine chauffée…

## Règles créées

### Effacement de puissance

Une des fonctionnalités supplémentaire est de pouvoir faire commuter des relais de puissance. Grâce à cette fonctionnalité et en ayant renseigner la puissance active des appareils connectés sur ce relais nous serions capable de calculer la puissance effacée sur le réseau. En fonction de la puissance totale effacée, de la période et du temps d'effacement l'utilisateur reporterai plus ou moins de points. Nous savons que les pics de puissance se produissent le soir aux alentours de 19h. Si l'utilisateur efface une grande partie de sa puissance à ce moment précis alors il remportera un maximum de point. On y appliquera un coefficient multiplicateur. Après une heure d'effacement passe en x2, si effacement à des heures "pic" x3, etc

### Autres ???

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

## Installation et configuration des Raspberrypi

Pour commencer il faut installer Raspbian (distrubution Linux pour le raspberry). Pour ce faire, rendez-vous [ici](https://www.raspberrypi.org/downloads/raspbian/) et télécharger la version lite.
Une fois le .zip téléchargé ne pas de le dézipper.
Télécharger [Ethcer](https://www.balena.io/etcher/) pour monter l'iso sur la carte SD.
Créer un fichier 'ssh' sans extension sur la racine boot pour initialiser la connexion SSH.
Une fois termniné mettre la carte dans le slot SD prévu sur le raspberrypi.

Se connecter en SSH sur le raspberrypi (Mac OS et Linux pas de logiciel additionnel nécessaire).

Si vous êtes sous windows télécharger la dernière version de [putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Une fois connecté mettre à jour la dernière version des paquets avec la ligne :

```
sudo apt-get update && sudo apt-get upgrade
```
Répéter l'opération pour le second raspberrypi

### Partie base de données

Pour installer la base de données il faut faire les commandes suivantes :

```
sudo apt install mongodb
sudo systemctl enable mongodb
```

Pour tester si la base est bien active effectuer la commande :

```
mongo
```

Voila pour la partie base de données :thumbsup:

### Partie serveur web (Docker)

Commencer par installer la dépendance ffi :

```
libffi-dev
```

Pour installer Docker et Docker-compose utiliser les ligne suivantes :
```
sudo apt install docker-ce
sudo usermod -aG docker pi
sudo apt-get install -y python python-pip
sudo pip install docker-compose
```

Nico la suite pour les deux composants

Voila pour la partie docker :thumbsup:
