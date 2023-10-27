import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24 bg-white">


      <img src="/images/logo.svg" alt="Rehab Fit" width={450} height={650} alt="Rehab Fit" />
      <img src="/coming.jpg" alt="Coming Soon" />

    </main>
  )
}
