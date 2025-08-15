# Design Pattern: Strategy

## Problema

- Código com múltiplos blocos de `if/else` ou `switch` para executar comportamentos diferentes.
- Dificuldade para escalar ou alterar comportamentos sem alterar o código existente.
- Viola o Princípio Aberto-Fechado (OCP) do SOLID.

## Intenção

Definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis. O padrão Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

## Solução

- Criar uma interface comum (`Strategy`) com diferentes implementações para cada comportamento.
- A classe que utiliza a estratégia delega o comportamento à interface, tornando o sistema extensível.

## Diagrama (GOF)

```mermaid
classDiagram
    class Context {
        -strategy: Strategy
        +setStrategy(s: Strategy): void
        +execute(): void
    }

    class Strategy {
        <<interface>>
        +execute(): void
    }

    class ConcreteStrategyA {
        +execute(): void
    }

    class ConcreteStrategyB {
        +execute(): void
    }

    Context --> Strategy
    Strategy <|.. ConcreteStrategyA
    Strategy <|.. ConcreteStrategyB