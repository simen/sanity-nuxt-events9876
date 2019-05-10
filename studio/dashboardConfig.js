export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events9876-studio',
                  apiId: '2c6712f8-c2ee-4ae9-aeb5-61513b340441'
                },
                {
                  buildHookId: '5cd586093efbb708ffbebb23',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events9876',
                  apiId: '684ec8ab-833f-4413-943a-f97ed3665140'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nuxt-events9876',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events9876.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
