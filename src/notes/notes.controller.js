const notes = require("../data/notes-data");

function list(req, res) {
    res.json({ data: notes });
}

function hasText (req, res, next) {
    const { data: { text } = {} } = req.body;
    if (text) {
      return next();
    }
    return next({ status: 400, message: "A 'text' property is required." });
  }
  function noteExists(req, res, next) {
    const noteId = Number(req.params.noteId);
    const foundNote = notes.find((note) => note.id === Number(noteId));
    if (foundNote) {
      return next();
    } else {
      return next({
        status: 404,
        message: `Note id not found: ${req.params.noteId}`,
      });
    }
  }

  function create(req, res, next) {
    const { data: { text } = {} } = req.body;
    const newNote = {
      id: notes.length + 1, // Assign the next ID
      text,
    };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  }

  function read (req, res, next) {
    const noteId = Number(req.params.noteId);
    const foundNote = notes.find((note) => note.id === Number(noteId));
    res.status(200).json({ data: foundNote });
  }

  function update(req, res, next) {
    const { noteId } = req.params;
    const foundNote = notes.find((note) => note.id === Number(noteId));
    const { data: { text } = {} } = req.body;
    foundNote.text = text;
    res.status(200).json({ data: foundNote });
  }

  function destroy(req, res) {
    const { noteId } = req.params;
    const foundNoteIndex = notes.findIndex((note) => note.id === Number(noteId));
    const deletedNotes = notes.splice(foundNoteIndex, 1);
    res.sendStatus(204);
  }

module.exports = { 
    list,
    create: [
        hasText,
        create
    ],
    read: [
        noteExists,
        read
    ],
    update: [
        noteExists,
        hasText,
        update
    ],
    delete: [
        noteExists,
        destroy
    ]
};