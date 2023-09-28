export default {
    name: 'horarios',
    type: 'document',
    title: 'Horarios',
    fields:[
        {
            name: 'turno_manha',
            type: 'number',
            title: 'Turno Manhã'
        },
        {
            name: 'turno_tarde',
            type: 'number',
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