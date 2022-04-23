import express from 'express';
import routes from './routes/routes'
const app = express();

app.use(express.static('../public'));
app.use("/", routes);

export default app;