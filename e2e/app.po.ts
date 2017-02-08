import { browser, element, by } from 'protractor';

export class NumerologyUiAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h3')).getText();
  }
}
