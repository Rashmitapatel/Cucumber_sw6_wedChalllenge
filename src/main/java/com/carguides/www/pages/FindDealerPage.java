package com.carguides.www.pages;

import com.carguides.www.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class FindDealerPage extends Utility {
  //click 'Find a Dealer'
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Find a Dealer']")
    WebElement findDealer;
 //navigate to ‘car-dealers’ page
    @CacheLookup
    @FindBy(xpath = "//h1[@class='dealer-title']")
    List<WebElement> carDealersPage;
 //the dealer names <dealersName> are display on page
     @CacheLookup
    @FindBy(xpath = "//div[@class='dealerListing']")
  List  <WebElement> DealersName;


     public void clickOnFindaDealer(){
      mouseHoverToElementAndClick(findDealer);
     }
     public List listOfDealersName(){
         List dealerNameList = getListOfElement(carDealersPage);
            return carDealersPage;

         
     }
}
