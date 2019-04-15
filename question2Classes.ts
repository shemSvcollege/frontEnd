export class Date{
    private day:number;
    private month:number;
    private year:number;

    constructor(day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
    }

    addDayToDate(){
        this.day=+1;

        if (this.day>30){
            this.month++
            this.day=1;
        }

        if(this.month>12){
            this.year++;
            this.month=1;

        } 
        
        else{
            this.day++
        }
    }

    getDay():number{
        return this.day;
    }

    getMonth():number{
        return this.month;
    }
    
    getYear():number{
        return this.year;
    }

    getDate(){
        return this.day+"/"+this.month+"/"+this.year;
    }
}



export class PassengerCard extends Date{
    private cardNum:number;
    private flightNum:number;
    private airline:string;
    private dest:string;
    private depDate:Date;
    private rtnDate:Date;
    private cardvalue:number;

    constructor(cardNum, flightNum, airline, dest, depDate ,rtnDate , cardvalue){
        super(0, 0, 0);
        this.cardNum=cardNum;
        this.flightNum=flightNum;
        this.airline=airline;
        this.dest=dest;
        this.depDate=depDate;
        this.rtnDate=rtnDate;
        this.cardvalue=cardvalue;
  
    }

    getDest(){
        return this.dest;
    }

    getCardvalue(){
        return this.cardvalue;
    }

    setDepDate(newDepdate){
        this.depDate=newDepdate;
    }

    setRtnDate(newRtndate){
        this.rtnDate=newRtndate;
    }

    validateRtnDate(rtnDate){
        let flag=true;

        if(rtnDate.getYear()>this.depDate.getYear()){
            flag=true;
        }

        else{
            if(rtnDate.getYear()<this.depDate.getYear()){
                flag=false;

            }

            else if(rtnDate.getYear()==this.depDate.getYear()){
                if(rtnDate.getMonth()>this.depDate.getMonth()){
                    flag=true;
                }

                if(rtnDate.getMonth()<this.depDate.getMonth()){
                    flag=false;
                }

                else if(rtnDate.getMonth()==this.depDate.getMonth()){
                    if(rtnDate.getDay()>this.depDate.getDay()){
                        flag=true;
                    }

                    else{
                        flag=false;
                    }
                }
            }
        }
        if(flag==true){
            this.rtnDate=rtnDate;
        }
    }

    validateDeptDate(DeptDate){
        let flag=true;

        if(DeptDate.getYear()<this.rtnDate.getYear()){
            flag=true;
        }

        else{
            if(DeptDate.getYear()>this.rtnDate.getYear()){
                flag=false;

            }

            else if(DeptDate.getYear()==this.rtnDate.getYear()){
                if(DeptDate.getMonth()<this.rtnDate.getMonth()){
                    flag=true;
                }

                if(DeptDate.getMonth()>this.rtnDate.getMonth()){
                    flag=false;
                }

                else if(DeptDate.getMonth()==this.rtnDate.getMonth()){
                    if(DeptDate.getDay()<this.rtnDate.getDay()){
                        flag=true;
                    }

                    else{
                        flag=false;
                    }
                }
            }
        }
        if(flag==true){
            this.depDate=DeptDate;
        }
    }
}

    

export class Flight {
    private flightNum:number
    private PassArr : Passenger[];
    private sits:number;
    private dest:string;
    private depDate:string;
    private rtnDate:string;

    constructor(flightNum, passArr, sits, dest, depdate, rtndate){
        this.flightNum=flightNum;
        this.PassArr=passArr;
        this.sits=sits;
        this.dest=dest;
        this.depDate=depdate;
        this.rtnDate=rtndate;
    }

    checkifFreeChair(Passenger:Passenger){
        if(this.sits > this.PassArr.length){
            for(let i=0 ; i<this.PassArr.length; i++){
                if(Passenger.getDest() == this.dest && Passenger.getDate()==this.depDate){
                    this.PassArr.push()
                }
                else{
                    alert('could not found this flight')
                }
            }
        }

        else{
            alert('Flight fully booked');
        }
    }

    changeDates(depDate, rtnDate){
        for (let i=0 ; i<this.PassArr.length ; i++){
            this.PassArr[i].setDepDate(depDate);
            this.PassArr[i].setRtnDate(rtnDate);
        }
    }

    sortPassengers(){
        let temp:Passenger
        let flag=false

        for (let i=0 ; i<this.PassArr.length-1; i++){
            for(let k=1; k<this.PassArr.length ; k++){
                for(let j=0, n=0 ; j<this.PassArr[i].getFullName.length, n<this.PassArr[k].getFullName.length ; j++, n++){
                    if(this.PassArr[i].getFullName().charAt(j)< this.PassArr[k].getFullName().charAt(n)){
                        flag=true

                    }
                    else{
                        temp=this.PassArr[i];
                        this.PassArr[i]=this.PassArr[k];
                        this.PassArr[k]=temp
                    }
                }
            }
        }
    }
}





export class Passenger extends PassengerCard {
    private id:number
    private fullName:string;
    private passportExpDate:Date;
    private money:number;
    private passengerCard:PassengerCard[];
   
    

    constructor(cardNum, flightNum , airline , dest , depDate , rtnDate, cardvalue, id, fullName, passengerCard){
        super(cardNum , flightNum , airline , dest , depDate , rtnDate, cardvalue);
        this.id = id;
        this.fullName=fullName;
        this.passengerCard=passengerCard;
    }



    ifCanPurch(){
      

    }

    getDest(){
        return super.getDest()
    }

    getDate(){
        return super.getDate()
    }
    getFullName(){
        return this.fullName;
    }

    setName(name){
        this.fullName = name;
    }

    passToRtnDays(passExpDate, rtnDate){
        let delta
        let years
        let months
        let days 
        
        years = passExpDate.getYear()-rtnDate.getYear();
        months = passExpDate.getMonth()-rtnDate.getMonth();
        days = passExpDate.getDay()-rtnDate.getDay();
        delta = (years*365)+(months*30)+days;
        
        if(delta>180){
            return true;
        }
        else{
            return false;
        }
    }

    checkIfCanBuy(PassCard: PassengerCard) {
        for (let i = 0; i < this.passengerCard.length; i++) {
            if (this.money > PassCard.getCardvalue()) {
                this.passengerCard.pop();
                this.passengerCard.push(PassCard);
            }
        }
    }

}



