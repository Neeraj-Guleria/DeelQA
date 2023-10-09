Feature: Verify the salaries for different roles in Deel

  Scenario Outline: Validate the salaries for different role.
    Given I am on Salary insights page
    When I select "<Role>" and "<Country>"
      And I click on the Search button
    Then I should see the compensation "<text>" for the role
    Examples:
      | Role              | Country | text                                           |
      | Accountant        | Brazil  | Senior Accountant compensation in Brazil       |
      | QA Engineer       | Canada  | Senior QA Engineer compensation in Canada      |
      | Software Engineer | Japan   | Senior Software Engineer compensation in Japan |