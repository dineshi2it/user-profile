var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    avatar    : { type: 'text'},
    passports : { collection: 'Passport', via: 'user' }
  }
};

module.exports = User;
