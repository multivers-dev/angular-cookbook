# Injection via Constructor

Injection via constructor is the most common and recommended method for dependency injection in Angular. It involves declaring dependencies as parameters in the constructor of a class. Angular's DI system will automatically resolve and provide the required dependencies when an instance of the class is created.

Example:

```typescript
import { Injectable, HttpClient } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/users');
  }
}
```

In the above example, the UserService class has a dependency on the HttpClient service, which is injected via the constructor. This allows the UserService to make HTTP requests using the HttpClient instance provided by Angular.


[Injector and providedIn Root](/src/dependency-injection/injector-and-providedIn-root.md)


[InjectionToken Usage](/src/dependency-injection/injectiontoken-usage.md)
