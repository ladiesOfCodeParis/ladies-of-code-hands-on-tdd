# String Calculator
[Réf: Coding dojo](https://codingdojo.org/kata/StringCalculator/)

En recevant une chaîne de caractères composée de 0 à 2 nombre(s) séparé(s) par un point virgule :
Retourner la somme

Une chaîne de caractères vide renvoie "0"


## Le Besoin
***En tant qu'*** institutrice \
***Etant donné*** une classe de CP \
***Je voudrais*** automatiser la somme de 2 nombres \
***Afin d'enseigner*** l'addition

## Le Résultat attendu
```
function add(input){...}

add('') // '0'
add('1') // '1'
add('0;1') // '1'
add('1,1;2,2') // '3,3'
```

## Le Besoin a évolué
***En tant qu'*** institutrice \
***Etant donné*** une classe de CP \
***Je voudrais*** automatiser la somme de 2 nombres séparé(s) par un point virgule \
                  et la différence 2 nombres séparé(s) par un 's' \
***Afin d'enseigner*** l'addition et la soustraction

## Le nouveau Résultat attendu
```
function parseOperation(input){...}

parseOperation('') // 'ADD'
add('1') // 'ADD'
add('0;1') // 'ADD'
add('1,1;2,2') // 'ADD'
add('0s1') // 'SUBSTRACT'
add('1,1s2,2') // 'SUBSTRACT'

function add(input){...}

add('') // '0'
add('1') // '1'
add('0;1') // '1'
add('1,1;2,2') // '3,3'

function substract(input){...}

substract('') // '0'
substract('1') // '1'
substract('0s1') // '-1'
substract('1,1s2,2') // '-3,3'
```