import './App.css';
import Image from './img';

function App() {
  const imagem = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
  return (
    <Image source={imagem} alternativeText='Cute cat staring'/>
  );
}

export default App;
