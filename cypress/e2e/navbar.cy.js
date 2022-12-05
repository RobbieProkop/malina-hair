describe("it should navigate to the navbar and click on links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[alt="nav-icon"]').click();
  });

  it("should find the nav in view", () => {
    cy.get(".Nav_nav__bbBcN").should("be.visible");
  });
  it("should find, click, and navigate to ", () => {
    cy.get('[data-text="Contact"] > a').click();
    cy.get('[data-text="Contact"] > a').should("be.visible");
  });
  // it("should find the nav in view", () => {
  //   cy.get(".Nav_nav__bbBcN").should("be.visible");
  // });
  // it("should find the nav in view", () => {
  //   cy.get(".Nav_nav__bbBcN").should("be.visible");
  // });
});
