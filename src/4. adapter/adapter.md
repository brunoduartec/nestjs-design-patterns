# Design Pattern: Adapter

## Problema

* Dois sistemas ou classes precisam trabalhar juntos, mas suas interfaces são incompatíveis.
* Integrações com bibliotecas ou APIs externas exigem modificações no código cliente para funcionar corretamente.
* Alterar o código original de uma classe para torná-la compatível pode violar o princípio de código fechado para modificação (OCP) e criar alto acoplamento.

## Solução

* Criar uma classe intermediária (`Adapter`) que converte a interface de uma classe em outra interface esperada pelo cliente.
* O cliente continua usando sua interface original, enquanto o adapter faz a tradução entre os formatos ou métodos.
* O código do cliente fica desacoplado da implementação real do serviço externo ou legado.


## Princípio SOLID Relacionado

* OCP (Open/Closed Principle) – o adapter permite que novos formatos ou integrações sejam suportados sem modificar o código cliente.
* SRP (Single Responsibility Principle) – a adaptação da interface fica isolada em uma classe própria, sem poluir a lógica de negócio.
* (Auxilia indiretamente DIP) – permite que o cliente dependa de abstrações sem conhecer a implementação real.

## Diagrama (GOF)

```mermaid
classDiagram
    class Target {
        <<interface>>
        +request(): string
    }

    class Adaptee {
        +specificRequest(): string
    }

    class Adapter {
        +request(): string
    }

    Target <|.. Adapter
    Adapter --> Adaptee