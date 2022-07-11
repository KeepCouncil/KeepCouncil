import app from '../src/app'

async function serverStart() {
  await app.start()
}

export default async () => await serverStart()
