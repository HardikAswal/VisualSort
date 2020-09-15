import React from 'react';
import Banner from '../Header/Banner';
import Alert from '../Header/Alert';
import mergeSort from '../Algorithms/algorithms';
import './SortingVisualizer.css';

class SortingVisualizer extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        this.state.array = [];
        this.state.sizeOfArray = null;
        this.state.isVisible = true;
        this.state.showAlert = false;
    }

    componentDidMount()
    {
        this.resetArray(this.state.sizeOfArray);
        setTimeout(() => {
            this.setState({isVisible:false})
        }, 5000);
    }

    componentDidUpdate()
    {
        setTimeout(()=>{
            this.setState({showAlert:false})
        }, 15000);
    }

    resetArray(number){
        console.log(number);
        const array = [];
        var num;

        if(!number){num = 100}
        else if(number===0 || number<0 || number>100) 
        {
          this.setState({
              showAlert:true,
          });
          num = 100;
        }
        else num = number;
        for(let i=0; i<num; i++)
        {
            array.push(this.getRndInteger(5,500));
        }

        this.setState({
            array
        })
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    mergeSort(array){
      const animations = mergeSort(this.state.array);

      for(let i = 0; i < animations.length; i++)
      {
        const arrayBars = document.getElementsByClassName('array-element');
        const isColorChange = i % 3 !== 2;
        if(isColorChange){
          const [barOneIdx,barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 == 0 ? 'red':'#3281a8';
        setTimeout(()=>{
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i*3);
      } 
      else {
          setTimeout(() => {
           const [barOneIdx, newHeight] = animations[i];
           const barOneStyle = arrayBars[barOneIdx].style;
           barOneStyle.height = `${newHeight}px`;
          }, i*3);
        }
        this.setState({array})
      }
    }

    testSortingAlgorithms()
    {
      for(let i = 0; i < 100; i++)
      {
        const array = [];
        for(let i = 0; i < 100; i++)
        {
          array.push(this.getRndInteger(-1000,1000));
        }
        const javaScriptSortedArray = array.slice().sort((a, b)=>a - b);
        const sortedArray  = mergeSort(array.slice());
        console.log(arraysAreEqual(javaScriptSortedArray,sortedArray));
      }
    }

    render()
    {
        const {array} = this.state;

        return (
            <div>
                <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">VisualSort</span>
                  </a>
                  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
                  <button className="inline-flex items-center bg-gray-200 border-0 mr-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Bubble Sort</button>
                  <button className="inline-flex items-center bg-gray-200 border-0 mr-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Selection Sort</button>
                  <button className="inline-flex items-center bg-gray-200 border-0 mr-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Insertion Sort</button>
                  <button onClick={() => this.mergeSort(array)} className="inline-flex items-center bg-gray-200 border-0 mr-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Merge Sort</button>
                  <button onClick={() => this.testSortingAlgorithms()} className="inline-flex items-center bg-gray-200 border-0 mr-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Test</button>
                </div>
                </header>

                {this.state.showAlert ? <Alert></Alert>:null}
                {this.state.isVisible ? <Banner></Banner>:null}
             
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                style={{width:"300px", textAlign:"center", borderWidth:"1px", borderColor:"blue"}} 
                id="inline-full-name" placeholder="100 (Default)" type="text" onChange={e => {this.setState({sizeOfArray:e.target.value})}}/>
                
                <button className="bg-blue-500 hover:bg-blue-700 ml-5 text-white font-bold py-2 px-4 rounded" onClick={(e) => {this.resetArray(this.state.sizeOfArray)}}>
                Set
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 ml-1 text-white font-bold py-2 px-4 rounded" onClick={(e) => {this.resetArray(100)}}>
                Reset
                </button>
                
                <div className="display-array" style={{marginTop:"20px"}}> 
                {array.map((x,id)=>(<div className="array-element" style={{height: `${x}px`, backgroundColor:"#3281a8"}} key={id}></div>))}
                </div>
            </div>
        )
    }
}

export default SortingVisualizer;

function arraysAreEqual(arr1, arr2){
  if(arr1.length !== arr2.length) return false;
  for(let i=0; i<arr1.length;i++){
    if(arr1[i]!==arr2[i]) 
    {
      return false;
    }
  }
return true;
}