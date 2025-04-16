(() => {
  // Aplicando el principio de respoonsabilidad única
  // Priorizar la composición frente a la herencia!

  type Gender = 'M' | 'F';

  // Sort properties ascending
  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  // La clase Persona aplica el principio de responsabilidad única
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
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

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
