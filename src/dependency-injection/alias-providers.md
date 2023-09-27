# Alias Providers

### What is an Alias Provider?

An alias provider is a way to provide an alias or an alternative name for a service or token in Angular's dependency injection system. This alias makes it easier to inject and reference the service using a more meaningful or descriptive name.

### Creating an Alias Provider

To create an alias provider in Angular, you typically do the following:

1. **Define Your Service:**
   First, define the service you want to alias. This is the service that you want to inject using a different name.

   ```typescript
   import { Injectable } from '@angular/core';

   @Injectable()
   export class OriginalService {
     // Service logic and methods go here
   }
   ```

2. **Provide the Alias:**
   In your Angular module (usually in the `providers` array), provide an alias for your service using the `useClass` or `useExisting` property.

   ```typescript
   import { NgModule } from '@angular/core';
   import { OriginalService } from './original.service';

   @NgModule({
     providers: [
       OriginalService, // The original service
       { provide: 'AliasService', useClass: OriginalService }, // Alias provider
     ],
   })
   export class AppModule {}
   ```

   In this example, we provided an alias called `'AliasService'` for the `OriginalService`.

3. **Inject the Alias:**
   Now, you can inject the alias in your components, services, or other Angular constructs.

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-example',
     template: `
       <div>
         <p>{{ aliasService.doSomething() }}</p>
       </div>
     `,
   })
   export class ExampleComponent {
     constructor(private aliasService: AliasService) {}
   }
   ```