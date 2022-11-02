import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <maim>{children}</maim>
    </>
  );
};

export default Layout;
