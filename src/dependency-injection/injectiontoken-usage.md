# InjectionToken Usage

InjectionToken is a special type in Angular that can be used to define custom tokens for injecting dependencies. It provides a way to uniquely identify and resolve dependencies.

Example:

```typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

@Injectable()
export class UserService {
  constructor(@Inject(API_URL) private apiUrl: string) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
}
```
In the above example, the API_URL InjectionToken is used to inject the API URL as a dependency into the UserService. This allows the UserService to retrieve the API URL without hardcoding it.