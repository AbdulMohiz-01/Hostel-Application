import HostelApplicationModel from "../models/hostelApplication.js";

export const getApplication = async (req, res) => {
    const applications = await HostelApplicationModel.find();
    res.json(applications);
}

export const createApplication = async (req, res) => {

    const newApplicant = new HostelApplicationModel({
        name: req.body.name,
        regNo: req.body.regNo,
    });
    await newApplicant.save();
}