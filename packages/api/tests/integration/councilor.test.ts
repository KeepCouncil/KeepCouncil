import { setupTest, stripIds, stripId, apiGet, apiPost, BASE_URL } from '../testUtils'

describe('councilor API', () => {
  setupTest(this)

  describe('when asking for all councilors', () => {
    let initialCouncilors

    beforeEach(async () => {
        initialCouncilors = (await apiGet(BASE_URL, 'councilors')).data.payload
    })

    test('should return florissant councilors as default data', async () => {
        expect(initialCouncilors.map(c => c.name)).toStrictEqual([
            'Andrew Harris',
            'Paul Manganelli',
            'Joseph Eagan',
            'Jeff Caputa',
            'Keith Schildroth',
            'Patrick Mulcahy',
            'Jackie Pagano',
            'Robert Parson Jr',
            'Tommy Siam',
        ])
    })

    test('should return terms with councilors', async () => {
        const seedTermForAndrewHarris = {
            id: 1,
            start: (new Date(2022, 6, 8)).toISOString(),
            end: (new Date(2024, 6, 8)).toISOString(),
            townId: 1,
            districtId: 1,
        }
        expect(initialCouncilors.find(c => c.name === 'Andrew Harris').terms[0])
            .toEqual(expect.objectContaining(seedTermForAndrewHarris))
    })
  })
})
