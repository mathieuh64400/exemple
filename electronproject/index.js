const electron =require('electron');

const {ipcRenderer}=electron;
 let form =document.querySelector('form');
form.addEventListener('submit',submitForm);
function submitForm(e){
e.preventDefault();
let item =document.querySelector('#item').value;
ipcRenderer.send('item:add',item);
}