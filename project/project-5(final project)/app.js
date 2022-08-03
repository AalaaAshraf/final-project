
let num = 4;
const newSection = function () {
  num++;
  const content= document.querySelector("main");
 const con =`<svg
      class="wave"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
    >
      <path
        class="wave-path"
        d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
        fill="currentColor"
      ></path>
    </svg>

    <section id='section${num}' class="video-call" data-nav='Section${num}'>
      <div class="row container">
        <div class="text-group">
          <h2  class="title secondary-title">section${num}</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            illum laborum iure accusamus consectetur? Molestiae, minus odit? Ea
            cupiditate a dolore debitis quidem, similique facere impedit optio
            odit neque esse!
          </p>
        </div>
        <img
          src="imges/pexels-negative-space-34601.jpg"
          alt=""
          class="grid-image"
        />
      </div>
    </section>`
 content.insertAdjacentHTML("beforeend", con);
};

const newNavBar = document.getElementById("nav-list");
const newItemOfNave = function()  {
  newNavBar.innerHTML="";
  document.querySelectorAll("section").forEach(function(section)  {
    const newItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="nav-link">${section.dataset.nav}</a></li>`;
    newNavBar.insertAdjacentHTML("beforeend", newItem);
  });
};



document.getElementById("button").addEventListener("click",function() {
  newSection();
  newItemOfNave();
  
});

