export default {
    name: 'laboratorios',
    type: 'document',
    title: 'Laboratórios',
    fields:[
        {
            name: 'titulo',
            type: 'string',
            title: 'Titulo'
        },
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
        },
        {
            name: 'imagem',
            title: 'Imagem',
            type: 'array',
            of: [{type: 'image'}]
        }
    ]
}