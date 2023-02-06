console.log("Hello")
let inputs = document.querySelectorAll('.edits input')
console.log(inputs);

function HandleUpdate(){
    let suffix = this.dataset.sizing
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    

    console.log(this.name+" "+this.value +" "+suffix);
}
inputs.forEach(input => input.addEventListener('change',HandleUpdate));

