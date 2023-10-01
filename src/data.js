let projects = [];

let notes = [];

function saveDataToLocal() {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('notes', JSON.stringify(notes));
  } 
}

function loadDataFromLocal() {
  if (typeof Storage !== 'undefined') {
    const savedProjects = localStorage.getItem('projects');
    const savedNotes = localStorage.getItem('notes');

    if (savedProjects) {
      projects = JSON.parse(savedProjects);
    }

    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    }
  }
}

export { projects, notes, saveDataToLocal, loadDataFromLocal };
