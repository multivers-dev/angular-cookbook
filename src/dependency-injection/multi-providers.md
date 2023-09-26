**Multi Providers**  

**Description:**  
Multi providers allow you to associate multiple values or services with a single token. When Angular's DI system looks up values by token, it will return all associated values in an array.

**Why use it:**  
Multi Providers are especially useful in scenarios where you have a set of services or values that need to be treated as a group. For example, this is used in Angular itself for defining multiple HTTP_INTERCEPTORS.

---

**Example:**

Let's say you're building an application that supports plugins. Each plugin registers itself as a service with the same token. When the application starts, it needs to load all these plugins.

1. **Defining the Plugin Token**  
First, we'll create an `InjectionToken` for the plugins:

```typescript
import { InjectionToken } from '@angular/core';

export const APP_PLUGINS = new InjectionToken<string[]>('AppPlugins');
```

2. **Creating Multiple Plugins**  
For simplicity, let's assume a plugin is just a string indicating its name:

```typescript
import { Provider } from '@angular/core';
import { APP_PLUGINS } from './token';

export const PLUGIN_A: Provider = { provide: APP_PLUGINS, useValue: 'PluginA', multi: true };
export const PLUGIN_B: Provider = { provide: APP_PLUGINS, useValue: 'PluginB', multi: true };
```

3. **Using the Plugins in a Component**  
Now, in a component, you can inject all plugins associated with the `APP_PLUGINS` token:

```typescript
import { Component, Inject } from '@angular/core';
import { APP_PLUGINS } from './token';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let plugin of plugins">
      Loaded {{ plugin }}
    </div>
  `,
  providers: [PLUGIN_A, PLUGIN_B]
})
export class AppComponent {
  constructor(@Inject(APP_PLUGINS) public plugins: string[]) {}
}
```

When the `AppComponent` is instantiated, the `plugins` array will contain both `PluginA` and `PluginB`.

---

This example demonstrates how Multi Providers can be used to register and retrieve multiple values (or services) under a single token. It's an essential technique when you need extensibility in your application or when you have a set of services that should be treated as a group.