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

## Uniformidad en el proyecto

Problemas similares, soluciones similares.

**_Estructura de nombre de los metodos_**

```ts
const createProduct() {}
const updateProduct() {}
const deleteProduct() {}
```

**_No uniforme_**

```ts
const createNewUser() {}
const modifyUser() {}
const removeUser() {}
```

**_Lo ideal_**

```ts
const createUser() {}
const updateUser() {}
const deleteUser() {}
```

También, es aplicable en la estructura de directorios (depende del framework o lenguage que se esta utilizando).

**_No uniforme_**

```ts
▼ components (Folder)
  ► product-list (Folder)
    product-item.ts (File)
```

```ts
▼ components (Folder)
  ▼ product-list (Folder)
      product-list.html (File)
      product-list.ts (File)
    product-item.ts (File)
```

**_Lo ideal_**

```ts
▼ components (Folder)
  ▼ product-list (Folder)
      product-list.html (File)
      product-list.ts (File)
  ▼ product-list (Folder)
      product-list.html (File)
      product-item.ts (File)
```

Indentación (priorizar los estandares de la organizacion, las convenciones del lenguaje y del equipo de desarrallo)

```ts
class UserSettings extends User {
  constructor(
    public workinkDirectory: string,
    public lastFolerOpen: string,
    email: string,
    role: string,
    name: string,
    gender: Gender,
    birthdate: Date
  ) {
    super(email, role, new Date(), name, gender, birthdate);
  }
}
```

## Acrónimo STUPID

6 Code Smells que debemos de evitar.

- **S**ingleton: patrón singleton.
- **T**ight Coupling: Alto acoplamiento.
- **U**ntestability: código no probable (unit test).
- **P**remature optimization: optimizaciónes prematuras.
- **I**ndescriptive Naming: nombres pocos descriptivos.
- **D**uplication: duplicidad de código, no aplicar el pincipio DRY.

### Patrón Singleton

**Pros**
Garantiza una única instancia de la clase a lo largo de toda la aplicación.

**_¿Por qué code smell?_**

**Cons**

- Vive en el contexto global.
- Pude ser modificado por cualquera y en cualquier momento.
- No es rastreable.
- Difícil de testar debido a su ubicación.

### Alto acoplamiento

Lo ideal es tener bajo acoplamiento y buena cohesión.

**Pero qué significa eso**

- Alto acomplamiento y baja cohesión.
- Bajo acomplamiento y alta cohesión.

**Desventajas**

- Un cambio en un módulo por lo general provoca un efecto dominó de los cambios en otros modulos.
- El ensamblaje de módulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos.
- Un módulo en particula puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes.

Posibles soluciones

- **"A"** tiene un atributo que se refiere a **"B"**.
- **"A"** llama a los servicios de un objecto **"B"**.
- **"A"** tiene un metodo que hace referencia a **"B"** (a través del tipo de retorno o parámetro).
- **"A"** es una subclase de (o implementa) la clase **"B"**.

"Queremos diseñar componentes que sean auto-contenidos, aut0 suficientes e independientes. Con un objetivo y un propósito bien definido." - **The Pragmatic Programer**

#### Cohesión

Lo ideal es tener bajo acoplamiento y buena cohesión.
**_La cohesión se refiere a lo que la clase (o módulo) puede hacer._**

- **La baja cohesión** significaría que la clase realiza un gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
- **Alta cohesión** significa que la clase se enfoca en lo que deberia estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

#### Acoplamiento

Lo ideal es tener bajo acoplamiento y buena cohesión.
**_Se refiere a cuán realacionadas o dependientes son dos clases o módulos entre sí._**

- **En bajo acoplamiento**, cambiar algo importante en una clase no debería afectar a la otra.
- **En alto acoplamiento**, dificultaría el cambio y el mantenimiento de su código: dado que las clases están muy unidas, hacer un cambio podría requerir una renovacion completa del sistema.

**_Un buen diseño de software tiene alta cohesión y bajo acoplamiento._**

### Código no probable

Código dificilmente testeable.

- Código con alto acomplamiento.
- Código con mucha dependencias no inyectadas.
- Dependencias en el contexto global (Tipo Singleton).

**_Debemos de tener en mente las pruebas desde la creación del código._**

### Optimizaciones prematuras

Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es más importante en una aplicación.

No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

**Complejidad accidental**
Cuando implementamos una solución compleja a la mínima indispensable.

**Complejidad esencial**
La complejidad es inherente al problema.

**_Debe existir un balance entre la complejidad esencial y accidental._**

