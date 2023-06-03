import { siteSettings } from "../../../settings/site-settings";

import footer from "../../../../public/strings/footer.json";
import Container from "../../widgets/container";


interface CopyrightProps {
  payment?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
}

const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = ({ payment }) => {
  return (
    <div className="pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
      <Container className="flex flex-col-reverse md:flex-row text-center md:justify-between font-trebuchet">
        <p className="text-white text-xs lg:text-sm leading-6">
          {footer["link-copyright"]}&copy; {year}&nbsp;
          <a
            className="text-white font-semibold transition-colors duration-200 ease-in-out hover:text-white"
            href={siteSettings.author.websiteUrl}
          >
            {"Unboxedkart."}
          </a>
          &nbsp; {footer["text-all-rights-reserved"]}
        </p>

        {/* {payment && (
          <ul className="hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 mb-1 md:mb-0 mx-auto md:mx-0 ">
            {payment?.map((item) => (
              <li
                className="mb-2 md:mb-0 transition hover:opacity-80"
                key={`payment-list--key${item.id}`}
              >
                <a
                  href={item.path ? item.path : "/#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                  className="px-1"
                    src={item.image}
                    alt={`${item.name}`}
                    height={item.height}
                    width={item.width}
                  />
                </a>
              </li>
            ))}
          </ul>
        )} */}
      </Container>
    </div>
  );
};

export default Copyright;
