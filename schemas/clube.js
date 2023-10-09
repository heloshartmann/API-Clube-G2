export default {
    name: 'clube',
    type: 'document',
    title: 'Clube',
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
            name: 'faixa_idade_fim',
            type: 'number',
            title: 'Faixa de Idade fim'
        },
        {
            name: 'faixa_idade_inicio',
            type: 'number',
            title: 'Faixa de Idade inicio'
        },
        {
            name: 'horarios',
            type: 'reference',
            title: 'Horários',
            to: [{type: 'horarios'}]
        }
    ]
}