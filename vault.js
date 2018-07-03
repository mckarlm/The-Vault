'use strict';
module.exports = function() {
    var secretKey = 'a thing'
    var secretValue = 'two things'

    return {
        setValue: setValue,
        getValue: getValue
        }
        function setValue(key, value){
            secretKey = key;
            secretValue = value;
        }
        function getValue(key){
        if(key === undefined || secretKey !== key){
            return null;
        }else if(key === secretKey){
            return secretValue;
        }
    }
};