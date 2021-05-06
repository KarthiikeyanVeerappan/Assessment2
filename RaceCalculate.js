class Race {

    constructor(RaceKM) {
      this.RaceKM = RaceKM;
    }
  
    CalaculateAmount() {
      var OutputResult ="";
     console.log("input is: "+ this.RaceKM)

      if(this.RaceKM != undefined)
      {
        if(!Number.isInteger(this.RaceKM)) {
            OutputResult = "Invalid Input.."
        }
        else if(this.RaceKM<0)
        {
            OutputResult = "Invalid Input.."
        }
        else{
            const GetArrayList = Array.from(String(this.RaceKM), Number);
            var total=1
            for (const element of GetArrayList) {
                if(element !=0){
                    total = total * element;
                }
            }
            OutputResult = "Totsl Amout raced is: "+total;
        }
      }
      else
      {
        OutputResult = "Invalid Input..."
      }
      console.log(OutputResult);
    }
  
  }
  
  // Usage:
  let RaceAmount = new Race(123);
  RaceAmount.CalaculateAmount();