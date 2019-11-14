
let textarea = document.createElement('textarea');
textarea.className = 'textareaResult' ; 

const keys = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','/','del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','enter','Shift','я','ч','с','м','и','т','ь','б','ю','.','▲','Shift','Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl',]
const keys_en = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','q','w','e','r','t','y','u','i','o','p','[',']','|','del','CapsLock','a','s','d','f','g','h','j','k','l',';','"','enter','Shift','z','x','c','v','b','n','m',',','<','>','▲','Shift','Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl',]

const keyCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight","Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma","Period","Slash","ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]

let saveKeys = []

function createKeyboard() {

    let keyboardDiv = document.createElement('div');
    keyboardDiv.className = 'keyboard' ; 

    let rows_count = 5
    let rows = []

    for (i = 0; i < rows_count; i++){
        rows.push(document.createElement('div'))
        rows[i].classList.add('row')
    }

    for (let i = 0; i < 14; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        rows[0].appendChild(key)
    }
    rows[0].lastChild.classList.add('backspace')

    for (let i = 0; i < 15; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        rows[1].appendChild(key)
    }
    rows[1].lastChild.classList.add('del')
    rows[1].firstChild.classList.add('tab')

    for (let i = 0; i < 13; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        rows[2].appendChild(key)
    }
    rows[2].firstChild.classList.add('capslock')
    rows[2].lastChild.classList.add('enter')

    for (let i = 0; i < 13; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        rows[3].appendChild(key)
    }
    rows[3].lastChild.classList.add('shiftRight')
    rows[3].firstChild.classList.add('shift')
    for (let i = 0; i < 9; i++){

        let key = document.createElement('div')
        key.classList.add('key')
        rows[4].appendChild(key)
    }
    rows[4].childNodes[3].classList.add('space')
   
    document.body.appendChild(textarea);
    document.body.appendChild(keyboardDiv);
    for(row of rows){
        keyboardDiv.appendChild(row);
    }


}
function insertValueKey(keys,keyCode,keys_en) {
    
    let keyList = document.getElementsByClassName('key')
    
    for (let key = 0; key < 64; key++){
        let keyValue = document.createElement('span')
        keyValue.className = localStorage.getItem('first')
        keyValue.innerHTML = keys[key];
        
        keyList[key].appendChild(keyValue)

    }
    for (let key = 0; key < 64; key++){
        let keyValue = document.createElement('span')
        keyValue.innerHTML = keys_en[key];
        keyValue.className = localStorage.getItem('last')
        keyList[key].appendChild(keyValue)

    }
    for (let key = 0; key < 64; key++){

        keyList[key].classList.add(keyCode[key])


    }

}

function changeLanguage() {
    document.addEventListener('keydown', function(event) {
        if (saveKeys[0] != event.code){
            if (event.code == 'ShiftLeft' || event.code == 'AltLeft'){
                saveKeys.push(event.code)
            }
        }
        if (saveKeys[0] == 'ShiftLeft' && saveKeys[1] == 'AltLeft'){
            let keyList = document.getElementsByClassName('key')
    
            for (let key = 0; key < 64; key++){
                
                if (keyList[key].firstElementChild.className == 'on'){
                    localStorage.setItem('first', 'off')
                    localStorage.setItem('last', 'on')
                    keyList[key].firstElementChild.className = localStorage.getItem('first')
                    keyList[key].lastElementChild.className = localStorage.getItem('last')
                    console.log(localStorage)
                }
                else{
                    localStorage.setItem('first', 'on')
                    localStorage.setItem('last', 'off')
                    keyList[key].firstElementChild.className = localStorage.getItem('first')
                    keyList[key].lastElementChild.className = localStorage.getItem('last')
                    console.log(localStorage)
                }
                

            }
        }
    });
}

listKeys = []

function keyDown() {
    document.addEventListener('keydown', function(event) {
        
        
        let selectKey = document.getElementsByClassName(event.code)
        
        selectKey[0].classList.add('down')

      });
}

function keyUp() {
    document.addEventListener('keyup', function(event) {
        
        
        let selectKey = document.getElementsByClassName(event.code)
        
        selectKey[0].classList.remove('down')
        saveKeys = []


      });
}

createKeyboard()
insertValueKey(keys,keyCode,keys_en)
keyDown()
keyUp()
changeLanguage()