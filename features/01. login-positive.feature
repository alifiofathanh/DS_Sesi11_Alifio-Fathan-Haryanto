@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Alifio is on the login page
    When Alifio login with "standard_user" credential
    Then Alifio should see home page