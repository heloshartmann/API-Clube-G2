export default {
    name: 'preclube',
    type: 'document',
    title: 'Pré Clube',
    fields:[
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        },
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
        },
        {
            name: 'faixa_idade_inicio',
            type: 'number',
            title: 'Faixa de Idade inicio'
        },
        {
            name: 'faixa_idade_fim',
            type: 'number',
            title: 'Faixa de Idade fim'
        },
        {
            name: 'horarios',
            type: 'reference',
            title: 'Horários',
            to: [{type: 'horarios'}]
        }
    ]
}