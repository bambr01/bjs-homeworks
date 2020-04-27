function getResult(a,b,c){
    "use strict"; // код для задачи №1 писать здесь
    let D = (b**2 - 4*a*c);
    let x = [];
    if (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2*a));
        x.push((-b - Math.sqrt(D)) / (2*a));
    } else if (D === 0) {
        x.push((-b) / (2*a));
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}