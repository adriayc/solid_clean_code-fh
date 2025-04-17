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

## Nombres pronunciables y expresivos

**_Mal_**

```ts
const n = 53;

const tx = 0.15;

const cat = 'T-Shirts';

const ddmmyyyy = new Date('August 15, 1965 00:00:00');
```

**_Mejor_**

```ts
const numberOfUnits = 53;

const tax = 0.15;

const category = 'T-Shirts';

const birthDate = new Date('August 15, 1965 00:00:00');
```

## Ausencia de información técnica en nombres

**_Mal_**

```ts
class AbstractUser {}
class UserMixin {}
class UserImplementation {}
interface UserInterface {}
```

**_Mejor_**

```ts
class User {}
interface User {}
```

## Nombres según el tipo de dato

### Arreglos - Arrays

**_Mal_**

```ts
const fruit = ['manzana', 'platano', 'fresa'];
```

**_Regular_**

```ts
const fruitList = ['manzana', 'platano', 'fresa'];
```

**_Bueno_**

```ts
const fruits = ['manzana', 'platano', 'fresa'];
```

**_Mejor_**

```ts
const fruitNames = ['manzana', 'platano', 'fresa'];
```

### Booleanos - Booleans

**_Mal_**

```ts
const open = true;
const write = ture;
const fruit = true;
const active = false;
const noValues = true;
const notEmpty = true;
```

**_Mejor_**

```ts
const isOpen = true;
const canWrite = true;
const hasFruir = true;
const isActive = false;
const hasValues = false;
const isEmpty = false;
```

### Números

**_Mal_**

```ts
const fruits = 3;
const cars = 10;
```

**_Better_**

```ts
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;

const totalOfCars = 5;
```

### Funciones

**_Mal_**

```ts
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailIfFieldsValid();
```

**_Mejor_**

```ts
createUser();
updateUser();
sendEmail();
```

## Clases

- El nombre es lo más importante de la clase.
- Formados por un sustantivo o frases de sustantivo.
- No deben de ser muy genéricos.
- Usar UpperCamelCase

**_Mal_**

```ts
class Manager {}
class Data {}
class Info {}
class Individual {}
class Processor {}
class SpecialMonsterView {}
```

3 preguntas para determinar save si es un buen nombre.

- ¿Qué exactamente hace la clase?
- ¿Cómo exactamente esta clase realiza cierta tarea?
- ¿Hay algo específico sobre su ubicación?

_Nota: Si algo no tiene sentido, remuévalo o refactoriza._

Más palabras !== mejor nombre

```ts
class SpecialViewingCaseMonsterEventsHandlerActivitySingleton {}
```

## Funciones

- "Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica" - **_Ward Cunningham_**

**_Mejor_**

```ts
function sendEmail(toWhom: string): boolean {
  // Verificar correo
  if (!toWhom.includes('@')) return false;

  // Construir el cuerpo o mensaje

  // Enviar correo

  // Si todo sale bien
  return true;
}
```

**_Mal_**

```ts
function sendEmail(): boolean {
  // Verificar si el usuario existe

  // Revisar contraseña

  // Crear usuario en Base de datos

  // Si todo sale bien
  return true;
}
```

## Parámetros y argumentos

Parámetros

```ts
// Parámetros
function sendEmail(toWhom: string): boolean {
  // ...

  // Si todo sale bien
  return true;
}
```

Argumentos

```ts
// Argumentos
sendEmail('adriano@mail.com');
```

- Limitar a 3 parámetros posicionales

**_Bien_**

```ts
function sendEmail(toWhom: string, from: string, body: string): boolean {}
```

**_No muy bien_**

```ts
function sendEmail(
  toWhom: string,
  from: string,
  body: string,
  subject: string,
  apikey: sring
): boolean {}
```

**_Mejor_**

- Desestructurar los parámetros del objecto

```ts
interface SendEmailOptions {
  toWhom: string;
  from: string;
  body: string;
  subject: string;
  apikey: string;
}

function sendEmail({
  toWhom,
  from,
  body,
  subject,
  apikey,
}: SendEmailOptions): boolean {}
```

**_No muy bien_**

```ts
function sendEmail(
  toWhom: string,
  from: string,
  body: string,
  subject: string,
  apikey: sring
): boolean {}
```

- Ordernar alfabeticamente los parametros

# Funciones (Otras recomendaciones)

- Simplicidad es fundamental.
- Funciones de tamaño reducido.
- Funciones de una sola línea sin causar complejidad.
- Menos de 20 líneas.
- Evitar el uso del "else".
- Prioriza el uso de la condicional ternaria.

## Principio DRY (Don't Repeat Yourself)

"Si quieres ser un programador productivo esfuérzate en escribir código legible". - **Robert C. Martin**

- Simplemente es evitar tener duplicidad de código.
- Simplificar las pruebas.
- Ayuda a centralizar procesos.
- Aplicar el princio DRY, usualmente lleva a refactorizar.

## Estructura de clases

"El buen código parece estar escrito por alguien a quien le importa". - **_Michael Feathers_**

**Comenzer con lista de propiedades.**

1. Propiedades estáticas.
2. Propiedades públicas.
3. Propiedades privadas de último.

**Métodos**

1. Empezando por los constructores estáticos.
2. Luego el constructor.
3. Seguidamente métodos estáticos.
4. Métodos privados después.
5. Resto de métodos de instancia ordenados de mayor a menor importancia.
6. Getters y Setters al final

```ts
class HtmlElement {
  // Propiedades
  public static domReady: boolean = false;

  private _id: string;
  private type: string;
  private updatedAt: number;

  // Constructores
  // constructor statico
  static createInput(id: string) {
    return new HtmlElement(id, 'input');
  }

  // constructor por defecto
  constructor() {
    this._id = id;
    this.type = type;
    this.updatedAt = Date.now();
  }
  // constructor privado

  // Metodos
  // metodos staticos
  // metodos privados

  // resto de métodos (ordenados de mayor a menor importancia)
  setType(type: string) {
    this.type = type;
    this.updatedAt = Date.now();
  }

  // getters y setters
  get id(): string {
    return this.id;
  }
}
```

## Comentarios

- Muchos de los comentarios que verás en el código lucen así.
  - Inutiles.
  - Redundantes.
- Es horrible leer código de otros.

```ts
const name = 'John Doe';

// Si name es igual a 'John Doe'
if (name === 'John Dow') {
  // entonces...
}
```

Evita usar comentarios, pero...

_Cuando usamos librerías de terceros, APIS, frameworks, etc. nos encontraremos ante situaciones en las que escribir un comentario será mejor que dejar una solución compleja o un hack sin explicacion_

**Los comentarios deberían de ser una excepción, no la regla.**

"No comentes el código mal escrito, reescríbelo" - **_Brian W. Kernighan_**

**Recuerda:**
Nuestro código debe de ser suficientemente auto explicativo.

**_Pero a veces es necesario comentarlo_**

**¿El por qué? En lugar del ¿qué? o ¿cómo?**
