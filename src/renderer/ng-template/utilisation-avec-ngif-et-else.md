# The ng-template directive and ngIf
 `ng-template` for the first time while implementing an `if/else` scenario such as for example this one:

```html
<div *ngIf="items else loading">
  ... 
</div>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
```

This is a very common use of the ngIf/else functionality: we display an alternative loading template while waiting for the data to arrive from the backend.

As we can see, the else clause is pointing to a template, which has the name loading. The name was assigned to it via a template reference, using the #loading syntax.

But besides that else template, the use of ngIf also creates a second implicit ng-template! Let's have a look at what is happening under the hood:

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