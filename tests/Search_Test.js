const { I, HomePage } = inject();

Feature('Search functionality');

Before(() => {
  I.amOnPage('/');
});

Scenario('Search string and validate tab title', async () => {
  const searchString = "automation testing";
  HomePage.search(searchString);
  I.seeInTitle(searchString);
});