import Link from 'next/link'
import Image from 'next/image';
import error from '../../public/assets/images/404.svg'

export default function NotFound() {
  return (
    <section className='container flex flex-col justify-center items-center'>
      <Image className="py-11" src={error} alt="404 error"/>
      <p className='mb-6'>We can’t seem to find the page you’re looking for.</p>
      <Link className="bg-[#2DC071] hover:bg-[#23856D] text-white rounded-md font-bold flex px-4 py-2" href="/">  Back to Home</Link>
    </section>
  )
}