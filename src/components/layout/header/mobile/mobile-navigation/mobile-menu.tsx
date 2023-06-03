import classNames from "classnames";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ListMenu from "../../../../widgets/list-menu";
import MegaMenu from "../../../../widgets/mega-menu";

interface MenuProps {
    data: any;
    className?: string;
}

const MobileMenu: React.FC<MenuProps> = ({ data, className }) => {
    return (
        <nav>
            {data?.map((item: any) => (
                <div
                    className={`menuItem group cursor-pointer py-0 font-trebuchet${item.subMenu ? "relative" : ""
                        }`}
                    key={item.id}
                >
                    <Link
                        href={item.path}
                        className="text-white inline-flex items-center text-sm xl:text-base px-3 xl:px-4 py-2 font-normal relative group-hover:underline font-trebuchet" to={""}          >
                        {item.label}
                        {(item?.columns || item.subMenu) && (
                            <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end font-trebuchet">
                                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
                            </span>
                        )}
                    </Link>

                    {item?.columns && Array.isArray(item.columns) && (
                        <MegaMenu columns={item.columns} />
                    )}

                    {item?.subMenu && Array.isArray(item.subMenu) && (
                        <div className="subMenu shadow-header bg-white absolute start-0 opacity-0 group-hover:opacity-100 font-trebuchet">
                            <ul className="text-black font-semibold text-sm py-5">
                                {item.subMenu.map((menu: any, index: number) => {
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
                    )}
                </div>
            ))}
        </nav>
    );

};

export default MobileMenu;
