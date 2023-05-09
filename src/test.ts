interface IAnimal {
    name: string
    age: number
}

class Cat implements IAnimal {
    name: string

    constructor(name: string) {
        this.name = name
    }
}