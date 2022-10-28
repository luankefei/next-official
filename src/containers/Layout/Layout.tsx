import { LayoutContainer } from "./layout.style";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>{children}</LayoutContainer>
);

export default Layout;
