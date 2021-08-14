import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaAddressCard, FaWallet, FaSearch,FaStream } from 'react-icons/fa';

const Sidebar = () => {
return(
<div
style={{
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: 14,
  letterSpacing: '1px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: '#fff',
  position:'absolute',
  height: '100%',
  margin: '0px auto',
  float:'left',
  }}
  >
<ProSidebar breakPoint="xs" collapsedWidth="120px">
  <SidebarHeader icon={<FaStream/>}>
    <div
      style={{
        padding: '32px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: '1px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
      >
      MENU
    </div>
  </SidebarHeader>
  <Menu iconShape="square" popperArrow="true">
    <MenuItem icon={<FaGem />}>Quests</MenuItem>
    <MenuItem icon={<FaSearch />}>Explore</MenuItem>
    <MenuItem icon={<FaWallet />}>Vault</MenuItem>
    <MenuItem icon={<FaAddressCard />}>Cards</MenuItem>
  </Menu>
</ProSidebar>
</div>);
};
export default Sidebar;
