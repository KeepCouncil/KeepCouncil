exports.seed = async function(knex) {
  const users = [{
      username: 'John Doe',
      email: 'johndoe@example.com',
      authId: 'auth0|62cdd72569e95f64be89a744',
      profilePictureUrl: 'https://pickaface.net/gallery/avatar/Garret22785730d3a8d5525.png',
      role: 'EDITOR',
    }, {
      username: 'Jane Doe',
      email: 'janedoe@example.com',
      authId: 'auth0|62cdd72569e95f64f134456756846',
      profilePictureUrl: 'https://pickaface.net/gallery/avatar/nfox.inc537df2da44c30.png',
      role: 'MODERATOR',
    }
  ]

  for (const user of users) {
    await knex('users')
    .insert({
      username: user.username,
      email: user.email,
      authId: user.authId,
      profilePictureUrl: user.profilePictureUrl,
    })
    .onConflict('email')
    .ignore()
  }
}
