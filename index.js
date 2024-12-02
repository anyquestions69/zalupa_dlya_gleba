const express = require("express")
const { execFile, exec } = require('child_process');
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const rulesRouter = require("./routers/rulesRouter");
const additionsRouter = require("./routers/additionsRouter");
const PORT = process.env.PORT || 3000



const router = express.Router()
router.use("/additions", additionsRouter)
router.use("/rules", rulesRouter)
router.get("/img", async (req,res)=>{
    execFile("./data/Ontology.exe",(error, stdout, stderr) => {
        
        return res.sendFile(__dirname+"/data/output.png")
      })
})
app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})