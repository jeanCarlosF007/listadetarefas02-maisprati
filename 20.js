//Gerando o array que simula a tabela

const employees = [];

function generateRandomSalary(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

const names = [
  'John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Carol Davis',
  'David Wilson', 'Eve Lewis', 'Frank Clark', 'Grace Rodriguez', 'Hank Martinez',
  'Ivy Hall', 'Jack White', 'Kelly Harris', 'Leo Walker', 'Mona King',
  'Nina Wright', 'Oscar Turner', 'Pamela Baker', 'Quinn Adams', 'Rose Scott',
  'Sam Hill', 'Tina Green', 'Uma Young', 'Victor Allen', 'Wendy Nelson',
  'Xander Perez', 'Yara Thompson', 'Zane Roberts', 'Adam Carter', 'Betty Phillips',
  'Charlie Evans', 'Diana Collins', 'Ethan Stewart', 'Fiona Sanchez', 'George Morris',
  'Holly Rogers', 'Ian Reed', 'Judy Cook', 'Kyle Morgan', 'Luna Bell',
  'Mike Murphy', 'Nora Bailey', 'Oliver Rivera', 'Paula Cooper', 'Quincy Richardson',
  'Ruth Cox', 'Steve Howard', 'Tara Ward', 'Ursula Flores', 'Vince Sanders',
  'Wanda Coleman', 'Xavier Gray', 'Yvonne James', 'Zachary Watson', 'Aaron Bryant',
  'Bella Perry', 'Carl Russell', 'Dora Griffin', 'Eli Mitchell', 'Faith Jenkins',
  'Gabe Burns', 'Hannah Henry', 'Isaac Bishop', 'Jenna Berry', 'Ken Murray',
  'Laura Black', 'Mark Campbell', 'Nina Gordon', 'Owen Simmons', 'Penny Foster',
  'Quinn Butler', 'Ryan Barnett', 'Sophie Lynch', 'Tommy Stanley', 'Uma Gibbs'
];

for (let i = 0; i < 80; i++) {
  employees.push({
    id: i + 1,
    name: names[i % names.length],
    grossSalary: generateRandomSalary(2000, 5000)
  });
}

// Programa que lerá e processará a tabela em questão

function inssDeduction (salary) {
  return (12/100 * salary).toFixed(2);
}

function getLiquidSalary (salary) {
  return (salary - inssDeduction(salary)).toFixed(2);
}

for (let i = 0; i < employees.length; i++) {
  const id = employees[i].id;
  const name = employees[i].name;
  const grossSalary = employees[i].grossSalary;
  console.log(`
    Matrícula: ${id}
    Nome: ${name}
    Salário Bruto: ${grossSalary}
    Dedução INSS: ${inssDeduction(grossSalary)}
    Salário Líquido: ${getLiquidSalary(grossSalary)}     
    `);
}
