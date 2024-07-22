'use client'

import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { GithubContext } from '@/contexts/github-context'
import { useRouter } from 'next/navigation'
import { ProfileGithub } from './components/profile-github'

export default function GithubBlog() {
  const { fetchGithubSearchIssues, githubSearchIssue } =
    useContext(GithubContext)

  const navigate = useRouter()

  function handleIssueCardDetails(issueId: string) {
    navigate.push(`/details/${issueId}`)
  }

  return (
    <main className="pb-8 pt-28">
      <ProfileGithub />

      <form className="section_limiter my-16 text-center">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(event) => fetchGithubSearchIssues(event.target.value)}
          className="mx-auto w-full max-w-[500px] rounded-md p-1"
        />
      </form>

      <section className="flex flex-wrap items-center justify-center gap-4">
        {githubSearchIssue &&
          githubSearchIssue.map((issue) => {
            return (
              <article
                className="flex h-44 w-64 flex-col gap-4 overflow-hidden rounded-md bg-emerald-800 p-2 text-sm duration-500 hover:scale-105 md:w-96 md:text-base"
                onClick={() => handleIssueCardDetails(String(issue.number))}
                key={issue.number}
              >
                <header className="flex justify-between max-md:flex-col">
                  <h2 className="font-bold">{issue.title}</h2>
                  <span className="whitespace-nowrap text-xs opacity-80">
                    Há{' '}
                    {formatDistanceToNow(new Date(issue.updated_at), {
                      locale: ptBR,
                    })}
                  </span>
                </header>

                <ReactMarkdown className="line-clamp-4 overflow-hidden">
                  {issue.body}
                </ReactMarkdown>
              </article>
            )
          })}
      </section>
    </main>
  )
}