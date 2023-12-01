   <button id="language-toggle" class="icon-button" type="button"
                                title="Change language" aria-label="Change language"
                                aria-haspopup="true" aria-expanded="false"
                                aria-controls="language-list">
                            <i class="fa fa-globe"></i>
                        </button>
                        <ul id="language-list" class="theme-popup" aria-label="Languages" role="menu">
                          <li role="none">
                              <a id="en"><button role="menuitem" class="theme">English</button></a>
                          </li>
                          <li role="none">
                              <a id="fr"><button role="menuitem" class="theme">French</button></a>
                          </li>
                        </ul>

                       <script>
                          let langToggle = document.getElementById("language-toggle");
                          let langList = document.getElementById("language-list");
                          langToggle.addEventListener("click", (event) => {
                              langList.style.display = langList.style.display == "block" ? "none" : "block";
                          });
                          let selectedLang = document.getElementById("{{ language }}");
                          if (selectedLang) {
                              selectedLang.parentNode.classList.add("theme-selected");
                          }

                          // The path to the root, taking the current
                          // language into account.
                          {{#if (eq language "fr")}}
                          let full_path_to_root = "{{ path_to_root }}";
                          {{else}}
                          let full_path_to_root = "{{ path_to_root }}../";
                          {{/if}}
                          console.log("full_path_to_root", full_path_to_root)
                          // The page path (mdbook only gives us
                          // access to the path to the Markdown file).
                          let path = "{{ path }}".replace(/\.md$/, ".html");
                          for (let lang of langList.querySelectorAll("a")) {
                              if (lang.id == "fr") {
                                  lang.href = `${full_path_to_root}${path}`;
                              } else {
                                  lang.href = `${full_path_to_root}${lang.id}/${path}`;
                              }
                          }
                        </script>