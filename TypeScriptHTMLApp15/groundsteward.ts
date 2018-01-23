
class GroundSteward extends Person {

    public originCountry: string;
    private _exYears: number;
    public job: string;

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
        document.write(`${super.getInfo()}, <br/>originCountry :${this.originCountry}, <br/>experience years: ${this.exYears}, <br/>job:${this.job} <br/><br/> `);
    }
}