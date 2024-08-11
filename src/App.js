
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showBanner, setshowBanner] = useState(false);
  const [inputMinutes, setInputMinutes] =useState('');
  const [inputSeconds, setInputSeconds] =useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [link, setLink] = useState('');
  // const bannerHandler = ()=>{
  // // setshowBanner(true);
  // }
  
  const handleMinutesChange = (e)=>{
    setInputMinutes(e.target.value);
    }
  const handleSecondsChange = (e)=>{
    setInputSeconds(e.target.value);
    }
  const hanldleLink=(e)=>{
   setLink(e.target.value);
  }
  // const showBanner=()=>{
    
  //   startTimer();
  // }
  const startTimer = (e)=>{
    e.preventDefault();
    const min = parseInt(inputMinutes, 10) || 0; // Parse minutes input or set to 0
    const sec = parseInt(inputSeconds, 10) || 0; // Parse seconds input or set to 0
    setMinutes(min);
    setSeconds(sec);
    setshowBanner(true);
  }
useEffect(() => {
  const timerInterval = setInterval(() => {

    if(seconds>0){
      setSeconds(seconds-1);
    }else if(minutes>0){
      setMinutes(minutes-1);
      setSeconds(59);
    }else{
      setshowBanner(false);
    }
    }, 1000);
  return () => clearInterval(timerInterval);
},[setshowBanner,seconds, minutes]);
  return (
    <>
      <div className='create-banner-container'>
        <div className='create-banner'>
          <form onSubmit={showBanner}>
            <label>discription: </label>  
            <input required type='text'placeholder='description'></input><br></br>
            <label>timer: </label>
            <input type='number'placeholder='min' value={inputMinutes} onChange={handleMinutesChange}></input>
            <input type='number'placeholder='sec'value={inputSeconds} onChange={handleSecondsChange}></input><br></br>

            <label>Link:</label>
            <input type='link' value={link} onChange={hanldleLink}></input>
            <input type='submit' name='create banner' className='create-banner-button' >
            </input>
          </form>
        </div>
      </div>

      <div className='banner-container'>
        <div className='banner'>
          <button className='toggle-banner'>{showBanner?'OFF':'ON'}</button>
        </div>
        <div className='banner-timer'>
        <div className='timer'>
         
          <div className='timer-minutes'>
            {minutes}
          </div>
          <div className='timer-seconds'>
          {seconds}
          </div>
        </div>
        </div>
        <div className='display-discription'>
        <p id='discription'>discription</p>
        </div>
        <div className='display-discription'>
        <a href={link} id='discription'>link</a>
        </div>
      </div>
    </>
  );
}


export default App;
