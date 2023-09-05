"use client"
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react';


export default function Home() {

  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  

  const handlePostRequest = () => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:3060/create';

    // Data to send in the request body
    const postData = {
      longUrl: inputValue, // Use the input value here
    };

    // Make the POST request using Axios
    axios.post(apiUrl, postData)
      .then(function (response) {
        // Handle the response data here
        setResponseData(response.data);
        console.log('Response:', response.data);
      })
      .catch(function (error) {
        // Handle any errors here
        console.error('Error:', error);
      });
  };

  
  return (
   <div className=' w-full h-screen text-center'>
    <div className=' justify-center pt-24  text-2xl font-bold text-gray-600'>URL SHORTNER</div>
    <div className=' max-w-[1024px] w-full h-full flex items-center justify-center mx-auto pb-2'>
      <div className=' w-[700px] h-[500px] bg-red-500 shadow-md flex flex-col items-center py-2 justify-center shadow-gray-400 rounded-xl mx-auto'>
          <h2 className=' text-white font-bold uppercase pb-4'>Enter Url</h2>
        <input className="bg-white w-[400px] h-[40px] rounded-full border-2 pb-2 border-gray-400 hover:scale-110 ease-in duration-300 p-2"
                key={'1'}
                type="text"
                placeholder='Enter URL Here'
                value={inputValue}
                onChange={handleInputChange}
                
              />
              <div className=' py-2'>
                <button className=' w-[100px] bg-white uppercase rounded-2xl text-gray-600 font-bold py-2 hover:scale-110 ease-in duration-300' onClick={handlePostRequest}>Submit</button>
              </div>

              <div>
              {responseData !== null ? (
                  <div>
                    <h2>Shortend Url:</h2>
                    <pre>{JSON.stringify("http://localhost:3060/?shortUrl=" + responseData.shortUrl, null, 2)}</pre>
                  </div>
                ) : null}
              </div>
              
      </div>
    </div>
   </div>
  )
}
