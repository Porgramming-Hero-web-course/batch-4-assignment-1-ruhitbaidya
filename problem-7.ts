{
    //
    let date = new Date();

        class Car {
            make : string;
            model:string
            year:number

            constructor(make : string, model : string, year : number){
                this.make = make;
                this.model = model;
                this.year = year;
            }

            getCarAge(){
                console.log(`This Car Age Is ${date.getFullYear() - this.year}`) 
            }
        }

        const car = new Car("Honda", "Civic", 2018);
        car.getCarAge();
    //
}