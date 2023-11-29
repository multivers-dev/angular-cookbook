# i18N

Internationalization is the process of designing and preparing your app to be usable in different languages. Localization is the process of translating your internationalized app into specific languages for particular locales.

```admonish note
You can find the hold project in the our [Github](https://github.com/jdansomon/angular-i18n.git) folder.

```

## Table of Contents

- [Installing of angular localize](#installing-of-angular-localize)
- [Marking Strings for Localization](#marking-strings-for-localization)
- [Extracting the Message Strings](#extracting-the-message-strings)
- [Translating the Message Strings](#translating-the-message-strings)
- [Building and Deploying the App](#building-and-deploying-the-app)

## Installing of angular localize

We’ll require the Angular CLI, so be sure to install it by running:



### Prerequisites

```bash
npm install -g @angular/cli
```

Create a new Angular app with the CLI:

```bash
ng new angular-i18n --routing --style=scss --strict
```


Install the `@angular/localize` package:

```bash
cd angular-i18n
ng add @angular/localize
```

```admonish
The `ng add @angular/localize` command automatically updates :
- The `tsconfig.app.json` : with `"types": [ "@angular/localize" ]`
- The `tsconfig.spec.json` : with `    "types": [
      "jasmine",
      "@angular/localize"
    ]`
```

## Marking Strings for Localization

* Structure of i18n tag 

**Short Course on Marking Strings for Localization**

**Objective:** Ready your Angular project for translation with succinct string marking.

1. **i18n Attribute in Templates:**

   - Mark text using `i18n`.
   - Example: `<h1 i18n="meaning|desc@@id">Welcome to My App</h1>` or 
   `<h1 i18n>Welcome to My App</h1>`

2. **i18n- Attribute for Attributes:**

   - Translate attribute text with `i18n-`.
   - Example: `<img [src]="logo" i18n-title="meaning|desc@@id" title="Angular Cookbook logo" alt="CookBook logo"/>` or 
   `<img [src]="logo" i18n-title title="Angular Cookbook logo" alt="Angular Cookbook logo"/>`

3. **$localize Tagged Message in Code:**

   - Dynamically mark code strings using `$localize`.
   - Example: `const welcome = $localize`meaning|desc@@welcome, ${username}!`;`

**Practice:**

```admonish note
Identify and mark strings:
- Static text: Use `i18n`.
- Attribute text: Apply `i18n-`.
- Dynamic code text: Utilize `$localize`.
- No need to give each string a unique ID. The ID is optional and it will be generated automatically.
```

For more information, see [Internationalization (i18n)](https://angular.io/guide/i18n-common-prepare).


### Update the `app.component.html` file

```html
<h1 i18n="User welcome|An introduction header for this sample@@introductionHeader">
  Hello i18n!
</h1>

<ng-container i18n>I don't output any element</ng-container>

<br/>

<img [src]="logo" alt="Angular Cookbook logo" i18n-title title="Angular Cookbook logo"/>
<br>
<button (click)="inc(1)" type="button">+</button>
<button (click)="inc(-1)" type="button">-</button>
<span i18n>Updated {minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}</span>
({{minutes}})
<br><br>
<button (click)="male()" type="button">&#9794;</button>
<button (click)="female()" type="button">&#9792;</button>
<button (click)="other()" type="button">&#9895;</button>
<span i18n>The author is {gender, select, male {male} female {female} other {other}}</span>
<br><br>
<span i18n>Updated: {minutes, plural,
  =0 {just now}
  =1 {one minute ago}
  other {{{minutes}} minutes ago by {gender, select, male {male} female {female} other {other}}}}
</span>

```

### Update the `app.component.ts` file

```typescript
import {Component} from '@angular/core';
import {CommonModule, NgPlural} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgPlural],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-i18n';
  tasksCount = 3;
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }

  male() {
    this.gender = 'male';
  }

  female() {
    this.gender = 'female';
  }

  other() {
    this.gender = 'other';
  }
}

```

## Extracting the Message Strings

we will configure the app to support localization. We’ll start by adding the `LOCALE_ID` provider to the `AppModule`:

1- add the `LOCALE_ID` provider to the `AppModule` or in the `main.ts` file:

```typescript
import { LOCALE_ID, NgModule } from '@angular/core';
providers: [{ provide: LOCALE_ID, useValue: 'en' }]
```

```admonish
The `LOCALE_ID` provider is required for the Angular localization API to work.
```

2- create a `locale` folder in the `src` folder for the locale files:

```bash
mkdir src/locale
```

3- configure the `angular.json`

```json
{
  "projects": {
    "angular-i18n": {
      // ...
      "i18n": {
        "sourceLocale": "en", // default locale
        // locales to translate to
        "locales": {
          "fr": { 
            "translation": "src/locale/messages.fr.xlf",
            "baseHref": ""
          },
          "de": {
            "translation": "src/locale/messages.de.xlf",
            "baseHref": "" 
          }
        }
      },
      "architect": {
        // ...
      }
    }},
  // ...
}
```

```admonish
The `i18n` property in the `angular.json` file is used to configure the localization process. The `sourceLocale` property specifies the default locale for the app. The `locales` property is used to specify the locales to translate to. The `translation` property specifies the path to the translation file for the locale. The `baseHref` property is used to specify the base URL for the locale.
```

And create configuration settings for `fr` and `de` under build:

```json
{
  "projects": {
    "angular-i18n": {
      // ...
      "architect": {
        "build": {
          // ...
          "configurations": {
            "production": {
              // ...
            },
            "fr": {
              "localize": ["fr"],
              "outputPath": "dist/fr/",
              "i18nMissingTranslation": "error"
            },
            "de": {
              "localize": ["de"],
              "outputPath": "dist/de/",
              "i18nMissingTranslation": "error"
            }
          }
        },
        // ...
      }
    }},
  // ...
}
```

```admonish
- The `localize` property is used to specify the locales to translate to.
- The `outputPath` property is used to specify the output path for the locale. 
- The `i18nMissingTranslation` property is used to specify the behavior when a translation is missing.
```

You can also update the configuration settings under `serve`:

```js
{
  "projects": {
    "angular-i18n": {
      // ...
      "architect": {
        "serve": {
          // ...
          "configurations": {
            "production": {
              "browserTarget": "angular-i18n:build:production"
            },
            "fr": {
              "browserTarget": "angular-i18n:build:fr"
            },
            "de": {
              "browserTarget": "angular-i18n:build:de"
            }
          }
        },
        // ...
      }
    }},
  // ...
}
```

`package.json`

```json
{
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "start:fr": "ng serve --configuration=fr",
    "start:de": "ng serve --configuration=de",
    "build": "ng build",
    "build:fr": "ng build --configuration=fr",
    "build:de": "ng build --configuration=de",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "i18n:extract": "ng extract-i18n --output-path src/locales --format xlf"
  }
}
```


4- Automating messages.xlf Generation

Install Install xliffmerge:

```shell
npm install --save-dev xliffmerge
```

* update `package.json` file 


```json
{
  name: "angular-i18n",
  //...
  "xliffmergeOptions": {
    "srcDir": "src/locales",
    "genDir": "src/locales",
    "defaultLanguage": "en",
    "languages": [
      "fr","de"
    ]
  }
}
```

* Add the `xliffmerge` script to the `package.json` file:

```json
    {
    "scripts": {
          "xliffmerge": "./node_modules/ngx-i18nsupport/dist/xliffmerge",
          "i18n:extract": "ng extract-i18n --output-path src/locales --format xlf && xliffmerge"
         }
    }
```

```admonish
- The `i18n:extract` script extracts the message strings from the app and generates the `messages.xlf` file for each locale.
- The `xliffmerge` script merges the `messages.xlf` files into a single `messages.xlf` file for each locale.
```

* Run the `i18n:extract` script:

```shell
npm run i18n:extract
```

```admonish note
The `i18n:extract` script extracts the message strings from the app and generates the `messages.xlf` file for each locale.
```

## Translating the Message Strings

1- This is the `messages.xlf` file in the `src/locale` folder:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file source-language="en" datatype="plaintext" original="ng2.template">
    <body>
      <trans-unit id="introductionHeader" datatype="html">
        <source> Hello i18n by Angular CookBook !</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">2,9</context>
        </context-group>
        <note priority="1" from="description">An introduction header for this sample</note>
        <note priority="1" from="meaning">User welcome</note>
      </trans-unit>
      <trans-unit id="5206857922697139278" datatype="html">
        <source>I don&apos;t output any element</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">5</context>
        </context-group>
      </trans-unit>
      <trans-unit id="3439693597837045937" datatype="html">
        <source>Angular CookBook logo</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">9,11</context>
        </context-group>
      </trans-unit>
      <trans-unit id="4606963464835766483" datatype="html">
        <source>Updated <x id="ICU" equiv-text="{minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}" xid="1887283401472369100"/></source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">13,15</context>
        </context-group>
      </trans-unit>
      <trans-unit id="2002272803511843863" datatype="html">
        <source>{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {<x id="INTERPOLATION"/> minutes ago}}</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">13,14</context>
        </context-group>
      </trans-unit>
      <trans-unit id="3560311772637911677" datatype="html">
        <source>The author is <x id="ICU" equiv-text="{gender, select, male {male} female {female} other {other}}" xid="7670372064920373295"/></source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">19,21</context>
        </context-group>
      </trans-unit>
      <trans-unit id="7670372064920373295" datatype="html">
        <source>{VAR_SELECT, select, male {male} female {female} other {other}}</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">19,20</context>
        </context-group>
      </trans-unit>
      <trans-unit id="3967965900462880190" datatype="html">
        <source>Updated: <x id="ICU" equiv-text="{minutes, plural,
  =0 {just now}
  =1 {one minute ago}
  other {{{minutes}} minutes ago by {gender, select, male {male} female {female} other {other}}}}" xid="6988904457887003660"/>
</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">21,26</context>
        </context-group>
      </trans-unit>
      <trans-unit id="2508975984005233379" datatype="html">
        <source>{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {<x id="INTERPOLATION"/> minutes ago by {VAR_SELECT, select, male {male} female {female} other {other}}}}</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">21,26</context>
        </context-group>
      </trans-unit>
    </body>
  </file>
</xliff>

```

2- Translate the `messages.xlf` file for the `fr` locale:

```admonish note
- xliffmerge will marke the news strings with the `state="new"` attribute.
- xliffmerge will add the `target` tag with the translated text.
```



```xml
<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file source-language="en" datatype="plaintext" original="ng2.template" target-language="fr">
    <body>
      <trans-unit id="introductionHeader" datatype="html">
        <source>Hello i18n by Angular CookBook !
        </source>
        <target state="new">Salut i18n par Angular CookBook !
        </target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">2,9</context>
        </context-group>
        <note priority="1" from="description">An introduction header for this sample</note>
        <note priority="1" from="meaning">User welcome</note>
      </trans-unit>
      <trans-unit id="5206857922697139278" datatype="html">
        <source>I don't output any element</source>
        <target state="new">Je ne sors aucun élément</target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">5</context>
        </context-group>
      </trans-unit>
      <trans-unit id="3439693597837045937" datatype="html">
        <source>Angular CookBook logo</source>
        <target state="new">Angular CookBook logo</target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">9,11</context>
        </context-group>
      </trans-unit>
      <trans-unit id="4606963464835766483" datatype="html">
        <source>Updated
          <x id="ICU" equiv-text="{minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}"
             xid="1887283401472369100"/>
        </source>
        <target state="new">Mis à jour
          <x id="ICU" equiv-text="{minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}"
             xid="1887283401472369100"/>
        </target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">13,15</context>
        </context-group>
      </trans-unit>
      <trans-unit id="2002272803511843863" datatype="html">
        <source>{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {
          <x id="INTERPOLATION"/>
          minutes ago}}
        </source>
        <target state="new">{VAR_PLURAL, plural, =0 {maintenant} =1 {il y une minute } other {
          il y a
          <x id="INTERPOLATION"/>
          minutes}}
        </target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">13,14</context>
        </context-group>
      </trans-unit>
      <trans-unit id="3560311772637911677" datatype="html">
        <source>The author is
          <x id="ICU" equiv-text="{gender, select, male {male} female {female} other {other}}"
             xid="7670372064920373295"/>
        </source>
        <target state="new">L'auteur est
          <x id="ICU" equiv-text="{gender, select, male {male} female {female} other {other}}"
             xid="7670372064920373295"/>
        </target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">19,21</context>
        </context-group>
      </trans-unit>
      <trans-unit id="7670372064920373295" datatype="html">
        <source>{VAR_SELECT, select, male {male} female {female} other {other}}</source>
        <target state="new">{VAR_SELECT, select, male {homme} female {femme} other {autre}}</target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">19,20</context>
        </context-group>
      </trans-unit>
      <trans-unit id="3967965900462880190" datatype="html">
        <source>Updated:
          <x id="ICU" equiv-text="{minutes, plural,
  =0 {just now}
  =1 {one minute ago}
  other {{{minutes}} minutes ago by {gender, select, male {male} female {female} other {other}}}}"
             xid="6988904457887003660"/>
        </source>
        <target state="new">Mis à jour:
          <x id="ICU" equiv-text="{minutes, plural,
  =0 {maintenant}
  =1 {il y a une minute}
  other il y a{{{minutes}} minutes par {gender, select, male {homme} female {femme} other {autre}}}}"
             xid="6988904457887003660"/>
        </target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">21,26</context>
        </context-group>
      </trans-unit>
      <trans-unit id="2508975984005233379" datatype="html">
        <source>{VAR_PLURAL, plural, =0 {just now} =1 {one minute ago} other {
          <x id="INTERPOLATION"/>
          minutes ago by {VAR_SELECT, select, male {male} female {female} other {other}}}}
        </source>
        <target state="new">{VAR_PLURAL, plural, =0 {maintenant} =1 {il y a une minute} other {
          il y a
          <x id="INTERPOLATION"/>
          minutes par {VAR_SELECT, select, male {homme} female {femme} other {autre}}}}
        </target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">21,26</context>
        </context-group>
      </trans-unit>
    </body>
  </file>
</xliff>

```

3- Translate the `messages.xlf` file for the `de` locale:

```admonish tldr
😆 Have fun translating the `messages.xlf` file for the `de` locale.
```


## Building and Deploying the App

More information about [Building and Deploying the App](https://angular.dev/guide/i18n/deploy).

















