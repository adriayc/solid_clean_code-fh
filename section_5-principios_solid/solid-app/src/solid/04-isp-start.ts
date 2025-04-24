interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Hummingbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {}
}

class Ostrich implements Bird {
  public fly(): void {
    throw new Error('Esta ave no vuela');
  }
  public eat() {}
  public run() {}
  public swim() {}
}

class Penguin implements Bird {
  public fly(): void {
    throw new Error('Esta ave no vuela');
  }
  public eat() {}
  public run() {}
  public swim() {}
}
