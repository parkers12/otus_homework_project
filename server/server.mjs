import app from './index.mjs';
import routes from './routes/routes.mjs';

const PORT = 3000;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`)
});