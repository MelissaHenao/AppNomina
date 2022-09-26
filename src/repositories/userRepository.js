const pool = require('./dbConection')
const userRepository = {}

userRepository.getUser = (username, password) => {
  const context =  pool()
  return context.query('select * from users where username=$1 and password=$2',[username,password])
}

userRepository.create = (users) => {
  const context =  pool()
  return context.query('insert into users (username, email, password) values ($1,$2,$3) RETURNING id',[users.username,users.email,users.password])
}

module.exports = userRepository;