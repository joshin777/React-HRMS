// code used for api calling




// import React, { useState, useEffect } from 'react';
// import { LeaveRequest } from './types'; // Define the LeaveRequest type accordingly

// const ManagerDashboard: React.FC = () => {
//   const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

//   // Fetch leave requests from the backend upon component mounting
//   useEffect(() => {
//     // Fetch leave requests from the backend
//     // Example fetch request:
//     // fetch('/api/leave-requests')
//     //   .then(response => response.json())
//     //   .then(data => setLeaveRequests(data))
//     //   .catch(error => console.error('Error fetching leave requests: ', error));
//   }, []);

//   const handleApprove = (leaveRequestId: string) => {
//     // Logic to approve leave request
//   };

//   const handleReject = (leaveRequestId: string) => {
//     // Logic to reject leave request
//   };

//   return (
//     <div>
//       <h2>Manager Dashboard</h2>
//       <div>
//         <h3>Leave Requests</h3>
//         <ul>
//           {leaveRequests.map(request => (
//             <li key={request.id}>
//               <div>{request.employeeName}</div>
//               <div>{request.startDate} - {request.endDate}</div>
//               <div>{request.reason}</div>
//               <button onClick={() => handleApprove(request.id)}>Approve</button>
//               <button onClick={() => handleReject(request.id)}>Reject</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ManagerDashboard;









// Demo page of managerDashboard

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

interface LeaveRequest {
  id: number;
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
}

const ManagerDashboard: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: 1,
      leaveType: 'Sick Leave',
      startDate: '2024-03-01',
      endDate: '2024-03-03',
      reason: 'Feeling unwell',
      status: 'Pending',
    },
    {
      id: 2,
      leaveType: 'Vacation Leave',
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      reason: 'Going on vacation',
      status: 'Pending',
    },
    {
      id: 3,
      leaveType: 'Sick Leave',
      startDate: '2024-04-11',
      endDate: '2024-04-15',
      reason: 'Affected With Corona',
      status: 'Pending',
    },
  ]);

  const navigate = useNavigate();

  const handleApproveReject = (id: number, status: string) => {
    const updatedLeaveRequests = leaveRequests.map((request) => {
      if (request.id === id) {
        return { ...request, status };
      }
      return request;
    });
    setLeaveRequests(updatedLeaveRequests);
    if (status === 'Approved') {
      toast.success('Leave request approved!', { autoClose: 5000 });
    } else if (status === 'Rejected') {
      toast.error('Leave request rejected!', { autoClose: 5000 });
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container mt-3">
      <div className="card"style={{ backgroundColor: '#14c9e2' }}>
        <div className="card-body">
          <h2 className="card-title mb-4">
            <u>Manager Dashboard
              </u></h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.leaveType}</td>
                    <td>{request.startDate}</td>
                    <td>{request.endDate}</td>
                    <td>{request.reason}</td>
                    <td>{request.status}</td>
                    <td>
                      {request.status === 'Pending' && (
                        <>
                          <button className="btn btn-success me-2" onClick={() => handleApproveReject(request.id, 'Approved')}>Approve</button>
                          <button className="btn btn-danger" onClick={() => handleApproveReject(request.id, 'Rejected')}>Reject</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-end">
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManagerDashboard;


