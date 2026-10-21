# QAuto Registration and Authentication Test Plan

## Application Overview

The QAuto application lets a visitor create an account through the Registration dialog and then use that account to sign in. New test accounts must use the `aqa-` email prefix so automated users remain identifiable. Registration tests use unique email addresses and should run against an isolated test environment because the positive scenario creates a persistent account.

## Test Scenarios

### 1. Registration

**Seed:** `tests/seed.spec.ts` (navigate to the application; registration scenarios open the Sign up dialog)

#### 1.1. should-register-user-with-valid-data

**File:** `tests/auth/should-register-user-with-valid-data.spec.ts`

**Steps:**
  1. Open the Sign up dialog.
    - expect: Registration dialog shows Name, Last name, Email, Password, and Re-enter password fields.
  2. Enter valid values in all fields, using a unique email beginning with `aqa-`.
    - expect: Register button becomes enabled.
  3. Submit the registration form.
    - expect: Registration succeeds and the application shows the authenticated user's garage.

#### 1.2. should-require-name

**File:** `tests/auth/should-require-name.spec.ts`

**Steps:**
  1. Open Sign up and leave Name empty; fill the other fields with valid values.
  2. Move focus away from Name.
    - expect: Name required validation message appears.

#### 1.3. should-reject-name-shorter-than-two-characters

**File:** `tests/auth/should-reject-name-shorter-than-two-characters.spec.ts`

**Steps:**
  1. Enter a one-character Name and valid values in the other fields.
  2. Move focus away from Name.
    - expect: Name length validation message appears.

#### 1.4. should-reject-name-with-invalid-characters

**File:** `tests/auth/should-reject-name-with-invalid-characters.spec.ts`

**Steps:**
  1. Enter a Name containing digits and valid values in the other fields.
  2. Move focus away from Name.
    - expect: Name format validation message appears.

#### 1.5. should-reject-invalid-email

**File:** `tests/auth/should-reject-invalid-email.spec.ts`

**Steps:**
  1. Enter valid names and passwords and an incorrectly formatted email.
  2. Move focus away from Email.
    - expect: Email format validation message appears.

#### 1.6. should-reject-password-shorter-than-eight-characters

**File:** `tests/auth/should-reject-password-shorter-than-eight-characters.spec.ts`

**Steps:**
  1. Enter valid names and email, then a password shorter than eight characters and the same value in Re-enter password.
  2. Move focus away from Password.
    - expect: Password length validation message appears.

#### 1.7. should-reject-password-without-required-character-types

**File:** `tests/auth/should-reject-password-without-required-character-types.spec.ts`

**Steps:**
  1. Enter valid names and email, then a password without the required uppercase, lowercase, and numeric character combination; repeat it in Re-enter password.
  2. Move focus away from Password.
    - expect: Password composition validation message appears.

#### 1.8. should-reject-mismatched-passwords

**File:** `tests/auth/should-reject-mismatched-passwords.spec.ts`

**Steps:**
  1. Enter valid names, email, and password, then enter a different value in Re-enter password.
  2. Move focus away from Re-enter password.
    - expect: Password mismatch validation message appears.

