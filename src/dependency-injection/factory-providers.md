# Factory Providers

Factory providers allow for creating and providing dependencies using custom factory functions. This can be useful when the creation of a dependency requires additional logic or customization.

Example:

```typescript
import { Injectable } from '@angular/core';

export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/users');
  }
}

export function userServiceFactory(http: HttpClient) {
  return new UserService(http);
}

@Injectable({
  providedIn: 'root',
  useFactory: userServiceFactory,
  deps: [HttpClient]
})
export class UserServiceProvider {}
```

In the above example, the UserService is created using the userServiceFactory factory function. The UserServiceProvider is then annotated with the useFactory property to specify the factory function to use for providing the UserService dependency.
