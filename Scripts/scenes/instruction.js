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
var scenes;
(function (scenes) {
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("Instructions", "80px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            // this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult(" "));
            this.Main();
        };
        Instruction.prototype.Update = function () {
        };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Starting - INTRUCTION SCENE");
            //this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map