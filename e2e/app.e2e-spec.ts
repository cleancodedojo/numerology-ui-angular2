import { NumerologyUiAngular2Page } from './app.po';

describe('numerology-ui-angular2 App', function() {
  let page: NumerologyUiAngular2Page;

  beforeEach(() => {
    page = new NumerologyUiAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
