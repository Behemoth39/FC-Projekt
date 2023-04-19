const workout = document.querySelector("#workouts");

const listWorkouts = async () => {
  const url = "http://localhost:3000/workouts";

  const response = await fetch(url);

  if (response.status == 200) {
    const data = await response.json();

    data.forEach((exercises) => {
      workout.insertAdjacentHTML(
        "beforeend",
        ` <div class="container">
          <div class="head">
            <h3>${exercises.exercise}</h3>
            <p class="edit">E</p>
          </div>
          <div class="content">
            <p>${exercises.sets}</p>
            <p>${exercises.reps}</p>
            <p>${exercises.weight}</p>
            <p class="edit">E</p>
          </div>
          <div class="add-set">Add set</div>
        </div>
        <div class="buttons">
          <button>Add exercise</button>
          <button>Logs</button>
        </div>`
      );
    });

    /*for (let i = 0; i < exercise.sets; i++) {
      <div class='content'>
        <p>${i++}</p>
        <p>${exercises.reps}</p>
        <p>${exercises.weight}</p>
        <p class='edit'>E</p>
      </div>;
    }*/
  }
};

listWorkouts();
