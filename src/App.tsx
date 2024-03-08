import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Auth/Login';
// import Logout from './components/Auth/Logout';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import ManagerDashboard from './components/Dashboard/ManagerDashboard';
import HRDashboard from './components/Dashboard/HRDashboard';
// import LeaveRequestForm from './components/Leave/LeaveRequestForm';
// import LeaveRequestsList from './components/Leave/LeaveRequestsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" Component={Login} />
        {/* <Route path="/logout" Component={Logout} /> */}
        {/* <Route path="/leave-request" Component={LeaveRequestForm} />
        <Route path="/leave-requests" Component={LeaveRequestsList} /> */}
        <Route path="/employee-dashboard" Component={EmployeeDashboard} />
        <Route path="/manager-dashboard" Component={ManagerDashboard} />
        <Route path="/hr-dashboard" Component={HRDashboard} />
        </Routes>
    </Router>
  );
}

export default App;
