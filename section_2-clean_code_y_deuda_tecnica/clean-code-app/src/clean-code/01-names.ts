(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  // Mal
  //   const fs = [
  //     { id: 1, f: false },
  //     { id: 2, f: false },
  //     { id: 3, f: true },
  //     { id: 4, f: false },
  //     { id: 5, f: false },
  //     { id: 7, f: true },
  //   ];
  // Mejor
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  // Mal
  //   const arhivos = fs.map((f) => f.f);
  // Mejor
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  // Mal
  class AbstractUser {}
  class UserMixin {}
  class UserImplement {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  //   const ddmmyyyy = new Date();
  const today = new Date();

  // días transcurridos - elapsed time in days
  //   const d: number = 23;
  const elapsedTimeIndays: number = 23;

  // número de archivos en un directorio - number of files in directory
  //   const dir = 33;
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  //   const nombre = 'Adriano';
  const firstName = 'Adriano';

  // primer apellido - last name
  //   const apellido = 'Ayala';
  const lastName = 'Ayala';

  // días desde la última modificacion - days since modification
  //   const dsm = 12;
  const daysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  //   const max = 6;
  const maxClassesPerStudent = 6;
})();
