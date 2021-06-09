export const btn = document.getElementById("action");

btn.addEventListener("click", function () {
    //Do something here
    let boxwidthinput = document.getElementById("myInput").value;
    let boxwidthinputnumber = parseFloat(boxwidthinput);
    if (boxwidthinputnumber != 0) {
        cube.scale.x = boxwidthinputnumber;
    }

    //cube.position.x=2;
});