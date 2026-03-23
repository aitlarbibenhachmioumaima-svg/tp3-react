import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function Galerie() {
  const images = [img1, img2, img3];

  return (
    <div>
      <h3>Galerie d’images</h3>
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Image ${index + 1}`} width="120" style={{margin: "5px"}} />
      ))}
    </div>
  );
}

export default Galerie;