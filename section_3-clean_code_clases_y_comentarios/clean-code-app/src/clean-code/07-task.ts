(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  //   class HtmlElement {
  //     constructor(public id: string, public type: HtmlType) {}
  //   }
  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  //   class InputAttributes extends HtmlElement {
  //     constructor(public value: string, public placeholder: string, id: string) {
  //       super(id, 'input');
  //     }
  //   }
  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  //   class InputEvents extends InputAttributes {
  //     constructor(value: string, placeholder: string, id: string) {
  //       super(value, placeholder, id);
  //     }

  //     setFocus() {}
  //     getValue() {}
  //     isActive() {}
  //     removeValue() {}
  //   }
  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  // Option #1
  //   class InputElement {
  //     constructor(
  //       public attributes: InputAttributes,
  //       public events: InputEvents,
  //       public html: HtmlElement
  //     ) {}
  //   }
  // Option #2
  class InputElement {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
      this.html = new HtmlElement(id, 'input');
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  //   const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
  //   const nameField = new InputElement(
  //     new InputAttributes('Fernando', 'Enter first name'),
  //     new InputEvents(),
  //     new HtmlElement('textName', 'input')
  //   );
  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });
})();
