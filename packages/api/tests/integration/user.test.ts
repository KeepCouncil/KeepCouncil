import { setupTest, apiGet, BASE_URL } from '../testUtils'

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

})
