# PsswdGenTool

Objective of this project was to update existing code to build a software tool that allows the user to generate a random secure password of bewteen 8 and 128 characters. User is prompted for the desired password link and whether to include each of 1) lowercase characters, 2) uppercase characters, 3) numbers, or 4) special characters.

Link to deployed URL: https://giantrobot76.github.io/PsswdGenTool/

screenshot preview of finished page:

![image](https://user-images.githubusercontent.com/34629779/115638860-6cf7ab80-a2d0-11eb-945b-29043ffd790d.png)

# User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
