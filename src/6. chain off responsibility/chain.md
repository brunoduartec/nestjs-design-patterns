# Design Pattern: Chain of Responsibility

## Problema

- Quando múltiplos objetos podem tratar uma requisição, o código frequentemente contém lógica de controle condicional (como `if/else` ou `switch`) para decidir quem deve tratar a requisição.
- Adicionar ou reorganizar os tratadores exige mudanças em estruturas rígidas, dificultando a manutenção.
- Alto acoplamento entre remetente e os tratadores das requisições.

## Solução

- Criar uma cadeia de objetos (`Handlers`), onde cada um decide se processa a requisição ou a encaminha para o próximo na cadeia.
- Cada handler encapsula uma parte da lógica e conhece apenas o próximo da cadeia, promovendo baixo acoplamento.
- A ordem dos handlers pode ser alterada facilmente, e novos comportamentos podem ser adicionados sem modificar os existentes.

## Princípios SOLID Relacionados

- **SRP (Single Responsibility Principle)** – cada handler trata uma única responsabilidade específica.
- **OCP (Open/Closed Principle)** – novos handlers podem ser adicionados sem modificar os existentes.
- **DIP (Dependency Inversion Principle)** – quem envia a requisição depende apenas da interface do handler, não de implementações concretas.

## Diagrama (GOF)

```mermaid
classDiagram
    class Handler {
        <<interface>>
        +setNext(handler: Handler): Handler
        +handle(request: string): void
    }

    class AbstractHandler {
        -next: Handler
        +setNext(handler: Handler): Handler
        +handle(request: string): void
    }

    class ConcreteHandlerA {
        +handle(request: string): void
    }

    class ConcreteHandlerB {
        +handle(request: string): void
    }

    Handler <|.. AbstractHandler
    AbstractHandler <|-- ConcreteHandlerA
    AbstractHandler <|-- ConcreteHandlerB