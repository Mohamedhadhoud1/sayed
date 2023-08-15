import  express  from "express";
import mysql from "mysql";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:"1234",
    database:"sayed",
   
})

app.use(express.json())
app.use(cors())
app.use(cookieParser());

app.use("/api/auth", authRoutes);

/*
//GET

app.get("/",(req,res)=>{
    res.json("hello")
})

app.get("/students",(req,res)=>{
    const q = "SELECT * FROM students"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/lessons",(req,res)=>{
    const q = "SELECT * FROM lessons"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.get("/letrature",(req,res)=>{
    const q = "SELECT * FROM letrature"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.get("/grammer",(req,res)=>{
    const q = "SELECT * FROM grammer"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.get("/eloquence",(req,res)=>{
    const q = "SELECT * FROM eloquence"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//DELETE

app.delete("/eloquence/:id",(req,res)=>{
    const id = req.params.id;
    const q = "DELETE FROM eloquence WHERE id = ?"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data deleted succesfully")
    })
})

//post

app.post("/students",(req,res)=>{
    const q = "INSERT INTO students (`userName`,`email`,`password`,`grade`,`img`) VALUES (?)"
    const values = [req.body.userName,
                    req.body.email,
                    req.body.password,
                    req.body.grade,
                    req.body.img,]
   
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data adedd succefully")
    })
})


app.post("/lessons",(req,res)=>{
    const q = "INSERT INTO lessons (`title`,`desc`,`pdfurl`,`videourl`,`imgurl`) VALUES (?)"
    const values = [req.body.title,
                    req.body.desc,
                    req.body.pdfurl,
                    req.body.videourl,
                    req.body.imgurl,]
   
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data adedd succefully")
    })
})


app.post("/letrature",(req,res)=>{
    const q = "INSERT INTO letrature (`title`,`desc`,`pdfurl`,`videourl`,`imgurl`) VALUES (?)"
    const values = [req.body.title,
                    req.body.desc,
                    req.body.pdfurl,
                    req.body.videourl,
                    req.body.imgurl,]
   
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data adedd succefully")
    })
})


app.post("/grammer",(req,res)=>{
    const q = "INSERT INTO grammer (`title`,`desc`,`pdfurl`,`videourl`,`imgurl`) VALUES (?)"
    const values = [req.body.title,
                    req.body.desc,
                    req.body.pdfurl,
                    req.body.videourl,
                    req.body.imgurl,]
   
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data adedd succefully")
    })
})


app.post("/eloquence",(req,res)=>{
    const q = "INSERT INTO eloquence (`title`,`desc`,`pdfurl`,`videourl`,`imgurl`) VALUES (?)"
    const values = [req.body.title,
                    req.body.desc,
                    req.body.pdfurl,
                    req.body.videourl,
                    req.body.imgurl,]
   
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data adedd succefully")
    })
})

*/

//port

app.listen(8800,()=>{
    console.log("Backend server is running!")
})