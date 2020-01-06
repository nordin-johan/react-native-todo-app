# React Native Todo Application

A React Native Todo application. All 'todos' are saved in AsyncStorage.

## Usage
```git clone https://github.com/nordin-johan/react-native-todo-app.git```

```npm install```

```npm start```

**If you are having problems:**

There is currently(January 2020) a bug in a node module: \node_modules\metro-config\src\defaults\blacklist.js.

Open up blacklist.js and replace:

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

With:

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

## Prerequisites

* Node >= v.12
* Expo CLI
