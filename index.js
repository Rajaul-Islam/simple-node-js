const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;




app.get('/', (req, res) => {
    res.send('Hello from node ki kos ');
});
const users=[
    {id:1,name:"purnima", phone:23423423, email:'purnima@gmail.com'},
    {id:2,name:"bobita", phone:23423423,email:"babita@gmail.com"},
    {id:3,name:"rozina", phone:23423423,email:'rozina@gmail.com'}

]
app.get('/users',(req,res)=>{
    const search=req.query.search
    if(search){
        const searchResult =users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
       res.send(users) 
    }
    
})
// app.METHOD
app.post('/users',(req,res)=>{
const newUser=req.body;
newUser.id=users.length;
users.push(newUser);
res.send(JSON.stringify(newUser))
res.json(newUser);

    console.log('hitting the post',req.body)
    res.send('inside post');
})


//dynamic api
app.get('/users/:id', (req,res)=>{
    const id =req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})