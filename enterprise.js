
const employees = [
    { name: 'Marcel', salary: 3000, freelancer: true },
    { name: 'Sandra', salary: 3100, freelancer: false },
    { name: 'Thomas', salary: 2800, freelancer: false },
    { name: 'Alexander', salary: 3502, freelancer: false },
    { name: 'Els', salary: 3050, freelancer: true },
    { name: 'Igor', salary: 2600, freelancer: true },
    { name: 'Anne', salary: 2600, freelancer: true },
]

const assert = require('assert')

//* Hoeveel bedraagt de totale loonkost iedere maand?
function totalSalaries(employees) {
let totalsum = 0;
    for( var i = 0; i<employees.lenght; i = i++){
        totalsum += employees.salary;
    }
    console.log(totalsum)
}

assert.equal(totalSalaries(employees), 20652)


//* Welke freelancer verdient het meest?
function bestPaidFreelancer(employees) {
    let largestSalary = 0;
if(employees.freelancer == true){
    for( i = 0; i <largestSalary; i++){
            if(employees.salary[i]>largestSalary){
                largestSalary=employees.salary[i];
            }
    }
}
}

assert.equal(bestPaidFreelancer(employees), 'Els')


//* Wie verdient er allemaal meer als 3000?
function earsMoreThan3k(employees) {

    for( var i = 0; i<employees.salary; i = i++){
        if(employees.salary[i]>= 3000){
            return employees.name[i]
        }
    }
}

assert.deepEqual(earsMoreThan3k(employees), ['Sandra', 'Alexander', 'Els'])


//* Hoeveel verdient een interne medewerker gemiddeld?
function averageSalaryNonFreeLancer(employees) {
    var som = 0;
    var gemiddeld;
    if(employees.freelancer == false){
        for(i = 0 ; i <employees.lenght ; i ++){
                som += employees.salary[i];
        }
        gemiddeld = som /employees.length
    }
    return gemiddeld
}

assert.equal(averageSalaryNonFreeLancer(employees), 3134)


//* Wie heeft de langste naam?
function longestName(employees) {
    const namen = employees.name;
    var grootste = 0;
    var langste;
    for (var i = 0; i < namen.length; i++){
        if(namen[i].length > grootste){
        grootste = namen[i].length;
        langste = namen[i];}
    }
    return langste;
}

assert.equal(longestName(employees), 'Alexander')


//* Print de namen van alle werknemers, gesorteerd op voornaam.
function sortedNames(employees) {
}
const namen = employees.name;


assert.deepEqual(sortedNames(employees), ['Alexander', 'Anne', 'Els', 'Igor', 'Marcel', 'Sandra', 'Thomas'])

//*/