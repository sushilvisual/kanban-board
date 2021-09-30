class Memeber {
    constructor(private id: string = '',private firstName: string = '', private lastName: string = '',
         private initial: string = '', private img: string = '') {
        
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    get image() {
        return this.img;
    }
    get memberInitial() {
        return this.initial;
    }
}

export { Memeber };