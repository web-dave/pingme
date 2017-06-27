import { PingmePage } from './app.po';

describe('pingme App', () => {
  let page: PingmePage;

  beforeEach(() => {
    page = new PingmePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
