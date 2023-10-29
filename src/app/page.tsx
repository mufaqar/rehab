import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24 bg-white">
      <Image src="/images/logo.svg" alt="Rehab Fit" width={450} height={650} />
      <Image src="/coming.jpg" alt="Coming Soon" width={624} height={312} />
    </main>
  )
}
