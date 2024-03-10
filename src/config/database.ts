import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './FileDB/myDB.db'
});

export default sequelize;
