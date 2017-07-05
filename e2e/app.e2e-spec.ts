import { BefUiPage } from './app.po';

describe('bef-ui App', function() {
  let page: BefUiPage;

  beforeEach(() => {
    page = new BefUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
