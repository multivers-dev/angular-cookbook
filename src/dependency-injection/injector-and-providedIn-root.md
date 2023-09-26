# Injector and providedIn Root

The Injector class in Angular provides a way to programmatically create and manage dependencies. The providedIn property can be used to specify that a service should be provided at the root level of the application.

Example:
    
```typescript
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor(private injector: Injector) {}

  log(message: string) {
    const logger = this.injector.get(ConsoleLogger);
    logger.log(message);
  }
}
```

In the above example, the LoggerService uses the Injector to get an instance of the ConsoleLogger service, which is provided at the root level. This allows the LoggerService to log messages using the ConsoleLogger instance.
