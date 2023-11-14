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
            title: 'Conteúdo (use " § " para a quebra de linha)',
          },
        {
            name: 'data',
            type: 'date',
            title: 'Data Publicação'
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        }
    ]
}