import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ProjectsProps {
  previewDesktop: string
  previewMobile: string
  pageURL: string
  title: string
}

export function CardProject({
  previewDesktop,
  previewMobile,
  pageURL,
  title,
}: ProjectsProps) {
  const [preview, setPreview] = useState('')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width > 1024) {
        setPreview(previewDesktop)
      } else {
        setPreview(previewMobile)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [previewDesktop, previewMobile])

  return (
<<<<<<< HEAD
    <div className="flex h-[28rem] w-52 flex-col items-center rounded-md p-2 lg:h-[16rem] lg:w-[24rem]">
=======
    <div className="flex h-72 w-96 flex-col items-center rounded-md p-2">
>>>>>>> ead0990 (fixed value css from layouts)
      <h2>{title}</h2>

      <a
        href={pageURL}
        target="_blank"
<<<<<<< HEAD
        className="h-full w-full duration-700"
=======
        className="h-44 w-full duration-700"
>>>>>>> ead0990 (fixed value css from layouts)
        rel="noreferrer"
      >
<<<<<<< HEAD
        {preview && (
          <Image
            width={36}
            height={36}
            sizes="100vw"
            className="mx-auto h-full w-full rounded-md border-4 border-transparent object-contain"
            src={preview}
            alt={`Preview of ${title}`}
          />
        )}
=======
        <Image
          width={36}
          height={36}
          sizes="100vw"
          className="mx-auto h-full w-full rounded-md border-4 border-transparent object-cover"
          src={previewDesktop}
          alt="Loading animation"
        />
>>>>>>> 7eb89d7 (refactor: created function helper and constants for topics)
      </a>
    </div>
  )
}
