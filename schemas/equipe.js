export default {
    name: 'equipe',
    type: 'document',
    title: 'Equipe',
    fields:[
        {
            name: 'nome',
            type: 'string',
            title: 'Nome'
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        },
        {
            name: 'cargo',
            type: 'number',
            title: 'Cargo'
        }
    ]
}