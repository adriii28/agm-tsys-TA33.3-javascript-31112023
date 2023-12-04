const listPlanetas = (planetas) =>{

    planetas.forEach(planeta => {
        console.log(planeta);
    });
}

let planetas = ['Mercurio','Venus','Tierra','Marte','Júpiter','Saturno','Urano','Neptuno'];

listPlanetas(planetas);