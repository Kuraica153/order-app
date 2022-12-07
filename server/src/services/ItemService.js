import { BaseService } from "./BaseService";
import { Item } from "../models/Item";

export class ItemService extends BaseService {
    constructor({ Item }) {
        super(Item);
    }
}