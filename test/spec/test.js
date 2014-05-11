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

        describe('#capitalize', function(){
            it('should be a function', function () {
                expect(Stringy.template).to.be.a('function');
            });

            it('should capitalize first letter in string', function () {
                var input = 'capitalize first of the words',
                    result = 'Capitalize first of the words';

                expect(Stringy.capitalize(input)).to.be.equal(result);
            });

            it('should capitalize first letters in all words', function () {
                var input = 'capitalize all the words',
                    result = 'Capitalize All The Words';

                expect(Stringy.capitalize(input, true)).to.be.equal(result);
            });
        });

        describe('#template', function(){
            it('should be a function', function () {
                expect(Stringy.template).to.be.a('function');
            });

            it('should return same string without template', function () {
                var str = 'qwerty';
                expect(Stringy.template(str)).to.be.equal(str);
            });

            it('should format string by given template', function(){
                var input = '{0} qwerty {1}',
                    param0 = 'abc',
                    param1 = 'def',
                    result = 'abc qwerty def';

                expect(Stringy.template(input, param0, param1)).to.be.equal(result);
            });

            it('should format string using {custom} templating', function () {
                var input = '{first} qwerty {second}',
                    args = {
                        'first': 'abc',
                        'second': 'def'
                    },
                    result = 'abc qwerty def';

                expect(Stringy.template(input, args)).to.be.equal(result);
            });

            it('should not fill template placeholder whem argument is undefined', function () {
                var input = '{first} qwerty {second}',
                    result = input;
                expect(Stringy.template(input)).to.be.equal(result);
            });

            it('should not fill template placeholder when argument is null', function () {
                var input = '{first} qwerty {second}',
                    result = input;
                expect(Stringy.template(input)).to.be.equal(result);
            });

            it('should not fill template placeholder when argument is empty object', function () {
                var input = '{first} qwerty {second}',
                    result = input;
                expect(Stringy.template(input, {})).to.be.equal(result);
            });

            it('should not fill template placeholder when argument is empty array', function () {
                var input = '{first} qwerty {second}',
                    result = input;
                expect(Stringy.template(input)).to.be.equal(result);
            });
        });
    });
})();
