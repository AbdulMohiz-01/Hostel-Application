import axios from 'axios'

const url = "http://localhost:5000";

export const addApplicant = async (applicant) => {
    return await axios.post(`${url}/hostelApplications`, applicant);
}

export const getApplicant = async () => {
    return await axios.get(`${url}/viewApplications`);
}
