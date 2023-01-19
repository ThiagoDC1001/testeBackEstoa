'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
    [
      {
        name: 'Thiago Bolinha',
        email: 'thiago@teste.com',
        type: true,
        password: '$2a$10$d6FSIaMgJ84XQPfnNFkrp.tDUOqtzKBJmhT1npclpUm2Au1QnKWL2',
        phoneNumber: '123456789',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
  },
      {
        name: 'Erika Pedrinha',
        email: 'erika@teste.com',
        type: false,
        password: '$2a$10$RlBAt.JdkQKyBpGFT2ATAuu0jSwW4LdWfeIZxjLuNbqUVeJEVAPoS',
        phoneNumber: '987654321',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
