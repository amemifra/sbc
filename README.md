# Spring Boot CLI

Backend development need a change, SBC!

Introducing SBC Spring Boot CLI

Generate class, @Controller, @RestController and @Service from command line interface

## Set up

Generate a Spring Boot project, example name: backend

```
📂 project folder
  📂 backend
    📂 src
      📂 ...
    📄 ...
    📄 pom.xml / 📄 gradle.build
```

On project folder root clone this repository 

`git clone https://github.com/amemifra/sbc.git`

Your folder look like:

```
📂 project folder
  📂 backend
    📂 src
      📂 ...
    📄 ...
    📄 pom.xml / 📄 gradle.build
  📂 sbc
    📄 index.js
    📄 package.json
    📄 README.md
```

Modify the index file at line 3 with your root package name

Use the CLI!!!!

## How To Use

### General infos

Open a terminal on folder project

`cd sbc/`

`node . `

The last command run the CLI

to use SBC you have to set these required parameters:

```
 --package=package.from.root.package.name

 --name=yourClassName
```

Optional parameters:  

```
 --controller
 
 --restController --requestMapping=apiurlexample
 
 --service
```

### Generate Class

`node . --package=package.from.root.package.name --name=yourClassName`

### Generate Controller

`node . --package=package.from.root.package.name --name=yourClassName --controller`

### Generate RestController

`node . --package=package.from.root.package.name --name=yourClassName --restController --requestMapping=apiurlexample`

Required api name mapping
`--requestMapping=apiurlexample`

### Generate Service

`node . --package=package.from.root.package.name --name=yourClassName --service`



