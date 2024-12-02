Feature: ToDo MVC Application

  Scenario: User adds a new task
    Given I visit the ToDoMVC website
    When I add a new task "Test Task"
    Then I should see "Test Task" in the task list
