module scenes {
    export class Instruction extends objects.Scene {
        // member variables

        

        // constructors
        constructor() {
            super();

        }

        // private methods

        // public methods
        public Start():void {

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

        }
    }
}