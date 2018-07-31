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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._road = new objects.Road();
            this._gameOverLabel = new objects.Label("Game Over!", "80px", "Permanent Marker", "#ce2727", config.Screen.HALF_WIDTH - 10, 120, true);
            this._restartButton = new objects.Button("RestartButton", config.Screen.HALF_WIDTH - 60, 360, true);
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.HALF_WIDTH + 70, 360, true);
            this.Main();
        };
        End.prototype.Update = function () {
            this._road.Update();
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._road);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._restartButton);
            this.addChild(this._instructionButton);
            this._restartButton.on("click", function () {
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._instructionButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map