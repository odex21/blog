(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{551:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This blog illustrates some notes on using my Mac (model was released in mid 2015, OS is Catalina 10.15).")]),t._v(" "),s("h2",{attrs:{id:"clean-unused-homebrew-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clean-unused-homebrew-dependencies"}},[t._v("#")]),t._v(" Clean Unused Homebrew Dependencies")]),t._v(" "),s("p",[t._v("Like "),s("code",[t._v("apt-get autoremove")]),t._v(" in Ubuntu, I have too many unused homebrew dependencies and want to clean them.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew bundle dump "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" brew bundle --force cleanup\n")])])]),s("h2",{attrs:{id:"accented-chars-vs-key-repeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accented-chars-vs-key-repeat"}},[t._v("#")]),t._v(" Accented Chars vs. Key Repeat")]),t._v(" "),s("p",[t._v("Mac enables users to hold down a letter key and show accented or special chars.")]),t._v(" "),s("p",[t._v("To "),s("strong",[t._v("enable pop-up")]),t._v(" and disable key repeat, could set "),s("code",[t._v("ApplePressAndHoldEnabled")]),t._v(" to "),s("code",[t._v("true")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("defaults "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" -g ApplePressAndHoldEnabled -bool "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("However, as I used "),s("code",[t._v("Vim")]),t._v("("),s("a",{attrs:{href:"vim_commands"}},[t._v("commands")]),t._v(" and "),s("a",{attrs:{href:"vim_customize"}},[t._v("config")]),t._v(") more and more, I see popping up the accented chars less useful.")]),t._v(" "),s("p",[t._v("To disable pop-up and "),s("strong",[t._v("enable key repeat")]),t._v(", could set "),s("code",[t._v("ApplePressAndHoldEnabled")]),t._v(" to "),s("code",[t._v("false")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("defaults "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" -g ApplePressAndHoldEnabled -bool "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),s("h3",{attrs:{id:"german-key-combs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#german-key-combs"}},[t._v("#")]),t._v(" German Key Combs")]),t._v(" "),s("p",[t._v("Happy ending? Not yet! I recently started "),s("a",{attrs:{href:"goethe"}},[t._v("learning German")]),t._v(" and had to find some workaround to type chars and symbols such as "),s("code",[t._v("ä")]),t._v(", "),s("code",[t._v("ö")]),t._v(", "),s("code",[t._v("ü")]),t._v(", "),s("code",[t._v("ß")]),t._v(", "),s("code",[t._v("„")]),t._v(" and "),s("code",[t._v("”")]),t._v(".")]),t._v(" "),s("p",[t._v("These are the ways to type them on my mac:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ä")]),t._v(": "),s("code",[t._v("Option u")]),t._v(" + "),s("code",[t._v("a")])]),t._v(" "),s("li",[s("code",[t._v("ö")]),t._v(": "),s("code",[t._v("Option u")]),t._v(" + "),s("code",[t._v("o")])]),t._v(" "),s("li",[s("code",[t._v("ü")]),t._v(": "),s("code",[t._v("Option u")]),t._v(" + "),s("code",[t._v("u")])]),t._v(" "),s("li",[s("code",[t._v("ß")]),t._v(": "),s("code",[t._v("Option s")])])]),t._v(" "),s("p",[t._v("and the lower and upper quotes:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("„")]),t._v(": "),s("code",[t._v("Option Shift w")])]),t._v(" "),s("li",[s("code",[t._v("”")]),t._v(": "),s("code",[t._v("Option Shift [")])])]),t._v(" "),s("p",[t._v("Note that I actually searched online and saw other key combs, but don't work.")]),t._v(" "),s("h3",{attrs:{id:"add-input-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-input-source"}},[t._v("#")]),t._v(" Add Input Source")]),t._v(" "),s("p",[t._v("Another way to guarantee typing the correct German chars, or any language's chars is to use the corresponding input source. This could be done on Mac by: "),s("code",[t._v("System Preferences")]),t._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),s("code",[t._v("Keyboard")]),t._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),s("code",[t._v("Input Souces")]),t._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("+")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("+")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"mord"},[t._v("+")])])])])]),t._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" {another language}.")],1),t._v(" "),s("h3",{attrs:{id:"further"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further"}},[t._v("#")]),t._v(" Further")]),t._v(" "),s("p",[t._v("Please see this article for "),s("a",{attrs:{href:"https://ia.net/writer/support/mac/special-characters",target:"_blank",rel:"noopener noreferrer"}},[t._v("more details"),s("OutboundLink")],1),t._v(" on keyboard viewer, quotes, ellipsis, and IA writer.")]),t._v(" "),s("h2",{attrs:{id:"terminal-proxy-w-socks5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminal-proxy-w-socks5"}},[t._v("#")]),t._v(" Terminal Proxy w/ Socks5")]),t._v(" "),s("p",[t._v("It's fairly easy to use a socks5 proxy in browser, but how to use it in terminal, especially when downloading from GitHub is super slow in China? From "),s("a",{attrs:{href:"https://www.jianshu.com/p/205aff65954a",target:"_blank",rel:"noopener noreferrer"}},[t._v("this article"),s("OutboundLink")],1),t._v(" I made the following terminal proxy settings.")]),t._v(" "),s("p",[t._v("In sock5 proxy app set:")]),t._v(" "),s("ul",[s("li",[t._v("Local Socks5 Listen Address "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" 127.0.0.1")],1),t._v(" "),s("li",[t._v("Local Socks5 Port "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" 1086")],1),t._v(" "),s("li",[t._v("Connection Timeout "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[t._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" 60")],1)]),t._v(" "),s("p",[t._v("Then in "),s("code",[t._v("sh")]),t._v(" config file ("),s("code",[t._v(".bashrc")]),t._v(" for "),s("code",[t._v("Bash")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set/unset proxy in terminal")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("setproxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export ALL_PROXY=socks5://127.0.0.1:1086"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("unsetproxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set -e ALL_PROXY"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set/unset proxy just for Git")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("agent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git config --global http.proxy socks5://127.0.0.1:1086;git config --global https.proxy socks5://127.0.0.1:1086;git config --global http.sslVerify false"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("unagent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git config --global --unset http.proxy;git config --global --unset https.proxy"')]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);