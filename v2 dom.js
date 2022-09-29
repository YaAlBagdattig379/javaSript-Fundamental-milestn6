// 1..add border button 
document.getElementById("add-border").addEventListener("click",function(){
    const containerText = document.getElementById("container-friend");
    containerText.style.border = "4px solid green";

    // console.log("click by add-border",22 +993)
})
// 2....add |backgroundColor|
document.getElementById("add-background").addEventListener("click",function(){

    const friends = document.getElementsByClassName("friend");
    for(const friend of friends){
        friend.style.backgroundColor = "red";
    }     
})

// 3....add |  friend 
document.getElementById("add-friend").addEventListener("click",function(){
      const friendConainer = document.getElementById("container-friend");
      const newFriendDiv = document.createElement("div");
      newFriendDiv.classList.add("friend");
      newFriendDiv.innerHTML = `
      <h4 class="friend-name">friend 6</h4>
      <p>Lorem ipsum dolor sitoffdoloribus. Error  dolor sitoffdoloribus. Error dolor sitoffdoloribus. Error dolor .</p>
      `
      friendConainer.appendChild(newFriendDiv);
})

// 5....add |  color name 
document.getElementById("add-colorName").addEventListener("click",function(){
    // this is only for to add color on every single "friend name" 
})

// 5....add | for "extra things"
document.getElementById("extra-things").addEventListener("click",function(){
    // this is only for extra things 
})
