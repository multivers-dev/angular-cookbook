# Angular Validators

## Table of Contents

1. [How it works](#1-how-it-works)
   - 1.1 [Template-driven Forms](#11-template-driven-forms)
   - 1.2 [Reactive Forms](#12-reactive-forms)
2. [Built-in Validators in Angular](#2-built-in-validators-in-angular)
   - 2.1 [Required Validator](#21-required-validator)
   - 2.2 [Min and Max Length Validators](#22-min-and-max-length-validators)
   - 2.3 [Pattern Validator](#23-pattern-validator)
   - 2.4 [Email Validator](#24-email-validator)
   - 2.5 [Custom Validators](#25-custom-validators)
3. [Asynchronous Validators](#3-asynchronous-validators)
4. [Combining Validators](#4-combining-validators)
5. [Group Validation](#5-group-validation)
6. [Summary](#6-summary)


## 1. How it works
In Angular, there are two ways to create forms: `template-driven forms` and `reactive forms`. Both types of forms can be validated using Angular's built-in validators or custom validators.
### 1.1 Template-driven Forms

```admonish note title="Template-driven Forms"
Template-driven forms rely on Angular templates for form creation and validation. Let's create a simple template-driven form with a required field.
```

```html
<!-- app.component.html -->

<form #myForm="ngForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" ngModel required>
  
  <div *ngIf="myForm.controls['username'].invalid && (myForm.controls['username'].dirty || myForm.controls['username'].touched)">
    <div *ngIf="myForm.controls['username'].errors?.required">Username is required.</div>
  </div>

  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>

```


```admonish note title="Summary:"
- We use the `ngModel` directive for two-way data binding on the `username` input field.
- The `required` attribute ensures that the field is required.
- We display an error message if the username is required and the field is dirty or touched.
```


### 1.2 Reactive Forms

Reactive forms are built programmatically using TypeScript. Let's create a reactive form with a required field.

```typescript
// app.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.myForm.value);
  }
}
```

```html
<!-- app.component.html -->

<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <label for="username">Username:</label>
  <input type="text" id="username" formControlName="username">
  
  <div *ngIf="myForm.get('username').hasError('required') && (myForm.get('username').dirty || myForm.get('username').touched)">
    Username is required.
  </div>

  <button type="submit" [disabled]="myForm.invalid">Submit</button>
</form>
```

```admonish note title="Summary:"
- We use the `FormBuilder` service to create a `FormGroup` with a `FormControl` for the `username` field.
- Validators are applied to the `username` control, ensuring it is required.
- Error messages are displayed based on the control's state.
```


## 2. Built-in Validators in Angular

Angular comes with a set of built-in validators that cover common use cases.


### 2.1 Required Validator

```typescript
// Example: Adding a required validator to a form control
this.myForm = this.fb.group({
  username: ['', Validators.required],
});
```

### 2.2 Min and Max Length Validators

```typescript
// Example: Adding min and max length validators
this.myForm = this.fb.group({
  password: ['', [Validators.minLength(6), Validators.maxLength(10)]],
});
```

### 2.3 Pattern Validator

```typescript
// Example: Using a regular expression pattern validator
this.myForm = this.fb.group({
  phone: ['', [Validators.pattern(/^(\+\d{1,2}\s?)?(\d{10})$/)]],
});
```

### 2.4 Email Validator

```typescript
// Example: Applying the email validator
this.myForm = this.fb.group({
  email: ['', Validators.email],
});
```

### 2.5 Custom Validators

```typescript
import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * lowerCaseValidator
 * Validates that the value has at least one lower case character.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const lowerCaseValidator = (control: AbstractControl): ValidationErrors | null => {
   const value = control.value ;
   if (!value) {
      return null;
   }
   const hasLowerCase = /[a-z]+/.test(value);
   if (hasLowerCase){
      return null
   }
   return { hasLowerCase: true }
};


this.myForm = this.fb.group({
  customField: ['', lowerCaseValidator],
});
```

```admonish note title="Summary:"
Read more about custom validators in the [Custom Validators](how-to-create-a-custom-validator.md) section.
```

## 3. Asynchronous Validators
```admonish note title="Asynchronous Validators"
Asynchronous validators are useful when validation involves asynchronous operations, such as checking data against a server.
```

```typescript
import { AbstractControl, ValidationErrors } from "@angular/forms";

// Example: Asynchronous validation using a service
function asyncValidator(service: MyService) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return service.checkAvailability(control.value).pipe(
      map((isAvailable) => (isAvailable ? null : { notAvailable: true }))
    );
  };
}

this.myForm = this.fb.group({
  asyncField: [
      '',
     [Validators.required],
     [asyncValidator(myService),],   
     updateOn: 'blur', // 'change' or 'blur' or 'submit' - Specifies when the form should be updated
  ],
});
```

## 4. Combining Validators

Validators can be combined for more complex scenarios.

```typescript
// Example: Combining multiple validators
this.myForm = this.fb.group({
  combinedField: [
    '',
    [Validators.required, Validators.minLength(3), customValidator],
  ],
});
```

## 5. Group Validation
```admonish note title="Cross-Field Validation"
Group validation involves validating the relationship between multiple fields. For example, a password and confirm password field.
```

```typescript
// Example: Cross-field validation
function matchingPasswords(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password.value === confirmPassword.value
    ? null
    : { passwordsNotMatch: true };
}

this.myForm = this.fb.group(
  {
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  },
  { validator: matchingPasswords }
);
```

## 6. Summary

```admonish note title="Summary"
- Angular provides a set of built-in validators that cover common use cases.
- Validators can be combined for more complex scenarios.
- Custom validators can be created to handle specific use cases.
- Asynchronous validators are useful when validation involves asynchronous operations, such as checking data against a server.
- Cross-field validation involves validating the relationship between multiple fields.
```
