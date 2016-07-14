'use strict';

describe('demoApp.header module', function() {

    beforeEach(module('demoApp.header'));

    describe('HeaderCtrl', function(){
        var ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            ctrl = $controller('HeaderCtrl', {});
        }));

        it('should be defined', inject(function() {
            assert.isDefined(ctrl, 'is defined')
        }));
    });
});
