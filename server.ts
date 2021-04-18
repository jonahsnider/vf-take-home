import dotenv from 'dotenv';

// load in environment variables from .env file
dotenv.config();

// eslint-disable-next-line import/first
import app from './src/app';

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(`\tApp is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
  console.log('\tPress CTRL-C to stop');
  console.log('');
});

export default server;
