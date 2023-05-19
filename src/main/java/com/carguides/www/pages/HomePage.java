package com.carguides.www.pages;

import com.carguides.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    // mouse hover on “buy+sell” tab
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='buy + sell']")
    WebElement buysell;
    // click ‘Search Cars’ link
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Search Cars']")
    WebElement SearchCars;
    // ‘ verify text 'new and used car search’ page
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='New & Used Car Search - carsguide']")
    WebElement newAndUsedCarSearchText;

    //----------------------method--------------------------------------------------------------------------------------//
    public void mouseHoveronbuysell() {
        mouseHoverToElement(buysell);
        log.info("MouseHover to buy+sell Tab:" + buysell.toString());
    }

    public void clickOnElementonSerchCarsLink() {
        mouseHoverToElementAndClick(SearchCars);
        log.info("Click on SearchCars Link:" + SearchCars.toString());

    }

    public String getNewAndUsedCarSearchText() {
        log.info("Get text :" + newAndUsedCarSearchText.toString());
        return getTextFromElement(newAndUsedCarSearchText);
    }

    public void verifyNewAndUsedCarSearchText(String expected) {
        Assert.assertEquals(newAndUsedCarSearchText.getText(), expected);
        log.info("Verify the result :" + newAndUsedCarSearchText.toString());
    }

}






