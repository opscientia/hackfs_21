import Layout from '../components/layout';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';
import HorizontalGallery from 'react-dynamic-carousel'

const example = ["Opsci Tutorial", "Demographics", "vaccination", 3, 4, 5, 6, 7, 8, 9]




const Home = () => (

  <div>
   <Sidebar/>
  <Header />

  <Layout> 
    <p/>
     <IconContext.Provider value={{ color: "black",size:"5.8em",}}>
            <div style={{borderRadius: '50%',
           height: '4.8rem',
           width: '4.8rem',
           backgroundColor: 'white',
           backgroundSize: 'cover',
           border: '2px solid #ddd',
           transform:'translateX(15%)',
           float:'left',}}> <FaUser style={{height:'40px',width:'40px',transform:'translate(40%,35%)',}}/></div>
</ IconContext.Provider>

    <div class="group" style={{backgroundColor: '#050A30',
  fontSize: '30px',
  width:'1100px',
  color:'#fff',
  display: 'inline block',
  margin:'35px',

  }}>

      <span class="item1" style={{backgroundColor: '#050A30',
  borderRadius: '6px',
  padding: '8px',
  marginBottom:'5px',
  display: 'inline block',
  minHeight: '20px',}}>
    &nbsp;&nbsp;<b>Opsci Quests </b><span class="item1" style={{
  borderRadius: '6px',
  display: 'inline block',
  minHeight: '20px',}}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    
    
    </div>
    <HorizontalGallery
    tiles={example.map((value) => (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 300,
                height: 350,
                backgroundColor: '#D0D0D0',
                borderRadius: 10
            }}
        >
            <h1>{value}</h1>
        </div>
    ))}
    elementWidth={350}
    fadeDistance={10}
    minPadding={20}
/>
  </Layout>
</div>

);

export default Home;