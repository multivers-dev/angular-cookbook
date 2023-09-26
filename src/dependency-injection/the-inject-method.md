# The inject Method

The inject method is a utility function provided by Angular that allows for manual dependency injection. It can be used when injecting dependencies into non-constructor functions or when customizing the injection behavior.

Example:

```typescript
import { Injectable, inject } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}

  getUsers() {
    const http = inject(HttpClient);
    return http.get('/api/users');
  }
}
```

In the above example, the getUsers method uses the inject function to manually inject the HttpClient service. This allows the UserService to make HTTP requests without injecting the HttpClient via the constructor.
