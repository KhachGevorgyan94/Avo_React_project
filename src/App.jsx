import {TextInformation} from "./components/TextInformation/TextInformation";


import imagTest from './assets/images/banner.jpg'
import {SumNumbers} from "./components/SumNumbers/SumNumbers";
import {GetSumFromInput} from "./components/GetSumFromInput/GetSumFromInput";
function App() {



  return (
    <div className={'G-list'}>
      {/*<TextInformation img={imagTest} title={3445645645} description={'description 1'}/>*/}
      {/*<TextInformation img={imagTest} title={'title 2'} description={'description 2'}/>*/}
      {/*<TextInformation img={imagTest} title={'title 3'} description={'description 3'}/>*/}
        <SumNumbers number_1={10} number_2={20}/>
        <SumNumbers number_1={14560} number_2={20}/>
        <GetSumFromInput/>
    </div>
  );
}

export default App;
