# Value Providers

### Introduction

In Angular, "Value Providers" allow you to inject simple values, such as strings, numbers, or configuration settings, into your components and services. This can be useful when you need to inject constant values or configuration data into your application.

### What is a Value Provider?

A value provider is a way to provide a simple value or configuration data to your Angular application. Unlike services, value providers don't have methods or behavior; they provide a single value that can be injected into other parts of your application.

### Creating a Value Provider

To create a value provider in Angular, you typically do the following:

1. **Provide the Value:**
   In your Angular module (usually in the `providers` array), provide the value using the `useValue` property.

   ```typescript
   import { NgModule } from '@angular/core';

   @NgModule({
     providers: [
       { provide: 'apiUrl', useValue: 'https://api.example.com' }, // Value provider
     ],
   })
   export class AppModule {}
   ```

   In this example, we provided a value provider named `'apiUrl'` with the value `'https://api.example.com'`.

2. **Inject the Value:**
   Now, you can inject the value in your components, services, or other Angular constructs.

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-example',
     template: `
       <div>
         <p>API URL: {{ apiUrl }}</p>
       </div>
     `,
   })
   export class ExampleComponent {
     constructor(private apiUrl: string) {}
   }
   ```