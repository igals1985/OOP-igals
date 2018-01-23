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
var AirSteward = (function (_super) {
    __extends(AirSteward, _super);
    function AirSteward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AirSteward.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (cls) {
            if (cls == 'economy' || cls == 'first' || cls == 'bussiness') {
                this._class = cls;
            }
            else {
                this._class = 'economy';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirSteward.prototype, "exYears", {
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
    AirSteward.prototype.getInfo = function () {
        document.write(_super.prototype.getInfo.call(this) + ", <br/>originCountry :" + this.originCountry + ", <br/>experience years: " + this.exYears + ", <br/>class:" + this.class + " <br/><br/> ");
    };
    return AirSteward;
}(Person));
//# sourceMappingURL=airsteward.js.map