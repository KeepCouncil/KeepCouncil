import { setupTest, stripIds,apiGet, apiPost, BASE_URL } from '../testUtils'

describe('user API', () => {
  setupTest(this)

  describe('when asking for all users', () => {
    test('should return all users', async () => {
      const seedUsers = (await apiGet(BASE_URL, 'users')).data.payload
      expect(seedUsers.map(u => u.email)).toStrictEqual([
        'johndoe@example.com',
        'janedoe@example.com'
      ])
    })
  })

  describe('when creating a new user', () => {
    test('should create a user', async () => {
      const user = { username: 'Billy Boy', email: 'billyboy@example.com' }
      await apiPost(BASE_URL, 'users', user)
      const users = stripIds((await apiGet(BASE_URL, 'users')).data.payload)
      expect(users.find(u => u.email === user.email)).toStrictEqual(user)
    })
  })
})
