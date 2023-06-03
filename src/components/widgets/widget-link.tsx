import type { FC } from "react";
import Link from "next/link";


interface Props {
	className?: string;
	data: {
		widgetTitle?: string;
		lists: {
			id: string;
			path?: string;
			title: string;
			icon?: any;
		}[];
	};
}

const WidgetLink: FC<Props> = ({ className, data }) => {
	const { widgetTitle, lists } = data;
	
	return (
		<div className={`${className}`}>
			<h4 className="text-white text-xs font-bold mb-5 2xl:mb-6 3xl:mb-7 ">
				{(`${widgetTitle}`)}
			</h4>
			<ul className="text-xs lg:text-xs text-body flex flex-col space-y-3 lg:space-y-3.5">
				{lists.map((list) => (
					<li
						key={`widget-list--key${list.id}`}
						className="flex items-baseline"
					>
						{list.icon && (
							<span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base text-white mr-2">
								{list.icon}
							</span>
						)}
						<Link href={list.path ? list.path : "#!"}>
							<a className="transition-colors duration-200 text-white hover:underline">
								{(`${list.title}`)}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default WidgetLink;
