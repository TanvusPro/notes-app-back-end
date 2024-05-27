const { nanoid } = require('nanoid');
let notes = [];

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    
    const newNote = {
        id, title, tags, body, createdAt, updatedAt,
    };

    notes.push(newNote);

    const response = h.response({
        status: 'success',
        error: false,
        message: 'Catatan berhasil ditambah',
        data: {
            noteId: id,
        },
    });
    response.code(201);
    return response;
};

module.exports = { addNoteHandler };
