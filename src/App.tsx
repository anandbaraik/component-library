import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Components from './pages/Components/Components'
import Error from './pages/Error/Error'
import AvatarDoc from './documentation/AvatarDoc'
import AlertDoc from './documentation/AlertDoc'
import BadgeDoc from './documentation/BadgeDoc'
import ButtonDoc from './documentation/ButtonDoc'
import CardDoc from './documentation/CardDoc'
import HeadingsDoc from './documentation/HeadingsDoc'
import TextDoc from './documentation/TextDoc'
import ImageDoc from './documentation/ImageDoc'
import Sidebar from './components/Sidebar/Sidebar'
function App() {
	const {pathname} = useLocation();
	const isSidebarVisible = !["/","/components"].includes(pathname);
  	return (
		<>
			<Navbar/>
			<main className='container'>
				{isSidebarVisible && <Sidebar/>}
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/components' element={<Components/>}/>
					<Route path='/avatar' element={<AvatarDoc/>}/>
					<Route path='/alert' element={<AlertDoc/>}/>
					<Route path='/badge' element={<BadgeDoc/>}/>
					<Route path='/button' element={<ButtonDoc/>}/>
					<Route path='/card' element={<CardDoc/>}/>
					<Route path='/headings' element={<HeadingsDoc/>}/>
					<Route path='/text' element={<TextDoc/>}/>
					<Route path='image' element={<ImageDoc/>}/>
					<Route path='*' element={<Error/>}/>
				</Routes>
			</main>
		</>
	)
}

export default App
