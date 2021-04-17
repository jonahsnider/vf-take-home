import app from './app';

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(`\tApp is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
  console.log('\tPress CTRL-C to stop');
  console.log('');
});

export default server;
