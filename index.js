console.log("Practica Node Js Primer Clase");

const sayhellos = require("./util/hello");
const os = require('os');

sayhellos("Necrodaimus how are you??" + "you are using " + os.platform+  " Version-"+ os.release);

const cpu = os.cpus();

for (let index = 0; index < cpu.length; index++) {
    const element = cpu[index];
    console.log(element);
}




