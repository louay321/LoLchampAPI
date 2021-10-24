module.exports = function(app, db){
    // POST route to add champions
    app.post('/add', (req, res)=>{
        
        const champ = {name: req.body.name, type: req.body.type, difficulty: req.body.difficulty};
        console.log(champ);
        const collection = db.collection("names");
        collection.insertOne(champ, (err, results) =>{
            if (err) {
                res.send({ 'error': 'Error occured while adding champion'});
            }
            else{
                res.send(results);
            }
        });
    });
    // GET route to retreive champion's based on name
    app.get('/get:name', (req, res) =>{
        const collection = db.collection("names");
        collection.findOne({ name: req.params.name
        }, (err, results)=> {
            if (err) { res.send({'error': 'Error occured while retreiving data'}); }
            else{ res.json(results) }
        });
    });
}