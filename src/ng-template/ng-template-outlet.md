# How to use ngTemplateOutlet ?

```admonish note
`ngTemplateOutlet` allows you to dynamically render templates in your Angular components, which can be very useful for creating reusable and flexible UI components.
```

```html
<div>you can see me</div>

<ng-template #myTemplate>
    <div>you can't see me </div>
</ng-template>

```


```html
<div>you can see me</div>

<ng-template #myTemplate>
    <div>you can see me if you used ngTemplateOutlet</div>
</ng-template>

<ng-container *ngTemplateOutlet="myTemplate">
    <p>I won't be displayed</p>
</ng-container>

or 

<ng-container [ngTemplateOutlet]="myTemplate">
    <p>I won't be displayed</p>
</ng-container>
```

[<iframe width="100%" height="600px" src="https://stackblitz.com/edit/angular-ng-template-ngtemplateoutlet?embed=1&file=src%2Fmain.ts"></iframe>]()