package com.carguides.www.steps;

import com.carguides.www.pages.FindDealerPage;
import com.carguides.www.pages.HomePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.List;

public class finddealersSteps {


//    @And("^I select make “<make>”$")
//    public void iSelectMakeMake() {
//
//    }
//
//    @And("^I select model “<model>”$")
//    public void iSelectModelModel() {
//    }
//
//    @And("^I select location “<location>”$")
//    public void iSelectLocationLocation() {
//    }
//
//    @And("^I select price “<price>”$")
//    public void iSelectPricePrice() {
//    }
//
//    @Then("^I should see the make “<make>” in results$")
//    public void iShouldSeeTheMakeMakeInResults() {
//    }

    @Then("^I navigate to ‘car-dealers’ page$")
    public void iNavigateToCarDealersPage() {
        new FindDealerPage().clickOnFindaDealer();
    }

    @And("^I should see the dealer names <dealersName> are display on page$")
    public void iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable dataTabel) throws InterruptedException {
        Thread.sleep(5000);
        List<List<String>> dealerList = dataTabel.asLists(String.class);
        for (List<String> dealerName : dealerList) {
            System.out.println(dealerName.get(1));
            Assert.assertTrue(new FindDealerPage().listOfDealersName().contains(dealerName.get(0)),"List not appear");
        }


    }

    @When("^I mouse hover on 'buy\\+sell' tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoveronbuysell();
    }


    @And("^I click Find a Dealer$")
    public void iClickFindADealer() {
        new FindDealerPage().clickOnFindaDealer();
    }
}