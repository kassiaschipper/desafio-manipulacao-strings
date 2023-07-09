# desafio-manipulacao-strings
# Descrição do Projeto

Este projeto contém uma coleção de funções implementadas em JavaScript. Cada função realiza uma operação específica em uma string.

## Funções

### invertSentenceOrder

Inverte a ordem das palavras em uma frase.

```javascript
const result = invertSentenceOrder("Hello World"); // Resultado: "World Hello"
``` 
### removeDuplicates

Remove caracteres duplicados de uma string.

```javascript
const result = removeDuplicates("aabbcc"); // Resultado: "abc"
```

### findBiggestPalindrome

Encontra o maior palíndromo em uma string.

```javascript
const result = findBiggestPalindrome("babaddeleveledsss"); // Resultado: "deleveled"
```
### capitalizingFirstLetter

Capitaliza a primeira letra de cada frase em uma string.

```javascript
const result = capitalizingFirstLetter("hello. how are you? i'm fine, thank you."); // Resultado: "Hello. How are you? I'm fine, thank you."
```

### isAnagramOfPalindrome

Verifica se uma string é um anagrama de um palíndromo.

```javascript
const result = isAnagramOfPalindrome("racecar"); // Resultado: "true"
```

## Casos de Teste
Foram implementados casos de teste para cada função. Para executar os casos de teste, basta chamar a função de teste correspondente.

Exemplo:
```javascript
testInvertSentenceOrder();
testRemoveDuplicates();
testFindBiggestPalindrome();
testCapitalizingFirstLetter();
testIsAnagramOfPalindrome();
```
Os resultados dos testes serão exibidos no console.
