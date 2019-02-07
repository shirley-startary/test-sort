global.window = global;
global.assert = require('chai').assert;
require('../src/data');

const dataEstudent = [{
        nombre: 'Silvana',
        edad: 32,
        altura: '1,69'
    },
    {
        nombre: 'Jonh',
        edad: 33,
        altura: '1,80'
    },
    {
        nombre: 'Mike',
        edad: 25,
        altura: '1,70'
    },
    {
        nombre: 'Dení',
        edad: 35,
        altura: '1,50'
    }
]

describe("Sort", function () {
    const sort = data.sort(dataEstudent, "nombre", "ASC");
    const processedASC = data.sort(dataEstudent, 'nombre', 'ASC');
    const processedDESC = data.sort(dataEstudent, 'nombre', 'DSC');
    console.log(processedASC);

    it("Debeía ser una función", function () {
        assert.equal(typeof data.sort, "function");
    });
    it("Debería return data ordenada si le mando data Estudent", () => {
        sort.forEach((item, i) => {
            assert.isNumber(item.edad);
            assert.isString(item.nombre);
        })
    });
    it('debería retornar arreglo de estudiantes ordenado por nombre ASC', () => {
        assert.equal(processedASC[0].nombre, 'Dení');
        assert.equal(processedASC[3].nombre, 'Silvana');
    });
    it('Debeía retornar arreglo de estudiantes ordenado por nombre DSC', () => {
        assert.equal(processedDESC[0].nombre, 'Silvana');
        assert.equal(processedDESC[3].nombre, 'Dení');
    });
    it('Ordenar por edad', () => {
        assert.equal(processedDESC[0].edad, 35);
        assert.equal(processedDESC[3].nombre, 25);
    })

})