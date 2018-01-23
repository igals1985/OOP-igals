

class Pilot extends Person {

    public pilotLicenseNumber: string;
    private _exYears: number;

    get exYears(): number {
        return this._exYears;
    }


    set exYears(x: number) {
        if (x >= 0) {
            this._exYears = Math.floor(x);
        }
        else {
            this._exYears = 0;
        }
    }
    public getInfo(): void {
        document.write(`${super.getInfo()},<br/>pilotLicenseNumber :${this.pilotLicenseNumber}, <br/>experience years: ${this.exYears} <br/><br/> `);
    }
}
