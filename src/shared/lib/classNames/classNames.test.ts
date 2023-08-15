import { classNames } from "./classNames"

describe('classNames', () => {
    test('one first parametr', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
})

describe('classNames', () => {
    test('with additional', () => {
        const expected = 'someClass one two'
        expect(classNames('someClass', {}, ['one', 'two'])).toBe(expected)
    })
})
describe('classNames', () => {
    test('with all', () => {
        const expected = 'someClass one two hover'
        expect(classNames('someClass', {hover:true, select:false}, ['one', 'two'])).toBe(expected)
    })
})