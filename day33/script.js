const noteBtn = document.getElementById("add-btn"),
  noteTitle = document.getElementById("note-title"),
  noteText = document.getElementById("note-text"),
  clear = document.querySelector(".clear");

//   Get notes from local storage
function getNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
}

//   Note btn event listener
noteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (noteTitle.value == "" || noteText.value == "") {
    return alert("please add note title and details");
  }

  getNotes(); // notesObj array

  let myObj = {
    title: noteTitle.value,
    text: noteText.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  document.querySelector("form").reset();
  // form.reset() : 모든 폼 요소의 기본값 우리가 기본으로 셋팅 했던 값으로 되돌려준다.
  showNotes();
});

// this.id ????
// notesObj ????
// reset() : 내가 설정한 기본값으로 초기화
// confirm alert 시 확인,취소 두개의 선택사항을 bolean 데이터로 보여줌

function showNotes() {
  getNotes();
  let html = "";
  notesObj.forEach((element, index) => {
    html += /*HTML*/ `
        <div class="note">
        <div class="note-cta">
          <p class="note-counter">Note ${index + 1}</p>
          <div class="note-cta-btn">
            <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">                
            <i class="fas fa-trash"></i> Delete
            </button>
            <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
        <hr />
        <h3 class="note-title">Title: ${element.title}</h3>
        <p class="note-text">${element.text}</p>
      </div>
        `;
  });
  let noteElm = document.getElementById("notes");

  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No notes added, Please add a note";
  }
}

// DELETE A SINGLE NOTE
function deleteNote(index) {
  let confirmDel = confirm("Delete this note");
  if (confirmDel) {
    getNotes();
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
}

// Delete all notes
clear.addEventListener("click", () => {
  localStorage.clear();
  showNotes();
});

// Edit note
function editNote(index) {
  if (noteTitle.value !== "" || noteText.value !== "") {
    return alert("Please clear the form before editing");
  }
  getNotes();

  noteTitle.value = notesObj[index].title;
  noteText.value = notesObj[index].text;

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

showNotes();