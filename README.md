# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.



os：Darwin admindeMacBook-Pro.local 17.7.0 Darwin Kernel Version 17.7.0: Thu Jun 21 22:53:14 PDT 2018; root:xnu-4570.71.2~1/RELEASE_X86_64 x86_64


nodejs：v10.3.0

npm：6.1.0

nvm：0.39.1

brew： Homebrew 3.6.0-24-g5524b30-dirty
      Homebrew/homebrew-core (git revision 5f657d65c1e; last commit 2022-09-09)
      Homebrew/homebrew-cask (git revision 9a390247ad; last commit 2022-09-08)

gitbook：CLI version: 2.3.2
GitBook version: 3.2.3




 MARKDOWN  PROJECT POWERED BY GITBOOK ON  GITPAGES


----

runtime environment


brew install node //https://nodejs.org/zh-cn/download/releases


npm install gitbook-cli -g  //https://www.gitbook.com/  https://docs.gitbook.com/


npm i docsify-cli -g  //https://docsify.js.org/#/


----

then run in command line


config index.html

and then  put markdown files 


and docsify serve to show the page


gitbook serve to bulid the html files in _book floder