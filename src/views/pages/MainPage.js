import Nav from "../layouts/Nav";
import Button from "../../components/Button";
import Selection from "../../components/Selection";
import { useState, useRef, useEffect } from "react";
import WebSocketProvider from "../../components/WebSocketProvider";
import { asset_names, ids_assets } from "../../components/Assets";

export default function MainPage() {

  const [message, setMessage] = useState('');
  const [assetName, setAssetName] = useState('')
  const [assetId, setAssetId] = useState('');
  const [isChartsVisible, setIsChartsVisible] = useState(false)
  const availableIds = ids_assets[assetName] || [];

  const handleNameChange = (e) => {
    setAssetName(e.target.value)
    setAssetId('')
  }

  const handleIdChange = (e) => {
    setAssetId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(assetId);
    setIsChartsVisible(true)
  }

  console.log('ischartvis', isChartsVisible)


  return (
    <>
      <header className='bg-black p-3'>
        <Nav />
      </header>
      <div className='flex justify-center p-3'>
        <div className='border-4 rounded-full border-black w-auto flex justify-between'>
          <form className='flex items-center justify-between py-5 px-8 w-full' onSubmit={handleSubmit}>
            <div className='flex mr-10'>
              <label className="flex text-xl font-bold py-3 pr-8 items-center" > <span>Asset :</span> &nbsp;
                <Selection choices={asset_names} text={'font-normal text-lg'}
                  func={handleNameChange} d_value={'Please Select Asset Name'}
                />
              </label>

              <label className="flex text-xl font-bold items-center" > <span>Asset ID :</span> &nbsp;
                <Selection choices={availableIds} text={'font-normal text-lg'}
                  func={handleIdChange} d_value={'Please Select Asset Id'}
                  selectedValue={assetId} />
              </label>
            </div>

            <Button type='submit' name='START' text='bg-blue-500 text-white px-4 py-1 rounded-full shadow
                                           hover:bg-blue-600 focus:outline-none focus:ring-2
                                           focus:ring-blue-400 focus:ring-opacity-75 mr-4'/>

          </form>
        </div>
      </div>
      <div className="flex w-full ">
        <div className="w-2/3 flex flex-col justify-center items-center">
          <span>
            RealTime Waveform Charts
          </span>
          <WebSocketProvider message={message} />
        </div>
        <div className="flex justify-center items-center font-bold text-5xl">
          other info
        </div>
      </div>

    </>
  )
}
