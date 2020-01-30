export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e32daee91ca4130141b2b3f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7mcuf943',
                  apiId: '6f5f3c2d-f20b-4f1a-b2c4-2eb46ea4dd99'
                },
                {
                  buildHookId: '5e32daeeb9c2591e2e3a3ceb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wyvtermy',
                  apiId: '4811e47f-cb2c-47a4-91ff-193fe14fe4ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbrooke/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wyvtermy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
