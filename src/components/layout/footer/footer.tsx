import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
import Divider from "../../widgets/divider";

const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className="pt-8 md:pt-6 2xl:pt-6 3xl:pt-6 pt-5 bg-aGrey lg:pt-6">
    <Widgets widgets={widgets} />
    <Divider className="p-0 m-0" />
    <Copyright payment={payment} />
  </footer>
);

export default Footer;
