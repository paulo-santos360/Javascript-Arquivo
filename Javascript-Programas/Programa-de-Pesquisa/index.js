// JS

//Filter array

let filterarray = [];

let galleryarray = [
  {
    id: 1,
    name: "backup",
    src: "images/backup.jpg",
    desc: "lorem ipsum bhwfbehcbejhb chb chjne",
  },
  {
    id: 2,
    name: "bateria.jpg",
    src: "./images/bateria.jpg",
    desc: "lorem ipsum bhwfbehcbejhb chb chjne",
  },
  {
    id: 3,
    name: "gabinete",
    src: "images/gabinete-1.jpg",
    desc: "lorem ipsum bhwfbehcbejhb chb chjne",
  },
  {
    id: 4,
    name: "liquido",
    src: "images/liquido.jpg",
    desc: "lorem ipsum bhwfbehcbejhb chb chjne",
  },
  {
    id: 5,
    name: "logo",
    src: "images/logo-1.jpg",
    desc: "lorem ipsum bhwfbehcbejhb chb chjne",
  },
  {
    id: 6,
    name: "roteadores",
    src: "images/roteador.jpg",
    desc: "lorem ipsum bhwfbehcbejhb chb chjne",
  },
];

//create a function to show gallery
showgallery(galleryarray);


function showgallery(currarray) {

    document.getElementById("card").innerHTML = "";
  for (var i = 0; i < currarray.length; i++) {
    document.getElementById("card").innerHTML += `
    <div class="col-md-4 mt-3>
      <div class="card p-3 ps-5 pe-5>
      <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
      <img src="${currarray[i].src}" width="100%" height="220px" />
      <p class="mt-2">${currarray[i].desc}</p>
      <button class="btn btn-primary w-100 mx-auto">More</button>
      </div>
    </div>`;
  }
}

// live seacrhing using keyup input

document.getElementById("myinput").addEventListener("keyup", function () {
  let text = document.getElementById("myinput").value;

  filterarray = galleryarray.filter(function(a){
    if (a.name.includes(text)){
      return a.name;
    }
  });
  if(this.value == "") {
    showgallery(galleryarray);
  } else {
    if(filterarray == "") {
        document.getElementById("para").style.display = "block";
        document.getElementById("card").innerHTML = "";
    }
    else{
        showgallery(filterarray);
        document.getElementById("para").style.display = 'none';
    }
  }
});
