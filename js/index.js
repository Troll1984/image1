function Cars(name) {   
    return function(model) {
        console.log(`${name} та ${model}`);
    }
}
let audi = Cars('Audi');
audi('black');