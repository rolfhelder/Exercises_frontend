/*const btnOpenModal = document.getElementById('openModal')
//console.log(btn);
btnOpenModal.addEventListener('click' , changeClass)

function changeClass() {
    const div = document.querySelector('body div')
    //console.log(div.classList);
    div.classList.toggle('invisible')
}

const escPress = document.querySelector('body div div')
//console.log(escPress);

escPress.addEventListener('keydown' , isESC)
//console.log(escPress);
function isESC(event) {
    const key = event.key
    console.log(key);
    if (event.key === 'Escape') {
        changeClass();
    }
}
*/

const btnOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

btnOpenModal.addEventListener('click' , toggleModalWrapper)

document.addEventListener('keydown' , isESC)

function toggleModalWrapper() {
    modalWrapper.classList.toggle('invisible')
}

function isESC(event) {
    const key = event.key
    
    if (event.key === 'Escape') {
        toggleModalWrapper();
    }
}