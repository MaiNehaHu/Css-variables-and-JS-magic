console.log("Hello")
let inputs = document.querySelectorAll('.edits input')
console.log(inputs);

function HandleUpdate(){
    let suffix = this.dataset.sizing /**gives datatype i.e. pixels */
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    /**important : this.name and css variable names must be same */

    console.log(this.name+" "+this.value +" "+suffix);
}
inputs.forEach(input => input.addEventListener('change',HandleUpdate));

