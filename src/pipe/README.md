# Pipes


## TL;DR

```admonish note
Pipes are pure by default and for better performance it should remain true. 
Pipes can be standalone
Pipe's name typically uses lowerCamelCase because the name cannot contain hyphens.
```


### class Pipe
```javascript
class Pipe {
  name: string;
  pure?: boolean;
  standalone?: boolean;
}
```

## [Angular style guide ](https://angular.dev/style-guide#style-02-09)
```admonish note
Style 02-09
Do use consistent names for all pipes, named after their feature. The pipe class name should use UpperCamelCase (the general convention for class names), and the corresponding name string should use lowerCamelCase. The name string cannot use hyphens ("dash-case" or "kebab-case").

Why?
Provides a consistent way to quickly identify and reference pipes.
```
