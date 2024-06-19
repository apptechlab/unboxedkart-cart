// import '../styles/globals.css'
// import "@styles/tailwind.css";
// import "../styles/tailwind.css";
import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Hydrate } from "react-query/hydration";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";
import MobileMenu from "../components/layout/header/mobile/mobile-menu";
import ManagedModel from "../components/layout/modal/managed-model";
import ManagedDrawer from "../components/layout/drawer/managed-drawer";
import { CartProvider } from "./my-account/cart/cart-context";
import { AuthProvider } from "../contexts/authContext";
// import { ManagedUIContext, UIProvider } from "../contexts/ui.context";
// import { ManagedUIContext, UIProvider } from "../contexts/ui.context";
// import { ManagedUIContext, UIProvider } from "../contexts/ui.contexts";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  // const Noop: React.FC = ({ children }) => <>{children}</>;
  const Layout = (Component as any).Layout;

  function handleExitComplete() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <AuthProvider>
      <CartProvider>
      <QueryClientProvider client={queryClientRef.current}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      {/* <ManagedUIContext> */}
      <div className="bg-backgroundWhite">
        {/* <Layout className="bg-black" pageProps={pageProps}> */}
          <div className="bg-backgroundWhite sm:mt-2 lg:mt-4 font-trebuchet">
            <div className="h-10 lg:h-2 "></div>
            <Component {...pageProps} key={router.route} />
          </div>
        {/* </Layout> */}
        <ManagedModel />
        <ManagedDrawer />
      </div>
      {/* </ManagedUIContext> */}
      {/* </Hydrate> */}
    </QueryClientProvider>
    </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
