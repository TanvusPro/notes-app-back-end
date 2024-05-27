const { nanoid } = require('nanoid');
let notes = require('./notes');

/* server.ext('onPreResponse', (request, h) => {
    const response = request.response;
    if (response.isBoom) {
        const headers = response.output.headers;
        headers['Access-Control-Allow-Origin'] = '*';
    } else {
        response.header('Access-Control-Allow-Origin', '*');
    }
    return h.continue;
}); */

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        id, title, tags, body, createdAt, updatedAt
    };

    notes.push(newNote);

    const response = h.response({
        status: 'success',
        error: false,
        message: 'Catatan berhasil ditambah, BUSTANIL!',
        data: {
            noteId: id,
        }
    });

    response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com', '*');
    response.code(201);
    return response;
};

const getAllNotesHandler = () => {
    return {
        status: 'success',
        error: false,
        data: {
            notes,
        },
    };
};

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: 'success',
            error: false,
            data: {
                note,
            }
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan, yuk Coba Lagi',
    });

    response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com', '*');
    response.code(404);
    return response;
};

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };
