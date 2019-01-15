
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
    for( var i = 0; i<employees.length; i = i++){
        totalsum += employees.salary;
    }
return totalsum}

assert.equal(totalSalaries(employees), 20652)

//* Welke freelancer verdient het meest?
function bestPaidFreelancer(employees) {
    let largestSalary = 0;
    let returnName="";
for(i = 0; i <employees.length; i++ ){
    if(employees[i].freelancer == true && employees[i].salary>= largestSalary)
    {
        largestSalary=employees[i].salary;
        returnName = employees[i].name;
    }
    }
    return returnName;
}


assert.equal(bestPaidFreelancer(employees), 'Els')


//* Wie verdient er allemaal meer als 3000?
function earsMoreThan3k(employees) {
return employees
.filter(e =>e.salary > 3000)
.map(e => e.name)


assert.deepEqual(earsMoreThan3k(employees), ['Sandra', 'Alexander', 'Els'])


//* Hoeveel verdient een interne medewerker gemiddeld?
function averageSalaryNonFreeLancer(employees) {
    const interne = employees.filter(e => !e.freelancer);
    const totalS = interne.reduce((x,y) => x + y, 0);
    return totalS / interne.length;
}

assert.equal(averageSalaryNonFreeLancer(employees), 3134)


//* Wie heeft de langste naam?
function longestName(employees) {
    let returnName = ""
    for(i = 0; i< 7;i++)
    {
        if(returnName.length < employees[i].name.length)
        {
            returnName = employees[i].name
        }
    }
    return returnName
}

assert.equal(longestName(employees), 'Alexander')


//* Print de namen van alle werknemers, gesorteerd op voornaam.
function sortedNames(employees) {
    let names = []
    for(i = 0; i<7;i++)
    {
        names.push(employees[i].name)
    }
    names.sort()
    return names    
}



assert.deepEqual(sortedNames(employees), ['Alexander', 'Anne', 'Els', 'Igor', 'Marcel', 'Sandra', 'Thomas'])

//*/