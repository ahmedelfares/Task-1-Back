const fs = require("fs") 

const addPerson = ( id , name , city ) => {
    const allData = loadData()
    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })
    if (duplicatedData.length == 0) {
        allData.push({
            id : id ,
            name : name , 
            city : city
         })
    
         saveData(allData)
    }
    else (
        console.log("Error Duplicated Data")
    )
    }

     

// Fun LoadData
const loadData = () => {
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}

// Fun SaveData 
const saveData = (allData) => {
    const DataObj = JSON.stringify(allData)
    fs.writeFileSync("data.json" , DataObj )
}

//////////////////////////////////////////
// Delete Data 
const deleteData = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    }) 
    saveData(dataToKeep)
}

///////////////////////////////////////
// Read Data 
const readData = (id) => {
    const allData = loadData() 
    const objNeed = allData.find((obj) => {
        return obj.id === id
    })
    if (objNeed) {
        console.log(objNeed)
    }else {
        console.log("Not Found")
    }
}

////////////////////////////////////
// List Data  ( Name   City )

const listData = () => {
    const allData = loadData() 
    allData.forEach((obj) => {
        console.log( obj.name , obj.city )
    });
}


module.exports = {
    addPerson ,
    deleteData ,
    readData ,
    listData
}










