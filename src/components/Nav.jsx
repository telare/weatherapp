import { Link } from "react-router-dom"
import mainIcon from '../assets/main-icon.png';

function Nav() {
    return (
        <>
            <div className="bg-black w-full h-12 flex text-slate-200 justify-around" >
                <img src={mainIcon} alt="Main Icon" className=""/>
                <h1 className='mt-0 text-big'>React Weather</h1>
                <div className='flex mt-3 mr-5 text-standart'>
                    <Link to="/" className="mr-5">Home</Link>
                    <Link to="https://github.com/telare/weatherapp">GitHub</Link>
                </div>
          </div>
        </>
    )
}
export default Nav