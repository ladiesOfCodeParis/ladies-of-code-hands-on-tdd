# Hands-on TDD

***Hello, Ladies !***

Le TDD (Test Driven Development - Développement Guidé par le Test) est une gymnastique qui devient un réflexe avec la pratique.
Le but de ce hands-on est de nous familiariser avec cette méthode de développement.

## Installation pré-requise
[Node, contexte d'éxécution](https://nodejs.org/en/download/)

## Clôner le repo Github
Depuis ton IDE (Integrated Development Environment - Environnement de développement), ouvre ton terminal à l'emplacement où tu veux sauvegarder le projet.
```
cd [mon emplacement] 
```
```
git clone https://github.com/ladiesOfCodeParis/ladies-of-code-hands-on-tdd.git
```

## Installation des dépendances du projet
```
npm install
```

## Avant de commencer
Ce repo a vocation à évoluer et centraliser toutes les éditions de notre hands-on.
Une branche git dédiée sera ajoutée après chaque session.

Pour garder ton contenu, en local, je te conseille de créer une branche à ton nom pour chaque édition :
```
git checkout -b [Ton nom]/edition-1
```

## Une édition, une suite de tests
Pour chaque édition, tu trouveras un dossier rassemblant :
- Les concepts abordés
- Le code de production
- Le code de test

## Lancement des tests de l'édition en cours
[Jest, test runner](https://jestjs.io/docs/en/getting-started.html)
```
npm run test:edition#1
```