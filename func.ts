class myGenerics<T> {
    value :Array <T>;
    setValue(value : T) {
        this.value.push(value);
    }
    getValue() : T[] {
        return this.value;
    }
}
interface LabelledValue1 {
    label: string;
}
interface LabelledValue2 {
    label: number;
}
var gen1 = new myGenerics<LabelledValue1>();
gen1.setValue({label:"Hello World"});
alert(gen1.getValue());

var gen2 = new myGenerics<LabelledValue2>();
gen2.setValue({label:1});
alert(gen2.getValue());
