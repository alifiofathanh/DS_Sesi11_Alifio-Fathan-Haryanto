@digital-skola @checkoutYourInformation
Feature: Swag Labs - checkout: Your Information
  Background: User (standard_user) has successfully logged in 
    Given Alifio is on the login page
    When Alifio login with "standard_user" credential
    Then Alifio should see home page

  @positive
  Scenario: As a standard_user, I want to access checkout : Your Information page successfully
    When Alifio click cart button on home page
    Then Alifio should see cart page
    When Alifio click checkout button on cart page
    Then Alifio should see checkout : Your Information page