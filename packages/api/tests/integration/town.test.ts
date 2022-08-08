import { setupTest, stripIds, stripId, apiGet, apiPost, BASE_URL } from '../testUtils'

describe('town API', () => {
  setupTest(this)

  describe('when asking for all towns', () => {
    let initialTown

    beforeEach(async () => {
      initialTown = (await apiGet(BASE_URL, 'towns')).data.payload[0]
    })

    test('should return florissant as default data', async () => {
      expect(initialTown).toStrictEqual({
        id: 1,
        name: 'City of Florissant',
        aliases: [
          { id: 1, name: 'Florissant' },
          { id: 2, name: 'Flo' },
        ],
        state: { id: 25, name: 'Missouri', abbreviation: 'MO' },
        districts: [
          { id: 1, name: '1', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [
            { id: 1, name: 'Ward 1' },
          ]},
          { id: 2, name: '2', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [
            { id: 2, name: 'Ward 2' },
          ]},
          { id: 3, name: '3', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [] },
          { id: 4, name: '4', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [] },
          { id: 5, name: '5', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [] },
          { id: 6, name: '6', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [] },
          { id: 7, name: '7', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [] },
          { id: 8, name: '8', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [] },
          { id: 9, name: '9', imageUrl: 'https://i.imgur.com/s584tBa.png', mapLink: null, aliases: [] },
        ],
        imageUrl: 'https://www.florissantmo.com/egov/images/1604605776_45191.jpg',
        mapLink: 'https://www.google.com/maps/place/Florissant,+MO/@38.7996442,-90.3726643,13z/data=!3m1!4b1!4m5!3m4!1s0x87df3633ce36d95d:0x38009b30db3b13b5!8m2!3d38.789217!4d-90.322614',
      })
    })
  })
})
