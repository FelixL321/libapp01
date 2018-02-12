$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("library01/use_cases/provided/add_book.feature");
formatter.feature({
  "name": "Add book",
  "description": "\tDescription: A book is added to the library\n\tActors: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a book successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a book with title \"Extreme Programming\", author \"Kent Beck\", and signature \"Beck99\"",
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.iHaveABookWithTitleAuthorAndSignature(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the book",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iAddTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with title \"Extreme Programming\", author \"Kent Beck\", and signature \"Beck99\" is added to the library",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.theBookWithTitleAuthorAndSignatureIsAddedToTheLibrary(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a book when the adminstrator is not logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a book with title \"Extreme Programming\", author \"Kent Beck\", and signature \"Beck99\"",
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.iHaveABookWithTitleAuthorAndSignature(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the book",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iAddTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get the error message \"Administrator login required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.iGetTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("library01/use_cases/provided/admin_login.feature");
formatter.feature({
  "name": "Admin login",
  "description": "\tDescription: The administrator logs into the library system and also logs out\n\tActor: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Administrator can login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the password is \"adminadmin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.thePasswordIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator login succeeds",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLoginSucceeds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the adminstrator is logged in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdminstratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Administrator has the wrong password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the password is \"wrong password\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.thePasswordIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator login fails",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLoginFails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator is not logged in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("library01/use_cases/provided/admin_logout.feature");
formatter.feature({
  "name": "Admin logout",
  "description": "\tDescription: The administrator logs out from the library system\n\tActor: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Administrator logs out",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("library01/use_cases/provided/register_user.feature");
formatter.feature({
  "name": "Register user",
  "description": "\tDescription: The administrator registers a user of the library\n\tActors: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register a user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a user with CPR \"020563-4886\", name \"Helena M. Bertelsen\", e-mail \"HelenaMBertelsen@rhyta.com \"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user has address street \"Slåenhaven 50\", post code 4560, and city \"Vig\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the administrator registers the user",
  "keyword": "When "
});
formatter.match({
  "location": "userTests.registerUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user is a registered user of the library",
  "keyword": "Then "
});
formatter.match({
  "location": "userTests.isAUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("library01/use_cases/provided/search_book.feature");
formatter.feature({
  "name": "Search books",
  "description": "\tDescription: A user (either an ordinary user or the administrator) searches for books by \n\t\t\t\t providing a substring of either the title, author, or signature field\n\tActors: user",
  "keyword": "Feature"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {
      "cells": [
        "Extreme Programming",
        "Kent Beck",
        "Beck99"
      ]
    },
    {
      "cells": [
        "Test Driven Development",
        "Kent Beck",
        "Beck02"
      ]
    },
    {
      "cells": [
        "Lean Software Development",
        "Mary Poppendieck and Tom Poppendieck",
        "Pop07"
      ]
    },
    {
      "cells": [
        "Cucumber for Java",
        "Seb Rose",
        "Rose11"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.theseBooksAreContainedInTheLibrary(String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching for a substring of the signature",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for the text \"99\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iSearchForTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I find the book with signature \"Beck99\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.iFindTheBookWithSignature(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {
      "cells": [
        "Extreme Programming",
        "Kent Beck",
        "Beck99"
      ]
    },
    {
      "cells": [
        "Test Driven Development",
        "Kent Beck",
        "Beck02"
      ]
    },
    {
      "cells": [
        "Lean Software Development",
        "Mary Poppendieck and Tom Poppendieck",
        "Pop07"
      ]
    },
    {
      "cells": [
        "Cucumber for Java",
        "Seb Rose",
        "Rose11"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.theseBooksAreContainedInTheLibrary(String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching for a substring of the title",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for the text \"Extreme\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iSearchForTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I find the book with signature \"Beck99\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.iFindTheBookWithSignature(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {
      "cells": [
        "Extreme Programming",
        "Kent Beck",
        "Beck99"
      ]
    },
    {
      "cells": [
        "Test Driven Development",
        "Kent Beck",
        "Beck02"
      ]
    },
    {
      "cells": [
        "Lean Software Development",
        "Mary Poppendieck and Tom Poppendieck",
        "Pop07"
      ]
    },
    {
      "cells": [
        "Cucumber for Java",
        "Seb Rose",
        "Rose11"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.theseBooksAreContainedInTheLibrary(String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching for a substring of the author",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for the text \"Seb\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iSearchForTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I find the book with signature \"Rose11\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.iFindTheBookWithSignature(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {
      "cells": [
        "Extreme Programming",
        "Kent Beck",
        "Beck99"
      ]
    },
    {
      "cells": [
        "Test Driven Development",
        "Kent Beck",
        "Beck02"
      ]
    },
    {
      "cells": [
        "Lean Software Development",
        "Mary Poppendieck and Tom Poppendieck",
        "Pop07"
      ]
    },
    {
      "cells": [
        "Cucumber for Java",
        "Seb Rose",
        "Rose11"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.theseBooksAreContainedInTheLibrary(String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching also works when the administrator is logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for the text \"Seb\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iSearchForTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I find the book with signature \"Rose11\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.iFindTheBookWithSignature(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {
      "cells": [
        "Extreme Programming",
        "Kent Beck",
        "Beck99"
      ]
    },
    {
      "cells": [
        "Test Driven Development",
        "Kent Beck",
        "Beck02"
      ]
    },
    {
      "cells": [
        "Lean Software Development",
        "Mary Poppendieck and Tom Poppendieck",
        "Pop07"
      ]
    },
    {
      "cells": [
        "Cucumber for Java",
        "Seb Rose",
        "Rose11"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.theseBooksAreContainedInTheLibrary(String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "No books match the criteria",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for the text \"Ian\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iSearchForTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I don\u0027t find any book",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.iDonTFindAnyBook()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {
      "cells": [
        "Extreme Programming",
        "Kent Beck",
        "Beck99"
      ]
    },
    {
      "cells": [
        "Test Driven Development",
        "Kent Beck",
        "Beck02"
      ]
    },
    {
      "cells": [
        "Lean Software Development",
        "Mary Poppendieck and Tom Poppendieck",
        "Pop07"
      ]
    },
    {
      "cells": [
        "Cucumber for Java",
        "Seb Rose",
        "Rose11"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BookSteps.theseBooksAreContainedInTheLibrary(String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find more than one book",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I search for the text \"Beck\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookSteps.iSearchForTheText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I find a book with signatures \"Beck99\" and \"Beck02\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BookSteps.iFindABookWithSignaturesAnd(String,String)"
});
formatter.result({
  "status": "passed"
});
});