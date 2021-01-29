import axios from 'axios';
import chalk from 'chalk';

class Fetch {
    constructor(pokemon, color) {
      this.pokemon = pokemon; 
      this.color = color;
    }
        // Fetch this URL
        fetch() {
            axios('https://pokeapi.co/api/v2/stat/1/')
            // And then...
            .then((response) => {
                // Use the 'data'
                const pokemon = response.data;
            // In this example, the above URL will return an object
            //  with data on the Pokemon requested
                console.log(chalk.hex(this.color)("This is a " + pokemon.name + "and it's ID is" + pokemon.id));
            })

            .catch(error => 
            // handle error

                console.log(chalk.red("error: " + error)))
            }
        }
    
    
    export default Fetch;