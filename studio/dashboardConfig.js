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
                  buildHookId: '5ea8995ea99f5874475d781f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-d4e5oqgn',
                  apiId: '64239ac3-73e5-418a-8259-bf3059172faa'
                },
                {
                  buildHookId: '5ea8995ee4e957492f85e9e6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mgkag5q1',
                  apiId: 'a9a0153f-9391-44b7-bd0a-2f975f98c973'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aasalazar23/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mgkag5q1.netlify.app',
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
