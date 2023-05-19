Feature: Search functionality
  As a User i should sucessfully test search functionality

  @sanity @smoke
  Scenario Outline: : Search the buy car with model
    Given I am on homepage
    When I mouse hover on "<buy+sell>" tab
    And  I click "<Search Cars>" link
    Then I navigate to ‘new and used car search’ page
    And  I select make “<make>”
    And  I select model “<model>”
    And  I select location “<location>”
    And  I select price “<price>”
    And  I click on Find My Next Car tab
    Then I should see the make “<make>” in results
    Examples:
      | < make >      | <model>   | <location >        | <price> | <make>                                                       |
      | BMW           | XModels   | QLD-Brisbane       | $60000  | 83 BMW X Models for Sale under $60,000 in Brisbane, QLD      |
      | LandRover     | AnyModels | QlD-Sunshine coast | $90000  | 19 Land Rovers for Sale under $90,000 in Sunshine Coast, QLD |
      | Audi          | Q5        | WA-Perth           | $35,000 | 10 Audi Q5s for Sale under $35,000 in Perth, WA              |
      | Ford          | AnyModels | WA-All             | $25000  | 376 Fords for Sale under $25,000 in WA                       |
      | Mercedes-Benz | C-Class   | VIC                | $70000  | 120 Mercedes-Benz C-Class for Sale under $70,000 in VIC      |
      | Hyundai       | Sonata    | NT                 | $70000  | 1 Hyundai Sonata for Sale under $70,000 in NT                |

  @smoke @regression
  Scenario Outline: Search the used car with model
    Given  I am on homepage
    When     I mouse hover on "buy+sell" tab
    And    I click ‘Used’ link
    Then   I navigate to ‘Used Cars For Sale’ page
    And    I select make "<make>"
    And    I select model "<model>"
    And    I select location “<location>”
    And    I select price “<price>”
    And    I click on Find My Next Car tab
    Then   I should see the make"<make>" in results
    Examples:
      | make          | model       | location        | price  |
      | Audi          | Q5          | QLD-Gold Coast  | $25000 |
      | Mercedes-Benz | E-CLASS     | NT-North        | $45000 |
      | Bently        | Flying Spur | NT- North       | $45000 |
      | Volvo         | XC90        | NSW-NEW England | $5000  |
      | Ferrari       | California  | NT-North        | $70000 |
      | Mini          | Cooper      | NT-South        | $30000 |