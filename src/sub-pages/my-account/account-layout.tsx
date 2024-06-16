import Header from "../../components/layout/header/desktop/desktop-header";
import Container from "../../components/widgets/container";
import AccountNav from "./account-nav";


const AccountLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-full h-full">
      <Header />
      <Container className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 h-2/3 ">
          <AccountNav />
        </div>
        <div className="w-full md:w-3/4 bg-white my-4 p-4 ">
            {children}
        </div>
      </Container>
    </div>
  )
};

export default AccountLayout;

