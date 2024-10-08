import mongoose from "mongoose";

const registerSchema = mongoose.Schema(
    {
        hospital : {
            type : String,
            required : true,
        },
        iske : {
            type : String,
            required : false,
        },
        kya_kya : {
            type : Number,
            required : true,
        },
        field : {
            type : String,
            requered : true,
        },
        rakhu : {
            type : String,
            required : true,
        }
    }
)