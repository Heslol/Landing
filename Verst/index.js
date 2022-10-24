const modalBtn = document.querySelector('.header-nav-list-btn');
const formBtn = document.querySelector('.Modal-btn');
const modal = document.querySelector('.Modal');
const span = document.querySelector('.title-span');
const inputName = document.getElementById('inp1');
const inputEmail = document.getElementById('inp2');
const inputPass = document.getElementById('inp3');
const btnTree = document.querySelector('.header-table-block-check') 

// btn for list;

const btnList = Array.from(btnTree.children)

btnList.forEach( function (item, index) {
    if(index !== 0) item.classList.remove('active');

    item.dataset.index = index;

    btnList[0].setAttribute('data-active', '');

    item.addEventListener('click', () => {
        item.classList.add('active');
        item.setAttribute('data-active', '');

        const prevItemIndex = (index === btnList.length) ? 0 : index - 1; 

        const prevItem = btnTree.querySelector(`[data-index="${prevItemIndex}"]`);

        prevItem.classList.remove('active');
        prevItem.removeAttribute('data-active');
        
        console.log(prevItemIndex, prevItem)
    })
})

// Open + Close Modal

span.addEventListener('click',  () => modal.style.display = 'none')

modalBtn.addEventListener('click',  () => modal.style.display = 'block');

// Form action

const sendMessage = () => {
    document.querySelector('.out-1').innerHTML = inputName.value;
    document.querySelector('.out-2').innerHTML = inputEmail.value;
    document.querySelector('.out-3').innerHTML = inputPass.value;
    let data = inputName.value;
    let post = inputEmail.value;
    let pass = inputPass.value;
    for(let i = 0; i < data.length; i++) {
        if(data.length < 4) {
            alert('Sorry, your nickname is too short. Please, Try again');
            if(alert) break;
        }
        else {
            for(let j = 0; j < pass.length; j++) {
                if(pass.length < 6) {
                    alert('Password is too short. You need at least 6 symbols')
                    if(alert) break;
                }
                else {
                    alert('Welcome ' + data +' ! Your password is ' + pass +'. The invite was sent to ' + post + '. Check it!');            
                }
                return
            };
        }
    };
} 

formBtn.addEventListener('click', sendMessage);

const blockInput = document.querySelector('.header-table-block-content');

const blocks = Array.from(blockInput.children);

blocks.forEach( function InputsValue(input, index) {

    const btn = blocks[5];
    btn.addEventListener('click', function BookValue() {
        let cityValue = blocks[0].value;
        // if(length < 8) {
        //     cityValue == 100;
        // }
        // else {
        //     cityValue == 200;
            console.log(cityValue)

        let adultNum = +blocks[4].value;
        let childNum = +blocks[3].value;

        blocks[6].value = +(cityValue * adultNum + cityValue * childNum)

        document.querySelector('.out') = blocks[6].value

        console.log(blocks)
    })






})
