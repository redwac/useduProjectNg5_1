import { UdemyProject1Page } from './app.po';

describe('udemy-project1 App', function() {
  let page: UdemyProject1Page;

  beforeEach(() => {
    page = new UdemyProject1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
