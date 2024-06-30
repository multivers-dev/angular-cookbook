# Angular Built-in Pipes 



```admonish note
Angular provide a lot of built-in pipes  
```

```ts,angular
// live angular sample here
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'greet',
  standalone: true,
})
export class GreetPipe implements PipeTransform {
  transform(value: string, param1: boolean, param2: boolean): string {
    return `Hello ${value}`;
  }
}
```

{{#angular ./file.ts#NameOfExportedComponentClass}}

<!-- or -->

{{#angular ./file.ts}}