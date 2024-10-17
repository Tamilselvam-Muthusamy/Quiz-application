# Quiz Application

This is a Quiz Application developed using React, Mantine, and Tailwind CSS. It features a multi-role system where the admin can manage users and tests, while users can only attend the assigned tests. The application is designed for interview practice and assessment purposes.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Role](#admin-role)
- [User Role](#user-role)
- [Screenshots](#screenshots)
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

## Screenshots
## Admin Portal ScreenShots
### Admin Dashboard
![Screenshot from 2024-09-22 21-42-03](https://github.com/user-attachments/assets/9d50da02-ea8d-411b-a694-96bc317df710)

### User Module
![Screenshot from 2024-09-22 22-21-42](https://github.com/user-attachments/assets/99ce3085-4279-4128-b427-04a54d7c2bde)

### Subjects
![Screenshot from 2024-09-22 21-37-25](https://github.com/user-attachments/assets/37a0c85e-6d89-425b-82f5-6ba6c0ea9df5)
![Screenshot from 2024-09-22 22-25-01](https://github.com/user-attachments/assets/9a32f867-3c1e-407e-aeca-8d7b180ceff8)

### Results
![Screenshot from 2024-09-22 21-42-12](https://github.com/user-attachments/assets/cdb5953d-bc29-40ad-8c82-db12d8d65a38)

### Positions
![Screenshot from 2024-09-22 21-37-39](https://github.com/user-attachments/assets/0361d7f5-0357-475a-bd7f-b8d671863bfe)

### ReAssign
![Screenshot from 2024-09-22 21-42-40](https://github.com/user-attachments/assets/7ce42ac3-cf1d-482e-b456-e8aa64379326)


## User Portal ScreenShots
### User Test Instruction Screen
![Screenshot from 2024-09-22 21-38-47](https://github.com/user-attachments/assets/2403d78a-fe05-4127-9181-5e2660ea58bd)

### User Test Screen
![Screenshot from 2024-09-22 21-39-09](https://github.com/user-attachments/assets/58494d77-c0c8-471f-86d8-8a448809c127)


## Technologies Used
- **React**: For building the user interface.
- **Mantine**: For UI components like buttons, modals, and forms.
- **Tailwind CSS**: For responsive design and styling.
- **React Router**: For navigation between pages.


