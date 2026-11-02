# JavaScript Form Validator

A simple and interactive form validation project built using **HTML, CSS, and Vanilla JavaScript**. It validates user inputs and provides visual feedback through error messages and success indicators upon form submission.

## Features

- **Username Validation:** Ensures the username field is not empty.
- **Email Validation:** Checks whether the entered email follows a valid email format.
- **Password Validation:** Ensures the password contains at least 8 characters.
- **Confirm Password Validation:** Checks whether the confirmation password matches the original password.
- **Error Handling:** Displays appropriate error messages for invalid inputs.
- **Visual Feedback:** Uses red borders for errors and green borders for successful validation.
- **Input Trimming:** Removes unnecessary leading and trailing whitespace before validation.
- **Edge Case Handling:** Prevents an invalid password from being treated as valid even when both password fields match.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Project Structure

```text
Form-Validator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone this repository:

   ```bash
   git clone kavinanandr/form-validator
   ```

2. Navigate to the project directory:

   ```bash
   cd form-validator
   ```

3. Open `index.html` in your browser.

4. Enter the required details and submit the form to test the validation.

## What I Learned

- DOM manipulation using JavaScript.
- Handling form submission events.
- Using `event.preventDefault()`.
- Working with functions, variables, and conditional statements.
- Validating user inputs using string methods and regular expressions.
- Dynamically modifying CSS styles and classes.
- Handling edge cases in form validation.

## Future Improvements

- Add stronger password requirements.
- Implement real-time validation while typing.
- Add a password visibility toggle.
- Improve accessibility and user experience.
- Integrate backend validation.

---

**Project Type:** Beginner JavaScript Project  
**Status:** Completed