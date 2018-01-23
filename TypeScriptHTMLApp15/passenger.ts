
class Passenger extends Person {

    public passportNumber: string;

    public getInfo(): void {
        document.write(`${super.getInfo()}, <br/>passportNumber :${this.passportNumber} <br/><br/> `);
    }
}
