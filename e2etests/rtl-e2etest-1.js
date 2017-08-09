const expect = require('chai').expect;

describe('ToDoList App', () => {
  it('Should laod with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('ToDo List');
  });
});
