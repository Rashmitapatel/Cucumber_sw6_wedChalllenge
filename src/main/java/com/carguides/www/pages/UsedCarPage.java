package com.carguides.www.pages;

import com.carguides.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class UsedCarPage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public UsedCarPage() {
        PageFactory.initElements(driver, this);
    }
    // mouse hover on “buy+sell” tab
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='buy + sell']")
    WebElement buysell;

    // click ‘Used’ link
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Used']")
    WebElement Usedlink;

    // Then   I navigate to ‘Used Cars For Sale’ page
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Used Cars For Sale']")
    WebElement UsedCarForSale;
    //select make "<make>"
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeField;
    // select model "<model>"
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelField;
    //select location “<location>”
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationField;
    //  select price “<price>”
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceField;
    //click on Find My Next Car tab
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement FindMyNexCarTabField;
    //the make"<make>" in results
    @CacheLookup
    @FindBy(xpath = "//div[@class='listing-col listing-col-title col-sm-16 col-md-12 col-lg-13 col location-set']")
    WebElement UsedCarResult;

    public void mouseHoveronbuysell() {
        mouseHoverToElement(buysell);
        log.info("MouseHover to buy+sell Tab:" + buysell.toString());
    }

    public void clickOnUsedLink(String usedLink){
        log.info("select Used Link:"+ Usedlink.toString());
        clickOnElement(Usedlink);
    }



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
    public void verifyResultMake(String expected){
        log.info("Verify the text"+ UsedCarResult.toString());
        Assert.assertEquals(UsedCarResult.getText(),expected);
    }

}
