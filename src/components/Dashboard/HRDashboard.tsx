// 
// this code is for api calling





// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Define the LeaveRequest type accordingly
// interface LeaveRequest {
//   id: number;
//   leaveType: string;
//   startDate: string;
//   endDate: string;
//   reason: string;
//   managerStatus: string;
//   hrStatus: string;
// }

// const HRDashboard: React.FC = () => {
//   const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

//   // Fetch leave requests from the backend upon component mounting
//   useEffect(() => {
//     // Example fetch request:
//     fetch('/api/leave-requests')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch leave requests');
//         }
//         return response.json();
//       })
//       .then(data => setLeaveRequests(data))
//       .catch(error => {
//         console.error('Error fetching leave requests: ', error);
//         toast.error('Failed to fetch leave requests');
//       });
//   }, []);

//   const handleHRApproveReject = (id: number, status: string) => {
//     // Logic to approve or reject leave request
//     // Example fetch request:
//     fetch(`/api/leave-requests/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ status: status }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to update leave request status');
//         }
//         // Update leaveRequests state with the updated status
//         const updatedLeaveRequests = leaveRequests.map(request => {
//           if (request.id === id) {
//             return { ...request, hrStatus: status };
//           }
//           return request;
//         });
//         setLeaveRequests(updatedLeaveRequests);
//         toast.success(`Leave request ${status.toLowerCase()} successfully`);
//       })
//       .catch(error => {
//         console.error('Error updating leave request status: ', error);
//         toast.error('Failed to update leave request status');
//       });
//   };

//   return (
//     <div>
//       <h2>HR Dashboard</h2>
//       <div>
//         <h3>Leave Requests</h3>
//         <ul>
//           {leaveRequests.map(request => (
//             <li key={request.id}>
//               <div>Leave Type: {request.leaveType}</div>
//               <div>Start Date: {request.startDate} - End Date: {request.endDate}</div>
//               <div>Reason: {request.reason}</div>
//               <div>Manager Status: {request.managerStatus}</div>
//               <div>HR Status: {request.hrStatus}</div>
//               {request.managerStatus === 'Approved' && request.hrStatus === 'Pending' && (
//                 <>
//                   <button onClick={() => handleHRApproveReject(request.id, 'Approved')}>Approve</button>
//                   <button onClick={() => handleHRApproveReject(request.id, 'Rejected')}>Reject</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HRDashboard;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LeaveRequest {
  id: number;
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
  managerStatus: string;
  hrStatus: string;
}

const HRDashboard: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: 1,
      leaveType: 'Sick Leave',
      startDate: '2024-03-01',
      endDate: '2024-03-03',
      reason: 'Feeling unwell',
      managerStatus: 'Pending',
      hrStatus: 'Pending',
    },
    {
      id: 2,
      leaveType: 'Vacation Leave',
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      reason: 'Going on vacation',
      managerStatus: 'Approved',
      hrStatus: 'Pending',
    },
    {
      id: 3,
      leaveType: 'Sick Leave',
      startDate: '2024-04-11',
      endDate: '2024-04-15',
      reason: 'Affected With Corona',
      managerStatus: 'Approved',
      hrStatus: 'Pending',
    },
  ]);

  const navigate = useNavigate();

  const handleHRApproveReject = (id: number, status: string) => {
    const updatedLeaveRequests = leaveRequests.map((request) => {
      if (request.id === id) {
        return { ...request, hrStatus: status };
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
      <div className="card" style={{ backgroundColor: '#14c9e2' }}>
        <div className="card-body">
          <h2 className="card-title mb-4">
            <u>HR Dashboard
          </u></h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Manager Status</th>
                  <th>HR Status</th>
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
                    <td>{request.managerStatus}</td>
                    <td>{request.hrStatus}</td>
                    <td>
                      {request.managerStatus === 'Approved' && request.hrStatus === 'Pending' && (
                        <>
                          <button className="btn btn-success me-2" onClick={() => handleHRApproveReject(request.id, 'Approved')}>Approve</button>
                          <button className="btn btn-danger" onClick={() => handleHRApproveReject(request.id, 'Rejected')}>Reject</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HRDashboard;
