process.stdout.write("prompt > ");

const pwd = require("./pwd");
const ls = require("./ls");

process.stdin.on("data", data => {
	
  if (data === "pwd") {
		pwd();
	} else if (data === "ls") {
		ls();
	}
}



