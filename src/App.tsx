import './App.css'
import Listing from './components/Listing'
import { dataArray } from './components/Listing'

export default function App() {
  
  return (
    <>
      <Listing items={dataArray} />
    </>
  )
}
