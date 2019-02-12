global.window = global;
global.assert = require('chai').expect;
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

describe("Sort", () => {
    console.log(data);

    const sort = data.sort(dataEstudent, "nombre", "ASC");
    const sortASCNombre = data.sort(dataEstudent, 'nombre', 'ASC');
    const sortDESCNombre = data.sort(dataEstudent, 'nombre', 'DESC');
    const sortASCEdad = data.sort(dataEstudent, 'Edad', 'ASC');
    const sortDESCEdad = data.sort(dataEstudent, 'Edad', 'DESx')
    it("Debeía ser una función", () => {
        assert.isFunction(data.sort, 'function');
    });
    it("Debería return data ordenada si le mando data Estudent", () => {
        sort.forEach((item, i) => {
            assert.isNumber(item.edad);
            assert.isString(item.nombre);
        })
    });
    it('debería retornar arreglo de estudiantes ordenado por nombre ASC', () => {
        assert.equal(sortASCNombre[0].nombre, 'Dení');
        assert.equal(sortASCNombre[3].nombre, 'Silvana');
    });
    it('Debeía retornar arreglo de estudiantes ordenado por nombre DESC', () => {
        assert.equal(sortDESCNombre[0].nombre, 'Silvana');
        assert.equal(sortDESCNombre[3].nombre, 'Dení');
    });
    it('Debería retornar arreglo de estudiantes ordenado por edad ASC', () => {
        assert.equal(sortASCEdad[0].edad, 25);
        assert.equal(sortASCEdad[3].edad, 35);
    });
    it('Debería retornar arreglo de estudiantes ordenado por edad DESC', () => {
        assert.equal(sortDESCEdad[0].edad, 35);
        assert.equal(sortDESCEdad[3].edad, 25);
    });
});