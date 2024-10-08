
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function Page() {
  return (
    <section className='mt-16 font-medium md:text-lg'>
      <h1 className="mb-4 md:text-5xl text-3xl font-bold tracking-tighter">
        my name is pawan
      </h1>
      
      <p className="mb-8 opacity-60 font-semibold">
        co-founder <Link className='underline' href="https://www.viralxpost.xyz/">viralxpost</Link> + <Link className='underline' href="https://www.nexzsol.tech/">nexzsol</Link></p>
      <p className="mb-4">
        I am a 21 year old developer based in india.
      </p>
      <p className="mb-4">
      I&apos;m also a <span className='font-semibold'>CS</span> undergrad passionate about building <span className='font-semibold'>SaaS</span> applications, with a strong interest in <span className='font-semibold'>web3</span> and <span className='font-semibold'>AI</span> technologies.
      </p>
      <h1 className="mb-8 mt-16 md:text-5xl text-3xl font-bold  tracking-tighter">
      building a saas?
      </h1>
      <p className="mb-4">
      If you&apos;re working on something exciting and need help taking it to the next level, I&apos;m here for you.
      </p>
      <p className="mb-4">
      The fastest way to reach me is by messaging me on X at <Link href="" className='font-semibold italic underline'>@near0lx</Link>
      </p>
      <Separator className='my-16'/>
      <ul className=' dark:text-zinc-700'>
      <li className='pb-4'>twitter <Link className='underline opacity-70' href="https://x.com/near0lx">@near0lx</Link></li>
      <li className='pb-4'>github <Link className='underline opacity-70' href="https://github.com/Pawank06">@pawank06</Link></li>
      <li className='pb-4'>Instagram <Link className='underline opacity-70' href="https://www.instagram.com/aka.pawan/">@aka.pawan</Link></li>
      <li className='pb-4 md:block hidden'>email <Link className='underline opacity-70' href="https://heypawanb@gmail.com">@heypawanb@gmail.com</Link></li>
      </ul>
    </section>
  )
}
