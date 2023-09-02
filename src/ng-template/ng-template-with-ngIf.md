# The ng-template with ngIf directive

```admonish note
`<ng-template>` in Angular is a angular `element` used to define and render content dynamically within components. It's a versatile tool for creating reusable templates, handling rendering logic, and improving code organization by separating content from its presentation, commonly used with structural directives like `*ngIf`, `*ngFor`, and `*ngSwitch`.
```

```html
<div *ngIf="items else loading">
  ... 
</div>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
```

or 

```html
<ng-template [ngIf]="items" [ngIfElse]="loading">
   <div class="lessons-list">
     ... 
   </div>
</ng-template>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
```
[<iframe width="100%" height="600px" src="https://stackblitz.com/edit/angular-ng-template-with-ngif-directive?embed=1&file=src%2Fmain.ts"></iframe>]()