import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const LoginPage = require("../pages/login");
const DashboardPage = require("../pages/dashbaord");

Given("I am on the login page", () => {
  LoginPage.visit();
});

When("I log in with valid credentials", () => {
  LoginPage.login(Cypress.env("USER_NAME"), Cypress.env("USER_PASS"));
});

When("I log in with Supervisor  credentials", () => {
  LoginPage.login(Cypress.env("SUSER_NAME"), Cypress.env("USER_PASS"));
});

Then("I should see the dashboard", () => {
  cy.url().should("include", "/people");
});

Then("View payslip details", () => {
  DashboardPage.viewPayslip();
});

Then("Check noticeboard view", () => {
  DashboardPage.viewNoticeBoard();
  cy.wait(4000);
  cy.url().should("include", "/people/notice-board");
  cy.log("You are passed");
});

