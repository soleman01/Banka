const tableRow = document.getElementById('table-row1');
tableRow.addEventListener('click', ()=> {
const isDelete = confirm('Are you sure you want to delete account?');
if(isDelete){
    console.log('deleting....');
    tableRow.style.display= 'none';
    
}else{
    console.log('thank you for not deleting')
}
});
console.log('here')