
import { BpmRunner } from "./BpmRunner";
import { Tune } from "./tune";


class MainControllerSingleton {

    tune = new Tune()

    constructor() {

        console.log(this.tune)

    }



}

const MainController =  new MainControllerSingleton()

export default MainController