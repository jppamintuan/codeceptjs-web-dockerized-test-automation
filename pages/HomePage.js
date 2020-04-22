const I = actor();

module.exports = {

  async search(searchString) {
    I.fillField('q', searchString);
    I.pressKey('Enter');
    I.wait(4);
  },
};