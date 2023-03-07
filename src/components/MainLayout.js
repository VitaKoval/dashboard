import Flex from "./Flex";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function MainLayout({ children }) {
  return (
    <Flex width="100vw" height="100vh">
      <LeftSidebar />
        <Flex column flexGrow={1}>
        <Header />
        
          {children}
        
      </Flex>
      
    </Flex>
  );
}

export default MainLayout;
