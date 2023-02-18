import React from 'react';
import './App.css';
import JobsList from './Components/JobsList/JobsList';
import MenuBar from './Components/MenuBar/MenuBar';
import MenuBarTwo from './Components/MenuBarTwo/MenuBarTwo';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import SignupPage from './Components/Pages/SignupPage/SignupPage';
import userService from './utils/userService';
import CreatePage from './Components/CreatePage/CreatePage';
import jobsService from './utils/jobsService';
import DetailsPage from './Components/DetailPage/DetailsPage';
import TitleBar from './Components/TitleBar/TitleBar';
import UpdatePage from './Components/UpdatePage/UpdatePage';
import LatestJobs from './Components/LatestJobs/LatestJobs';
import SearchBar from './Components/SearchBar/SearchBar';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  redirect,
  Navigate
} from "react-router-dom"; 



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      jobs: [],
      user: userService.getUser(),
      
      isNewUserSignedUp: false
    }
    this.handleLogout = this.handleLogout.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.updateJobListState = this.updateJobListState.bind(this)
    this.updateJobStateAfterDelete = this.updateJobStateAfterDelete.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
  }

  async componentDidMount(){
    const data = await jobsService.getAll()
    this.setState({jobs: data})
  }
  componentDidUpdate(){

  
   
  }
  async updateJobStateAfterDelete()  {
    const data = await jobsService.getAll()
    console.log(data)
    this.setState({ jobs: data })
    return redirect ("/all  jobs")

  }
  getCurrentUser(){
    const currentUser = userService.getUser()
    return currentUser
  }

  
  setCurrentUser(userData){
    this.setState({user: userData})
  }


  redirectIfUser(){
    console.log('loader runs...')
    const currentUser = userService.getUser()
    if(currentUser){
      return redirect('/All Jobs')
    }
    return null
  }

  redirectToLogin(){
    console.log('checking for user...')
    const currentUser = userService.getUser()
    if(!currentUser){
      return redirect('/login')
    }
    return null    
  }


  async updateJobListState(data) {
    this.setState(state => {
      return { jobs: [...state.jobs, data] }

    })

  }

  getMenu(){
    const menu = [
      {label: 'Add Job', showAuth: this.state.user ? true: false},
      {label: 'All Jobs', showAuth: this.state.user ? true: false},
      {label: 'Logout', showAuth: this.state.user ? true: false, hasLogoutOption: true},
      {label: 'login', showAuth: this.state.user ? false: true}, 
      {label: 'signup', showAuth: this.state.user ? false: true}
      
    ]
    return menu
  }

  getMenuTwo(){
    const menuTwo = [
    {label: 'All Jobs', showAuth: this.state.user ? true: false},
    {label: 'My Jobs', showAuth: this.state.user ? true: false},
    ]
    return menuTwo
 
  }
  getJobsOrlogin(){
    return this.state.user ? 
    (<div className="container">
      
      <JobsList jobs={this.state.jobs} className="jobsList" />

      </div>) : <Navigate to='/login' replace />
  }

  getChildRoutes(){

    const routes = [
      {
        path: '/login',
        element: <LoginPage setCurrentUser={this.setCurrentUser} />,
        loader: this.redirectIfUser

      },
      {
        path: '/signup',
        element: <SignupPage setCurrentUser={this.setCurrentUser} />,
        loader: this.redirectIfUser
      },

      {
        path: '/Logout',
        element:  <LoginPage />
      },

      {
        path: '/Add Job',
        element: (
          <>
        
        <CreatePage updateJobState={this.updateJobListState} getCurrentUser={this.getCurrentUser} />
          </>
  
        )
      },


      {
        path: '/All Jobs',
        element: (
          <>
            <TitleBar />
            <LatestJobs />

            {this.getJobsOrlogin()}
          </>
        )
      },

      {
        path: '/jobs/:id',
        element: <DetailsPage updateJobState={this.updateJobListState}/>
       
        
       
      },
      {
        path: '/jobs/:id/Update Jobs',
        
        element: (
        <>
        <UpdatePage updateJobState={this.updateJobListState} getCurrentUser={this.getCurrentUser} />
        </>
        )
      }

    ]

    return routes

  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  getRouter(){
    let router = createBrowserRouter([{
      path: "/",
      element: (<>
              <MenuBar menuOptions={this.getMenu()} handleLogout={this.handleLogout}/>
                
              {/* <MenuBarTwo menuOptionsTwo={this.getMenuTwo()} /> */}
              <Outlet />
              
              
            </>

      ),
      /** */
      children: this.getChildRoutes()

    }])
    return router   
  }

  render(){
    return (
      <>
        <RouterProvider router={this.getRouter()} />     
      </>
     )  
  }
}

export default App;