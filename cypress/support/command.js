Cypress.Commands.add("addTodo", (task) => {
  cy.get(".new-todo").type(`${task}{enter}`);
});
