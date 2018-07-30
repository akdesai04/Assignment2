module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _car:objects.Car;
        private _road:objects.Road;
        private _island:objects.Island;
        private _enemies:objects.Enemy[];
        private _cloudNum:number;
        private _enemyTypes = ["redcar","truck","enemycar"];
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
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
            this._island = new objects.Island();

            // creates an empty array of type Cloud
            this._enemies = new Array<objects.Enemy>();
            this._cloudNum = 3;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
            this._car.Update();
            this._road.Update();
            this._island.Update();

            managers.Collision.check(this._car, this._island);

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
            this.addChild(this._island);

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