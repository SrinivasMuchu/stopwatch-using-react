import React,{useState,useEffect} from 'react';

function StopWatch() {
    const[hour,setHour]=useState(0);
    const[min,setmin]=useState(0);
    const[sec,setsec]=useState(0);
    const[msec,setmsec]=useState(0);
    const[stop,setStop]=useState(false);

    const Startbtn=()=>{
        setStop(false);

    }
    const Stopbtn=()=>{
        setStop(true);

    }
    const Resetbtn=()=>{
        setHour(0)
        setmin(0)
        setsec(0)
        setmsec(0)
    }

    useEffect(() => {
        let interval=null;
        if(!stop){
            interval=setInterval(()=>{
                if(min>59){
                    setHour(hour+1)
                    setmin(0)
                    clearInterval(interval)
                }
                if(sec>59){
                    setmin(min+1)
                    setsec(0)
                    clearInterval(interval)
                }
                if(msec>999){
                    setsec(sec+1)
                    setmsec(0)
                    clearInterval(interval)
                }
                if(msec<=999){
                    setmsec(msec+1)
                    clearInterval(interval)
                }

            },1)
        }
        else{
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval)
        };
    },)

  return (
    <div>
     <span>{hour}:{min}:{sec}:{msec}</span><br/>
     <button onClick={Startbtn}>Start</button>
     <button onClick={Stopbtn}>Stop</button>
     <button onClick={Resetbtn}>Reset</button>
    </div>
  );
}

export default StopWatch;
