import mongoose from "mongoose";

const Schema = mongoose.Schema({
    name: String,
    regNo: String,
});

const HostelApplicationModel = mongoose.model("HostelApplication", Schema);


export default HostelApplicationModel;