const yargs = require("yargs")
const file = require("./data");
const { command } = require("yargs");
const { describe } = require("yargs");
const { demandOption } = require("yargs");


yargs.command({
    command : "add" ,
    describe : "to add an item" ,
    builder : {
        id : {
            describe : '' ,
            demandOption : true ,
            type : "number"
        }  ,
        name : {
            describe : '' ,
            demandOption : true ,
            type : "string"
        } 
    },
    handler: (argv) => {
        file.addPerson(argv.id, argv.name, argv.city);
    }
})

yargs.command ({
    command : "delete" ,
    describe : "" ,
    builder : {
        id : {
            describe : "" ,
            demandOption : true
        }
    } , 
    handler : (argv) => {
        file.deleteData(argv.id)
    }
})

yargs.command ({
    command : "read" , 
    describe : '' ,
    builder : {
        id : {
            describe : '' ,
            demandOption : true 
        }
    } , 
    handler : (argv) => {
        file.readData(argv.id)
    }
})

yargs.command ({
    command : "list" ,
    describe : "" ,
    handler : () => {
        file.listData()
    }
})

yargs.parse(); 



















