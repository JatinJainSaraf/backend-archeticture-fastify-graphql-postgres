import pg from 'pg'
import {PG} from "../config.js";
import {Sequelize} from "sequelize";
import logger from "../lib/logger.js";

const options = {
    host: PG.host,
    port: PG.port,
    dialect: PG.dialect,
    logging: false,
    pool: {
        max: 20,
        min: 1,
        acquire: 30000,
        idle: 60000,
        evict: 10000,
    },
}
const sequelize = new Sequelize(PG.database, PG.username, PG.password, options );

sequelize.authenticate().then(()=>{
logger.info('Database connected------------------------')
}).catch((err)=>{
    logger.error('Database is not Connected-----------------------')
    logger.error(err)
})

export default sequelize