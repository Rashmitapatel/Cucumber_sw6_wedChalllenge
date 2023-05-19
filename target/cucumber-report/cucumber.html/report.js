$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a User i should sucessfully test search functionality",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"\u003cbuy+sell\u003e\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"\u003cSearch Cars\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make “\u003cmake\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model “\u003cmodel\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location “\u003clocation\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price “\u003cprice\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make “\u003cmake\u003e” in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "\u003c make \u003e",
        "\u003cmodel\u003e",
        "\u003clocation \u003e",
        "\u003cprice\u003e",
        "\u003cmake\u003e"
      ],
      "line": 17,
      "id": "search-functionality;:-search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "BMW",
        "XModels",
        "QLD-Brisbane",
        "$60000",
        "83 BMW X Models for Sale under $60,000 in Brisbane, QLD"
      ],
      "line": 18,
      "id": "search-functionality;:-search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "LandRover",
        "AnyModels",
        "QlD-Sunshine coast",
        "$90000",
        "19 Land Rovers for Sale under $90,000 in Sunshine Coast, QLD"
      ],
      "line": 19,
      "id": "search-functionality;:-search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Audi",
        "Q5",
        "WA-Perth",
        "$35,000",
        "10 Audi Q5s for Sale under $35,000 in Perth, WA"
      ],
      "line": 20,
      "id": "search-functionality;:-search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Ford",
        "AnyModels",
        "WA-All",
        "$25000",
        "376 Fords for Sale under $25,000 in WA"
      ],
      "line": 21,
      "id": "search-functionality;:-search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "C-Class",
        "VIC",
        "$70000",
        "120 Mercedes-Benz C-Class for Sale under $70,000 in VIC"
      ],
      "line": 22,
      "id": "search-functionality;:-search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Hyundai",
        "Sonata",
        "NT",
        "$70000",
        "1 Hyundai Sonata for Sale under $70,000 in NT"
      ],
      "line": 23,
      "id": "search-functionality;:-search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37118956500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"\u003cbuy+sell\u003e\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"\u003cSearch Cars\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make “\u003cmake\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model “\u003cmodel\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location “\u003clocation\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price “\u003cprice\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make “\u003cmake\u003e” in results",
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 871172100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cSearch Cars\u003e",
      "offset": 9
    }
  ],
  "location": "buysteps.iClickOnSearchLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iNavigateToNewAndUsedCarSearchPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectMakeMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectModelModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectLocationLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectPricePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iShouldSeeTheMakeMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3585032700,
  "status": "passed"
});
formatter.before({
  "duration": 16663467300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"\u003cbuy+sell\u003e\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"\u003cSearch Cars\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make “\u003cmake\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model “\u003cmodel\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location “\u003clocation\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price “\u003cprice\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make “\u003cmake\u003e” in results",
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cSearch Cars\u003e",
      "offset": 9
    }
  ],
  "location": "buysteps.iClickOnSearchLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iNavigateToNewAndUsedCarSearchPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectMakeMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectModelModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectLocationLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectPricePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iShouldSeeTheMakeMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1644784400,
  "status": "passed"
});
formatter.before({
  "duration": 16251892500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"\u003cbuy+sell\u003e\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"\u003cSearch Cars\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make “\u003cmake\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model “\u003cmodel\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location “\u003clocation\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price “\u003cprice\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make “\u003cmake\u003e” in results",
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cSearch Cars\u003e",
      "offset": 9
    }
  ],
  "location": "buysteps.iClickOnSearchLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iNavigateToNewAndUsedCarSearchPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectMakeMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectModelModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectLocationLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectPricePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iShouldSeeTheMakeMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1444105600,
  "status": "passed"
});
formatter.before({
  "duration": 18295005500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"\u003cbuy+sell\u003e\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"\u003cSearch Cars\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make “\u003cmake\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model “\u003cmodel\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location “\u003clocation\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price “\u003cprice\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make “\u003cmake\u003e” in results",
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cSearch Cars\u003e",
      "offset": 9
    }
  ],
  "location": "buysteps.iClickOnSearchLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iNavigateToNewAndUsedCarSearchPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectMakeMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectModelModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectLocationLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectPricePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iShouldSeeTheMakeMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1935809000,
  "status": "passed"
});
formatter.before({
  "duration": 18228607100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"\u003cbuy+sell\u003e\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"\u003cSearch Cars\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make “\u003cmake\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model “\u003cmodel\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location “\u003clocation\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price “\u003cprice\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make “\u003cmake\u003e” in results",
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cSearch Cars\u003e",
      "offset": 9
    }
  ],
  "location": "buysteps.iClickOnSearchLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iNavigateToNewAndUsedCarSearchPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectMakeMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectModelModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectLocationLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectPricePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iShouldSeeTheMakeMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1474293000,
  "status": "passed"
});
formatter.before({
  "duration": 11711953700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": Search the buy car with model",
  "description": "",
  "id": "search-functionality;:-search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \"\u003cbuy+sell\u003e\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"\u003cSearch Cars\u003e\" link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make “\u003cmake\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model “\u003cmodel\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location “\u003clocation\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price “\u003cprice\u003e”",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the make “\u003cmake\u003e” in results",
  "keyword": "Then "
});
formatter.match({
  "location": "buysteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cSearch Cars\u003e",
      "offset": 9
    }
  ],
  "location": "buysteps.iClickOnSearchLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iNavigateToNewAndUsedCarSearchPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectMakeMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectModelModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectLocationLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iSelectPricePrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "buysteps.iShouldSeeTheMakeMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1418595700,
  "status": "passed"
});
});