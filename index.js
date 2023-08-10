    let btn = document.getElementById('btn');
    btn.addEventListener('click', ageCalculator);

    function ageCalculator () {
        // let num01 = parseFloat(document.getElementById('num01').value);
        // let num02 = parseFloat(document.getElementById('num02').value);
        // let num03 = parseFloat(document.getElementById('num03').value);
        // let result1 = document.getElementById('result1');
        // let result2 = document.getElementById('result2');
        // let result3 = document.getElementById('result3');
        // let error1 = document.getElementById ('error1');
        // let error2 = document.getElementById ('error2');
        // let error3 = document.getElementById ('error3');
        
        const Number = verificarNumero();

        const MaiorOuMenor = verificarMaiorOuMenor();

        const Data = calcularData();
       
    }


    function verificarNumero () {
        let num01 = parseFloat(document.getElementById('num01').value);
        let num02 = parseFloat(document.getElementById('num02').value);
        let num03 = parseFloat(document.getElementById('num03').value);
        let error1 = document.getElementById ('error1');
        let error2 = document.getElementById ('error2');
        let error3 = document.getElementById ('error3');
        let errorlist = document.getElementById ('errorlist');
        let inputNum01 = document.getElementById('num01');
        let inputNum02 = document.getElementById('num02');
        let inputNum03 = document.getElementById('num03');

        console.log(isNaN(num01));

        if (isNaN(num01) === true){
            error1.innerHTML = `This field is required` 
            errorlist.style.color = 'hsl(0, 100%, 67%)';
            inputNum01.style.borderColor = 'hsl(0, 100%, 67%)';
        }else {
            error1.innerHTML = '' 
            inputNum01.style.borderColor = 'initial'; 
        }

        if (isNaN(num02) === true){
            error2.innerHTML = 'This field is required' 
            inputNum02.style.borderColor = 'hsl(0, 100%, 67%)'; 
            
        }else {
            error2.innerHTML = ""
            inputNum02.style.borderColor = 'initial';
        }

        if (isNaN(num03) === true){
            error3.innerHTML = 'This field is required'
            inputNum03.style.borderColor = 'hsl(0, 100%, 67%)';
        }else {
            error3.innerHTML = ""
            inputNum03.style.borderColor = 'initial';
        }





        if (isNaN(num01) === true && isNaN(num02) === true && isNaN(num03) === true ){
            errorlist.style.color = 'red';
        }else {
            errorlist.style.color = 'initial'
        }
    }

    function verificarMaiorOuMenor () {
        let num01 = parseFloat(document.getElementById('num01').value);
        let num02 = parseFloat(document.getElementById('num02').value);
        let num03 = parseFloat(document.getElementById('num03').value);
        let error1 = document.getElementById ('error1');
        let error2 = document.getElementById ('error2');
        let error3 = document.getElementById ('error3');
        let errorlist = document.getElementById ('errorlist');
        let inputNum01 = document.getElementById('num01');
        let inputNum02 = document.getElementById('num02');
        let inputNum03 = document.getElementById('num03');

        if (num01 > 31) {
            error1.innerHTML= `Must be a valid day`
            inputNum01.style.borderColor = 'hsl(0, 100%, 67%)';
            errorlist.style.color = 'hsl(0, 100%, 67%)'
        }
        
        if (num02 > 12) {
            error2.innerHTML= `Must be a valid month`
            inputNum02.style.borderColor = 'hsl(0, 100%, 67%)';
            errorlist.style.color = 'hsl(0, 100%, 67%)'
        }

        if (num03 <= 1920) { 
            error3.innerHTML=   `Must be in the past` 
            inputNum03.style.borderColor = 'hsl(0, 100%, 67%)';
            errorlist.style.color = 'hsl(0, 100%, 67%)'  
        }

        if (num01 > 31 && num02 > 12 && num03 <= 1920 ){
            errorlist.style.color = 'hsl(0, 100%, 67%)';
        }
    }

    function calcularData () {
        let num01 = parseFloat(document.getElementById('num01').value);
        let num02 = parseFloat(document.getElementById('num02').value);
        let num03 = parseFloat(document.getElementById('num03').value);
        let result1 = document.getElementById('result1');
        let result2 = document.getElementById('result2');
        let result3 = document.getElementById('result3');

        const inputDate = new Date(num03, num02 - 1, num01);
        const diff = new Date() - inputDate;
        const age = new Date(diff);
        const totalYears = age.getUTCFullYear() - 1970;
        const totalMonths = age.getUTCMonth();
        const totalDays = age.getUTCDate() - 1;

        console.log(totalYears);
        console.log(totalMonths);
        console.log(totalDays);

        result1.innerHTML = `${totalYears}`;
        result2.innerHTML = `${totalMonths}`;
        result3.innerHTML = `${totalDays}`;
    }   



