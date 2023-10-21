# How to customize Component Interpolation ?

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>🧙🧙name🧙🧙</p>`,
  styleUrls: ['./app.component.css'],
  interpolation: ['🧙🧙', '🧙🧙'],
})
export class AppComponent {
  name = 'Angular';
}

```
```admonish note
If you need to display "{{" "}}" characters in template you can attach a property to your component without customize interpolation
```

```admonish tldr
😆 Have fun with emoji customization [link](https://unicode.org/emoji/charts/full-emoji-list.html)
```

<!-- [<a href="https://stackblitz.com/edit/angular-joke-interpolation-3sz7j9" target="_blank"><img width="60px" alt="stackblitz" src="images/stackblitz.webp"></a>]() -->


[<iframe width="100%" height="600px" src="https://stackblitz.com/edit/angular-joke-interpolation-3sz7j9?embed=1&file=src/app/app.component.ts"></iframe>]()