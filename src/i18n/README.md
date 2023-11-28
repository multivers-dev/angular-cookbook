# i18N

Internationalization is the process of designing and preparing your app to be usable in different languages. Localization is the process of translating your internationalized app into specific languages for particular locales.

## Table of Contents

- [Installing and Configuring @angular/localize](#installing-and-configuring-@angular/localize)
- [Marking Strings for Localization](#marking-strings-for-localization)
- [Extracting the Message Strings](#extracting-the-message-strings)
- [Translating the Message Strings](#translating-the-message-strings)
- [Localization of Dates and Numbers](#localization-of-dates-and-numbers)
- [Building and Deploying the App](#building-and-deploying-the-app)


## Installing and Configuring @angular/localize
We’ll require the Angular CLI, so be sure to install it by running:
### Prerequisites
```bash
npm install -g @angular/cli
```


Create a new Angular 17 app with the CLI:

```bash
ng new angular-i18n --routing --style=scss --strict
```

Install the `@angular/localize` package:

```bash
cd angular-i18n
ng add @angular/localize
```

```admonish note 
The `ng add @angular/localize` command automatically updates :
- The `tsconfig.app.json` : with `"types": [ "@angular/localize" ]`
- The `tsconfig.spec.json` : with `    "types": [
      "jasmine",
      "@angular/localize"
    ]`
```

### Configuring the App for Localization Support

Next, we’ll configure the app to support localization. We’ll start by adding a `locales` folder to the `src` folder. This folder will contain the translation files for each locale. For this example, we’ll add two locales: `en-US` and `fr-FR`. The `en-US` locale will be the default locale.






