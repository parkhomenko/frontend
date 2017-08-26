import orm from "orm";
import db_config from "./config/db_config.json";

const orm_db = orm.connect({
    host: db_config.host,
    database: db_config.database,
    user: db_config.user,
    password: db_config.password,
    protocol: db_config.protocol,
    port: db_config.port,
    query: {pool: true, debug: true}
}, error => {
    if (error) {
        return Console.error("Connection error: " + error);
    }
});

export default orm_db;
