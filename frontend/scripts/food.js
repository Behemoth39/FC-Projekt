const foodTable = document.querySelector("main");

const listFoods = async () => {
  const url = "http://localhost:3000/foods";

  const response = await fetch(url);

  if (response.status == 200) {
    const data = await response.json();
    console.log(data);

    foodTable.insertAdjacentHTML(
      "beforeend",
      ` <section class="table-holder">
        <a href="" class="cal">Logs</a>
        <div class="table-container">
          <table class="main-table">
            <!-- Sätt overflow  -->
            <colgroup>
              <col class="col-1" />
              <col class="col-2" />
              <col class="col-2" />
              <col class="col-2" />
              <col class="col-2" />
              <col class="col-2" />
              <col class="col-3" />
            </colgroup>
            <thead>
              <tr>
                <td>Food</td>
                <td>Amount / g</td>
                <td>Calories / kcal</td>
                <td>Protein / g</td>
                <td>Carbs / g</td>
                <td>Fat / g</td>
              </tr>
            </thead>
            <tbody id="foods">             
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">Add Meal</td>
              </tr>
            </tfoot>
          </table>
          <div class="sum-note">
            <table class="sub-table">
              <colgroup>
                <col class="col-4" />
                <col class="col-4" />
                <col class="col-4" />
                <col class="col-4" />
              </colgroup>
              <thead>
                <tr>
                  <td class="header" colspan="4">Daily totals</td>
                </tr>
                <tr>
                  <td>Calories</td>
                  <td>Protein</td>
                  <td>Carbs</td>
                  <td>Fats</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1831</td>
                  <td>110,15</td>
                  <td>156,96</td>
                  <td>90,77</td>
                </tr>
              </tbody>
            </table>
            <div class="text-window"><p>Food notes</p></div>
          </div>
        </div>
      </section>`
    );

    // <table class="sub-table"> should also have its own function to sum daily totals

    const food = document.querySelector("#foods");
    data.forEach((foods) => {
      food.insertAdjacentHTML(
        "beforeend",
        `<tr>
            <td>${foods.name}</td>
            <td>${foods.amount}</td>
            <td>${foods.calories}</td>
            <td>${foods.protein}</td>
            <td>${foods.carbs}</td>
            <td>${foods.fats}</td>
            <td class="delete">X</td>
        </tr>`
      );
    });
  }
};

listFoods();
