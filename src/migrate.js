'use strict';
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { NODE_ENV } from './config.js';

const basename = path.basename(__filename);
const env = NODE_ENV || 'development';
const db = {};
import { sequelize } from './data-access/connection-manager.js';

fs.readdirSync(__dirname)
    .filter(file => {
      return (
          file.indexOf('.') !== 0 &&
          file !== basename &&
          file.slice(-3) === '.js' &&
          file.indexOf('.test.js') === -1
      );
    })
    .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize);
      db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
