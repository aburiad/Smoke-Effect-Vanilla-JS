
//effect js

let nameSelect = document.querySelector('.name');
nameSelect.innerHTML = nameSelect.textContent.replace(/\S/g, "<span>$&</span>");

let getspan = document.querySelectorAll('span');
getspan[0].style.color = 'red';
getspan[1].style.color = 'green';
getspan[2].style.color = 'yellow';
getspan[3].style.color = 'orange';
getspan[4].style.color = 'pink';
getspan[5].style.color = 'hotpink';

for (let x = 0; x < getspan.length; x++) {
    getspan[x].addEventListener('mouseover', () => {
        getspan[x].classList.add('smoke');
        getspan[x].style.color = '#f00';
        getspan[x].classList.add('smoke');
        getspan[x].classList.add('smoke');

    })
}
