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

* Run `build`

```sh
mdbook build
```

### Warning: Recompile when `mdbook` is updated

`mdbook-admonish` depend on particular versions of `mdbook`.

When `mdbook` is updated, it is best to reinstall both plugins to make sure that there are no
version conflicts.


# I18N 
mdbook-i18n-helpers (https://github.com/google/mdbook-i18n-helpers)



