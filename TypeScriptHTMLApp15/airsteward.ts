
class AirSteward extends Person {

    public originCountry: string;
    private _exYears: number;
    private _class: string;

    get class(): string {
        return this._class;
    }


    set class(cls: string) {
        if (cls == 'economy' || cls == 'first' || cls == 'bussiness') {
            this._class = cls;
        }
        else {
            this._class = 'economy';
        }
    }

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
        document.write(`${super.getInfo()}, <br/>originCountry :${this.originCountry}, <br/>experience years: ${this.exYears}, <br/>class:${this.class} <br/><br/> `);
    }
}