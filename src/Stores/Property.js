import { makeObservable, observable } from 'mobx'

export default class Property {
    constructor(property) {
        this.id = property.id
        this.img = property.img
        this.addres = property.addres
        this.roomNum = property.roomNum
        this.bathroom = property.bathroom
        this.maxGustes = property.maxGustes
        this.pool = property.pool
        this.ac = property.ac
        this.wifi = property.wifi
        this.pool = property.pool
        this.kitchen = property.kitchen
        this.owner = property.owner
        this.todoList = []
        
        makeObservable(this, {
            id: observable,
            img: observable,
            addres: observable,
            roomNum: observable,
            bathroom: observable,
            maxGustes: observable,
            pool: observable,
            ac: observable,
            wifi: observable,
            pool: observable,
            kitchen: observable,
            owner: observable
        })
    }
}