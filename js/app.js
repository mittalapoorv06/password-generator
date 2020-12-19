showNote();
//ADD NOTE BUTTON
let addbtn = document.getElementById("addbtn");
let addtitle = document.getElementById("addtitle")
addbtn.addEventListener("click", function (e) {

    let addtxt = document.getElementById("addtxt");
    let note = localStorage.getItem("note");
    if (note == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(note);
    }
    let myobj = {
        title: addtitle.value,
        text: addtxt.value
    }
    notesobj.push(myobj);
    localStorage.setItem("note", JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value = "";
    console.log(notesobj);
    showNote();
})
//SHOW NOTE FUNCTION
function showNote() {
    let note = localStorage.getItem("note");
    if (note == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(note);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` <div class="card noteCard my-2 mx-2" style="width: 18rem;">
        <div id="cardbody" class="card-body">
          <h5 class="card-title"> ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
          
          
        </div>
      </div>  
        `

    });
    let noteElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteElm.innerHTML = html;

    }
    else {
        noteElm.innerHTML = 'Nothing to show! plz add note';
    }
}
//DELETE NOTE FUNCTION
function deleteNote(index) {
    console.log(index);
    let note = localStorage.getItem("note");
    if (note == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(note);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(notesobj));
    showNote();


}
//SEARCHDE
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inptval = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inptval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});

