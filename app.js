document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('noteForm');
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('notesContainer');
  
    function displayNotes() {
      noteList.innerHTML = '';
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.forEach((note) => {
        const noteElement = document.createElement('div');
        noteElement.textContent = note;
        noteList.appendChild(noteElement);
      });
    }
  
    noteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newNote = noteInput.value.trim();
      if (newNote !== '') {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        displayNotes();
      } else {
        alert("Por favor, escribe algo antes de agregar la nota.");
      }
    });
  
    displayNotes();
  });
  