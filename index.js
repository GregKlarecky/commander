const commander = {
  on(command, callback) {
    const [first, second, ...inputs] = process.argv;
    if (inputs[0] === command) {
      const filteredInputs = inputs.filter(input => input.includes("--"));
      const options = filteredInputs.reduce((acc, cur) => {
        const pair = cur.replace("--", "").split("=");
        acc[pair[0]] = pair[1];
        return acc;
      }, {});
      callback(options);
    }
  }
};

module.exports = commander;
