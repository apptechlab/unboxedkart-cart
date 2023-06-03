import { useState } from "react";

const SideBar = ({ children }: any) => {
    const [mdVisible, setVisible] = useState(true);
    return (
        <div className="flex">
            {/* <div
                className={`${mdVisible ? "md:block" : "md:hidden"} ${mdVisible ? "hidden" : "block"}`}
            >
                <ExitMenu onClick={() => setVisible(mdVisible => !mdVisible)} />
                <Menu />
            </div>
            <div
                className={`${!mdVisible ? "md:block" : "md:hidden"} ${!mdVisible ? "hidden" : "block"}`}
            >
                <MenuCollapsed onClick={() => setVisible(mdVisible => !mdVisible)} />
            </div>
            <div className="flex-1">{children}</div> */}
        </div>
    );
};