//  import { navbar } from "./navbar.js";
//  document.getElementById("navbar").innerHTML=navbar();
var array = JSON.parse(localStorage.getItem("database")) || []
function Description(event) {
    event.preventDefault();
    function obj(n, c, u, i, b) {

        this.name = n;
        this.course = c;
        this.unit = u;
        this.image = i;
        this.batch = b;
    }
    let a=0;
    let b=0;
    let form = document.getElementById("form");
    //  var namee=document.getElementById("name").value;
    var namee = form.name.value;
    var course = document.getElementById("course").value;
    console.log(namee);
    var unit = document.getElementById("unit").value;
    var image = document.getElementById("image").value;
    var batch = document.getElementById("batch").value;
    // if(batch==16){
    //   a++;//1

    // }
    // else{
    //     b++;
    // }
    var genrateObject = new obj(namee, course, unit, image, batch);
    array.push(genrateObject)
    localStorage.setItem("database", JSON.stringify(array))
    console.log(genrateObject);
}

document.getElementById("Dashboard").addEventListener("click", Dashboard);
function Dashboard() {
    window.location.href = "dashboard.html";
}
