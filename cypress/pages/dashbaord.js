// cypress/pages/dashboard.js
class DashboardPage {
  myDashboard = 'button[role="tab"]:contains("My Dashboard")';
  payslipJanuary = 'text=January';
  closePayslip = 'button:contains("close")';
  noticeBoard = 'button:contains("Notice Board")';

  viewPayslip() {
    cy.contains("My Dashboard").click();
    cy.contains("January").click();
    cy.wait(5000);
    cy.contains("close").click();
  }

  viewNoticeBoard() {
    cy.contains("Notice Board").click();
  }
}
export default new LoginPage();