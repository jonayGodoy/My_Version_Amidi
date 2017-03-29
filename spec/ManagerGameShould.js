'use strict';

var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');


describe("ManagerGame Should", function () {

    it('First test green with sinon, calls the original function only once', function () {
        function once(fn) {
            var returnValue, called = false;
            return function () {
                if (!called) {
                    called = true;
                    returnValue = fn.apply(this, arguments);
                }
                return returnValue;
            };
        }


        var callback = sinon.spy();
        var proxy = once(callback);

        proxy();
        assert(callback.calledOnce);
    });


});