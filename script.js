// const container = document.querySelector('#container');

// const containerp = document.createElement('p');
// const containerh3 = document.createElement('h3');

// containerp.textContent = 'Hey I’m red!';
// containerp.style.color = 'red';

// containerh3.textContent = 'I’m a blue h3!';
// containerh3.style.color = 'blue';

// const containerdiv = document.createElement('div');
// containerdiv.style.backgroundColor = 'pink';
// containerdiv.style.border = '1px black';

// const containerdivh1 = document.createElement('h1');
// const containerdivp = document.createElement('p');
// containerdivh1.innerText = "I'm in a div";
// containerdivp.innerText = "ME TOO";

// container.append(containerp,containerh3);
// containerdiv.append(containerdivh1,containerdivp);
// container.append(containerdiv);
const btn = document.querySelector('#btn');
function alertFunction(){
    alert ("Oh damn");
}
btn.addEventListener('click', alertFunction);