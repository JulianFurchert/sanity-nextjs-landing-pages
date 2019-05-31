export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cf074e96b4015366b67f07c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ajsg9nsw',
                  apiId: '67d7386d-2dcf-4bf9-b7f2-41edd9bf7123'
                },
                {
                  buildHookId: '5cf074e99059577c2ec9ee7f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5r3w63te',
                  apiId: '24f861d6-66dd-46e9-a36e-be5123f7a896'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JulianFurchert/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5r3w63te.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
