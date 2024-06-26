

const BookingsRow = ({ booking, handleDelete, handleUpdate }) => {
    
    const { _id, date, service, img, price,status } = booking;



    return (
        <tr className="">
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                { status === 'Confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                    <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingsRow;