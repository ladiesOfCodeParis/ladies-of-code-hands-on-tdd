# Edition#4 - Red Green Refactor, AAA, DRY

## Red Green Refactor
Le TDD suit un cycle en 3 étapes :
Red - mon test échoue
Green - je fais passer mon test avec une simple modification du code de production
Refactor - j'améliore le code de production et de test en continu

## AAA - Arrange Act Assert
Le AAA décrit les phases de rédaction des cas de test :\
Arrange - La mise en place du test\
Act - L'appel de la méthode ou fonction à tester\
Assert - L'assertion ou le test du comportement attendu

On peut commencer par l'assertion et remonter jusqu'à l'action.
L'objectif est plus facile à atteindre en étant clairement établi.

## DRY -Don't repeat yourself
Réutiliser le code plutôt que de le dupliquer.

Dans un premier temps, on peut créer de la duplication.
En phase de refacto, on va alors pouvoir placer le code au bon endroit (le bon scope).
