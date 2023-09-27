import db from "../db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req,res)=>{
 //CHECK EXISTING USER
 const q = "SELECT * FROM students WHERE email = ? OR userName = ?";

 db.query(q, [req.body.email, req.body.userName], (err, data) => {
   if (err) return res.status(500).json(err);
   if (data.length) return res.status(409).json("Student already exists!");

   //Hash the password and create a user
   const salt = bcrypt.genSaltSync(10);
   const hash = bcrypt.hashSync(req.body.password, salt);

   const q = "INSERT INTO students(`userName`,`email`,`password`,`grade`,`img`) VALUES (?)";
   const values = [req.body.userName, req.body.email, hash,req.body.grade,req.body.img];

   db.query(q, [values], (err, data) => {
     if (err) return res.status(500).json(err);
     return res.status(200).json("Student has been created.");
   });
 });
};

export const fakeRegister = (req,res)=>{
  //CHECK EXISTING USER
  const q = "SELECT * FROM fakeStudents WHERE email = ? OR username = ?";
 
  db.query(q, [req.body.email, req.body.userName], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Student already exists!");
 
    const q = "INSERT INTO fakeStudents(`username`,`email`,`password`,`grade`,`img`) VALUES (?)";
    const values = [req.body.userName, req.body.email, req.body.password,req.body.grade,req.body.img];
 
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Student has been created.");
    });
  });
 };
export const login = (req, res) => {
    //CHECK USER
  
    const q = "SELECT * FROM students WHERE email = ?";
  
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("لم يتم الموافقة من الاستاذ علي دخولك بعد");
  
      //Check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong email or password!");
  
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
      
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  };


  export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("Student has been logged out.")
  };
  