import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import AuthGoogleProvider from './contexts/authGoogle';
import PrivateRoutes from './routes/PrivateRoutes';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import PrivatePage from './components/PrivatePage';
import TutorialInfo from './components/TutorialInfo';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

export default function App() {
	const [tutorialInfo, setTutorialInfo] = useState({
		id: '',
		userId: '',
		name: '',
		description: '',
		tags: '',
	});
	const [term, setTerm] = useState({
		term: '',
	});
	return (
		<>
			<ToastContainer />
			<UserContext.Provider
				value={{ tutorialInfo, setTutorialInfo, term, setTerm }}
			>
				<AuthGoogleProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Login />} />
							<Route path='/home' element={<PrivateRoutes />}>
								<Route
									path='/home'
									element={
										<>
											<PrivatePage>
												<Header />
												<Home />
											</PrivatePage>
										</>
									}
								/>
							</Route>
							<Route
								path='/tutorial/:iDtutorial'
								element={
									<PrivatePage>
										<Header />
										<Home />
										<TutorialInfo />
									</PrivatePage>
								}
							></Route>
						</Routes>
					</BrowserRouter>
				</AuthGoogleProvider>
			</UserContext.Provider>
		</>
	);
}
