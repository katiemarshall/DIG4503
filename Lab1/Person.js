import chalk, { BackgroundColor } from 'chalk';

class Person {
    constructor(name, favoriteColor) {
      this.name = name; 
      this.favoriteColor = favoriteColor;
      this.backgroundColors = backgroundColors;
    }
    speak(){
      console.log(chalk.hex(this.favoriteColor)(this.name));
    }
}

export default Person;