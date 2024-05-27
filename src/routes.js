const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
            cors: true,
        },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
        options: {
            cors: true,
        },
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
        options: {
            cors: true,
        },
    },
];

module.exports = routes;
