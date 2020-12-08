const users = [{username: 'dubem', password: 1234}, {username:'locksi', password: 12345}]


const form = document.querySelector('.sign-up-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submitted');
const password = form['password'].value;
const username = form['username'].value;
const userExist = users.find((item)=> item.username === username);
if(userExist){
    document.getElementById('result').innerText = 'Correct';
}else{
    document.getElementById('result').innerText = 'Incorrect';
}
console.log({password,username});
});