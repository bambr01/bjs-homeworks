function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    if (animal == undefined) {
        return null;
    }
    let sound = animal.sound;
    return sound;
    // return animalSound;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    if(marks == '' || marks == 0 || !marks.length) {
        return 0;
    }
    let avarage = 0, roundedAverage;
    for (let i=0; i<marks.length; i++) {
        marks[i] = parseInt(marks[i]);
        avarage += marks[i];
    }
    avarage = avarage / marks.length;
    return roundedAverage = Math.round(avarage);
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}