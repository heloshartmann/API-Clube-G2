export default {
    name: 'preclube',
    type: 'document',
    title: 'Pré Clube',
    fields:[
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        },
        {
            name: 'faixa_idade',
            type: 'number',
            title: 'Faixa de Idade'
        },
        {
            name: 'horarios',
            type: 'reference',
            title: 'Horários',
            to: [{type: 'horarios'}]
        }
    ]
}