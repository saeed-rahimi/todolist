'use stric';
const input = document.querySelector('.tileList');
const add = document.querySelector('.add');
const textlist = document.querySelector('.textval');
const lists = document.querySelector('.ul');
const finishdo = document.querySelector('.close');


add.addEventListener('click', function(par) {



    main()



});



function main() {


    const checkempty = input.value;
    if (checkempty == '') return alert('input is empty');
    const html = ` <li class="first">
    <div class="left"><span class="textval">${input.value}</span></div>
    <div class="right">
        <ul class="right-ul">
            <li class="edit"><span class="material-symbols-outlined">
                edit
                </span></li>
            <li class="complete"> <span class="material-symbols-outlined">
                check
                </span></li>
            <li class="close"><span class="material-symbols-outlined">
                close
                </span></li>
        </ul>
    </div>
</li>
`;
    input.value = "";


    lists.insertAdjacentHTML('afterbegin', html);

    lists.querySelector('.edit').addEventListener('click', editTask);
    lists.querySelector('.complete').addEventListener('click', completeTask);
    lists.querySelector('.close').addEventListener('click', deleteTask);
}

function completeTask(par) {
    const complete = par.target.closest('.first').classList.toggle('completed');
    console.log(complete);

}

function editTask(par) {
    const ente = par.target.closest('.first').classList.contains('completed');

    console.log(ente);

    if (!ente) {
        const enter = prompt('Edit task:')
        par.target.closest('.first').querySelector('.textval').textContent = enter

    }
}

function deleteTask(par) {
    par.target.closest('.first').remove();

}




// function calc(e) {
//     if (e > 100) console.log(" discount is 20");
//     else if (e > 50 && e <= 100) console.log("discount is 10");
//     else console.log("discont is 0");
// }
// console.log(calc(110));
// console.log(calc(70));
// console.log(calc(20))