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

> ***For the installation of the project, you need to install and use a bash terminal.***
> you can use [git bash](https://git-scm.com/downloads) or [cmder](https://cmder.net/)

### Rust
>### ![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
> 
> The way to install rustup differs by platform:
> * On Unix:
>   ``` shell
>   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
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

### ![Cargo](https://img.shields.io/badge/cargo-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
>[`rustc`](https://www.rust-lang.org/tools/install) = 1.71.0

<br>
Install dependencies from Cargo.toml

```sh
cargo install mdbook
```
[`mdbook`](https://github.com/rust-lang/mdBook) = "^0.4.34"

<br>

```sh
cargo install --path .
```
<br>

```sh
cargo install mdbook-admonish
```
[`mdbook-admonish`](https://crates.io/crates/mdbook-admonish) = "^1.10.2"

<br>

```sh
cargo install mdbook-i18n-helpers
```
[`mdbook-i18n-helpers`](https://github.com/google/mdbook-i18n-helpers) = "^0.2.1"



### i18n
> ## ![i18n](https://img.shields.io/badge/i18n-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
>* Run 
>  ```sh
>    MDBOOK_OUTPUT='{"xgettext": {"pot-file": "messages.pot"}}' \ mdbook build -d po
>  ```
>  or 
>   ```sh
>   MDBOOK_OUTPUT='{"xgettext": {"pot-file": "messages.pot"}}' mdbook build -d po
>   ```
>
>
>* Update existing po for fr 
>  ```sh
>    msgmerge --update po/fr.po po/messages.pot
>  ```
>* Update existing po for en 
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
>* Commit:
>   * Use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format
>   * example: `feat: add new feature` (<type>[optional scope]: <description>)
>   * description must be clear and explicit
>   * all types of commit are allowed is here => [conventional commit types](./.cz-config.js)
>   * (feat, fix, docs, style, refactor, add, remove)
>   * use the imperative, present tense: “change” not “changed” nor “changes”
>* run 
>   ```sh 
>   npx conventional-changelog -p angular -i CHANGELOG.md -s
>   ```
>   
>* Push to the branch:
>  * `git push --follow-tags`
>  * or `git push --set-upstream --follow-tags origin <branch>`
>* Open a Pull Request

# License

