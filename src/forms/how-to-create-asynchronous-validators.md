# How to create asynchronous validators

## Table of Contents

1. [Async Validator Function](#1-async-validator-function)
2. [Usage in Reactive Forms](#2-usage-in-reactive-forms)
3. [Creating Custom Asynchronous Validators](#3-creating-custom-asynchronous-validators)
4. [Combining Validators](#4-combining-validators)
5. [Demo](#6-demo)

## 1. Async Validator Function

In Angular, an asynchronous validator is a function that returns a `Promise` or an `Observable`. This function takes a form control as an argument and performs asynchronous validation.

## 2. Usage in Reactive Forms

In reactive forms, you can use asynchronous validators like this:

```typescript
import { FormBuilder, Validators } from '@angular/forms';

const form = this.fb.group({
  username: ['', [Validators.required], [this.uniqueUsernameValidator.bind(this)]],
});
```

```admonish note
Here, `Validators.required` is synchronous, and `this.uniqueUsernameValidator` is asynchronous.
```

## 3. Creating Custom Asynchronous Validators

Creating a custom asynchronous validator involves defining a function that returns a `Promise` or an `Observable`. Here's a quick example:

```typescript
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map, catchError } from 'rxjs/operators';

export function uniqueUsernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;

    return of(email).pipe(
      debounceTime(300),
      map(() => this.userService.checkEmailAvailability(email)),
      catchError(() => of(null))
    );
  };
}
```

## 4. Combining Validators

You can easily combine synchronous and asynchronous validators:

```typescript
const form = this.fb.group({
  email: [
    '',
    [Validators.required, Validators.email],
    [this.uniqueUsernameValidator.bind(this)]
  ],
});
```

## 5. Demo

You can find a complete demo of asynchronous validators 

[<iframe width="100%" height="600px" src="https://stackblitz.com/edit/stackblitz-starters-bmj4wi?embed=1&file=src%2Fform%2Fform.component.ts"></iframe>]()