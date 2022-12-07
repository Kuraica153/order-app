export class BaseService {
    
    constructor({ model }) {
        this._model = model;
    }
    
    async getAll() {
        return await this.model.find();
    }
    
    async getById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndRemove(id);
    }

}