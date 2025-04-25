const Singletom = (function () {
  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singletom.getInstance();
  const instance2 = Singletom.getInstance();

  console.log('Misma instancia?', instance1 === instance2);
}

main();
