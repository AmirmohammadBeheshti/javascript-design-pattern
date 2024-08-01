class House {
    private address: string;
    private bedrooms: number;
    private hasGarden: boolean;
    private hasGarage: boolean;
  
    constructor(houseBuilder: HouseBuilder) {
      (this.address = houseBuilder.address),
        (this.bedrooms = houseBuilder.bedrooms),
        (this.hasGarden = houseBuilder.hasGarden),
        (this.hasGarage = houseBuilder.hasGarage);
    }
  
    get bedroomNumber() {
      return this.bedrooms;
    }
  }
  
  class HouseBuilder {
    public address: string = "";
    public bedrooms: number = 0;
    public hasGarden: boolean = false;
    public hasGarage: boolean = false;
  
    public setAddress(address: string): HouseBuilder {
      this.address = address;
      return this;
    }
  
    public setBedroom(bedroom: number): HouseBuilder {
      this.bedrooms = bedroom;
      return this;
    }
  
    public setGarden(hasGarden: boolean): HouseBuilder {
      this.hasGarage = hasGarden;
      return this;
    }
  
    public setGarage(hasGarage: boolean): HouseBuilder {
      this.hasGarden = hasGarage;
      return this;
    }
  
    public build(): House {
      return new House(this);
    }
  }
  
  const houseBuilder = new HouseBuilder()
    .setAddress("American")
    .setBedroom(2)
    .setGarage(true)
    .setGarage(false);
  
  console.log(houseBuilder);
  