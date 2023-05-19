package com.carguides.www.steps;

import com.carguides.www.pages.HomePage;
import com.carguides.www.pages.NewandUsedCarSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class buysteps  {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @And("^I click \"([^\"]*)\" link$")
    public void iClickOnSearchLink()  {
        new HomePage().clickOnElementonSerchCarsLink();

    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage(String expected) {
        new NewandUsedCarSearchPage().verifyResultMake(expected);
    }

    @And("^I select make “<make>”$")
    public void iSelectMakeMake(String carMake) {
        new NewandUsedCarSearchPage().selectOnCarMakeTab(carMake);
    }

    @And("^I select model “<model>”$")
    public void iSelectModelModel(String carModel) {
        new NewandUsedCarSearchPage().selectOnCarmodelTab(carModel);
    }

    @And("^I select location “<location>”$")
    public void iSelectLocationLocation(String carlocation) {
        new NewandUsedCarSearchPage().selectOnCarlocationTab(carlocation);
    }

    @And("^I select price “<price>”$")
    public void iSelectPricePrice(String carPrice){
     new NewandUsedCarSearchPage().selectOnCarpriceTab(carPrice);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewandUsedCarSearchPage().clickOnFindMyNextCarTab();
    }

    @Then("^I should see the make “<make>” in results$")
    public void iShouldSeeTheMakeMakeInResults(String expected) {
        new NewandUsedCarSearchPage().verifyResultMake(expected);
    }




//    @And("^I click ‘Used’ link$")
//    public void iClickUsedLink() {
//        new HomePage().clickOnUsedLink(Usedlink);
//    }

    @Then("^I navigate to ‘Used Cars For Sale’ page$")
    public void iNavigateToUsedCarsForSalePage() {
    }

//    @And("^I select make \"([^\"]*)\"$")
//    public void iSelectMake(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @And("^I select model \"([^\"]*)\"$")
//    public void iSelectModel(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
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
//    @Then("^I should see the make\"([^\"]*)\" in results$")
//    public void iShouldSeeTheMakeInResults(String arg0){
//    }
}
