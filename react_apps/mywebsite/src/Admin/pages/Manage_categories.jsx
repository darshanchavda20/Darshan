import React from 'react'
import { Link } from 'react-router-dom'

function Manage_categories() {
    return (
        <div>
           <div className="container-fluid" style={{ padding: '40px 0', background: '#f8f9fa' }}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h1>Manage Categories</h1>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-9 m-auto">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Cate Name</th>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Vijay</td>
                                    <td><img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" width="50px"alt="" /></td>
                                    <td>Vijay@gmail.com</td>
                                    <td className='text-center'>
                                        <button className='btn btn-danger me-2'>Delete</button>
                                        <button className='btn btn-primary'>Edit</button>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>2</td>
                                    <td>Nidhi</td>
                                    <td><img src="https://www.w3schools.com/bootstrap5/img_avatar5.png" width="50px"alt="" /></td>
                                      <td>Nidhi@gmail.com</td>
                                    <td className='text-center'>
                                        <button className='btn btn-danger me-2'>Delete</button>
                                        <button className='btn btn-primary'>Edit</button>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>3</td>
                                    <td>Nilesh</td>
                                    <td><img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" width="50px"alt="" /></td>
                                    <td>Nilesh@gmail.com</td>
                                    <td className='text-center'>
                                        <button className='btn btn-danger me-2'>Delete</button>
                                        <button className='btn btn-primary'>Edit</button>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>5</td>
                                    <td>Pooja</td>
                                    <td><img src="https://www.w3schools.com/bootstrap5/img_avatar5.png" width="50px"alt="" /></td>
                                      <td>Pooja@gmail.com</td>
                                    <td className='text-center'>
                                        <button className='btn btn-danger me-2'>Delete</button>
                                        <button className='btn btn-primary'>Edit</button>
                                    </td>
                                </tr>
                                 <tr>
                                    <td>6</td>
                                    <td>Dhruv</td>
                                    <td><img src="https://www.w3schools.com/bootstrap5/img_avatar1.png" width="50px"alt="" /></td>
                                    <td>Dhruv@gmail.com</td>
                                    <td className='text-center'>
                                        <button className='btn btn-danger me-2 '>Delete</button>
                                        <button className='btn btn-primary'>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Manage_categories