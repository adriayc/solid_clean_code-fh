(() => {
  // Función para obtener información de una película por Id
  //   function getAllMovies(movieId: string) {
  //     console.log({ movieId });
  //   }
  function getMovieById(id: string) {
    console.log({ id });
  }

  // Función para obtener información de los actores de una pelicula - Actors o Cast // id = movieId getMovieCast
  //   function getAllMovieActors(ActorId: string) {
  //     console.log({ ActorId });
  //   }
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // Función para obtener el bio del actor por el id
  //   function getUsuario(ActorId: string) {
  //     console.log({ ActorId });
  //   }
  function getActorBioById(id: string) {
    console.log({ id });
  }

  // Crear una pelicula
  //   function movie(
  //     title: string,
  //     description: string,
  //     rating: number,
  //     cast: string[]
  //   ) {
  //     console.log({ title, description, rating, cast });
  //   }
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crear un nuevo actor
  //   function createActorIfActorNotExists(
  //     fullName: string,
  //     birthday: Date
  //   ): boolean {
  //     // Tarea asincrona para verificar nombre
  //     // ...
  //     // ...
  //     if (fullName === 'adriano') return false;

  //     console.log('Crear actor');
  //     return true;
  //   }
  function checkFullName(fullName: string) {
    console.log({ fullName });
    return true;
  }
  function createActor(fullName: string, birthday: Date): boolean {
    // Tarea asincrona para verificar nombre
    // ...
    // ...
    if (fullName === 'adriano') return false;
    // if (checkFullName('adriano')) return false;

    console.log('Crear actor', birthday);
    return true;
  }

  // Función a mejorar
  // const getPayAmount = ({
  //   isDead = false,
  //   isSeparated = true,
  //   isRetired = false,
  // }): number => {
  //   let result: number;

  //   if (isDead) {
  //     result = 1500;
  //   } else {
  //     if (isSeparated) {
  //       result = 2500;
  //     } else {
  //       if (isRetired) {
  //         result = 3000;
  //       } else {
  //         result = 4000;
  //       }
  //     }
  //   }

  //   return result;
  // };
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    // if (isRetired) return 3000;

    // return 4000;

    return isRetired ? 3000 : 4000;
  };
})();
