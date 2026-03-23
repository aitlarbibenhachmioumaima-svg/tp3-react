import audioFile from './audio.mp3';

function LecteurAudio() {
  return (
    <div>
      <p>Écouter le son :</p>
      <audio controls src={audioFile}></audio>
    </div>
  );
}

export default LecteurAudio;