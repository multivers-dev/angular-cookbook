# Custom Pipe


## TL;DR

```admonish note
Create a custom pipe is about @Pipe decorator on a class wich implement PipeTransform interface
leading to transform method implementation
An Angular Pipe receive an input and some parameters 
Try to keep your Pipe pure 

You can use inject method or constructor to inject Service or Pipe. 
```

```typescript
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'greet',
  standalone: true,
})
export class GreetPipe implements PipeTransform {
  transform(value: string, param1: boolean, param2: boolean): string {
    return `Hello ${value}`;
  }
}
```

```typescript
import {Component} from '@angular/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
@Component({
  standalone: true,
  selector: 'app-power-booster',
  template: `
    <h2>Power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `,
  imports: [ExponentialStrengthPipe],
})
export class PowerBoosterComponent {}
```


```typescript
import {Pipe, PipeTransform} from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({
  standalone: true,
  name: 'exponentialStrength',
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
```


