import { StatclientPage } from './app.po';

describe('statclient App', () => {
  let page: StatclientPage;

  beforeEach(() => {
    page = new StatclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
