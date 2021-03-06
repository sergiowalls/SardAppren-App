# README

Now on branch `master` [![Build Status](https://travis-ci.com/sergiowalls/SardAppren-App.svg?branch=master)](https://travis-ci.com/sergiowalls/SardAppren-App)

## Environment setup

Install Python, Node.js and Java Development Kit:

* [Python 3.7 64 bits](https://www.python.org/downloads/)
* [Node.js 10.15 LTS 64 bits](https://nodejs.org/es/download/)
* [JDK 12](https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html)

Although last JDK version is recommended, this project can run with JDK 8 or newer versions. Same happens with Python, Python 2 and 3 are supported.  

Next install React Native CLI with `npm install -g react-native-cli`.

And install dependencies with `npm install`.

Although Android Studio is not necessary for development purposes, it makes easier SDK and emulator installations. Both options (Android Studio and command line tools) are available [here](https://developer.android.com/studio#downloads).

A few environment variables will be need, Windows examples are provided:

* `ANDROID_HOME` C:\Users\\{your_user}\AppData\Local\Android\Sdk
* `JAVA_HOME` C:\Program Files\Java\jdk-12.{minor}.{patch}

And in your `PATH` is necessary to add Android platform tools location, i.e. `C:\Users\{your_user}\AppData\Local\Android\Sdk\platform-tools`

You can try if all works launching Android emulator or connecting a physical device and executing `react-native run-android`.

## Continuous integration

This repository has set up continuous integration with TravisCI, which is free for open source projects. Each commit and each pull request is build by TravisCI following the pipeline specified in `.travis.yml` file.

Builds are done against multiple JDK versions to ensure compatibility.

On each build dependencies are installed, tests are executed and debugging Android APK is assembled.