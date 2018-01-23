var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pilot = (function (_super) {
    __extends(Pilot, _super);
    function Pilot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Pilot.prototype, "exYears", {
        get: function () {
            return this._exYears;
        },
        set: function (x) {
            if (x >= 0) {
                this._exYears = Math.floor(x);
            }
            else {
                this._exYears = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Pilot.prototype.getInfo = function () {
        document.write(_super.prototype.getInfo.call(this) + ",<br/>pilotLicenseNumber :" + this.pilotLicenseNumber + ", <br/>experience years: " + this.exYears + " <br/><br/> ");
    };
    return Pilot;
}(Person));
//# sourceMappingURL=pilot.js.map