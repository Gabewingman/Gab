
/*function call (alert){
    alert(alert);
}

alert("Hello. Ako si Gab, isang Aspiring Software Developer. Tara samahan nyo ako sa journey ko bilang isang prorammer.");

function students (name, lastName, section){
    console.log(`My name is ${name} ${lastName}. And I'm in section ${section}.`);
}

    students ('Gab','Bersamina', 'Atis');*/


function decide (age){
    if (age >= 23){
        console.log(`Graduating na ba sa JS Functions?`);
        if (age >= 23){
            console.log(`Please specify.`);
        }
    }else{
        console.log(`Tuloy mo lang. Di pa enough.`);
        if (age < 23){
            console.log(`What is your name?`);
        }
    }
}

decide(25);