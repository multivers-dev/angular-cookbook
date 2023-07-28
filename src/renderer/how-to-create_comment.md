# How to create comment ?


```typescript
import { Component, ElementRef, Renderer2, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    const comment = this.renderer.createComment('My Comment');
    this.renderer.appendChild(elRef.nativeElement, comment);
  }
}


```

```admonish tldr
It's use by Angular internal rendering proccess that's why comment appear when we use *ngIf or *ngFor 
```

[<iframe width="100%" height="600px" src="https://stackblitz.com/edit/angular-cookbook-comment?file=src/app/app.component.ts"></iframe>]()