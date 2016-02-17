import convict from 'convict';

const configuration = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 0,
    env: 'PORT'
  },
  host: {
    doc: 'Server host name.',
    format: String,
    default: 'localhost',
    env: 'HOST'
  }
});
const env = configuration.get('env');

configuration.loadFile('./server/config/' + env + '.json');
configuration.validate({strict: true});
export default configuration;
