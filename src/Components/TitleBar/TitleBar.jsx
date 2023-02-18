import styles from './TitleBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Title from '../Title/Title';

const image_url = 'https://i.ibb.co/PQTMHFV/joanna-kosinska-7-ACu-Hoez-UYk-unsplash-3.jpg'


export default function TitleBar(props) {

  // function searchExecute() {
  //   props.history.push('/searchresults') 
  // }

    return (
    <>
    <div className={styles.TitleBar}
    view style={{ 
      
      backgroundImage : `url(${image_url})`,

     }}>
    <Title />
    <SearchBar  />

    
    </div>
  </>
    );
}