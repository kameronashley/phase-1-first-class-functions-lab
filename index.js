const returnFirstTwoDrivers = function () {
    let driver = ['Sally', 'Bob', 'Freddy', 'Claudia']
    return driver.slice (0,2)
};

const returnLastTwoDrivers = function () {
    let driver = ['Sally', 'Bob', 'Freddy', 'Claudia']
    return driver.slice (-2)
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function(fare) {
        return fare * multiplier
    } 
    
};

// const fareDoubler = function (){
//     let fareDoubler * 2
//     return createFareMultiplier
// }

const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);

function selectDifferentDrivers (driver, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers (driver)
}