### Nombres poco descriptivos

- Nombres de variables mal nombradas.
- Nombres de clases genéricas.
- Nombres de funciones mal nombradas.
- Ser muy especifico o demasiado genérico.

_La única medida de calidad de código es que "WTF" por minuto._

### Duplicidad de Código

No aplicar el principio DRY.

**_Real_**

- Código es idéntico y cumple la misma función.
- Un cambio implicaría actualizar todo el código idéntico en varios lugares.
- Incrementa posibilidades de error humano al olvidar una parte para actualizar.
- Mayor cantidad de pruebas innecesarias.

**_Accidental_**

- Código luce similar pero cumple funciones distintas.
- Cuando hay un cambio, sólo hay que modificar un sólo lugar.
- Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.

## Otros ["code smells"](https://refactoring.guru/refactoring/smells)

Que merecen tener su mención especial.

### Inflación

Son código, métodos y clases que ha crecido a propornciones tan descomunales que dificultan su manejo. Normalmente, estos problemas no aparecen de inmediato, sino que se acumulan con el tiempo a medida que el programa evoluciona.

#### Long Method

**Signos y síntomas**
Un método contiene demasiadas líneas de código. Generalmente, cualquier método con más de diez líneas debería generar dudas.

**Tratamiento**
Como regla general, si necesitas comentar algo dentro de un método, debes tomar este código y añadirlo a un nuevo método. Incluso una sola línea puede y debe dividirse en un método independiente si requiere explciacioens. Y si el método tiene un nombre descriptivo, nadie necesitará revisar el código para ver qué hace.

- Para reducir la longitud del cuerpo de un método, utilice "Extraer Método".
- Si las varaibles y parámetros locales interfieren con la extraccion de un método, utilice "Reemplazar Temporarl con Consultas", "Introducir Objetos de Parámetros" o "Preservar Objeto Completo".
- Si ninguna de las recetas anteriores ayuda, intente mover el método completo a un objeto separado mediante "Reemplazar Método con Objeto de Método".
- Los operadores condicionales y los bucles son buan señal de que el código se puede mover a un método independiente. Para los condicionales, utilice "Descomponer Condicionales". Si los bucles interfieren, prueba "Extraer Método".

#### Large Class

**Signos y síntomas**
Una clase contiene muchos campos/métodos/líneas de código.

**Tratamiento**
Cuando una clase tiene demasiadas funciones, piense en dividirla:

- "Extraer Clase" ayuda si parte del comportamiento de la clase grande se puede separar en un componente separado.
- "Extraer Subclase" ayuda si parte del comportamiento de la clase grande se puede implementar de diferentes maneras o se usa en casos excepcionales.
- "Extraer Interfaz" ayuda si es necesario tener una lista de las operaciones y comportamientos que el cliente puede utilizar.
- Si una clase grande ses ersponsable de la interfaz gráfica, puede intentar transladar algunos de sus datos y comportamiento a un objeto de dominio independiente. Para ello, podría ser necesario almacenar copias de algunos datos en dos ubicaciones y mantener la coherencia de los mismos. Los datos observados duplicados ofrecen una solución.

#### Primitive Obsession

**Signos y síntomas**

- Uso de primitivos en lugar de pequeños objetoc para tareas simples (como moneda, rangos, cadenas especiales para números de teléfono, etc.)
- Uso de constantes para codificar información (por ejemplo, una constante `USER_ADMIN_ROLE = 1` para referirse a usuarios con derechos de administrador).
- Uso de constantes de cadena como nombres de campo para uso de arrays de datos.

**Tratamiento**

- Si tiene una gran variedad de campos primitivos, es posible agrupar algunos de ellos lógicamente en su propia clase. Mejor aún, también puede mover el comportamiento asociado a estos datos a la clase. Para ello, pruebe "Reemplazar Valor de Datos con Objeto".
- Si se utilizan los valores de los campos primitivos en los parámetros del método, utilice "Introducir Objeto de Parámetro" o "Preservar Objeto Completo".
- Cuando se codifican dato complicados en variables, utilice "Reemplazar Código de Tipo con Subclases" o "Reemplazar Código de Tipo con Estado/Estrategia".
- Si hay arrays entre las variables, utilice "Reemplazar Array con Objeto".

#### Long Parameter List

**Signos y síntomas**
Más de tres y cuatro parámetros para una método.

**Tratamiento**

