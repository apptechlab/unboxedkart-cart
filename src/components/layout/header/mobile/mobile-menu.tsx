
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
	IoLogoInstagram,
	IoLogoTwitter,
	IoLogoFacebook,
	IoLogoYoutube,
	IoClose,
} from "react-icons/io5";
import { useUI } from "../../../../contexts/ui.context";
import { siteSettings } from "../../../../settings/site-settings";
import Link from "../../../widgets/link";
import Logo from "../../../widgets/logo";
import Scrollbar from "../../../widgets/scrollbar";


const social = [
	{
		id: 0,
		link: "https://www.facebook.com/unboxedkart/",
		icon: <IoLogoFacebook />,
		className: "facebook",
		title: "text-facebook",
	},
	{
		id: 1,
		link: "https://twitter.com/unboxedkart",
		icon: <IoLogoTwitter />,
		className: "twitter",
		title: "text-twitter",
	},
	{
		id: 2,
		link: "https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw",
		icon: <IoLogoYoutube />,
		className: "youtube",
		title: "text-youtube",
	},
	{
		id: 3,
		link: "https://www.instagram.com/unboxedkart/",
		icon: <IoLogoInstagram />,
		className: "instagram",
		title: "text-instagram",
	},
];

export default function MobileMenu() {
	const [activeMenus, setActiveMenus] = useState<any>([]);
	const { site_header } = siteSettings;
	const { closeSidebar } = useUI();
	
	const handleArrowClick = (menuName: string) => {
		let newActiveMenus = [...activeMenus];

		if (newActiveMenus.includes(menuName)) {
			var index = newActiveMenus.indexOf(menuName);
			if (index > -1) {
				newActiveMenus.splice(index, 1);
			}
		} else {
			newActiveMenus.push(menuName);
		}

		setActiveMenus(newActiveMenus);
	};

	const ListMenu = ({
		dept,
		data,
		hasSubMenu,
		menuName,
		menuIndex,
		className = "",
	}: any) =>
		data.label && (
			<li className={`mb-0.5 ${className}`}>
				<div className="flex items-center justify-between">
					<Link
						href={data.path}
						className="w-full text-[15px] menu-item relative py-3 ps-5 md:ps-7 pe-4 transition duration-300 ease-in-out"
					>
						<span className="block w-full" onClick={closeSidebar}>
							{(`${data.label}`)}
						</span>
					</Link>
					{hasSubMenu && (
						<div
							className="cursor-pointer w-16 md:w-20 h-8 text-lg flex-shrink-0 flex items-center justify-center"
							onClick={() => handleArrowClick(menuName)}
						>
							<IoIosArrowDown
								className={`transition duration-200 ease-in-out transform text-heading ${
									activeMenus.includes(menuName) ? "-rotate-180" : "rotate-0"
								}`}
							/>
						</div>
					)}
				</div>
				{hasSubMenu && (
					<SubMenu
						dept={dept}
						data={data.subMenu}
						toggle={activeMenus.includes(menuName)}
						menuIndex={menuIndex}
					/>
				)}
			</li>
		);

	const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
		if (!toggle) {
			return null;
		}

		dept = dept + 1;

		return (
			<ul className="pt-0.5">
				{data?.map((menu: any, index: number) => {
					const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

					return (
						<ListMenu
							dept={dept}
							data={menu}
							hasSubMenu={menu.subMenu}
							menuName={menuName}
							key={menuName}
							menuIndex={index}
							className={dept > 1 && "ps-4"}
						/>
					);
				})}
			</ul>
		);
	};

	return (
		<>
			<div className="flex flex-row w-full h-full">
				<Scrollbar className="menu-scrollbar flex-grow">
					<div className="flex flex-row py-7 px-0 lg:px-2 text-heading">
						<ul className="HeaderMenu">
							{site_header.menu.map((menu, index) => {
								const dept: number = 1;
								const menuName: string = `sidebar-menu-${dept}-${index}`;
								return (
									<ListMenu
										dept={dept}
										data={menu}
										hasSubMenu={menu.subMenu}
										menuName={menuName}
										key={menuName}
										menuIndex={index}
									/>
								);
							})}
						</ul>
					</div>
				</Scrollbar>
			</div>
		</>
	);
}
