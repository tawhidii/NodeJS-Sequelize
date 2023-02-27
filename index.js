const express = require("express");
const app = express();
const models = require("./models");


models.sequelize.sync({ logging: false }).then(function () {
    console.log("> database has been synced");
}).catch(function (err) {
    console.log(" > there was an issue synchronizing the database", err);
});

app.get('/', async function (req, res) {
    const airplanes = await models.Airplane.findAll();
    res.status(200).send(airplanes);
});


app.get('/airplanes/:id', async function (req, res) {


    let airplane = await models.Airplane.findByPk(req.params.id);
    console.log(airplane);


    if (!airplane) {
        return res.status(404).send({ 'message': 'Not found !!' });
    }
    res.send(airplane);

})


app.listen(3000, function () {
    console.log("> express server has started");
})
