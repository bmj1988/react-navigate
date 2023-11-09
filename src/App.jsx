import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import { NavLink, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/not-logged-in',
        element: <h1>You Must Be Logged In To Enter.</h1>
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      }]
  }
]);
function Layout() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <nav className='comp nav'>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'purple' : ''} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/stocks' className={({ isActive }) => isActive ? 'purple' : ''} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Stocks</NavLink>
          </li>
          <li><NavLink to='/movies' className={({ isActive }) => isActive ? 'purple' : ''} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>Movies</NavLink></li>
        </ul>
      </nav>
      <main><Outlet /></main>
    </div>
  )
}
function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App;
