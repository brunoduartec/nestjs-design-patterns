# Design Pattern: Builder

## Problema

* Objetos complexos com muitos parâmetros obrigatórios e opcionais são difíceis de construir usando apenas construtores.
* Construtores telescópicos (com muitos parâmetros) tornam o código confuso, difícil de ler e de manter.
* O risco de passar argumentos na ordem errada aumenta, levando a bugs difíceis de identificar.
* O código de construção acaba misturado com a lógica de negócios, violando o princípio da separação de responsabilidades.

## Solução

* Separar a construção de um objeto de sua representação final.
* Utilizar um objeto **Builder** para construir partes do objeto de forma encadeada e clara.
* Criar um método `build()` que garante que o objeto final será criado em um estado consistente.
* Permitir diferentes representações do mesmo tipo de objeto com processos de construção flexíveis.

## Diagrama (GOF)

```mermaid
classDiagram
    class Product {
        +parts: List~string~
        +showParts(): void
    }

    class Builder {
        <<interface>>
        +producePartA(): void
        +producePartB(): void
        +getProduct(): Product
    }

    class ConcreteBuilder {
        +producePartA(): void
        +producePartB(): void
        +getProduct(): Product
    }

    class Director {
        +construct(): void
    }

    Product o-- ConcreteBuilder
    Builder <|.. ConcreteBuilder
    Director --> Builder