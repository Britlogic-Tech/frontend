type ContainerWithSideBarPropsT = {
	sidebar: React.ReactNode;
	content: React.ReactNode;
};

const ContainerWithSidebar = ({ sidebar, content }: ContainerWithSideBarPropsT) => {
	return (
		<div className="sidebar-and-content">
			<div className="container-sidebar-wrapper">{sidebar}</div>
			<div className="container-content-wrapper">{content}</div>
		</div>
	);
};

export default ContainerWithSidebar;
