let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                string = "Invalid";
                input.value = string;
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});
window.addEventListener('keydown', (e) => {
    input.removeAttribute('placeholder');
    if (e.key == 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            string = "Invalid";
            input.value = string;
        }
    } 
    else if (e.key == 'Escape') {
        string = "";
        input.value = string;
    } 
    else if (e.key == 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } 
    else if (e.key.length == 1 && /[0-9+\-*/.]/.test(e.key)) {
        string += e.key.toString();
        input.value = string;
    }
});