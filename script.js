// js code starts here
document.querySelector('#add').onclick = function () {
    if (document.querySelector(".row1 input").value.length == 0) {
        alert("please  write something....")
    }
    else {
        document.querySelector(".row2").innerHTML +=
            ` 
       <div class="show">
        <span>
      ${document.querySelector('.row1 input').value}
      </span>
      <button class="del"><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        document.querySelector(".row1 input").value=""
    };
    var ele = document.querySelectorAll('.del');
    for(var i=0;i<ele.length;i++){
    ele[i].onclick = function(){
        this.parentNode.remove();
    }
}

}
//js code ends here.