import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';

import Notifications from './Notifications';

import ListeCourses from './ListeCourses';

import Galerie from './Galerie';

const courses = ["pc", "chargeur", "phone"];

function Home() {
  return (
    <div>
      <h2>Bienvenue sur la page principale</h2>
      <Notifications count={3} />
      <Logo />
      <LecteurAudio />
      <ListeTaches />
      <h3>Ma liste de courses :</h3>
      <ListeCourses items={courses} />
       <Galerie />
    </div>
  );
}

export default Home;