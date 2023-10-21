# How to Lazy load Module ?


```typescript
RouterModule.forRoot([
    {
        path: 'lazy-loading-path',
        loadChildren: () => import('./lazy-loading.module.ts')
        .then((m) => m.LazyLoadingModule)
    }
])

```
# Why/When to Lazy load Module ?

You Application might contains differents features which are related to specific part of your application. 


Lazy loading module help you to add features to your application without having to increase runtime performance.

Related Topics :  


[Preloading Strategy ](./preloading_strategy.md)