import { getCopyRight } from '../support/app.po';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display copyright notice', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getCopyRight().contains(
      `© ${new Date().getFullYear()} Watheia Labs, LLC. All rights reserved.`
    );
  });
});
