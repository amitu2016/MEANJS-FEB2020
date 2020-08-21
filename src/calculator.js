class Calculator {
    add(n1, n2) {
        return n1 + n2 ;
    }

    substract(n1, n2) {
        return n1 - n2 ;
    }
   
    static main() {
        let obj = new Calculator();
        let output = obj.add(5, 6);
        console.log(output);
    }

}

Calculator.main();


