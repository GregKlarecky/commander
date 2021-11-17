# Usage

In your code:

```javascript
const Commander = require("commander");
const commander = new Commander();

commander.on("build", params => {
  // perform your logic ...
});
```

Then in you console:
`node [filename] [command] --[optionName]=[optionValue]`

For example:

`node index.js build --paramA=someValue --paramB=antoherVale --paramC=123`
