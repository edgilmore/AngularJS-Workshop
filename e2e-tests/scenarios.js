'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /movies when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/movies");
  });


  describe('movies', function() {

    beforeEach(function() {
      browser.get('index.html#/movies');
    });


    it('should render movies when user navigates to /movies', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('tickets', function() {

    beforeEach(function() {
      browser.get('index.html#/tickets');
    });


    it('should render tickets when user navigates to /tickets', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
