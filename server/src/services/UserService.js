import { BaseService } from "./BaseService";
import User from "../models/User";

export class UserService extends BaseService {
    constructor({ User }) {
        super(User);
    }
}