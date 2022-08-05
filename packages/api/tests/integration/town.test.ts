import { setupTest, stripIds, stripId, apiGet, apiPost, BASE_URL } from '../testUtils'

describe('town API', () => {
  setupTest(this)

  describe('when asking for all towns', () => {
    let initialTown

    beforeEach(async () => {
      initialTown = (await apiGet(BASE_URL, 'towns')).data.payload[0]
    })

    test('should return florissant as default data', async () => {
      expect(stripId(initialTown)).toStrictEqual({
        name: 'City of Florissant',
        aliases: ['Flo', 'Florissant'],
        state: { name: 'Missouri', abbreviation: 'MO' },
        imageUrl: 'https://www.florissantmo.com/egov/images/1604605776_45191.jpg',
        mapLink: 'https://www.google.com/maps/place/Florissant,+MO/@38.7996442,-90.3726643,13z/data=!3m1!4b1!4m5!3m4!1s0x87df3633ce36d95d:0x38009b30db3b13b5!8m2!3d38.789217!4d-90.322614',
      })
    })
  })
})
