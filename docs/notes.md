
====
L-1 : 

- front end frame work
- SAP
- Google is made this
- MVC frame work
- open sorce
- NPM or CLI
- Angu;ar vs AnhularJS <= this is olser version most changes version.


====
L-2

- node
- npm
- npm install -g @angular/cli
- ng version <= angular version is same as ng version>
- ng new blog
- ng serve

====
L-3

File and foldre structure

- package.json : MIF : name , dependency , libarries, etc.
- node_modules : all library

src folder : 99% dev work in this

- app : component
- assests : extra image or something like this
- enviroments
- favicon icon
- index.html : strting point as html
- main.js : load angular app in html : boostrape angular app inside the html
- styles.css : global css
- package-lock.json : sub package of main package and theirw version.
- angular.json : config for angular
- tsconfig.json : ts configuration : global
- tsconfig.app.json : 
- tsconfig.spec.json :for testing 
- .browserslistrc : browser support
- karma.congig.js : testing 
- polyfills.ts : browser support for specific version add library which support browser
- readme.md
- .gitignore
- .editorconfig

==== 
L-4 

- index.html title , app .ts connect with .html like {{title}}

====
L-5

Interpolation

- html vale page k uper dynamic data load lrne k liye   ==> {{}}
- data from component.ts file to our html file
- {{2+2}} = 4 : like javascript inside interpolation.

- <h1 class={{title}}> or <h1 class="{{title}}">


Not possible usig interpolation: 

{{title = "hello"}}
{{type of hello}}
{{data++}} when data is 100
{{new title}}


====
L-6

Importand commands

ng help
ng generate componet login  or ng g c register <= by default this is made inside the app>
ng g m user-auth : module created means this is big functionality


ng g c user-auth/sign-in


ng generate class name = > two file .ts and .spec.ts

ng g interface name

ng build


====
L-7

Compnent

css
html
.spec.ts
ts

ng gc user-list <= 4 file created and one file update >

selector app-user-list => <app-user-list></app-user-list> : able to reuse also : use as html tag : aslo able change name of selector from componet .ts file : make componet small as possible


====
L-8

inline style & template

ng g c --inline-style => three file.ccs is not there
ng g c --inline-template =>html file is not there
ng g c --inline-template --inline-style ==> only two files

====
L-9

Module

- Complate feature.
 ng g m user-auth => only one file is created .module.ts


====
L-10

Make a function and call

====
L-11

Important events

====
L-12

Get input box value

====
L-13

Counter example

====
L-14

imline > componet > global style 

====
L-15

Property binding

----------------------------------------Read documentation----------------------------------

- components based framwork
- build on ts

Components : Components are the building blocks that compose an application.

Components also make your application painless to unit test and can improve the general readability of your code.

Angular automatically updates the rendered DOM when your component's state changes.

----------------------------------------Read documentation----------------------------------

====
L-16

if else condition

====
L-17

if else if

====
L-18

sitch case

====
L-19

Array looping

====
L-20

nested looping like {name : "rajnihs", hobbies : ["cricket","movies"]}

====
L-21

style binding : [style.color] = "color"

====
L-22

header component

====
L-23

Form module 

====
L-24

toggle element

====
L-25

Add Boostrap    

===
L-26

Material ui => need to import and register module in specific module file.

====
L-27

Todo List

====
L-28

Pass data from parent to child

====
L-29

Reuseable component 

====
L-30

child to parent 

====
L-31

Two way binding
- update and display property at same time
==> need to bing formsModule fot [(ngModel)]

====
L-32

- Template refernce variable 

#name <== this id or trv

=== 
L-33 to 36

- Pipes : In Angular, pipes are a way to transform data in your templates before displaying it. 
{{ "this show in upper case" | "uppercase"}}

- custome pipe
To generate pipes==> ng g p pipes/usdInr

===
L-37 : forms

1) Template-driven forms : mostly operation in the template file

2) Reactive forms : in .ts file
