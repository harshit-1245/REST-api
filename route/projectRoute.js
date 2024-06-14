const express=require("express")
const { createProject, getAllProject } = require( "../controller/projectController" )
const { authentication, restrictTo } = require( "../controller/authController" )
const projectRouter=express.Router()

projectRouter.route("/create").post(authentication,restrictTo('seller'),createProject)
projectRouter.route("/").get(authentication,getAllProject)

module.exports=projectRouter