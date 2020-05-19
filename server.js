const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const schema = require('./schema/schema')
const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql = true
}))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
app.listen(PORT => {
    console.log(`Localhost is listening in PORT ${PORT}`)
})