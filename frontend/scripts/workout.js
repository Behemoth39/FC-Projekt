const workout = document.querySelector("#workout-tables");
/* lyckas inte att få detta å fungera */

const listWorkouts = async () => {
  const url = "http://localhost:3000/workouts";

  const response = await fetch(url);

  if (response.status == 200) {
    const data = await response.json();
    console.log(data);

    data.forEach((exercises) => {
      /* Bara för test */
      workout.insertAdjacentHTML("beforeend", `<p>${exercises.exercise}</p>`);
    });
  }
};

listWorkouts();
