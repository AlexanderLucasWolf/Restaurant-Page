//Navbar

const navToggle = document.querySelector(".navbar-button");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

//menu

const menu = [
  {
    id: 1,
    title: "garlic bread",
    category: "appetizer",
    price: 4.99,
    img: "https://www.simplyrecipes.com/thmb/_kfMeM8vmbWkGWn6Y0PDmHdfYu4=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__09__Garlic-Bread-LEAD-1-8b9944bb8e7a4fc49094da4d34f7ba50.jpg",
    desc: `Home made garlic bread. Fresh out of the oven.`,
  },
  {
    id: 2,
    title: "tomato soup",
    category: "appetizer",
    price: 5.99,
    img: "https://www.acouplecooks.com/wp-content/uploads/2021/09/Tomato-Soup-002s.jpg",
    desc: `Italian tomatos mixed with some saisonale Kräuter and a piece of bread.`,
  },
  {
    id: 3,
    title: "steak appetizer",
    category: "appetizer",
    price: 16.99,
    img: "https://i.pinimg.com/originals/80/60/5c/80605ca3e54091c60b57fa3f6128e456.jpg",
    desc: `Seasoned Steak combined with our homemade garlic bread and steak sauce.`,
  },
  {
    id: 4,
    title: "country salad",
    category: "appetizer",
    price: 6.99,
    img: "https://www.thespruceeats.com/thmb/Vuzks5PHP_4SCoJq4MqtDi3fP7I=/1000x1000/smart/filters:no_upscale()/green-salad-recipe-ensalada-verde-3083556-hero-01-256ac7f4162b45e5a1f82a5234a0708c.jpg",
    desc: `The taste of the country side.`,
  },
  {
    id: 5,
    title: "280g rumpsteak",
    category: "meat",
    price: 22.99,
    img: "https://restaurant-sonnenbad.de/wp-content/uploads/2018/07/rumpsteak-karlsruhe.jpg",
    desc: `Money cant buy happiness. But it can buy delicious steak. `,
  },
  {
    id: 6,
    title: "380g irish ribeye steak",
    category: "meat",
    price: 28.99,
    img: "https://cdn.bbqpit.de/wp-content/uploads/2017/01/Irisches-Entrecote-Steak-dry-aged-RibEye-Chimichurri.jpg",
    desc: `Dry aged.`,
  },
  {
    id: 7,
    title: "Meat you there!",
    category: "meat",
    price: 32.99,
    img: "https://www.block-house.de/fileadmin/_processed_/d/1/csm_Blockpedia-Steak-Zuhause-Header_3c5f6df681.jpg",
    desc: `Our classic (350g).`,
  },
  {
    id: 8,
    title: "american classic burger",
    category: "meat",
    price: 25.99,
    img: "https://www.springlane.de/magazin/wp-content/uploads/2019/11/Fuchs_Raspberry-Steak-Burger_ohne_Produkt_Titelbild.jpg",
    desc: `Our best steaks mixed with the American Dream.`,
  },
  {
    id: 9,
    title: "choclate dream",
    category: "desert",
    price: 6.99,
    img: "https://i0.wp.com/prime-13.com/wp-content/uploads/2019/07/21888358_s.jpg?fit=848%2C565&ssl=1",
    desc: `We don't know about you, but we love choclate.`,
  },
  {
    id: 10,
    title: "cheesecake",
    category: "desert",
    price: 5.99,
    img: "https://dinnerstories.de/wp-content/uploads/2021/02/tarta-de-queso-la-vina-rezept-5-500x750-1.jpg",
    desc: `Homemade Cheesecake.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo"/> 
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

//reviews

const reviews = [
  {
    id: 0,
    name: "susan smith",
    date: "12th September 2020",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "This is probably the best Steak House I've ever been to. Great meat, fresh appetizer and friendly waiters.",
  },
  {
    id: 1,
    name: "anna johnson",
    date: "8th April 2021",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "I am here almost every weekend. By far the best restaurant in town. The Burger is out of this world. ",
  },
  {
    id: 2,
    name: "peter jones",
    date: "27th February 2022",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Probably the nicest waiter I ever met in a restaurant. Definetly try the Cheesecake when you are here.",
  },
  {
    id: 3,
    name: "bill anderson",
    date: "15th June 2021",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Meat quality is insane. Drink prices might be a little high but it was a nice experience overall.",
  },
];

let currentReview = 0;
let randomNumber = 0;
const image = document.getElementById('img');
const author = document.getElementById('name');
const date = document.getElementById('date')
const description = document.getElementById('description');

function goRight() {
  if (currentReview < 3){
    currentReview += 1;
  }
  else {
    currentReview = 0;
  }
  updateReview();
}

function goLeft() {
  if (currentReview > 0){
    currentReview -= 1;
  }
  else {
    currentReview = 3;
  }
  updateReview();
}

function updateReview(){
 const item = reviews[currentReview];
 console.log(item);
 image.src = item.img;
 author.textContent = item.name;
 date.textContent = "was here on " + item.date;
 description.textContent = item.text;
}

function random(){
  let randomNumber = Math.floor(Math.random() * reviews.length);
  currentReview = randomNumber;
  updateReview();
  }

// Review

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
