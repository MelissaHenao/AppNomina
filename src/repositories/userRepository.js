const pool = require('./dbConection')
const userRepository = {}

userRepository.getUser = (username, password) => {
  const context =  pool()
  return context.query('select * from users where username=$1 and password=$2',[username,password])
}

module.exports = userRepository;