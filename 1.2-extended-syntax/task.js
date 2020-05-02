function getResult(a,b,c){
    "use strict"; 
    let D = (b ** 2 - 4 * a * c);
    let x = [];
    if (D > 0) {
        x.push((-b + Math.sqrt(D)) / (2 * a));
        x.push((-b - Math.sqrt(D)) / (2 * a));
    } else if (D === 0) {
        x.push((-b) / (2 * a));
    } else {
        x.push();
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let average;
    if (marks.length === 0) {
        average = sum;
    } else if (marks.length >= 5) {
        marks = marks.slice(0, 5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
        average = sum / marks.length;
    }
    return average;
}

function askDrink(name,dateOfBirthday){
    let result;
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    return result;
}