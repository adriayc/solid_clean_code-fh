# PRINCIPIOS SOLID Y CLEAN CODE

> **Instructor:** Fernando Herrera

## Instalaciones necesarias

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node](https://nodejs.org/en)

Optional - Yarn

```sh
$ npm install --global yarn
```

- [Google Chrome](https://www.google.com/chrome/)

Extensiones de VSCode

- Activitus Bar
- Tokyo Night (Tema)
- Material Icon Theme (Iconos)
- TypeScript Importer (Opcional)

## Principales referencias del curso

- [**Clean JavaScript** de Miguel A. Gomez](https://cleanjavascript.es/)
- [**Refactoring Guru**: Khmelnitske shosse](https://refactoring.guru/)

## Deuda Técnica

### ¿Qué es?

La falta de calidad en el código, que genera una deuda que repercutirá en costos futuros.

### Costos económicos

- Tiempo en realizar mantenimientos.
- Tiempo en refactorizar código.
- Tiempo en comprender el código.
- Tiempo adicional en la transferencia del código.

### Esquema de deuda técnica de Marin Fowler

|                 | **Imprudente**                                | **Prudente**                                    |
| --------------- | --------------------------------------------- | ----------------------------------------------- |
| **Deliberada**  | No hay tiempo, sólo copia y pega eso de nuevo | Tenemos que entregar rápido, ya refatorizaremos |
| **Inadvertida** | "¿Qué son patrones de diseños?"               | "Ahora sabemos cómo lo deberíamos haber hecho"  |

Caer en deuda técnica es normal y a menudo es inevitable.

### Cómo se paga una deuda técnica?

#### Refactorización

Es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.

Usualmente para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas.

Usualmente esto produce el famoso: **"Si funciona, no lo toques"**

La mala calidad en el software siempre la acaba pagando o asumiendo alguien.

Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastar tiempo programando sobre un sitema frágil.

## Clean Code

- "Código Limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda." - **Carlos Blé**
- "Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito." - **Grady Booch**
- "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga." - **Donald Knuth**
