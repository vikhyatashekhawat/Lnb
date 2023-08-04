


exports.checkOddEven = (req,res) =>{
    console.log(req.query)
    if(req.query.number%2==0){
        
        res.send(`<h1>${req.query.number} is even</h1>`)
    }
    else{
        
        res.send(`<h1>${req.query.number} is odd</h1>`)

    }


}


exports.checkPost = (req,res) => {
    console.log(req.body)
    res.send("hello")

}