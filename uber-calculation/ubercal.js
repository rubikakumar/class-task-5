class UberPrice {
    constructor(baseFareprice, costPerKm) {
      this.baseFareprice = baseFareprice;
      this.costPerKm = costPerKm;
    }
  
    calculatePrice(distanceInKm) {
      const totalPrice = this.baseFareprice + distanceInKm * this.costPerKm;
      return totalPrice;
    }
  }
  
  const baseFareprice = 7; 
  const costPerKm = 3; 
  const rideCalculation = new UberPrice(baseFareprice, costPerKm);
  
  const totalDistanceTraveled = 15; 
  const totalFare = rideCalculation.calculatePrice(totalDistanceTraveled);
  console.log(`The total price for a ${totalDistanceTraveled} km Uber ride is $${totalFare}`);