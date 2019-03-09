# Spring Boot CLI

Backend development need a change, SBC!

Introducing SBC Spring Boot CLI

Generate class, @Controller, @RestController and @Service from command line interface

Generate a Spring Boot project, example name: backend

```
/
-  /backend
    -  /src
        - ...
    - ...
    - pom.xml / gradle.build
```

On root clone this repository 

`git clone https://github.com/amemifra/sbc.git`

Your folder look like:

```
/
-  /backend
    -  /src
        - ...
    - ...
    - pom.xml // gradle.build
-  /sbc
    - index.js
    - package.json
    - README.md
```

Modify the index file at line 3 with your root package name

Use the CLI!!!!

# How To Use

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

isController
`--controller`

isRestController
`--restController`
if isRestController it require:
`--requestMapping=apiurlexample`

isService
`--service`



