import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router'

export const Home = () => {
  // const[gif,setGif]=useState("none")
  const[search,setSearch]=useState("latest")
  const[post,setPost]=useState({})
  const[giffy,setGiffy]=useState([])
  const data=useSelector((state)=>state.authReducer.userdata)
    
  const navigate=useNavigate()
  console.log(data);
  useEffect(() => {
    
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=V717bpw61kbGEI9Zrc1WD6FC8zJjprSX&q=${search}&limit=25&offset=0&rating=g&lang=en`)
      .then((res)=>{
        console.log(res.data);
        setGiffy(res.data.data)
      })
  
  }, [search])
  console.log(giffy)
  
  
  return (
    <div>
      <div className="nav">
        <h1>MasaiBooks</h1>
        <div className='flex'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAA/FBMVEX////I7f+U1PMAAAAAGDCw5v8ARWYAO1wndpXL7/+W1/ePzesAPV+R0O8AFS37+/v09PS7u7vi4uLNzc13rMXO8//t7e0tLS1qma+KxuMAABejo6M7Oztgi59xo7qGwNzS+P8AAB1/f38ADSlsbGxVe4wYJCq44vWh1vDExMSWlpavr6+Yyd8fLTMAME5SUlIJDhAALFMAMlYAIDkAACNGRkYZGRk6VWJLbXwtQk0THCBFY3Ks1ukAI00AFEUmMDwYKDs0S1xScotBY32myNaOtsYoWXg1aYdOf5u38P8zS2dLXnS53OYABTx2jZ7n9/2CobBYanMAaIyptsAPuEmVAAAMmElEQVRoge2beVvaWBfADYsxCWFNgIAhLEYQsQJlRqzSiiI6HUadvt//u7x3X7IB1vavOc8zUxVyf/es9+bm5ODgP/lPdpdCuVI6bzaHzeZ5qVIu/DZusXLePU4H5bh7Xin+cvLwjz9DZCp//jH8dTMoVk7COodscPJLJlAebkeTCQzLH8yunMiEi6u577puvV4H//fnVxfyxyeVD2SfiWpfz13LcxzDNM0UFPCv4Tie5c6vRQOcfRC7wtkXV5BsYKwsYApgBoIRjj9C/zKz+ReAdowIMBfDARP4wuz/0/5vjil73tqCphNozSl/3PwpdpUa/YvvOTugsTieT/nH1ffDzzl7F7UFA3D++TvZRerxuRXNNqGkokIQ8K059f67qk+ZWP26FYpx+PtgMOhDue1nswPyN+k7Rotk4PE7gq9Cpu57oXEBV1Fs27598+8fHu7v31aa1h8MQt/zfDLG3rlXwtedtmSjmwYga5qitVfu4UTN5Q5zuZw6Ud1NW1P6g4CVjNYpHqa0H7yJr7qSFTcHfUBWIHs9yR0Kklv4fVuBJpAv8K7wQHul3pBYXcwyMzVQEFux+/dTiY34uce2Ar8wkELAIdYf7q25K8GBxRUk9upQDbKhTOo2/Bh4QMK7e2qPfT6uCy43B5St2f40is3x4Jui/Y36eB/fk2gX483sE7Zib3Iho3N8q02mKKpvtPaI/DLWXICbA43BV3GKI5k+2gSvCeobLaz9DnlfPA6anSuuaLeH8Zqj2OuzrwrqE+Mfb696uLy6DG6mOFyxH5Lhhzm3zfE8+A0ceifb4DjcfcHnigB/pHaPncRiww2lCL73dwn8Ki4yLNWAyxUubQLPrZ/j8Oqbzb8vON/BZSd5wUVOv4iBU9VzT4PsU2TKA1kLdAmP9lzHW+0+tpjBJLhi+0RjI5vVn2OCf9HXJDwbyxpvsT1ONp8HqwRXtDUaf+plAV1vRSf+ZGVL1/DU8bekHYr3a2Z3Q5FFmyC7P2eR6MZzLsL80zdbvooFsHOdGPe4yDG7m/2A6rcLpFyWiJ516k/TxVSVVztXpgt5byWWvGPJ7kYADuhQ91w9y2Sg61ndsZ6fptwIufuA7lqfao9tHxN4aHE59aIjjtFhyAkyADPQ9VR9PY2jC5HnncYvN0h1l6kehAMlFtzrkkB+i1SgMF3RmPJurPLI66c05IJOh2KD8VUvgo6D8CkX5XfJ9c5pnOdRwLuxdoejgCq/HsTQAR/hI+iC7d2YsC9Lqhv9MFyxX9TDdSwcyBpsMtkiKwoLPKx8OOe7KOAjKyyjr+7Vw9sE+mi6dnOrKKuxiovCvhuEozu2LzTXzQi2ooDxrckoif6U/WsUealC6Ra8wwrd3Z2htc1MUl2BBeb5MYH+6IFvRMKZ8iZa64JHCyjm6jElltJBZtWtJLql64NoPCu49Yi4q9bgykorTbTqiN56J52FvQdX2ppsemT4m7gaK9C9egLd8vQYywv19iZs+qFoeCcaDv2uD1oJ9NYolq5ojmh6+dYGVVkvMeaw8glsKAl0GndeqNpW4fHnlUGLbMwAu9CzcXR2f2XAqP9TdPyZWGqcuOshfqvqcXZTFGp6P+h4tJ9rkU9HsQNoyhbV4zUHF4/I+K3g/u5EdPtt/PSVLfiEC8H2QHS8mPEo6KhfYt2+HZ94Jc05Mxh2aDep/ya6jnaXHF5EtYbSkwyfjE++kG5xdFRv+B0lWtt9fVvQ/SydhJ3uy2s8Sjj3p+nJ13G6K6ccOhGt61sq3Vb8lgtptdNRreUnqDjdMd1ITDg4yDtVBymHHa8HEh6tMdaO9Fj81uso3ZLXGYkes7yK8i7V2SKbSN+qu92P2lXfbiL2svvrvo1ub76PwouNbvy9Db8LPbnMw231Pw/ZbCrAB4vb/WILnhb6IH2PmLcfv05f/kK3biJb1/ulxSQZHxfz5wLdTKw29mqiLkqvWXT3rDM0kEL5q/o9MWK1kSnQeb6Xdq112kZV1a/lAxT1A51L6vWgsFCn4ftXiS7WOn4fXdmV3l5PAR0sENTmZAYp7eCgcKiqk+CxSTyd38iiU7o5ocdvrOz22wToPikAVKDQgEEKf8PPNu14Ptla6eh5kbCxE9d3J3p919r2yodwNYc6DcSS84oG+XsK3eI/2na09fqUHljfD+CdTDqJbrc3L98an1VOP3hlRY70PdxDujppfHuDD2kS6BBWE+hoX0cW/4iUs7XVv71OL6NiIbTCq9LvKxrruUC6q7lMr3H3sgnrTxMuZQT3dUMh5VKjgOds+/GqMctnMpkcgi+Eg26h3aPwHVvmcyaT78z+DfFtGnSt4M1MSdzceAGbv12nexkonzH9H06v1gX6FFvmE5xnfpb+N2h/T9zaiAdX5bFw9y6ZXntJNzA7k/+Eh//Kk6X+Y8N+Ln4V6EB66Svx0JQZHt3Bj8XDk8Kx4HhTML39liaDASFuX/yPXrY6Ojpiti8Tusq+P8vzw3pgeFNw+7HUodMV1pmUJ9C/9dhg1PLTF3LRK4AftegQjwvmdyqNtzYfiRoerTHyyU1Jqjf8CdRjg4+VyeOMUx/IxK0fgM5s7+KQ/8xtlel9Y3pofanWyOeVZXR2wUxP6e0rQXXIx+rZ6JoNhAPBtcZ+QJ+J8Eymww6wNGZ4dHYRODM7EUyve2zC6UwmjF+skN2fMfyHhX67RapnJHhmdsNM7+mC4YPnhSXpdoYob791AnQU9pM6UPd1RFQ/cmGVt4nbZd0zafp8biTdyAQPipHpv3hyyttLyfDU7+qDfVDQNJfofquB5bXtk3SX8Q266NGYQ4eVQcMfFLriKusg5bWNZPj8pxyhq7evGnALprfA+K+v/e/ko9wnEd+7wU+GRzTm0OraDXXEoTX+gtBTHlxq2i+S4TkcL+MapqNzWW01URleMj3Knz49i9Mv5LWdSvFSuJ0CngdjapLhBdXV721YPrDjn+HwzPBB5TsvNvwq9Tq6ibqMeCJakpW/1bSVHPECfgqKsd0ifkfaxcAzvSvgo1tZ9aiHE8WauNCZltb2gxHPdEdP2knGQdPbj8zwauCaxkbTLFNc3mqRD4PRvvqCPUYYKd/ygZEy3PNt7ZZm3DMw/APVXSy0mP7SHrEHHhfyXloUdFbLwj7lvTSC8Pxnil+s2tYRFWD6f6LtDk1/zUMOBXwt5lks2taPac6nrG+9EJ66fnrfpoY/+jFqv0zj4JneHT30172xvJGPCvsrSjetTGgshl+smOpH9Tb5Yy7odHBBhjo9pV/FBTwWdILCsi5l1DshfIZsMaZPnP5Mqmwo4uAeizUx4GwLPRgQlO/KtjfckOvpIq8ecvrRmkZcaLIN1sRA7N5N6H5A1Z4nfcrwG6EB6R7jB6fHOT3f4E0MONVDFV6UArb9nOPdkPGp6w8DqkfAO7x9A28q0meJPc94seGuTzn1TDDyKZ7RD7HuoVzL1NnDdOL08PIiSxXFPdviwWaZu1nQ+Ji2JvAn/GuwzMzueMsO3lOkL7f2OVZqcuSlDG85C6qFTS2qHoy4/GzJuyFJxNW2dxsVSJeVw/Cm53cC2zsceU885oJO73WErkDdIZ1WOzS6F0gvJ8enDGspxz7GH/KYk+H5xlJoxdQdPOD5Tl32RdxdJxgfqO/eScGPIm/KDS991rlzha5AYvb0cMfuTlx00mMeelB9/05yP2SilJ/KEZef3fliD6qOO10Sy4wsVYwXEo/yuf8/E9OvpYjrBdg01dLdPdp6KX6uS3zPX6bpBKDrc8jwLOJ6s/RS7vvVSZHZCw7wpLPy2hHxsEvbX84as14euR46HsPzPfDXpR/o8tYd0lI73LOhuUh6K8d1Sf2UacBO+eVdr9HpTKbrox/T6azT6N0tYVe93NCq66SnMd3cu524UKrhS69k9UmnfKvu+jdPT8/PT3Pfrbciuup10laWru2S5yF85ZKo76YCfDQFw3AcxwP/gZ/CvdR6yiWKX1be9TZNoUxiL33R0sP8JNH1Fn2JoPvuV3mKZ7X38AV27ewn3l/h6qcv6s5OE9B1p85enni/4liqpUs61OncMrdMQNdNa35KL7gs/cSbA1T9JjU/fFsFTiB6BjpC87dWas0PeXmrWB5yfnp841opPSwpy70Z86/VhuWPemMJ6H+ZlmQJktyyPCiWBVJ/KX98+TF6UymWSye1dEjG43H4j7WT0ofpTaVQrTQvIyYQRF82K9Vf8rJeEUygW4vQllqi1gXoX/iOXqFaBjOIsEHtEpDLv0ZreQbFKphDqTnsYhk2S4BbLf6+lyMPCoVCkQr4+feB/5MPkf8DdxiNSSrAS7EAAAAASUVORK5CYII=" alt="" />
        <h1>{data.name}</h1>
        </div>
        
      </div>
      <div>
        <div className='main'>
          <input type="text" placeholder='comment' />
        
         <div className='post'>
          <button>GIF</button>
          <button onClick={(e)=>setGiffy("box")} >POST</button>
         </div>
         <div className='gifdis' >
       {giffy?.map((el)=>{

       
        
        return <img src={el?.images.original.url} alt=""  key={el.id}/>
       })} 
          
        </div>
        </div>
      </div>
      
    </div>
  )
}
