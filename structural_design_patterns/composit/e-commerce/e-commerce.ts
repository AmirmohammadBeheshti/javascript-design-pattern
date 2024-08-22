interface IECommerceComponent {
    getName() : string
    getPrice() : number 
    getDescription() : string
}


class ECommerceItem implements IECommerceComponent {
    
    constructor(private readonly description : string , private readonly price : number , private readonly name : string){}

    getDescription(): string {
        this.description
    }

    getName(): string {
        this.name
    }

    getPrice(): number  {
        this.price
    }

}

class ECommerceComposit implements IECommerceComponent {

    private components : IECommerceComponent[] = []

    constructor(private readonly description : string ,  private readonly name : string){}

    getDescription(): string {
        this.description
    }

    add(payload : IECommerceComponent) : void {
            this.components.push(payload)
    }

    getName(): string {
        this.name
    }

    getPrice(): number {
        return this.components.reduce((total, component) => total + component.getPrice(), 0);
    }
}

const mainCategory = new ECommerceComposit('Main Category ( Root Category) ' , 'Main')

const shoesCategory = new ECommerceComposit('Shoes Category ' , 'Shoes')

const ElectronicCategory = new ECommerceComposit('Electronic Category ' , 'Electronic')

const shoes1 = new ECommerceItem('This is shoes 1' , 1000 , 'shoes1')
const shoes2 = new ECommerceItem('This is shoes 2' , 2000 , 'shoes2')

shoesCategory.add(shoes1)
shoesCategory.add(shoes2)

const electronic1 = new ECommerceItem('This is electronic 1' , 1000 , 'electronic1')
const electronic2 = new ECommerceItem('This is electronic 2' , 2000 , 'electronic2')

ElectronicCategory.add(shoes1)
ElectronicCategory.add(shoes2)

mainCategory.add(ElectronicCategory)
mainCategory.add(shoesCategory)

console.log(mainCategory);