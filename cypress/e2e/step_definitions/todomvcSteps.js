import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the ToDoMVC website", () => {
  cy.visit("http://todomvc.com/examples/react/#/");
});

When("I add a new task {string}", (task) => {
  cy.get(".new-todo").type(`${task}{enter}`);
});

Then("I should see {string} in the task list", (task) => {
  cy.get(".todo-list").should("contain", task);
});
