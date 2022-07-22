import { setupTest, stripIds, stripId, apiGet, apiPost, BASE_URL } from '../testUtils'

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
    test('should create a user with default EDITOR roles', async () => {
      const user = {
        username: 'Billy Boy',
        email: 'billyboy@example.com',
        authId: 'auth0|abcdefghijklmnopqrstuvwxyz12345',
        profilePictureUrl: 'https://pickaface.net/gallery/avatar/nfox.inc537df2da44c30.png',
      }
      await apiPost(BASE_URL, 'users', user)
      const users = stripIds((await apiGet(BASE_URL, 'users')).data.payload)
      expect(users.find(u => u.email === user.email)).toStrictEqual({...user, roles: ['EDITOR']})
    })

    test('should return new user from user create', async () => {
      const billy = {
        username: 'Billy Boy',
        email: 'billyboy@example.com',
        authId: 'auth0|abcdefghijklmnopqrstuvwxyz12345',
        profilePictureUrl: 'https://pickaface.net/gallery/avatar/nfox.inc537df2da44c30.png',
      }
      const createUserResponsePayload = stripId((await apiPost(BASE_URL, 'users', billy)).data.payload)
      expect(createUserResponsePayload).toStrictEqual({...billy, roles: ['EDITOR']})
    })

    test('should get a single user by authId', async () => {
      const authId = 'auth0|abcdefghijklmnopqrstuvwxyz12345'
      const billy = {
        username: 'Billy Boy',
        email: 'billyboy@example.com',
        authId,
        profilePictureUrl: 'https://pickaface.net/gallery/avatar/nfox.inc537df2da44c30.png',
      }
      await apiPost(BASE_URL, 'users', billy)
      const user = stripId((await apiGet(BASE_URL, `users/${authId}`)).data.payload)
      expect(user).toStrictEqual({...billy, roles: ['EDITOR']})
    })
  })
})
