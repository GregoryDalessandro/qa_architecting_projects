import {
  By,
  until,
  WebDriver
} from "selenium-webdriver";

/**  The page object needs to have the folloing methods:
* navigate @type {function}
* doSearch @type {function}
* getResults @type {function}
*/
export class SpecPage {
  driver: WebDriver;
  url: string = "https://www.google.com/";
  searchBar: By = By.name("q");
  results: By = By.id("rso");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.searchBar));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.searchBar))
    );
  }
  async doSearch(s) {
    await this.driver.findElement(this.searchBar).sendKeys(s);
  }
  async getResults() {
    await this.driver.wait(until.elementLocated(this.results));
    return (await this.driver.findElement(this.results)).getText();
  }
}

