const { useState, use } = require("react");


//static 
const[counter,setCounter]=useState(0);   //[]-> array destructuring

const[...fileds]=useState([1,2,445,66,5,5,55,4,3,33,]) // to store infite items

// dynamic data
const[product,setproduct]=useState([]);
const addProduct=()=>{
    const produc_items=['regrigertor','AC','TV','PC'];
    setproduct([...product,...produc_items])
}
// props -> Object(Predefined Objects)->
//1.Pass the propertirs of inr compoenent to anther compomnet (data)
//2. Unidirectional->
        // ->Parent to child -> that componennt -> set the data 
        // ->child to parent -> data(properties)-> accept data-> child

        // the data-> parent to Child-> not abke to Override the data(CHild)








        