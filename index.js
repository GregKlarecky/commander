class Commander {
  on(command, callback) {
    const [first, second, ...inputs] = process.argv;
    const filteredInputs = inputs.filter(input => input.includes("--"));
    const options = filteredInputs.reduce((acc, cur) => {
      const pair = cur.replace("--", "").split("=");
      acc[pair[0]] = pair[1];
      return acc;
    }, {});
    if (inputs[0] === command) {
      callback(options);
    }
  }
}

module.exports = Commander;
