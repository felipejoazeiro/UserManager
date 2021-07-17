console.log('hello')
const inputs = document.querySelectorAll('.input')

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus')
    }
}

inputs.forEach(element => {
    element.addEventListener('focus', focusFunc)
});

inputs.forEach(element => {
    element.addEventListener('blur', blurFunc)
});