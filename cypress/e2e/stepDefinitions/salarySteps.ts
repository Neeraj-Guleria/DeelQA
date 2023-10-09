import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../pageObjects/homePage';

const ROLE_COUNTRY = "[class*='MuiFilledInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-1a8q6ac']";

Given('I am on Salary insights page',()=>{
  cy.visit("https://growth.deel.training/dev/salary-insights");
});

When('I select {string} and {string}',(role_name, country_name)=>{
  HomePage.homeDetails(role_name, country_name);
})

Then('I click on the Search button', ()=>{
  cy.get('button[type="submit"]').click();
})

Then('I should see the compensation {string} for the role',message =>{
  cy.wait(3000);
  cy.get('.MuiTypography-root.MuiTypography-h2.css-1sgkrxj').should('have.text', message);
})

