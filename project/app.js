
let num = 4;
const newSection = function () {
  num++;
  const content= document.querySelector("main");
 const con =`<section id='section${num}' data-nav='Section${num}'>
 <div class='landing__container'>
 <h2>Section${num}</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
 
<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
 </div>
 </section>`;
 content.insertAdjacentHTML("beforeend", con);
};

const newNavBar = document.getElementById("newNavBarList");
const newItemOfNave = function()  {
  newNavBar.innerHTML="";
  document.querySelectorAll("section").forEach(function(section)  {
    const newItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    newNavBar.insertAdjacentHTML("beforeend", newItem);
  });
};

newNavBar.addEventListener("click", function(action)  {
  action.preventDefault();
  if (action.target.dataset.nav) {
    document
      .getElementById(`${action.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${action.target.dataset.nav}`;
    }, 500);
  }
});

document.getElementById("button").addEventListener("click",function() {
  newSection();
  newItemOfNave();
  
});

