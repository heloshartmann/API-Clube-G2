export default {
    name: 'horarios',
    type: 'document',
    title: 'Horarios',
    fields:[
        {
            name: 'turno_manha',
            type: 'string',
            title: 'Turno Manhã'
        },
        {
            name: 'turno_tarde',
            type: 'string',
            title: 'Turno Tarde'
        },
        {
            name: 'dias_semana',
            title: 'Dias da semana',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'turma',
            title: 'Turma',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}