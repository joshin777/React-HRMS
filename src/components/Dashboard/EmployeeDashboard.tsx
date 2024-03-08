import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LeaveRequestForm: React.FC = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    leaveType: false,
    startDate: false,
    endDate: false,
    reason: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!leaveType) {
      setErrors((prevState) => ({ ...prevState, leaveType: true }));
    }
    if (!startDate) {
      setErrors((prevState) => ({ ...prevState, startDate: true }));
    }
    if (!endDate) {
      setErrors((prevState) => ({ ...prevState, endDate: true }));
    }
    if (!reason) {
      setErrors((prevState) => ({ ...prevState, reason: true }));
    }

    if (!leaveType || !startDate || !endDate || !reason) {
      toast.error('All fields are required');
      return;
    }

   
    setIsSubmitting(true);

    setTimeout(() => {
      setLeaveType('');
      setStartDate('');
      setEndDate('');
      setReason('');
      setIsSubmitting(false);
      toast.success('Leave request submitted successfully');
    }, 1500);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="card p-4 mt-4" style={{ backgroundColor: '#14c9e2' }}>
      <h2 className="mb-4"><u>Leave Request Form</u></h2>
      <form onSubmit={handleSubmit}>
        <table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <td style={{ textAlign: 'center' }}><label><b>Leave Type :</b></label></td>
              <td>
                <input
                  type="text"
                  value={leaveType}
                  onChange={(e) => {
                    setLeaveType(e.target.value);
                    setErrors((prevState) => ({ ...prevState, leaveType: false }));
                  }}
                  className={`form-control ${errors.leaveType && 'is-invalid'}`}
                />
                {errors.leaveType && <div className="invalid-feedback">Leave type is required</div>}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}><label><b>Start Date :</b></label></td>
              <td>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setErrors((prevState) => ({ ...prevState, startDate: false }));
                  }}
                  className={`form-control ${errors.startDate && 'is-invalid'}`}
                />
                {errors.startDate && <div className="invalid-feedback">Start date is required</div>}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}><label><b>End Date :</b></label></td>
              <td>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    setErrors((prevState) => ({ ...prevState, endDate: false }));
                  }}
                  className={`form-control ${errors.endDate && 'is-invalid'}`}
                />
                {errors.endDate && <div className="invalid-feedback">End date is required</div>}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'center' }}><label><b>Reason :</b></label></td>
              <td>
                <textarea
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                    setErrors((prevState) => ({ ...prevState, reason: false }));
                  }}
                  className={`form-control ${errors.reason && 'is-invalid'}`}
                ></textarea>
                {errors.reason && <div className="invalid-feedback">Reason is required</div>}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="text-end">
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default LeaveRequestForm;
