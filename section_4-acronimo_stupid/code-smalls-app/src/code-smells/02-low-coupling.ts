(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  // Bajo Acoplamiento

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    // name: string;
    firstName: string;
    lastName: string;
  }
  class Person {
    public birthdate: Date;
    public gender: Gender;
    // public name: string;
    public firstName: string;
    public lastName: string;

    // constructor({ name, gender, birthdate }: PersonProps) {
    constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
      //   this.name = name;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }
  class Settings {
    public lastFolderOpen: string;
    public workingDirectory: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // Nuevo User Settings
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    // name: string;
    firstName: string;
    lastName: string;
    role: string;
    workingDirectory: string;
  }
  class UserSettings {
    public person: Person;
    public settings: Settings;
    public user: User;

    constructor({
      //   name,
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastFolderOpen,
    }: UserSettingsProps) {
      //   this.person = new Person({ name, gender, birthdate });
      this.person = new Person({ firstName, lastName, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  const userSettings = new UserSettings({
    // name: 'Adriano',
    firstName: 'Adriano',
    lastName: 'Ayala',
    gender: 'M',
    birthdate: new Date('1990-02-20'),
    email: 'adriano@mail.com',
    role: 'Admin',
    workingDirectory: '/usr/home',
    lastFolderOpen: '/home',
  });
  console.log({
    userSettings,
    crendential: userSettings.user.checkCredentials(),
  });
})();
