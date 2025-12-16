import{ Logo_URL } from '../utils/constants';
const Header = () => {
    return (
        // <div className="bg-black justify-between flex">
        //     <label className="text-4xl bg-black text-red-800 py-2 px-50 font-bold italic font-serif ">SurfFlix</label>
        //     <div>
        //         <select className="bg-white p-2 px-20 mx-20">
        //             <option value={""} disabled selected>Select One...</option>
        //             <option value={"English"} disabled selected>English</option>
        //             <option value={"Telugu"} disabled selected>English</option>
        //             <option value={"Hindi"} disabled selected>English</option>
        //             <option value={"Tamil"} disabled selected>English</option>
        //         </select>
        //         <button className="text-white bg-red-600 rounded-lg m-2  py-2 px-10 cursor-pointer">Sign In</button>
        //     </div>
        // </div>
        <div className="absolute px-8 py-2 bg-linear-to-b from-black z-10">
            <img
             className="w-44 "
             src={Logo_URL}
             alt="logo" 
            />
        </div>
    )
}
export default Header;