import colors from 'colors';
import app from './app';

const port = process.env.PORT || 4001;
const host = process.env.HOSTNAME || 'localhost';
app.listen(port, host, () => {
    console.log('Express JS'.blue.italic.bold);
    console.log(`Server ON - http://${host}:${port}`.green.bold)
});
