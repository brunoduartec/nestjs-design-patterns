# Design Pattern: Decorator

## Problema

- Precisa-se adicionar funcionalidades a objetos de forma flexível, sem criar uma explosão de subclasses.
- A herança rígida e estática não permite combinar comportamentos dinamicamente em tempo de execução.
- É difícil seguir o princípio de aberto/fechado se cada nova funcionalidade exige modificar uma classe existente.

## Solução

- Criar uma estrutura em que objetos possam ser “embrulhados” com outros objetos que adicionam comportamentos.
- Cada **decorator** implementa a mesma interface da classe que está decorando, e delega a ela a chamada, podendo estender ou modificar o comportamento.
- Composição dinâmica de comportamentos, permitindo múltiplos níveis de decoração em tempo de execução.

## Princípios SOLID Relacionados

- **OCP (Open/Closed Principle)** – novos comportamentos são adicionados sem modificar o código existente.
- **SRP (Single Responsibility Principle)** – a lógica principal e as responsabilidades adicionais são divididas em classes separadas.
- **DIP (Dependency Inversion Principle)** – os objetos dependem de abstrações, o que permite a composição de objetos decorados.

## Diagrama (GOF)

```mermaid
classDiagram
    class Component {
        <<interface>>
        +operation(): void
    }

    class ConcreteComponent {
        +operation(): void
    }

    class Decorator {
        -component: Component
        +operation(): void
    }

    class ConcreteDecoratorA {
        +operation(): void
    }

    class ConcreteDecoratorB {
        +operation(): void
    }

    Component <|.. ConcreteComponent
    Component <|.. Decorator
    Decorator <|-- ConcreteDecoratorA
    Decorator <|-- ConcreteDecoratorB
    Decorator --> Component