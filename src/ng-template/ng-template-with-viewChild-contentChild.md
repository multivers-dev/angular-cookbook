# ng-template with ViewChild/ViewChildren and ContentChild/ContentChildren ?
```admonish note
In Angular, ViewChild, ViewChildren, ContentChild, and ContentChildren are used for component communication. They enable a parent component to access its child components.
```


## ViewChild and ViewChildren

```admonish note
`ViewChild` is used to access a single child component or a DOM element, while `ViewChildren` is used when there are multiple child components or DOM elements of the same type. 
```


```typescript
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`, 
  styles: [`h1 { font-family: Lato; }`],
  standalone: true
})
export class HelloComponent  {
  @Input() name: string;
}
```

`ViewChild` can be used to access the `HelloComponent` instance:

```typescript
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ], 
  standalone: true,
  imports: [HelloComponent]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;
  ngAfterViewInit() {
    console.log('Hello ', this.hello.name); 
  }
}
```

In this example, `ViewChild` is used to get a reference to `HelloComponent` and access its `name` property .


`ViewChildren` can be used in a similar way:

```typescript
import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  standalone: true,
  imports: [HelloComponent]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  @ViewChildren(HelloComponent) hellos: QueryList<any>;
  ngAfterViewInit() {
     this.hellos.forEach(hello => console.log(hello));
  }
}
```


In this case, `ViewChildren` returns a `QueryList` of `HelloComponent` instances, and in `ngAfterViewInit`, we iterate over this list and log each instance.


[<iframe width="100%" height="600px" src="https://stackblitz.com/edit/viewchildviewchildren-and-contentchildcontentchildren?embed=1&file=src%2Fmain.ts"></iframe>]()

## ContentChild and ContentChildren

```admonish note
`ContentChild` and `ContentChildren` are similar to `ViewChild` and `ViewChildren`, but they are used to access projected content (content that is passed from a parent component to a child component through `ng-content`).
```
Here's an example of how to use `ContentChild`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'card',
  template: `
    <div class="card">
      <ng-content select="header"></ng-content>
      <ng-content select="content"></ng-content>
      <ng-content select="footer"></ng-content>
    </div> 
  `,
  styles: [
    ` .card { min- width: 280px;  margin: 5px;  float:left  } 
    `
  ]
})
export class CardComponent {
  @ContentChild('header') cardContentHeader: ElementRef;
}
```
In this case, `ContentChild` is used to get a reference to the projected `header` content.

`ContentChildren` can be used to get a list of projected content elements:

```typescript
import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `...`
})
export class MyComponent {
  @ContentChildren('item') items: QueryList<ElementRef>;
}
```
In this example, `ContentChildren` is used to get a `QueryList` of projected content elements with the template reference variable 'item'.

In conclusion, `ViewChild` and `ViewChildren` are used to access child components and DOM elements directly added in the component's template. In contrast, `ContentChild` and `ContentChildren` are used to access projected content added in the component through `ng-content`.

