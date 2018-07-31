module scenes {
    export class End extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _road: objects.Road;
        private _instructionButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._road = new objects.Road();

            this._gameOverLabel = new objects.Label("Game Over!", "80px", "Permanent Marker", "#ce2727", config.Screen.HALF_WIDTH - 10, 120, true);
            this._restartButton = new objects.Button("RestartButton", config.Screen.HALF_WIDTH - 60, 360, true);
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.HALF_WIDTH + 70, 360, true);

            this.Main();
        }

        public Update():void {
            this._road.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - END SCENE`);

            this.addChild(this._road);

            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this.addChild(this._restartButton);
            this.addChild(this._instructionButton);

            this._restartButton.on("click", function(){
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTION;
            }, this);
        }
    }
}