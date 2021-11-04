// window.alert('1')
// window.confirm('how are you?')
// window.prompt('what is your name?')

const heading= document.getElementById('hello')
console.log(heading);
console.dir(heading);
console.dir(heading.id);
console.dir(heading.textContent);

setTimeout(() => {
    addStylesTo(heading);
}, 1000)

function addStylesTo(node) {
    node.textContent='Changed from JS!'
    node.style.color='red'
    node.style.textAlign='center'
    node.style.backgroundColor='grey'
    node.style.padding='5rem'
}
