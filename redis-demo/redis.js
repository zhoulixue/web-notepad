const { createClient } = require('redis')

const client = createClient({
  socket: {
    port: 6379,
    host: 'localhost',
  },
  username: 'default',
  password: '123456'
});

client.on('error', (err) => console.log('Redis Client Error', err));

async function fn() {
  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');

  console.log(value)
  await client.disconnect();
}

fn()
