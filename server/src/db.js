import orm from "orm";

const orm_db = orm.connect({
    host: "localhost",
    database: "blog",
    user: "root",
    password: "root",
    protocol: "mysql",
    port: "3306",
    query: {pool: true, debug: true}
}, error => {
    if (error) {
        return Console.error("Connection error: " + error);
    }
});

export default orm_db;
