import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = (props: { link: { href: string; label: string },onClick?: () => void }) => {
	const pathname = usePathname()

	return (
		<li>
			<Link onClick={props.onClick}  href={props.link.href} className={`text-2xl lg:text-lg uppercase ${linkHover} ${
				pathname === props.link.href ? 'text-yellow-400 ' : ''}`}>
				{props.link.label}
			</Link>
		</li>
	)
}

export default NavLink

const linkHover = `relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-secondary-400 dark:after:bg-primary-400 after:w-[75%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`
