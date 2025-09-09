# ![HRMS solution](https://img.shields.io/badge/HRMS-Cypress%20BDD-blue?style=for-the-badge&logo=cypress)  
# HRMS Solution in Cypress with BDD Framework

 ![Cypress Version](https://img.shields.io/badge/Cypress-15.0.0-green?style=for-the-badge) ![Node.js](https://img.shields.io/badge/Node.js-16.x-lightgrey?style=for-the-badge)  

Welcome to the **SmartOffice Cypress BDD Automation Framework**, a robust end-to-end (E2E) testing solution built with **Cypress**, utilizing **BDD with Cucumber**, and following the **Page Object Model (POM)** design pattern.  

This framework automates the login and dashboard functionalities of the SmartOffice application.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)

---

## Overview

This project leverages **Cypress** for E2E testing, **Cucumber** for BDD, and **POM** to ensure maintainable and scalable test scripts.  
It tests the SmartOffice application's login process and dashboard features (payslip, noticeboard views) on the staging environment:  



---

## Features

- ✅ **BDD-based testing** with Gherkin syntax in feature files  
- ✅ **POM implementation** for reusable and maintainable page objects  
- ✅ Automated login with **valid user** and **supervisor credentials**  
- ✅ Dashboard validation: **payslip** and **noticeboard views**  
- ✅ Environment variable support for **secure credential management**  
- ✅ **Cypress screenshots & videos** for detailed reporting  

---

## Prerequisites

- **Node.js**: v16.x or higher  
- **npm**: v6.x or higher  
- **Cypress**: v15.0.0 or compatible  
- A code editor (e.g., **VS Code**) with Cypress and Cucumber plugins  
- Internet connection to access the staging environment  

---

## Installation


# Clone the repository
git clone https://github.com/your-username/smartoffice-cypress-bdd.git
cd smartoffice-cypress-bdd

# Install dependencies
npm install

---

## Usage
npx cypress open
or
npx cypress run --spec cypress/e2e/features/HRMS.feature

## Test Results
Screenshots: cypress/screenshots
Videos: cypress/videos
---
## Project Structure
```bash
cypress/
  └── e2e/
      ├── features/
      │         └── HRMS.feature
      └── step_definitions/
      │    └── HRMS.steps.js
  └── pages/
      ├── login.js
      └── dashboard.js
  └── support/
      └── commands.js
cypress.config.js
package.json
```
- features/HRMS.feature – Gherkin scenarios

- step_definitions/HRMS.steps.js – Implements step definitions

- pages/login.js & dashboard.js – POM-based page objects

- support/commands.js – Custom commands and Cucumber plugin configs

- cypress.config.js – Cypress & Cucumber preprocessor configuration

  ---
  Contributing

## Contributions are welcome! Please follow these steps:

- Fork the repository
- Create a new branch:
