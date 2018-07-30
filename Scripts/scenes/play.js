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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this._enemyTypes = ["redcar", "truck", "enemycar"];
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildClouds = function () {
            for (var count = 0; count < this._enemyNum; count++) {
                this._enemies.push(new objects.Enemy(this._enemyTypes[count]));
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._car = new objects.Car();
            this._road = new objects.Road();
            this._station = new objects.Station();
            // creates an empty array of type Cloud
            this._enemies = new Array();
            this._enemyNum = 3;
            this._buildClouds();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._car.Update();
            this._road.Update();
            this._station.Update();
            managers.Collision.check(this._car, this._station);
            this._enemies.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.check(_this._car, enemy);
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._road);
            // adding the island to the scene
            this.addChild(this._station);
            // adding the plane to the scene
            this.addChild(this._car);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._enemies; _i < _a.length; _i++) {
                var enemy = _a[_i];
                this.addChild(enemy);
            }
            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map