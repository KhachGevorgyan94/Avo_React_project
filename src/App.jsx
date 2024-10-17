import {TextInformation} from "./components/TextInformation/TextInformation";


import imagTest from './assets/images/banner.jpg'
function App() {
  return (
    <div className={'G-list'}>
      <TextInformation img={imagTest} title={3445645645} description={'description 1'}/>
      <TextInformation img={imagTest} title={'title 2'} description={'description 2'}/>
      <TextInformation img={imagTest} title={'title 3'} description={'description 3'}/>
    </div>
  );
}

export default App;
