// Conjectura de Collatz
// ----------------------

// fonte: http://en.wikipedia.org/wiki/Collatz_conjecture

// A seguinte sequência iterativa é definida pelo conjunto de inteiros positivos onde:

// n -> n/2 (se n é par)
// n -> 3n + 1 (se n é impar)

// Por exemplo, usando as regras acima e começando pelo número 13, nós geraríamos a seguinte sequência:

// 13 40 20 10 5 16 8 4 2 1

// O que pode ser observado dessa sequência (começando no 13 e terminando no 1) é que ela contém 10 items. Embora ainda não esteja matematicamente provado, é esperando que, dado um numero inteiro positivo qualquer, a sequencia sempre chegará em 1.

// Pergunta: Qual inteiro positivo abaixo de 1 milhão produz a sequencia com mais items?

// Desafio: Crie um código na linguagem de sua preferência que calcule a resposta. Não é necessário codificar no editor online. Você pode usar o ambiente de sua escolha e colar a resposta no editor.
// Vamos avaliar a correção da solução, performance e legibilidade do código.

package main

import "fmt"

func main() {

	biggestSequence, biggestNumber := 0, 0

	for count := 1; count < 1000000; count++ {
		currentNumber := count
		sequence := []int{}
		for {
			sequence = append(sequence, currentNumber)
			if biggestSequence <= len(sequence) {
				biggestSequence = len(sequence)
				biggestNumber = count
			}
			if currentNumber == 1 {
				break
			}
			if currentNumber%2 == 0 {
				currentNumber = currentNumber / 2
			} else {
				currentNumber = 3*currentNumber + 1
			}
		}
	}

	msg := fmt.Sprintf("O número %v produz a maior sequência com %v elementos", biggestNumber, biggestSequence)
	fmt.Println(msg)
}
