import React from 'react';
const OrderTable = ({order,handleDeleteOrder}) => {
    const {email,serviceName, serviceImage ,date,_id, price } = order
    return (
        <tr>
        <th>
          <button onClick={()=>handleDeleteOrder(_id)} className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded-md lg:w-32 lg:h-28 w-20 h-16">
                <img src={serviceImage} alt="service image" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {serviceName}</div>
            </div>
          </div>
        </td>
        <td>{price}</td>
        <td>{email}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">please confirmed</button>
        </th>
      </tr>
    );
};

export default OrderTable;