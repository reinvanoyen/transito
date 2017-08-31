# Transito
## Page transitions made easy

### Installation

```ssh
$ npm install transito
```

### Basic example

```javascript
import Transito from 'transito';

Transito.install('https://www.yourdomain.com', 'body', 'a');

Transito.on('progress', e => {
  console.log(e);
});

Transito.on('postload', e => {
  console.log(e);
});

Transito.on('preload', e => {
  console.log(e);
});
```

### Basic example with options

```javascript
Transito.install('https://www.yourdomain.com', '#wrapper', 'a', {
  preload: false, // disables preloading on mouseover (default = true)
  cache: false, // disables caching of responses (default = true)
  minDuration: 2000, // sets minimum transition duration to 2 seconds (default = 800)
  classLoading: 'transitioning' // sets the class to be set on the body to "transitioning" (default = "loading")
});

```