- Comprueba qué valores se pasan a los parámetros. Si algunos de los argumentos son simplemente resultados de llamadas a métodos de otro objeto, usa "Reemplazar Parámetro con Llamada a Método". Este objeto puede colocarse en el campo de su propia clase o pasarse como parámetro de un método.
- En lugar de pasar un grupo de datos recibidos de otro objeto como parámetros, pase el objeto mismo al método, utilizando "Preservar Todo el Objeto".
- Pero si estos parámetros provienen de diferentes fuentes, puedes pasarlos como un único objeto de parámetro a través de "Introducir Objeto de Parámetro".

### Acopladores

Todos los olores de este grupo contribuyen al acomplamiento excesivo entre clases o muestran lo que sucede si el acoplamiento se reemplaza por una delagación excesiva.

#### Feature Envy

**Signos y síntomas**
Un método accede a los datos de otros objeto más que a sus propios datos.

**Tratamiento**
Como regla general, si los datos cambian al mismo tiempo, deben conservarse en el mismo lugar. Normalmente, los datos y las funciones que los utilizan se modifican juntos (aunque puede haber excepciones).

- Si claramente un método debe moverse a otro lugar, utilice "Mover Método".
- Si solo una parte de un método accede a los datos de otro objeto, utilice "Extraer Método" para mover la parte en cuestión.
- Si un método utiliza funciones de varias clases, primero determine qué clase contiene la mayoría de los datos utilizados. Luego, coloque el método en esta clase junto con los demás datos. Como alternativa, utilice "Extraer Método" para dividir el método en varias partes que puedan ubicarse en diferentes lugares de las distintas clases.

#### Inappropriate Intimacy

**Signos y síntomas**
Una clase utiliza los campos y métodos internos de otra clase.

**Tratamiento**

- La solución más sencilla es usar el "Método Mover" y el "Campo Mover" para mover partes de una clase a la clase donde se usan. Sin embargo, esto solo funciona si la primera clase realmente no necesita estas partes.
- Otra solución es utilizar "Extraer Clase" y "Ocultar Delegado" en la clase para hacer que las relaciones del código sean “oficiales”.
- Si las clases son mutuamente interdependientes, debe utilizar "Cambiar Asociación Bidireccional a Unidireccional".
- Si esta “intimidad” es entre una subclase y la superclase, considere "Reemplazar Delegación con Herencia".

#### Message Chains

**Signos y síntomas**
En el código se ve una serie de llamadas similares a `$a->b()->c()->d()`.

**Tratamiento**

- Para eliminar una cadena de mensajes, utilice "Ocultar Delegado".
- A veces es mejor pensar por qué se usa el objeto final. Quizás tenga sentido usar el "Método Extraer" para esta función y moverlo al principio de la cadena mediante el "Método Mover".

#### Middle Man

**Signos y síntomas**
Si una clase sólo realiza una acción, delegando trabajo a otra clase, ¿por qué existe?.

**Tratamiento**
Si la mayoría de las clases de un método delegan a otra clase, es necesario eliminar el intermediario.

## Principios SOLID

Los principios SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

- **S**ingle Responsability: Responsabilidad única.
- **O**pen and Close: Abierto y cerrado.
- **L**iskov Subtitution: Sustitución de Liskov.
- **I**nterface Segregation: Segregación de interfaz.
- **D**ependency Inversion: Inversión de dependencias.

### SRP (Single Responsability Principle) - Principio de Responsabilidad Única

"Nunca devería haver más de un motivo por el cual cambiar una clase o un módulo". - **_Robert C. Martin_**

**_"tener una única responsabilidad" !== "hacer una única cosa"_**

#### SRP - Detectar violaciones

- Nombres de clases y módulos demasiados genéricos.
- Cambios en el código suelen afectar la clase o módulo.
- La clase involucra múltiples capas.
- Número elevado de importaciones.
- Cantidad elevada de métodos públicos.
- Excesivo número de líneas de código.

### OCP (Open and Close Principle) - Principio de Abierto y Cerrado

Es un principio que depende mucho del contexto.

Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerrado para la modificación.

La forma más sencilla de demostrar este principio es conciderar un método que hace una cosa.

`Escribir en archivo hola.txt → Nuevo requisitos → Escribir en archivo adios.txt`

```ts
writeFile(filename: string) {}

writeFile('hola.txt');
writeFile('adios.txt');
```

El principio abierto-cerrado también se puede lograr de muchas maneras, incluso mediante el uso de la herencia o mediante patrones deseño de composición como el patrón de estrategia.

#### Detectar violaciones de OCP

- Cambios normalmente afectan nuestra clase o módulo.
- Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)
