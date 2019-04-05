import RepositoryBase = require("./BaseRepository");
import IThingModel = require("../model/interfaces/IThingModel");
import ThingSchema = require("./../dataAccess/schemas/ThingSchema");
class ThingRepository extends RepositoryBase<IThingModel> {
    constructor () {
        super(ThingSchema);
    }
}
Object.seal(ThingRepository);
export = ThingRepository;
