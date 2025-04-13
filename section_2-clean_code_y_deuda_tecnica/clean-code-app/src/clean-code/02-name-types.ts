(() => {
  // Arreglo de temperaturas celsius
  //   const arrayOfNums = [33.6, 12.34];
  const temperaturesCelsius = [33.6, 12.34];

  // Dirección ip del servidor
  //   const ip = '123.123.123.123';
  const serverIp = '123.123.123.123';

  // Listado de usuarios
  //   const people = [
  //     { id: 1, email: 'adriano@mail.co' },
  //     { id: 2, email: 'daniela@mail.com' },
  //     { id: 3, email: 'carlos@mail.com' },
  //   ];
  const users = [
    { id: 1, email: 'adriano@mail.co' },
    { id: 2, email: 'daniela@mail.com' },
    { id: 3, email: 'carlos@mail.com' },
  ];

  // Listado de emails de los usuarios
  //   const emails = people.map((u) => u.email);
  const userEmails = users.map((user) => user.email);

  // Variables booleanos de un video juego
  //   const jump = false;
  const canJump = false;
  //   const run = true;
  const canRun = true;
  //   const noTieneItems = false;
  const hasItems = false;
  //   const loading = true;
  const isLoading = true;

  // Otros ejercicios
  // Tiempo inicial
  //   const start = new Date().getTime();
  const startTime = new Date().getTime();
  // ...
  // 2 doritos despues
  // ...
  // Tiempo final
  //   const end = new Date().getTime() - start;
  const endTime = new Date().getTime() - startTime;

  // Funciones
  // Obtiene los libros
  //   function book() {
  //     throw new Error('Function not implemented');
  //   }
  function getBooks() {
    throw new Error('Function not implemented');
  }

  // Obtiene los libros desde un URL
  //   function BooksUrl(u: string) {
  //     throw new Error('Function not implemented');
  //   }
  function getBooksByUrl(url: string) {
    throw new Error('Function not implemented');
  }

  // Obtiene el área de un cuadrado basado en sus lados
  //   function areaCuadrado(s: number) {
  //     throw new Error('Function not implemented');
  //   }
  function getSquareArea(side: number) {
    throw new Error('Function not implemented');
  }

  // Imprime el trabajo
  //   function printJobIfJobIsActive() {
  //     throw new Error('Function not implemented');
  //   }
  function printJob() {
    throw new Error('Function not implemented');
  }

  // NOTE: Colocar comentario en el nombre de la variable para que tenga sentido, no debería ser una norma o regla, debería ser la excepcion!!!.
})();
