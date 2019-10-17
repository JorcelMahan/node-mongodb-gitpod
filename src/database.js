const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joma:joma@cluster0-d0mrf.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e));