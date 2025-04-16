(() => {
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

  const newPerson = new Person('Adriano', 'M', new Date('1990-02-20'));
  console.log(newPerson);
})();
