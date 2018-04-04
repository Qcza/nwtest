module.exports = {
  'Login' : function (browser) {
    browser
      .url('http://qa.gservcdn.com/')
      .waitForElementVisible('body', 4000)
      .waitForElementVisible('.accountWidgets', 1000)
      .click('a[ap-wrapper=LoginForm]')
      .waitForElementVisible('#loginModal', 1000)
      .setValue('input[label="Username  "]', 'cgtrader')
      .setValue('input[type=password]', 'cgtest')
      .click('button[type=submit]')
      .pause(8000)
      .assert.containsText('#dropdownMenu2', 'ACCOUNT CGTRADER')
      .end();
  }
};