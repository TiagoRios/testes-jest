const app = require('../../main/outras/usandoExeptions.js');
const { UserException } = require('../../main/exception/UserException.js');
const { findByRegularExpression } = require('../../main/strings/regularExpression.js');

const errorMessageInvalidMonth = 'invalid month';

describe('learning functions from mozilla developer', () => {    
    test('should equal to Jan', () => {
        expect(app.getMonthName(1)).toEqual('Jan');
    });

    test('should throws invalid month', () => {
        expect(()=> app.getMonthName(13)).toThrow(errorMessageInvalidMonth);
    });
    
    test('should thrwos UserException', () => {
        expect(()=> app.methodThrowUserException(101)).toThrow(UserException);
    });

    test('should return matcher with regular expression', ()=>{
        let pattern = /string/;
        let text = 'my custom string';
        let matcher = findByRegularExpression(pattern, text);
        expect(matcher[0]).toBe("string");
    });
});