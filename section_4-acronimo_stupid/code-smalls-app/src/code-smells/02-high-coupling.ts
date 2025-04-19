(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  // Alto Acoplamiento

  class Person {
    constructor(
      //   public name: string,
      public firstName: string,
      public lastName: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      //   name: string,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      //   super(name, gender, birthdate);
      super(firstName, lastName, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      //   name: string,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      //   super(email, role, new Date(), name, gender, birthdate);
      super(email, role, new Date(), firstName, lastName, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'adriano@mail.com',
    'Admin',
    // 'Adriano',
    'Adriano',
    'Ayala',
    'M',
    new Date('1990-02-20')
  );
  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
