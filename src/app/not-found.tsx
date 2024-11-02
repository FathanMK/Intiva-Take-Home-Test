import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl">404 Not Found</h1>
      <span className="text-sm">Back to <Link href="/transaction" className="underline hover:text-blue-500 transition-default">Transaction</Link></span>
    </main>
  )
}