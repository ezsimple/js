"use strict"

const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  // 여기에 아까 저장해둔 Page access token을 넣는다
  token: 'EAARC2smk5DQBABjUmQaB5pQJrWAZBE3WA0NhjTfT4t00YeOGvvjw5tp7YwShUVolt9askz8W2RcjFteXbFZCXy8ZA3Vh30tNJJEMGRg8Tr5cI6XoZB0fIBju1XsVdbq4ZAuT9hp379G6mHhodNgF33WzYTZA16di8qDJinpqCZBqwZDZD',
  // 여기에 개인인증 검사 코드를 작성한다.
  verify: 'HelloMinoBot',
  // 아까 저장해둔 App secret token을 넣는다
  app_secret: '079029aec86683b2940cdc497a98576a'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text;

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      // console.log(`${profile.first_name} ${profile.last_name}: ${text} - MINHO`)
      // 여기서 죽는거 같은데 ... 
      // console.log(`${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT)
console.log('서버 뜸')
