# Design Pattern: Command

## Problema

- Lógica de execução de ações (como salvar, desfazer ou enviar) fica espalhada em diversas partes do sistema.
- É difícil implementar funcionalidades como "desfazer", filas de execução, agendamentos ou logs de operações realizadas.
- O acoplamento entre quem solicita uma ação e quem a executa torna o código difícil de manter e estender.

## Solução

- Encapsular cada solicitação como um objeto (`Command`), contendo todas as informações necessárias para executar uma ação.
- Criar uma interface comum para todos os comandos, e classes concretas que implementam a lógica de execução.
- O invocador (por exemplo, um botão ou uma fila de tarefas) manipula comandos de forma genérica, sem saber sua implementação.

## Princípios SOLID Relacionados

- **OCP (Open/Closed Principle)** – novos comandos podem ser adicionados sem alterar os existentes.
- **SRP (Single Responsibility Principle)** – cada comando encapsula uma única ação.
- **DIP (Dependency Inversion Principle)** – quem invoca comandos depende da abstração (`Command`), não da implementação.

## Diagrama (GOF)

```mermaid
classDiagram
    class Command {
        <<interface>>
        +execute(): void
    }

    class ConcreteCommand {
        -receiver: Receiver
        +execute(): void
    }

    class Receiver {
        +action(): void
    }

    class Invoker {
        -command: Command
        +setCommand(c: Command): void
        +invoke(): void
    }

    Command <|.. ConcreteCommand
    ConcreteCommand --> Receiver
    Invoker --> Command