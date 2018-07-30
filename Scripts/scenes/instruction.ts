module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _background: createjs.Bitmap;
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        
        // constructors
        constructor() {
            super();

            this.Start();

        }

        // private methods

        // public methods
        public Start():void {
            this._welcomeLabel = new objects.Label("Instructions", "80px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            // this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult(" "));
            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - INTRUCTION SCENE`);

            //this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}