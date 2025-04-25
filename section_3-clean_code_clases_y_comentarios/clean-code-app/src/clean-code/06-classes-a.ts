(() => {
  // No aplicando el principio de respoonsabilidad única

  type Gender = 'M' | 'F';

  // Long form
  //   class Person {
  //     public name: string;
  //     public gender: Gender;
  //     public birthdate: Date;

  //     constructor(name: string, gender: Gender, birthdate: Date) {
  //       this.name = name;
  //       this.gender = gender;
  //       this.birthdate = birthdate;
  //     }
  //   }

  // Short form
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  //   const newPerson = new Person('Adriano', 'M', new Date('1990-02-20'));
  //   console.log(newPerson);

  const newUserSettings = new UserSettings(
    '/usr/home',
    '/home',
    'adriano@mail.com',
    'Admin',
    'Adriano',
    'M',
    new Date('1990-02-20')
  );
  console.log({
    newUserSettings,
    // areCredentialsValid: newUserSettings.checkCredentials(),
  });
})();
