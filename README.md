# Quiz Application

This is a Quiz Application developed using React, Mantine, and Tailwind CSS. It features a multi-role system where the admin can manage users and tests, while users can only attend the assigned tests. The application is designed for interview practice and assessment purposes.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Role](#admin-role)
- [User Role](#user-role)
- [Technologies Used](#technologies-used)

## Features
- **Admin Role**: 
  - Add users.
  - Add questions to the quiz.
  - Assign tests to specific users.
  - View users' quiz results.
  - Assign and reassign tests to specific users.

- **User Role**: 
  - Attend assigned tests and submit answers.
- **Responsive Design**: Built with Tailwind CSS for responsive layouts.
- **UI Components**: Leveraging Mantine for elegant UI components.

## Installation
To run this project locally:

1. Clone the repository:
    ```bash
    git clone git@github.com:Tamilselvam-Muthusamy/Quiz-application.git
    ```

2. Navigate into the project directory:
    ```bash
    cd quiz-application
    ```

3. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    bun install
    ```

4. Start the development server:
     ```bash
    npm run dev
    ```
    or
    ```bash
    bun run dev
    ```

## Usage

1. **Admin**: Log in using the admin credentials to manage users,subjects, questions, results and assign tests.
2. **User**: Users can log in to take the tests assigned to them.

## Admin Role

- Admins can perform the following actions:
  - Add users individually or via bulk upload using an Excel sheet.
  - Create and edit quiz questions.
  - Assign and reassign tests to specific users.
  - View test results of users.

## User Role

- Users can:
  - Log in to their account.
  - Attend the quiz tests assigned to them by the admin.
  - Submit their answers for evaluation.


## User Portal ScreenShots

### User Test Instruction Screen
![Screenshot from 2024-09-22 21-38-47](https://github.com/user-attachments/assets/32942ad0-75a5-45d2-a24a-0acc4e46a51c)

### User Test Screen
![Screenshot from 2024-09-22 21-39-09](https://github.com/user-attachments/assets/90039187-4563-451b-966d-a388f77c57f2)


## Technologies Used
- **React**: For building the user interface.
- **Mantine**: For UI components like buttons, modals, and forms.
- **Tailwind CSS**: For responsive design and styling.
- **React Router**: For navigation between pages.


