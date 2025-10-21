import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"

const Header = ({ user }: { user: User }) => {  return (
    <header className="sticky top-0 header">
        <div className="header-wrapper container ">
            <Link href="/">
                <Image alt="" src="/assets/icons/logo.svg" width={140} height={32} className="h-8 w-auto cursor-pointer" />
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>
            <UserDropdown user={user}/>
        </div>
    </header>
  )
}

export default Header