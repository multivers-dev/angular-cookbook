# How to use ngTemplateOutlet with context ?

```admonish note
`ngTemplateOutlet` allows you to dynamically render templates in your Angular components, which can be very useful for creating reusable and flexible UI components.
```

```html
<ng-template #myTemplate let-name="name">
    <div>hello {{name}}</div>
</ng-template>

<ng-container *ngTemplateOutlet="myTemplate; context: {name: 'Angular CookBook'}">
</ng-container>

or

<ng-container [ngTemplateOutlet]="myTemplate" [ngTemplateOutletContext]="{name: 'Angular CookBook'}">
</ng-container>
```
    
[<iframe width="100%" height="600px" src="https://stackblitz.com/edit/angular-ng-template-ngtemplateoutlet?embed=1&file=src%2Fmain.ts"></iframe>]()
