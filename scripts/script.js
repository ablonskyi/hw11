let arr = new Array();
let arrLenght;
let arrElement;
let check = true;

function arrLenghtFunction () {
    arrLenght = +prompt('Введіть довжину масиву');
}

function addArrayElements () {
    arrLenghtFunction ();
    if (typeof(arrLenght) === 'number' && !isNaN(arrLenght)) {
        for (let i = 0; i < arrLenght; i++) {
            while (check) {
                arrElement = +prompt(`Це Ваш масив: ${arr}\nВведіть елемент массиву №${i}`);
                if (typeof(arrElement) === 'number' && !isNaN(arrElement)) {
                    check = false;
                }
            }
            arr.push(arrElement);
            check = true;
        }
    } else {
        addArrayElements ();
    }
    alert('Bаш масив: ' + arr);
}



function deleteArrayElements (arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            arr.splice(i, 1);
            i--;
        }
    }

}

function operationsWithArray () {
    addArrayElements ();
    arr.sort((a, b) => a - b);
    alert(`Після сортування Ваш масив виглядае так: ${arr}`)
    let element = +prompt('Введіть число яке бажаєте видалити');
    deleteArrayElements(arr, element);
    alert(`Так виглядае Ваш масив після всіх операцій:\n${arr}`)
}

operationsWithArray ();