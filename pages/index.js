import Layout from '../components/layout';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaTachometerAlt, FaGem, FaList, FaAddressCard, FaWallet, FaSearch,FaStream } from 'react-icons/fa';
import Header from '../components/header';

<style jsx global>{`
*,
*::before,
*::after {
  box-sizing: border-box;
}
.MenuItem{
  height: 120%;
}

`}</style>

const Home = () => (

  <div>
        <Header />

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
<ProSidebar  breakPoint="xs" collapsedWidth="120px">
<SidebarHeader icon={<FaStream/>}>
        <div
          style={{
            padding: '24px',
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
<MenuItem icon={<FaGem />}>Dashboard</MenuItem>
<SubMenu title="Explore" icon={<FaSearch />}>
<MenuItem>Component 1</MenuItem>
<MenuItem>Component 2</MenuItem>
</SubMenu>
<MenuItem icon={<FaWallet />}>Vault</MenuItem>
<MenuItem icon={<FaAddressCard />}>Cards</MenuItem>


</Menu>
</ProSidebar>

</div>

  <Layout style={{float:'right'},{height:'100'}}>
       
    <h1>Opsci Passport</h1>
    <p>
      Welcome to the world of Decentralized Science{'.   '}
      Visit <a href={`https://opsci.io`}>Opscientia</a> to
      learn what we do <a href={`https://discord.gg/qc9zp5sd`}>and how you can contribute to free Science</a>.
    </p>
    
  </Layout>
</div>
);

export default Home;