# show-us-what-you-got

## Introduction
This repository is given to new candidates to get a feel for how we would work together.

The repository contains two projects: test-one, and test-two.

The projects use the following technologies:

- NodeJS
- NPM - package manager
- Babel - to transpile ES6 to ES5
- Mocha - a test runner
- Chai - an assertion engine
- Sinon - a mocking framework

The details of both challenges follow, along with step by step instructions to get up and running. Good luck : )

## Test One

Write a program that prints the numbers from 1 to 100. But for multiples of three print 'Boss' instead of the number and for the multiples of five print 'Hog'. For numbers which are multiples of both three and five print 'BossHog'.

### Getting Started

Make sure you have the latest version of node installed. Visit the nodeJS website and download the latest install package (the package manages upgrades too).

Open a console window/tab to the 'test-one' project directory and run the following commands...

Download project dependencies.

```
npm update

```
Transpile code from src folder to lib folder, run unit tests, and start the program

```
npm start

```
Now when you change code in the project src folder, nodemon will re-transpile, re-run unit tests, and re-start the program. See for yourself, go ahead and try changing the value of the message variable in test-one/src/index.js.

Please commit to git as necessary and create a pull request in GitHub for us to review once you have completed both challenges.

## Test Two

Currently, the 'test two' project makes requests to the GitHub API and outputs the first page of users belonging to Facebook's GitHub organisation. What we'd really like to see is a list of repositories for each user, for **all** Facebook GitHub users.

Just to clarify, by the time you've completed the challenge, the program...

* should output **all** Facebook GitHub users
* should output all repositories for each user

Note that the GitHub API limits requests, and you will definitely reach the anonymous request limit while implementing this solution. To overcome this limit you will need to generate an OAuth key in your GitHub account's developer settings, and paste the key into the gitHubApiAuthToken constant in test-two/src/index.js

### Getting Started

Make sure you have the latest version of node installed. Visit the nodeJS website and download the latest install package (the package manages upgrades too).

Open a console window/tab to the 'test-two' project directory and run the following commands...

Download project dependencies.

```
npm update

```
Transpile code from src folder to lib folder, run unit tests, and start the program

```
npm start

```
Now when you change code in the project src folder, nodemon will re-transpile, re-run unit tests, and re-start the program. See for yourself, go ahead and try changing test-two/src/index.js.

Please commit to git as necessary and create a pull request in GitHub for us to review once you have completed both challenges.