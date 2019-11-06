

let textarea = document.createElement('textarea');
textarea.className = 'textareaResult' ; 


const keys = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','/','del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','enter','Shift','я','ч','с','м','и','т','ь','б','ю','.','▲','Shift','Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl',]

function createKeyboard() {

    let keyboardDiv = document.createElement('div');
    keyboardDiv.className = 'keyboard' ; 


    let row1 = document.createElement('div');
    let row2 = document.createElement('div');
    let row3 = document.createElement('div');
    let row4 = document.createElement('div');
    let row5 = document.createElement('div');

    row1.classList.add('row')
    row2.classList.add('row')
    row3.classList.add('row')
    row4.classList.add('row')
    row5.classList.add('row')

    for (let i = 0; i < 14; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        row1.appendChild(key)
    }
    row1.lastChild.classList.add('backspace')

    for (let i = 0; i < 15; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        row2.appendChild(key)
    }
    row2.lastChild.classList.add('del')
    row2.firstChild.classList.add('tab')

    for (let i = 0; i < 13; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        row3.appendChild(key)
    }
    row3.firstChild.classList.add('capslock')
    row3.lastChild.classList.add('enter')

    for (let i = 0; i < 13; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        row4.appendChild(key)
    }
    row4.lastChild.classList.add('shiftRight')
    row4.firstChild.classList.add('shift')
    for (let i = 0; i < 9; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        row5.appendChild(key)
    }
    row5.childNodes[3].classList.add('space')



    
   
    document.body.appendChild(textarea);
    document.body.appendChild(keyboardDiv);
    keyboardDiv.appendChild(row1);
    keyboardDiv.appendChild(row2);
    keyboardDiv.appendChild(row3);
    keyboardDiv.appendChild(row4);
    keyboardDiv.appendChild(row5);


}
function insertValueKey(keys) {
    
    let keyList = document.getElementsByClassName('key')
    
    for (key in keyList){
        let keyValue = document.createElement('span')
        keyValue.innerHTML = keys[key];
        
        keyList[key].appendChild(keyValue)

    }

}




createKeyboard()
insertValueKey(keys)
















