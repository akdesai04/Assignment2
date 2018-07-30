module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _background: createjs.Bitmap;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._welcomeLabel = new objects.Label("Car Crash", "80px", "Fugaz One", "#8B0000", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
            this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult("background"));
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
            console.log(`Starting - START SCENE`);

            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
        }
    }
}