  import React, { useState } from 'react';
  import '../styles/admin.css';

  const AdminPage = () => {
    const [content, setContent] = useState(
      <div>
        <h2>Welcome to the Admin Page</h2>
        <p></p>
      </div>
    );

    const showDashboard = () => {
      setContent(
        <div>
          <h2>Welcome to Tsukiden Admin Page</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere fuga amet eligendi ipsa ut dolores nemo voluptate exercitationem optio corporis obcaecati nobis ea, aliquid quis repudiandae necessitatibus officiis repellendus.</p>
          {/* Add more content as needed */}
        </div>
      );
    };

    const showUsers = () => {
      setContent(
        <div>
          <h1>User Management</h1>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                    <option value="Action"></option>
                    <option value="Edit"></option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                   <option value="Action"></option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                    <option value="Action"></option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                    <option value="Action"></option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                      <option value="Action"></option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    };

    const showAccountRecovery = () => {
      setContent(
        <div>
          <h2>Account Recovery</h2>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                    <option value="Action"></option>
                    <option value="SendCode">Send OTP</option>
                    <option value="SendEmail">Reset Emaail</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>

                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                    <option value="Action"></option>
                   <option value="SendCode">Send OTP</option>
                    <option value="SendEmail">Reset Emaail</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>

                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                 <option value="Action"></option>
                   <option value="SendCode">Send OTP</option>
                    <option value="SendEmail">Reset Emaail</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>

                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
                <option value="Action"></option>
                   <option value="SendCode">Send OTP</option>
                    <option value="SendEmail">Reset Emaail</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>

                  </select>
                </td>
              </tr>
              <tr>
                <td>Carlo Cruz</td>
                <td>Marc Carlo Bryan Cruz</td>
                <td>mcbcruz@tspi.com.ph</td>
                <td>
                  <select
                    id="userType"
                    onChange={handleAction}
                  >
              <option value="Action"></option>
                   <option value="SendCode">Send OTP</option>
                    <option value="SendEmail">Reset Emaail</option>
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>

                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    };

    const showSettings = () => {
      setContent(
        <div>
          <h2>Course Completion</h2>
          <p>This is the content of the Settings section.</p>
          <table>
              <thead>
                <tr>
                  <th>Instructor ID</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                        <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                         <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                          <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                         <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                          <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      );
    };

    const showInstructorTab = () => {
      setContent(
        <div>
          <h2>Instructor tab</h2>
          <p>List of instructors with the courses they teach</p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Instructor ID</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                        <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                         <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                          <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                         <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>CJ</td>
                  <td>CEEJAY NATAL</td>
                  <td>C programming, SQL, SVN</td>
                  <td>
                    <select
                      id="userType"
                      onChange={handleAction}
                    >
                          <option value="Action"></option>
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    };


    const handleAction = (e) => {
      const selectedAction = e.target.value;
      if (selectedAction === 'Edit') {
        handleEdit();
      } else if (selectedAction === 'Delete') {
        handleDelete();
      }
    };

    const handleEdit = () => {
      // Placeholder for handle edit action
      console.log('Edit action');
    };

    const handleDelete = () => {
      // Placeholder for handle delete action
      console.log('Delete action');
    };

    return (
      <div>
        <div id="sidebar">
          <a href="#" onClick={showDashboard}>Dashboard</a>
          <a href="#" onClick={showUsers}>User Management</a>
          <a href="#" onClick={showAccountRecovery}>Account Recovery</a>
          <a href="#" onClick={showSettings}>Course Completion</a>
          <a href="#" onClick={showInstructorTab}>Instructor Tab</a>
          {/* Add more sidebar links as needed */}
        </div>

        <div id="content">
          {content}
        </div>
      </div>
    );
  };

  export default AdminPage;
