  ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) CookBook
=============

[_Angular CookBook_]() is an Open Source Participative Angular Knowledge built for the community.


# Table of Contents
- [How to Install ?](#how-to-install-)
    - [Prerequisites](#prerequisites)
        - [Rust](#rust)
    - [dependencies](#dependencies)
        - [Cargo](#cargo)
        - [i18n](#i18n)
- [Builds](#builds)
- [Serve](#serve)
- [How to Contribute ?](#how-to-contribute-)


# How to Install ?

## Prerequisites


### Rust
>### ![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
> 
> The way to install rustup differs by platform:
> * On Unix:
>   ``` shell
>   run curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
>   ```
>   in your shell, This downloads and runs rustup-init.sh
> 
> * On Windows download and run rustup-init.exe from [here](https://www.rust-lang.org/tools/install)
>
> ___
>
> For more information about installation of rustup, see the [rustup documentation](https://forge.rust-lang.org/infra/other-installation-methods.html).
>

<br>
<br>


# Dependencies

### Cargo

Install dependencies from Cargo.toml
```sh
  run cargo install --path .
```

>## ![Cargo](https://img.shields.io/badge/cargo-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
>[`rustc`](https://www.rust-lang.org/tools/install) = 1.71.0
>
>[`mdbook`](https://github.com/rust-lang/mdBook) = "^0.4.34"
>
>[`mdbook-admonish`](https://crates.io/crates/mdbook-admonish) = "^1.10.2"
>
>[`mdbook-i18n-helpers`](https://github.com/google/mdbook-i18n-helpers) = "^0.2.1"
>


### i18n
> ## ![i18n](https://img.shields.io/badge/i18n-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
>* Run 
>  ```sh
>    MDBOOK_OUTPUT='{"xgettext": {"pot-file": "messages.pot"}}' \ mdbook build -d po
>  ```
>* Update exting po for fr 
>  ```sh
>    msgmerge --update po/fr.po po/messages.pot
>  ```
>* Update exting po for en 
>  ```sh
>    msgmerge --update po/en.po po/messages.pot
>  ```

# Builds

>* Run `build` in fr 
>
>```sh
>  MDBOOK_BOOK__LANGUAGE=fr mdbook build -d >book/fr
>```
>
>* Run `build` in en 
>
>```sh
>  MDBOOK_BOOK__LANGUAGE=en mdbook build -d >book/en
>```
<br>

# Serve

>* Run `serve` in fr 
>
> ```sh
>MDBOOK_BOOK__LANGUAGE=fr mdbook serve -d book/fr
>```
>
>* Run `serve` in en 
>
>```sh
>MDBOOK_BOOK__LANGUAGE=fr mdbook serve -d book/fr
>```

# How to Contribute ?

>
>* Fork the project
>* Create your branch
>* Commit your changes
>* Push to the branch
>* Open a Pull Request

# License

