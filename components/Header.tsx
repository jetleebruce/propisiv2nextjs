import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center w-full p-6 bg-white'>
            <div>
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={65} height={90} quality={80} />
                </Link>
            </div>
            <div>
                <div className="flex flex-row items-end">
                    <Link
                        href="https://instagram.com/propisi.store?utm_medium=copy_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image className="mr-2" width={36} height={36} src="/instagram.png" alt="Instagram" />
                    </Link>
                    <Link
                        href="https://vk.com/id669797369"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image width={36} height={36} src="/vk.png" alt="Vk" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header