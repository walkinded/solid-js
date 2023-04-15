/* 
  Single Responsibility Principle - Принцип единственной ответственности.
  
  «Одно поручение. Всего одно.» — Локи говорит Скурджу в фильме «Тор: Рагнарёк».
  Каждый класс должен решать лишь одну задачу.

  Для каждого класса должно быть определено единственное назначение.
  Все ресурсы, необходимые для его осуществления, должны быть инкапсулированы
  в этот класс и подчинены только этой задаче.
*/

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `
          <div>
              <h1>${this.news.title}</h1>
              <p>${this.news.text}</p>
          </div>
      `;
  }

  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      2
    );
  }
}

const printer = new NewsPrinter(new News('title', 'text'));

printer.html();
printer.json();
