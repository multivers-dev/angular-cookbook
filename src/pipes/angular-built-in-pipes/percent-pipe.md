
## TL;DR

```admonish info
Transforms a number to a percentage string, 
formatted according to locale rules that determine group sizing and separator, 
decimal-point character, and other locale-specific configurations.
```


```typescript
class PercentPipe {
  transform(value: string | number, digitsInfo?: string, locale?: string): string;
  transform(value: null, digitsInfo?: string, locale?: string): null;
  transform(value: string | number, digitsInfo?: string, locale?: string): string;
}
```

```typescript
import { PercentPipe } from "@angular/common"
```


[Angular Doc](https://angular.dev/api/common/PercentPipe)
part of CommonModule 
