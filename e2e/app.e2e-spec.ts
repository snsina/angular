import { QuatroPage } from './app.po';

describe('quatro App', () => {
  let page: QuatroPage;

  beforeEach(() => {
    page = new QuatroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
