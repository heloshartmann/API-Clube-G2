export default {
    name: 'lista_premios',
    type: 'document',
    title: 'Lista Premios',
    fields: [
        {
            name: 'titulo',
            type: 'string',
            title: 'Título'
        },
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição'
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        }
    ]
}