module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _car:objects.Car;
        private _road:objects.Road;
        private _station:objects.Station;
        private _enemies:objects.Enemy[];
        private _enemyNum:number;
        private _enemyTypes = ["redcar","truck","enemycar"];
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._enemyNum; count++) {
                this._enemies.push(new objects.Enemy(this._enemyTypes[count]));
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._car = new objects.Car();
            this._road = new objects.Road();
            this._station = new objects.Station();

            // creates an empty array of type Cloud
            this._enemies = new Array<objects.Enemy>();
            this._enemyNum = 3;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this._car.Update();
            this._road.Update();
            this._station.Update();

            managers.Collision.check(this._car, this._station);

            this._enemies.forEach(enemy => {
                enemy.Update();
                managers.Collision.check(this._car, enemy);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._road);

            // adding the island to the scene
            this.addChild(this._station);

            // adding the plane to the scene
            this.addChild(this._car);

            // adding the cloud to the scene
            for (const enemy of this._enemies) {
                this.addChild(enemy);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}