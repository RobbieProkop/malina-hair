describe("it should navigate to the navbar and click on links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[alt="nav-icon"]').click();
  });

  it("should find the nav in view", () => {
    cy.get(".Nav_nav__bbBcN").should("be.visible");
  });
});
