/* WHEN EVER YOU WANT TO PUSH YOUR LEARNING PART TO YOUR PERSONAL GIT 

INSTEAD OF YOUR PASSWORD YOU SHOULD GIVE THIS TOKEN 

token : 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

FOR REFERENCE SEE THIS : https://stackoverflow.com/questions/68775869/message-support-for-password-authentication-was-removed-please-use-a-personal

*/






Season 1 : 

Season 2 : 

 what ever we created in season 1 is not a production ready for production it doesn't have any packages , bundles

 NPM : Node package Manager, we need a lot of dependencies to build , we need a place to manage them, thats y we have npm

-> simply give "npm init -y" , it will by default create a package.json with some dependencies
    npm keeps track of everything
-> if you see package.json you can see a basic json structure, earlier we use to indect the stuff using injection in the html using script but lets inject that in package.json

-> instead of injecting the react in the html , let get that in   package.json , 
    "npm i react react-dom" , what happened ? we got package-lock.json and node modules etc 
    and you can see in the package.json its updated because npm does that for us , it also 
    maintians the latest version of what ever you install.

    what is dependecy ? what do our project need from outside is dependency.

-> other things also came up while installing what are those ? those are   dependencies over dependencies which has other dependencies  

-> learn more about web-pack which takes care of minifying your app , remove spaces etccc..., read about web-pack and wable

so we have so many bundlers , what bundlers do for us is pack the application , if you want to do some code to be work in abother browser also then that comes blunder , in this turorial we will be using "PARCEL" bundler

-> For Parcel refer this link https://parceljs.org/ , just open it in your browser and read what it does , what it does is it splits the code , it internallly uses the shaking algorithm and splits and code and loads only that code which is necessary for production.

example : Environment.ts file , for production we need one environment file and for dev environments we need another code of file , how do we differentiate ? how do we write 2 different code ? Parcel(Bundle) does for us.

-> run this command in "npm i parcel" this will throw you an error we have to install as a dev dependency 

there are 2 dependencies 1. normal dependencies 2. Dev Dependencies 

so use the command "npm i -D parcel"
Now when you try to run "parcel src/index.html" it is throwing an error that parcel not found" , not sure y this is occuring but to overcome this , if you are facing some issues where these npm insalled  dependencies dont work , you can add in the package.json in scripts 

go to package.json -> 

  "scripts": {
    "start": "parcel src/index.html"
  }

  and run npm start you can see parcel is running

  so to run all the bundles / the commands you have written in the scripts , you just have to use "npm run <script>"

  SOLUTION TO ABOUT PARCEL ISSUE : in the above you see that when you gave parcel src/index.html it is throwing an error that parcel not found , why because parcel not defined globally , so with the help of npx you can execute such commands , you can imagine npm as sibling of npx 

  so just run "npx parcel src/index.html" 

  so yeah its not possible to run the command in the production right ? your project should be in such a way that if you export your project it should bundle everything and work. 

  its really important to know about parcel. these are all the reasons why react is fast 

  Parcel is just like small feature of "Live Server" it gets your app over localhost , now dont use live server without using that go to browser and type localhost and see your app will be loading , we have one more thing called hot module replacement / hot reloading in parcel what is it ? it is when you make some changes it will automatically be loaded. 

  what parcel does in simple way is ? when you install parcel , you ll see a folder called parcel-cache folder why is it for ? you have to find out all these things , parcel keeps all its things and configuration in its own folder called parcel-cache folder. 

  HOMEWORK - Read the documentation for parcel.

  in the documentation you can see the command you have to run for production , documentation says to run "parcel build src/index.html" but what we have learnt till now ? 

            1. run it using npx i.e "npx parcel build src/index.html" 
            2. everytime we cannot use command so configure in the script 
                 "scripts": {
                 "build": "parcel build src/index.html"
                             },
                and run "npm run build

            when we run this command , it will do lot of things , like minification , image optimization , treeshaking etc..,, 


********** IMPORTANT *****

you dont have to push all the node modules into your git hub , that is y we have package.json and package-lock.json , you can simply push these and have "npm install" this will regenerate all the dependencies in the  node modules.

WHAT TO PUSH and WHAT NOT TO PUSH 

go to .gitignore and mention all the things which you dont have to push.

Difference between Package.json and Package.lock.json

In package.json it will install with the latest version of that respective module.
In package.lock.json it will exactly show which version of that module is running , it locks the version of that module
NEVER EVER TOUCH PACKAGE_LOCK.JSON


-> What is "dist Folder" , so when you do build for production , parcel bundles all our app and creates a dist folder , its like a distribution folder, that will be the real app/ folder that will ship to the server. if you see the size difference between src and dist folder there will be huge difference , dist will compress according to its own configuration.

till now what ever we covered is not at all react , you can do all these things to simple app also :) ahahahah yes , this are somethings which ignite your apps



Lets Create a new React APP on the desktop folder
"npx create-react-app cra demo"

Now you can simply run npm run start , you will see react running on localhost:3000 , now you know how it is working :) 

generally react uses web-pack as its default bundle , but here we are learning parcel , web pack can be homework for me
             
Know about BrowserList in the package.json

HOMEWORK : Why do we want to specify specific browser list in the package.json ? because IE might not support Arrow Fucntions , ES6 yet , it might need pollyfill to understand ,
know about pollyfill. 

HOMEWORK : what is robots.txt , What is manifest.json
            in the index.html of react app , you have <noscript> tag , know what it is ? 


we have created a react app , and here we have done everything manually what create react app does for us , so lets continue with our own created app :) i.e lets continue here.


HOMEWORK : 

     1.  what is robots.txt , What is manifest.json
            in the index.html of react app , you have <noscript> tag , know what it is ? 
     2.  Read the documentation for parcel.
     3. Why do we want to specify specific browser list in the package.json ? because IE might not support Arrow Fucntions , ES6 yet , it might need pollyfill to understand ,
     4. know about pollyfill. 
     5. what is robots.txt , What is manifest.json
            in the index.html of react app , you have <noscript> tag , know what it is ? 
    6. WEB-PACK , WABLE
    7.NPX


ANSWERS: 

-> NPX : 
    NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.
-> Difference between dependencies and devDependencies : 
    A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development.
-> <noScript> : 
    The <noscript> tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script.
    The <noscript> element can be used in both <head> and <body>. When used inside <head>, the <noscript> element could only contain <link>, <style>, and <meta> elements.
-> Why Not to Modify Pacakage-lock.json : 
  It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock. json to your code repository
-> Manifest.json : 
    Web app manifest files provide the capability to change how an installed application will look like on the user's desktop or mobile device. By modifying properties in the JSON file, you can modify a number of details in your application, including its: Name , Description etc..,
    If you're building a site that you think does not need to be installed on a device, remove the manifest and the <link> element in the HTML file that points to it.
    If you would like users to install the application on their device, modify the manifest file (or create one if you are not using CRA) with any properties that you like. The MDN documentation explains all the required and optional attributes.

      
