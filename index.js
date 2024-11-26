const express = require("express")
const rulesRouter = require("./routers/rulesRouter");
const additionsRouter = require("./routers/additionsRouter")
const PORT = process.env.PORT || 3000

const app=express()
const router = express.Router()
router.use("/additions", additionsRouter)
router.use("/rules", rulesRouter)
app.use("/api", router)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})