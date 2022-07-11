exports.seed = async function(knex) {
  const users = [
    {username: 'John Doe', email: 'johndoe@example.com'},
    {username: 'Jane Doe', email: 'janedoe@example.com'}
  ]

  for (const user of users) {
    await knex('users')
    .insert({
      username: user.username,
      email: user.email,
    })
    .onConflict('email')
    .ignore()
  }
}
