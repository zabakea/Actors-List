fetch("./actors.json")
.then(initial => initial.json())
.then(callback);

function callback(data) {
    console.log(data);
    data.forEach(displayActors);
}

function displayActors(actor) {
    const template = document.querySelector("#myTemplate").content;
    const clone = template.cloneNode(true);
    
    
    clone.querySelector(".singleActor").textContent = actor.fullname;

    const modal = document.querySelector("#modal");
    const btn = clone.querySelector(".more");
    const close = document.querySelector(".close");

    btn.addEventListener("click", getMoreData);

    function getMoreData() {
      modal.classList.remove("hide");
      document.querySelector(".name").textContent = actor.fullname;
      document.querySelector(".movie").textContent = "MOVIE:" + ` ${actor.movie}`;
    }

    close.addEventListener("click", hideModal);

    function hideModal() {
      modal.classList.add("hide");
    }
 
  

    document.querySelector(".actorList").appendChild(clone);
    

}

