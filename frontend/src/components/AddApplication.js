import { useState } from 'react'
import { addApplicant } from '../Service/api';

const AddApplication = () => {
    const [applicant, setapplicant] = useState({
        name: "",
        regNo: ""
    })
    const handleChange = (e) => {
        setapplicant({ ...applicant, [e.target.name]: e.target.value })
    }
    const apply = async (e) => {
        e.preventDefault();
        await addApplicant(applicant);
    }
    return (
        <>
            <div className="container mt-5">
                <form className="mx-3">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name"
                            onChange={(e) => {
                                handleChange(e);
                            }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="regNo">Registration Number</label>
                        <input type="text" className="form-control" id="regNo" name="regNo" placeholder="Registration Number"
                            onChange={(e) => {
                                handleChange(e);
                            }} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => {
                        apply(e);
                    }}>Apply</button>
                </form>
            </div>
        </>
    )
}
export default AddApplication;