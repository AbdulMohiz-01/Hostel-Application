import { useState, useEffect } from 'react';
import { getApplicant } from '../Service/api';

const ViewApplication = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        view();
    }, [])

    const view = async () => {
        const response = await getApplicant();
        console.log(response.data);
        setData(response.data);
    }
    return (
        <>
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Registration No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.regNo}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ViewApplication;