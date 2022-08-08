exports.seed = async function(knex) {
  const users = [{
      username: 'John Doe',
      email: 'johndoe@example.com',
      authId: 'auth0|62bmnmbkkljk89a744',
      profilePictureUrl: 'https://pickaface.net/gallery/avatar/Garret22785730d3a8d5525.png',
      roles: ['EDITOR'],
    }, {
      username: 'Jane Doe',
      email: 'janedoe@example.com',
      authId: 'auth0|62c343456456hgfjbe89a796',
      profilePictureUrl: 'https://pickaface.net/gallery/avatar/nfox.inc537df2da44c30.png',
      roles: ['EDITOR','MODERATOR'],
    }
  ]

  for (const user of users) {
    await knex('users')
    .insert({
      username: user.username,
      email: user.email,
      authId: user.authId,
      profilePictureUrl: user.profilePictureUrl,
      roles: user.roles,
    })
    .onConflict('email')
    .ignore()
  }

  const states = [{ 'name': 'Alabama', 'abbreviation': 'AL' }, { 'name': 'Alaska', 'abbreviation': 'AK' }, { 'name': 'Arizona', 'abbreviation': 'AZ' }, { 'name': 'Arkansas', 'abbreviation': 'AR' }, { 'name': 'California', 'abbreviation': 'CA' }, { 'name': 'Colorado', 'abbreviation': 'CO' }, { 'name': 'Connecticut', 'abbreviation': 'CT' }, { 'name': 'Delaware', 'abbreviation': 'DE' }, { 'name': 'Florida', 'abbreviation': 'FL' }, { 'name': 'Georgia', 'abbreviation': 'GA' }, { 'name': 'Hawaii', 'abbreviation': 'HI' }, { 'name': 'Idaho', 'abbreviation': 'ID' }, { 'name': 'Illinois', 'abbreviation': 'IL' }, { 'name': 'Indiana', 'abbreviation': 'IN' }, { 'name': 'Iowa', 'abbreviation': 'IA' }, { 'name': 'Kansas', 'abbreviation': 'KS' }, { 'name': 'Kentucky', 'abbreviation': 'KY' }, { 'name': 'Louisiana', 'abbreviation': 'LA' }, { 'name': 'Maine', 'abbreviation': 'ME' }, { 'name': 'Maryland', 'abbreviation': 'MD' }, { 'name': 'Massachusetts', 'abbreviation': 'MA' }, { 'name': 'Michigan', 'abbreviation': 'MI' }, { 'name': 'Minnesota', 'abbreviation': 'MN' }, { 'name': 'Mississippi', 'abbreviation': 'MS' }, { 'name': 'Missouri', 'abbreviation': 'MO' }, { 'name': 'Montana', 'abbreviation': 'MT' }, { 'name': 'Nebraska', 'abbreviation': 'NE' }, { 'name': 'Nevada', 'abbreviation': 'NV' }, { 'name': 'New Hampshire', 'abbreviation': 'NH' }, { 'name': 'New Jersey', 'abbreviation': 'NJ' }, { 'name': 'New Mexico', 'abbreviation': 'NM' }, { 'name': 'New York', 'abbreviation': 'NY' }, { 'name': 'North Carolina', 'abbreviation': 'NC' }, { 'name': 'North Dakota', 'abbreviation': 'ND' }, { 'name': 'Ohio', 'abbreviation': 'OH' }, { 'name': 'Oklahoma', 'abbreviation': 'OK' }, { 'name': 'Oregon', 'abbreviation': 'OR' }, { 'name': 'Pennsylvania', 'abbreviation': 'PA' }, { 'name': 'Rhode Island', 'abbreviation': 'RI' }, { 'name': 'South Carolina', 'abbreviation': 'SC' }, { 'name': 'South Dakota', 'abbreviation': 'SD' }, { 'name': 'Tennessee', 'abbreviation': 'TN' }, { 'name': 'Texas', 'abbreviation': 'TX' }, { 'name': 'Utah', 'abbreviation': 'UT' }, { 'name': 'Vermont', 'abbreviation': 'VT' }, { 'name': 'Virginia', 'abbreviation': 'VA' }, { 'name': 'Washington', 'abbreviation': 'WA' }, { 'name': 'West Virginia', 'abbreviation': 'WV' }, { 'name': 'Wisconsin', 'abbreviation': 'WI' }, { 'name': 'Wyoming', 'abbreviation': 'WY' }]
  for (const state of states) {
    await knex('states')
    .insert({
      name: state.name,
      abbreviation: state.abbreviation,
    })
    .onConflict(['name', 'abbreviation'])
    .ignore()
  }

  const towns = [{
    name: 'City of Florissant',
    imageUrl: 'https://www.florissantmo.com/egov/images/1604605776_45191.jpg',
    mapLink: 'https://www.google.com/maps/place/Florissant,+MO/@38.7996442,-90.3726643,13z/data=!3m1!4b1!4m5!3m4!1s0x87df3633ce36d95d:0x38009b30db3b13b5!8m2!3d38.789217!4d-90.322614',
    stateId: 25, // missouri
  }]

  for (const town of towns) {
    await knex('towns')
    .insert({
      name: town.name,
      imageUrl: town.imageUrl,
      mapLink: town.mapLink,
      stateId: town.stateId,
    })
    .onConflict(['name', 'stateId'])
    .ignore()
  }

  const townAliases = [{
      name: 'Florissant',
      townId: 1 // City of Florissant
    }, {
      name: 'Flo',
      townId: 1 // City of Florissant
    },
  ]

  for (const ta of townAliases) {
    await knex('townAliases')
    .insert({
      name: ta.name,
      townId: ta.townId,
    })
    .onConflict(['name', 'townId'])
    .ignore()
  }

  const districts = [{
    name: '1',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '2',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '3',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '4',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '5',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '6',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '7',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '8',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }, {
    name: '9',
    townId: 1, // florissant
    imageUrl: 'https://i.imgur.com/s584tBa.png',
  }]

  for (const district of districts) {
    await knex('districts')
    .insert({
      name: district.name,
      imageUrl: district.imageUrl,
      mapLink: district.mapLink,
      townId: district.townId,
    })
    .onConflict(['name', 'townId'])
    .ignore()
  }

  const districtAliases = [{
      name: 'Ward 1',
      districtId: 1 // Flo district 1
    }, {
      name: 'Ward 2',
      districtId: 2 // Flo district 2
    },
  ]

  for (const da of districtAliases) {
    await knex('districtAliases')
    .insert({
      name: da.name,
      districtId: da.districtId,
    })
    .onConflict(['name', 'districtId'])
    .ignore()
  }

  const councilors = [
    {
      name: 'Andrew Harris',
      publicPhone: 3142469150,
      publicEmail: 'ward1@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1528214731_94579_o.jpg',
    },
    {
      name: 'Paul Manganelli',
      publicPhone: 3146066578,
      publicEmail: 'ward2@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1580506340_89405_o.jpg',
    },
    {
      name: 'Joseph Eagan',
      publicPhone: 3143956838,
      publicEmail: 'ward3@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1374118529_77162_o.jpg',
    },
    {
      name: 'Jeff Caputa',
      publicPhone: 3142391568,
      publicEmail: 'ward4@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1374118528_70746_o.jpg',
    },
    {
      name: 'Keith Schildroth',
      publicPhone: 3148392927,
      publicEmail: 'ward5@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1646143820_77501.png',
    },
    {
      name: 'Patrick Mulcahy',
      publicPhone: 3146061991,
      publicEmail: 'ward6@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1600958835_79585_o.jpg',
    },
    {
      name: 'Jackie Pagano',
      publicPhone: 3148371315,
      publicEmail: 'ward7@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1374118534_00003_o.jpg',
    },
    {
      name: 'Robert Parson Jr',
      publicPhone: 3144222050,
      publicEmail: 'ward8@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1503671967_49692_o.jpg',
    },
    {
      name: 'Tommy Siam',
      publicPhone: 3147572594,
      publicEmail: 'ward9@florissantmo.com',
      imageUrl: 'https://www.florissantmo.com/egov/images/1430163995_87574_o.jpg',
    },
  ]

  for (const councilor of councilors) {
    await knex('councilors')
    .insert({
      name: councilor.name,
      publicEmail: councilor.publicEmail,
      publicPhone: councilor.publicPhone,
    })
    .onConflict(['name', 'publicEmail'])
    .ignore()
  }

  const TermDate1 = new Date(2022, 6, 8)
  const TermDate2 = new Date(2024, 6, 8)
  const TermDate3 = new Date(2026, 6, 8)

  const terms = [
    {
      start: TermDate1,
      end: TermDate2,
      councilorId: 1,
      townId: 1,
      districtId: 1,
    },
    {
      start: TermDate1,
      end: TermDate2,
      councilorId: 2,
      townId: 1,
      districtId: 2,
    },
    {
      start: TermDate2,
      end: TermDate3,
      councilorId: 3,
      townId: 1,
      districtId: 3,
    },
    {
      start: TermDate1,
      end: TermDate2,
      councilorId: 4,
      townId: 1,
      districtId: 4,
    },
    {
      start: TermDate1,
      end: TermDate2,
      councilorId: 5,
      townId: 1,
      districtId: 5,
    },
    {
      start: TermDate1,
      end: TermDate2,
      councilorId: 6,
      townId: 1,
      districtId: 6,
    },
    {
      start: TermDate2,
      end: TermDate3,
      councilorId: 7,
      townId: 1,
      districtId: 7,
    },
    {
      start: TermDate2,
      end: TermDate3,
      councilorId: 8,
      townId: 1,
      districtId: 8,
    },
    {
      start: TermDate1,
      end: TermDate2,
      councilorId: 9,
      townId: 1,
      districtId: 9,
    },
  ]

  for (const term of terms) {
    await knex('terms')
    .insert({
      start: term.start,
      end: term.end,
      councilorId: term.councilorId,
      townId: term.townId,
      districtId: term.districtId,
    })
    .onConflict(['start', 'end', 'councilorId', 'townId', 'districtId'])
    .ignore()
  }
}
