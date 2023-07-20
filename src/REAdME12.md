Time For Test : 

lets do testing today :) using react testing library.

there are multiple ways how deveopers write their testcases.

there are different different tool to test example selenium , not at Code level. 

Search About "HeadLess Browser" 

We are talking about unit testing today :) 

Read About Unit Testing Engyme comparing with react testing library

Unit Testing Engyme -> at data level only
react testing library -> exactly what actual user does , it behaves how user behaves.

Examples : 

i want to see whether my header loaded or not , if loaded whether it showing the correct image or not.


lets set up react testing library.

1. RTL works with the jest , so have to install both

npm i -D @testing-library/react
npm i - D jest
npm jest --init

its not that without jest RTL cannot work it can work , but jest is for javascript testing , it helps in a better manner to provide fnctions to RTL for working RTL with jest is good.

when you run npm jest --init it will ask some questions i have provided as below 


✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes


we will have to do some configuration in babel also why so much ? 

https://jestjs.io/docs/getting-started - reference 


run the below command 

npm install --save-dev babel-jest @babel/core @babel/preset-env

y we have to install babel for test ? 

ANswer : testcases run in a container like thing , parcel does lot of things for us for our real app , but test cases doesnot know and it doesnt get help from parcel also :) so babels help is required to run a containerised imaginary app

2. Add babel.config.js -> parcel already has babel agree ? what ever you write here it will override what parcel has already 

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

3. so lets first build a script in the package.json for the test : "jest" , i thing we already have 

let run npm run test and see

it throws below validation errors

 Validation Error:

  Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

  Configuration Documentation:
  https://jestjs.io/docs/configuration


As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

after version 29 , it is saying that we have to install jsdom manually . 

so run the below command " npm i -D jest-environment-jsdom"

after this lets run npm run test

it shows as below 

39 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 39 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches

when you run the above command , it looks for some patterns
what are these patterns

generally we follow that in our IT Industry right ? we create a folder like __tests__ inside that we write something known as header.test.js like that jest know that this is the file to run 

lets go from basic , 

lets test to sum of 2 numbers

lets say you have a file called sum.js

const sum = (a , b) => {
    return a + b ; 
}

in the sum.test.js

you ll import this sum file 
and 

test("testing sum " , () => {
    expect ( sum ( 2, 3) . toBe(5))
})

Important Note : babel.config.js should be outside of src

Now lets go to another project where we are building youtube.


