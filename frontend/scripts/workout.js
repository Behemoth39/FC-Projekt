const workout = document.querySelector("#workouts");

const listWorkouts = async () => {
  const url = "http://localhost:3000/workouts";

  const response = await fetch(url);

  if (response.status == 200) {
    const data = await response.json();
    console.log(data);

    /**********************************************************/
    // Får ej detta att funka

    // skapa DOM element
    /*const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");*/

    // Jag har ingen aning om vad jag gör här
    /*const listExercises = async () => //var ska await vara?
    {
      data.forEach((exercises) => {
        const exercise = document.querySelector("#exercise");
        exercise.appendChild(div1);
        exercise.appendChild(div2);
        exercise.appendChild(div3);
        div1.insertAdjacentHTML("beforeend", `<p>${exercises.sets}</p>`);
        div2.insertAdjacentHTML("beforeend", `<p>${exercises.reps}</p>`);
        div3.insertAdjacentHTML("beforeend", `<p>${exercises.weight}</p>`);
      });
    };*/
    /* ${listExercises()} // lägg i loopen nedan
    // Borde jag loopa igenom hela innan alla element är på rätt plats?
    /**************************************************************/

    // Nuvarande utseende är bara placeholder tills jag listat ut hur jag får koden ovan att funka
    data.forEach((exercises) => {
      workout.insertAdjacentHTML(
        "beforeend",
        ` <div class="container">
          <div class="head">
            <h3>${exercises.exercise}</h3>
            <p class="edit">E</p>
          </div>
          <div class="content" id="exercise"> 
            <p>${exercises.sets}</p>
            <p>${exercises.reps}</p>
            <p>${exercises.weight}</p>
            <p class="edit">E</p>
          </div>
          <div class="add-set">Add set</div>
        </div>`
      );
    });

    // Funkar inte fullt ut
    if (window.innerWidth < 950) {
      const buttons = document.querySelector(".container");
      buttons.insertAdjacentHTML(
        "beforebegin",
        ` <div class="buttons">
          <button>Add exercise</button>
          <button>Logs</button>
        </div>`
      );
    }
  } else {
    const buttons = document.querySelector(".container");
    buttons.insertAdjacentHTML(
      "afterend",
      ` <div class="buttons">
          <button>Add exercise</button>
          <button>Logs</button>
        </div>`
    );
  }
};

listWorkouts();
