(function () {
    'use strict';
    var namespace = 'Stringy',
        Stringy = window[namespace];

    describe('StringyJS', function () {
        describe('Initialization', function () {
            it('should create Stringy global object', function () {
                expect(Stringy).to.be.an('object');
            });
        });

        describe('#template', function(){
            it('should be a function', function () {
                expect(Stringy.template).to.be.a('function');
            });

            it('should return same string without format', function () {
                var str = 'qwerty';
                expect(Stringy.template(str)).to.be.equal(str);
            });

            it('should format by given string', function(){
                var input = '{0} qwerty {1}',
                    param0 = 'abc',
                    param1 = 'def',
                    result = 'abc qwerty def';

                expect(Stringy.template(input, param0, param1)).to.be.equal(result);
            });
        })
    });
})();
