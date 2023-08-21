Angular CookBook
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
=============

[_Angular CookBook_]() is an Open Source Participative Angular Knowledge built for the community.


 
# How to Install ?
Use Linux Terminal

![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)

------------------------
* Install [`Rust`](https://www.rust-lang.org/tools/install)
* Install [`Cargo`](https://doc.rust-lang.org/cargo/getting-started/installation.html)


* Install dependencies from Cargo.toml 
```sh
cargo install --path .
```


# dependencies

[`rustc`](https://www.rust-lang.org/tools/install) = 1.71.0

[`mdbook`](https://github.com/rust-lang/mdBook) = "^0.4.34"

[`mdbook-admonish`](https://crates.io/crates/mdbook-admonish) = "^1.10.2"

[`mdbook-i18n-helpers`](https://github.com/google/mdbook-i18n-helpers) = "^0.2.1"


# i18n
* Run `MDBOOK_OUTPUT='{"xgettext": {"pot-file": "messages.pot"}}' \ mdbook build -d po`
* Update exting po for fr `msgmerge --update po/fr.po po/messages.pot`
* Update exting po for en `msgmerge --update po/en.po po/messages.pot`

  
# Builds

* Run `build` in fr 


```sh
MDBOOK_BOOK__LANGUAGE=fr mdbook build -d book/fr
```

* Run `build` in en 

```sh
MDBOOK_BOOK__LANGUAGE=en mdbook build -d book/en
```

# Serve

* Run `serve` in fr 

 ```sh
MDBOOK_BOOK__LANGUAGE=fr mdbook serve -d book/fr
```

* Run `serve` in en 

```sh
MDBOOK_BOOK__LANGUAGE=fr mdbook serve -d book/fr
```


How to Contribute ?

