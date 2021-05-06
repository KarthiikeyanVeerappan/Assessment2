class Salary {

    constructor(Salary, Shifts) {
      this.Salary = Salary;
      this.Shifts = Shifts
    }
  
    CalaculateSalary() {
      var OutputResult ="";
      if(this.Salary>8000){
        OutputResult = "Salary too large.."
      }
      if(this.Salary<=0){
        OutputResult = OutputResult +"\n Salary too small..."
      }
      if(this.Shifts<=0)
      {
        OutputResult=OutputResult +" \n Shift too small..";
      }

      const FoodExpense = ((this.Salary/100)*20);
      const TravelExpense = ((this.Salary/100)*30);
      const Shiftsalary = Math.round((this.Shifts) * (((this.Salary/30)/100)*2));

      OutputResult = OutputResult + "\n Total saving salary is " 
      + (FoodExpense + TravelExpense + Shiftsalary);

      console.log(OutputResult);
    }
  
  }
  
  // Usage:
  let UserSalary = new Salary(8000,0);
  UserSalary.CalaculateSalary();