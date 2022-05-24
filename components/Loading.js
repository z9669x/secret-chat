import { Circle } from 'better-react-spinkit';

function Loading () {
  return (
      <center style={{ display: 'grid', placeItems: 'center', height: '100vh'}}>
          <div>
              <img 
              src="https://media.discordapp.net/attachments/966758051145195590/978569142389063750/logo.png"
              alt=""
              style={{ marginBottom: 10 }}
              height={200}
              />
                <Circle color='#292f3a' size={60} />
          </div>
      </center>
  );
}

export default Loading;