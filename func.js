var myGenerics = /** @class */ (function () {
    function myGenerics() {
    }
    myGenerics.prototype.setValue = function (value) {
        this.value.push(value);
    };
    myGenerics.prototype.getValue = function () {
        return this.value;
    };
    return myGenerics;
}());
var gen1 = new myGenerics();
gen1.setValue({ label: "Hello World" });
alert(gen1.getValue());
var gen2 = new myGenerics();
gen2.setValue({ label: 1 });
alert(gen2.getValue());
