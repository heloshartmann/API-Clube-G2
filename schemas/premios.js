export default {
    name: 'premios',
    type: 'document',
    title: 'Premios',
    fields:[
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
        },
        {
            name: 'lista_premios',
            type: 'reference',
            title: 'Lista Premios',
            to: [{type: 'lista_premios'}]
        }
    ]
}