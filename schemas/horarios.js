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
            type: 'string',
            title: 'Dias da semana'
        },
        {
            name: 'turma',
            type: 'string',
            title: 'Turma'
        }
    ]
}