(() => {
  // No aplicando el principio de respoonsabilidad única

  type Gender = 'M' | 'F';

  // Sort properties ascending
  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    // Sort properties ascending
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  //   const userSettings = new UserSettings({
  //     workingDirectory: '/usr/home',
  //     lastOpenFolder: '/home',
  //     email: 'adriano@mail.com',
  //     role: 'Admin',
  //     name: 'Adriano',
  //     gender: 'M',
  //     birthdate: new Date('1990-02-20'),
  //   });
  // Sort arguments ascending
  const userSettings = new UserSettings({
    birthdate: new Date('1990-02-20'),
    email: 'adriano@mail.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Adriano',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });
  console.log({
    userSettings,
  });
})();
