module.exports = function() {
  process.stdin.on("data", data => {
    const cmd = `Current directory: ${process.cwd()}`;

    process.stdout.write(cmd);
    process.stdout.write("\nprompt > ");
  });
};
