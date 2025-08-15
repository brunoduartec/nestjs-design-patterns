# Design Pattern: Facade

## Problema

- Sistemas complexos com muitas classes e subsistemas são difíceis de usar e compreender para o cliente.
- O cliente precisa conhecer muitos detalhes internos e fazer múltiplas chamadas para realizar uma única operação.
- Isso gera acoplamento com partes internas do sistema que deveriam estar encapsuladas.

## Solução

- Criar uma **fachada** (classe `Facade`) que fornece uma interface simplificada e coesa para um conjunto de interfaces em um subsistema.
- O cliente interage apenas com a fachada, que delega as chamadas para os componentes internos.
- Reduz o acoplamento entre o cliente e o sistema, promovendo encapsulamento e simplicidade.

## Princípios SOLID Relacionados

- **SRP (Single Responsibility Principle)** – a fachada encapsula a complexidade de um subsistema, tornando o uso mais simples.
- **OCP (Open/Closed Principle)** – mudanças internas no subsistema não impactam os clientes, desde que a fachada permaneça estável.
- **DIP (Dependency Inversion Principle)** – o cliente depende apenas da abstração da fachada, não dos detalhes internos do sistema.

## Diagrama (GOF)

```mermaid
classDiagram
    class Facade {
        +operation(): void
    }

    class SubsystemA {
        +actionA(): void
    }

    class SubsystemB {
        +actionB(): void
    }

    class SubsystemC {
        +actionC(): void
    }

    Facade --> SubsystemA
    Facade --> SubsystemB
    Facade --> SubsystemC