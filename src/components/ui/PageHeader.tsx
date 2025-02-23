import clsx from "clsx";
import Container from "@/components/structure/Container";
import LongContent from "@/components/structure/LongContent";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Back from "@/components/ui/Back";
type PageHeaderT = {
	id?: string;
	title: string;
	subtitle?: string;
	breadcrumb?: React.ReactNode;
	className?: string;
	referrer?: string;
};

const PageHeader = ({ id, title, subtitle, className = "", referrer = "" }: PageHeaderT) => {
	return (
		<div
			id={id}
			className={clsx("page-header", className)}
		>
			<Container>
				<div className="layout">
					<Back referrer={referrer} />

					<LongContent>
						<div className="page-header-content">
							<h1 className="page-header-title">{title}</h1>
							{subtitle && <div className="page-header-subtitle">{subtitle}</div>}
						</div>
					</LongContent>
				</div>
			</Container>
		</div>
	);
};

export default PageHeader;
