/* 
    Liskov substitution principle - Принцип подстановки Лисков
    Функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа не зная об этом.

    Цель этого принципа заключаются в том,
    чтобы классы-наследники могли бы использоваться вместо родительских классов,
    от которых они образованы, не нарушая работу программы.
    Если оказывается, что в коде проверяется тип класса, значит принцип подстановки нарушается.
*/

// class Person {}

// class Member extends Person {
//   access() {
//     console.log('You have access');
//   }
// }

// class Guest extends Person {
//   isGuest = true;
// }

// class Frontend extends Member {
//   canCreateFrontend() {}
// }

// class Backand extends Member {
//   canCreateBackand() {}
// }

// class DeveloperFromDuffCompany extends Guest {
//   canCreateCode() {}
// }

// function openDoor(person) {
//   person.access();
// }

// openDoor(new Frontend());
// openDoor(new Backand());
// openDoor(new DeveloperFromDuffCompany());

// ======================

class Component {
  isComponent = true;
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {
  //.....
}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Rendern is impossible here');
  }

  wrapComponent(component) {
    component.modified = true;
    return component;
  }
}

function renderComponent(component) {
  component.render();
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
