// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

*/


// Iteration 1 - using callbacks
// ...

let i = 0;
let iMashedpotatoesMax = mashedPotatoes.length;

function getInstructionsPromises(step) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (i === iMashedpotatoesMax) {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are Ready!</li>`;
        let p = document.getElementById('mashedPotatoesImg');
        p.removeAttribute('hidden');
     }
      else {
      getInstruction("mashedPotatoes", i, (step0) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
      }, (error) => {
              console.log(error);
              reject(i);
          });
        }
          i++;
        resolve(i);
    },1000);
  });
}

getInstructionsPromises(i)
.then((value)=> {
  return getInstructionsPromises(value);
})
.then((value) => {
  return getInstructionsPromises(value);
})
.then((value) => {
  return getInstructionsPromises(value);
})
.then((value) => {
  return getInstructionsPromises(value);
})
.then((value) => {
  return getInstructionsPromises(value);
})
.catch(() => console.error('Something went wrong'));


// Iteration 2 - using promises
// ...
getInstruction('steak', 0, (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  getInstruction('steak', 1, (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    getInstruction('steak', 2, (step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
      getInstruction('steak', 3, (step0) => {
        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
        getInstruction('steak', 4, (step0) => {
          document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
          getInstruction('steak', 5, (step0) => {
            document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
            getInstruction('steak', 6, (step0) => {
              document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
              getInstruction('steak', 7, (step0) => {
                document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
                document.querySelector("#steak").innerHTML += `<li>Your Steak is Ready!!!</li>`
                let p = document.getElementById('steakImg');
                p.removeAttribute('hidden');
               });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await
// ...
const getAllInstructions = async () => {
  let instruction;
  try {
    let instruction = await obtainInstruction('broccoli',0);
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;

 
    instruction = await obtainInstruction('broccoli',1)
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;

   
    instruction = await obtainInstruction('broccoli',2)
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;

    
    instruction = await obtainInstruction('broccoli',3)
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
   
    instruction = await obtainInstruction('broccoli',4)
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;

   
    instruction = await obtainInstruction('broccoli',5)
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;

   
    instruction = await obtainInstruction('broccoli',6)
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
      instruction = "Your Broccoli is ready!!!"
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
      let p = document.getElementById('broccoliImg');
      p.removeAttribute('hidden');

   
  } catch (error) {
    console.log (error);
  }
}
getAllInstructions();
// Bonus 2 - Promise all
// ...

let iBrussels = 0;
let iBrusselsMax = brusselsSprouts.length;

function getBrusselsPromises(step) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (iBrussels === iBrusselsMax) {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel Sprouts are Ready!</li>`;
        let p = document.getElementById('brusselsSproutsImg');
        p.removeAttribute('hidden');
     }
      else {
      getInstruction("brusselsSprouts", iBrussels, (step0) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
      }, (error) => {
              console.log(error);
              reject(iBrussels);
          });
        }
          iBrussels++;
        resolve(iBrussels);
    },1000);
  });
}

getBrusselsPromises(iBrussels)
.then((value)=> {
  return getBrusselsPromises(value);
})
.then((value) => {
  return getBrusselsPromises(value);
})
.then((value) => {
  return getBrusselsPromises(value);
})
.then((value) => {
  return getBrusselsPromises(value);
})
.then((value) => {
  return getBrusselsPromises(value);
})
.then((value) => {
  return getBrusselsPromises(value);
})
.then((value) => {
  return getBrusselsPromises(value);
})
.then((value) => {
  return getBrusselsPromises(value);
})
.catch(() => console.error('Something went wrong'));
