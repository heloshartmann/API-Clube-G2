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
            title: 'Conteúdo',
          },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        },
        {
            name: 'data',
            type: 'date',
            title: 'Data Publicação'
        }
    ]
}