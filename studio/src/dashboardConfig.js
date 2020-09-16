export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f62551b944835122bff97c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-soe7r43w',
                  apiId: '8ef9005f-daa8-4efa-bdba-5264b0f1f5fb'
                },
                {
                  buildHookId: '5f62551c9f65b014f42421fb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f7ku2t4h',
                  apiId: 'bd6a7207-0045-4e2d-8905-aa9f0e826b16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Linux249/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f7ku2t4h.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
