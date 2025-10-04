### Hexlet tests and linter status:

[![Actions Status](https://github.com/deniskolomoyets//qa-auto-engineer-javascript-project-90/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/deniskolomoyets/qa-auto-engineer-javascript-project-90/actions)

## About the Project

This repository contains comprehensive end-to-end (E2E) tests for a Kanban task management application developed with **React Admin**. The test suite is built using **Playwright** and covers all major application features through automated browser testing.

### Application Features Covered:

- **Task Operations** – Complete CRUD operations for tasks including status transitions (draft → in progress → done)
- **User Administration** – User creation and management functionality for administrators
- **Label System** – Creation and management of task labels (e.g., "bug", "feature", "enhancement")
- **Status Configuration** – Customization of Kanban board columns and workflow states
- **Authentication** – Login/logout functionality and session management

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm package manager

### Installation

Clone the repository and install project dependencies:

```bash
npm ci
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Running Tests

Execute the full test suite:

```bash
npm test
```

### Additional Commands

- **Linting**: `npm run lint`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Test Architecture

The test suite follows the **Page Object Model (POM)** pattern for maintainable and reusable test code:

- **Base Classes**: `BasePage`, `BaseDataPage`, `BaseTasksPage` for common functionality
- **Page Objects**: Dedicated classes for each application page (Users, Tasks, Labels, Statuses)
- **Test Fixtures**: Automated login and application setup
- **Test Data**: Generated using Faker.js for realistic test scenarios

## Project Structure

```
├── pages/           # Page Object Model classes
├── tests/           # Test specifications
├── playwright.config.cjs  # Playwright configuration
└── package.json     # Dependencies and scripts
```
