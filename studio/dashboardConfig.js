export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df76c4992246736248adfc4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vq1uhtyc',
                  apiId: '5dcb6166-46c4-4e79-8713-f56967f4084a'
                },
                {
                  buildHookId: '5df76c49738bc7a8d82ac10a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-226txxba',
                  apiId: '337baae1-8684-403a-bb52-081f89f80f59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrggrgr/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-226txxba.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
