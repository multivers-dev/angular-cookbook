Angular CookBook
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
=============

[_Angular CookBook_]() is an Open Source Participative Angular Knowledge built for the community.


How to Contribute ? 

# Terminal 
Use Linux Terminal

![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
------------------------
* Install [`cargo`](https://doc.rust-lang.org/cargo/getting-started/installation.html)


* Install [`mdbook`](https://github.com/rust-lang/mdBook)

```sh
cargo install mdbook
```


* Install [`mdbook-admonish`](https://crates.io/crates/mdbook-admonish) (for styling)
https://tommilligan.github.io/mdbook-admonish/reference.html


```sh
cargo install mdbook-admonish
```

* Install [`mdbook-catppuccin`](https://crates.io/crates/mdbook-catppuccin) (for styling)
https://github.com/catppuccin/mdBook


```sh
cargo install mdbook-catppuccin
```


# I18N 
mdbook-i18n-helpers (https://github.com/google/mdbook-i18n-helpers)

```sh
cargo install mdbook-i18n-helpers

```


* Run `build` in fr 


```sh
MDBOOK_BOOK__LANGUAGE=fr mdbook build -d book/fr
```

or en 

```sh
MDBOOK_BOOK__LANGUAGE=en mdbook build -d book/en
```

# serve

fr

 ```sh
MDBOOK_BOOK__LANGUAGE=fr mdbook serve -d book/fr
```

or en 

```sh
MDBOOK_BOOK__LANGUAGE=fr mdbook serve -d book/fr
```


