import Head from 'next/head'
import { ExternalLinkIcon } from '@heroicons/react/outline'

import Layout from '../components/Layout'

const projects = [
  {
    id: 1,
    name: 'Project 1',
    link: '#',
    linkText: 'project1.com',
    description:
      'A brief description of the project',
  },
  {
    id: 2,
    name: 'Project 2',
    link: '#',
    linkText: 'project2.com',
    description:
      'A brief description of the project',
  },
  // You can add more projects here
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Your Name</title>
        <meta name="description" content="Your Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="space-y-6 max-w-prose mx-auto py-8">
          {projects.map((project) => (
            <div
              className="bg-white dark:bg-gray-700 p-4 md:p-8 space-y-2 shadow-md rounded"
              key={project.id}
            >
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </p>
                <div className="flex items-center space-x-1">
                  <a
                    className="text-yellow-400"
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                  >
                    {project.linkText}{' '}
                  </a>
                  <ExternalLinkIcon
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}
