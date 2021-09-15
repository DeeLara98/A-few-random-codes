const tasks = document.getElementsByClassName("tasks")[0];
const input = document.getElementById("input");
const trash = document.getElementById("trash");
input.addEventListener("keydown", function(event){
  if(event.key === "Enter") {
    addItem();
  };
});
function addItem(){
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trash = document.createElement("i");
  divParent.className = "tasks";
  divParent.innerHTML = '<div>'+input.value+'</div>';
  checkIcon.className = "fa fa-check-square";
  checkIcon.style.color = "darkgray";
  checkIcon.addEventListener("click", function(){
    checkIcon.style.color = "royalblue";
    divParent.style.transition = "all 2s ease-in-out";
    divParent.style.textDecoration = "line-through";
  });
  divChild.appendChild(checkIcon);
  trash.className = "fa fa-trash";
  trash.style.color = "black";
  trash.addEventListener("click", function(){
    divParent.remove();
  });
  divChild.appendChild(trash);
  divParent.appendChild(divChild);
  tasks.appendChild(divParent);
  input.value = '';
};
