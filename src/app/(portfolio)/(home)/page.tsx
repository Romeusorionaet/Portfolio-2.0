import { BackgroundOne } from '@/components/backgounds/background-one'
import { CardsStacksBackEnd } from '@/components/cards-stacks/cards-stacks-back-end'
import { CardsStacksFrontEnd } from '@/components/cards-stacks/cards-stacks-front-end'
import Link from 'next/link'
import { SectionVideosOnTopics } from '@/components/section-videos-on-topics'
import { Code2Icon } from 'lucide-react'

export default function Home() {
  return (
    <main className="pb-8 pt-28">
      <BackgroundOne />

      <section className="section_limiter relative h-hbp_0 space-y-4 px-4 lg:h-hbp_2">
        <h1 className="style_title_1">Hello World!</h1>

        <div className="space-y-4 md:w-1/2">
          <h2 className="text-lg md:text-xl">
            Me chamo Romeu Soares e sou Programador Web
          </h2>
          <p className="max-md:text-sm">
            Sua visita é sempre bem-vinda aqui! Preparei esta página para
            compartilhar todos os meus conhecimentos em Programação Web e muito
            mais. Além de temas variados que também me interessam, apresentarei
            tudo de maneira descontraída e agradável. Aproveite para explorar!
          </p>
        </div>

        <div className="absolute bottom-4 right-4">
          <div className="group relative flex items-center justify-end gap-1">
            <Code2Icon className="duration-300 group-focus-within:h-6 group-focus-within:w-6 group-hover:h-6 group-hover:w-6 md:h-0 md:w-0" />
            <Link
              href="/github-blog"
              className="text-base uppercase lg:text-xl"
            >
              Accessar Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-4 text-dark-1">
        <div className="section_limiter pt-8">
          <h2 className="mb-4 text-2xl font-bold">Programação Web</h2>

          <div className="space-y-8">
            <p>
              Programação web é o processo de criar sites e aplicativos que
              funcionam na internet. Envolve escrever código para a parte que o
              usuário vê (front-end) e a parte que o servidor gerencia
              (back-end). Front-end lida com o design e a interação do usuário,
              usando tecnologias como HTML, CSS e JavaScript. Back-end cuida da
              lógica do servidor, banco de dados e APIs, usando linguagens como
              Python, JavaScript (Node.js), PHP, entre outras. O objetivo é
              construir sites e aplicativos funcionais e atraentes que os
              usuários possam acessar de qualquer lugar com uma conexão à
              internet.
            </p>

            <div className="space-y-4">
              <h3 className="font-bold">
                As principais ferramentas que utilizo
              </h3>
              <CardsStacksFrontEnd />
              <CardsStacksBackEnd />
            </div>
          </div>
        </div>

        <div className="mb-4 mt-10 flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">Saber mais sobre:</h2>

          <div className="flex items-center justify-center gap-4 text-foreground">
            <Link
              className="rounded-md bg-dark-1 p-1 no-underline hover:scale-105"
              href={'/developer/front-end'}
            >
              Front-End
            </Link>
            <Link
              className="rounded-md bg-dark-1 p-1 no-underline hover:scale-105"
              href={'/developer/back-end'}
            >
              Back-End
            </Link>
          </div>

          <a
            href="/romeu-soares-programador-front-end.pdf"
            download="Curriculo.pdf"
          >
            Baixar Currículo
          </a>
        </div>
      </section>

      <SectionVideosOnTopics />
    </main>
  )
}