import app from '../src/app'

async function serverStop() {
  await app.stop()
}

export default async () => await serverStop()
