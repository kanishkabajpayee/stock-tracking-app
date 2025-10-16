import Link from 'next/link'

interface FooterLinksProps {
  text: string;
  linkText: string;
  href: string;
}

const FooterLinks = ({ text, linkText, href }: FooterLinksProps) => {
  return (
    <div className='text-center pt-4 '>
        <p className='text-sm text-gray-500'>
            {text}{` `}
            <Link href={href} className='footer-link'>
                 {linkText}{` `}
            </Link>

        </p>
    </div>
  )
}

export default FooterLinks