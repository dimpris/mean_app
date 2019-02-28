/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://vntumongo:e4Og0O37HyK4D9T@cluster0-shard-00-00-frshe.mongodb.net:27017,cluster0-shard-00-01-frshe.mongodb.net:27017,cluster0-shard-00-02-frshe.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
}
Object.seal(Constants);
export = Constants;