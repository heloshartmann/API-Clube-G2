export default{
    name: 'noticia',
    type: 'document',
    title: 'Noticias',
    fields:[
        {
            name: 'titulo',
            type: 'string',
            title: 'Titulo'
        },
        {
            name: 'subtitulo',
            type: 'string',
            title: 'Subtitulo'
        },
        {
            name: 'conteudo',
            type: 'string',
            title: 'Conteudo'
        },
        {
            name: 'data',
            type: 'string',
            title: 'Data Publicação'
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        }
    ]
}