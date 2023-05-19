package com.carguides.www.pages;

import com.carguides.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class NewandUsedCarSearchPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public NewandUsedCarSearchPage() {
        PageFactory.initElements(driver, this);
    }

    //select make “<make>”
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeField;
    //select model “<model>”
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelField;
    //select location “<location>”
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationField;
    //select price “<price>”
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceField;
    //click on Find My Next Car tab
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement FindMyNexCarTabField;
    //see the make “<make>” in results
    @CacheLookup
    @FindBy(xpath ="//div[@class='listing-col listing-col-title col-sm-16 col-md-12 col-lg-13 col']")
    WebElement resultText;


    public void selectOnCarMakeTab(String  carMake) {
        selectByVisibleTextFromDropDown(makeField,carMake);
        log.info("Select Make:" + carMake.toString());
    }

    public void selectOnCarmodelTab(String carModel) {
      selectByVisibleTextFromDropDown(modelField, carModel);
      log.info("Select Model:"+carModel.toString());
    }
    public void selectOnCarlocationTab(String carlocation){
        selectByVisibleTextFromDropDown(locationField, carlocation);
        log.info("Select location:"+ carlocation.toString());
    }
    public void selectOnCarpriceTab(String carprice){
        selectByVisibleTextFromDropDown(priceField,carprice);
        log.info("Select price:"+carprice.toString());
    }
    public void clickOnFindMyNextCarTab(){
        clickOnFindMyNextCarTab();
        log.info("Select Car:"+FindMyNexCarTabField.toString() );
    }
   // public String getResultText(){
     //   return  getTextFromElement(resultText);
       // log.info("Get Text:"+resultText.toString());
   // }
    public void verifyResultMake(String expected){
        log.info("Verify the text"+ resultText.toString());
        Assert.assertEquals(resultText.getText(),expected);
    }

}
