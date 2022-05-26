import express, { Application } from 'express';

const app: Application = express();
const PORT: number = 3999;

require('./routes/cep/cep.routes')(app);

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});