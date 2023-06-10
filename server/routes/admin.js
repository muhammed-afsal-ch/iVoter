var express = require("express");
var router = express.Router();
const mysqldb = require("../database/connectionToMysql.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const adminPassword = "123";

router.post("/login", (req, res) => {
  console.log(req.body);
  try {
    const selectsql = "SELECT * FROM `admin`;";
    mysqldb.query(selectsql, (err, response) => {
      if (!err) {
        // console.log(response);
        const username = req.body.username;
        const checkersql = "SELECT * FROM `admin` WHERE username = ?";

        mysqldb.query(checkersql, [username], (err, data) => {
          bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(adminPassword, salt, (err, hash) => {
              const hashedAdminPassword = hash;
              const changePasswordsql =
                "UPDATE `admin` SET `password`=? WHERE username=?;";

              mysqldb.query(changePasswordsql, [hashedAdminPassword, username]);
            });
          });

          if (!err) {
            // console.log(data);
            if (!data.length) {
              res.json({ LoginStatus: "ADMIN_NOT_FOUND" });
            } else {
              const Incoming_password = req.body.password;
              const hashedPassswordInDbsql =  "SELECT * FROM `admin` WHERE username = ?";
              mysqldb.query(hashedPassswordInDbsql,[username],(err,admins)=>{

                
                bcrypt.compare(Incoming_password,admins[0].password).then((hashmatchresult)=>{
                    if (hashmatchresult) {
                        res.json({ LoginStatus: "LOGIN_SUCCESS", admin: admins });
                    }else{
                        res.json({ LoginStatus: "PASSWORD_WRONG" });
                    }
                })
              })
            //   const passwordcheckersql = ""
            //     "SELECT * FROM `admin` WHERE username = ?  AND password = ?;";
            //   mysqldb.query(
            //     passwordcheckersql,
            //     [username, password],
            //     (err, result) => {
            //       if (result) {
            //         // console.log(result);
            //         if (!result.length) {
            //           console.log("password Tetti");
            //           res.json({ LoginStatus: "PASSWORD_WRONG" });
            //         } else {
            //           console.log("Logined");
            //           res.json({ LoginStatus: "LOGIN_SUCCESS", admin: result });
            //         }
            //       } else {
            //         console.log(err);
            //       }
            //     }
            //   );
            }
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
});


router.post('/addvoter', (req, res) => {
  console.log(req.body);

  try {
    const {voter_id,adno, password, name, Class, union} = {...req.body};

    const voterchecksql = 'SELECT * FROM `voters` WHERE voter_id=?'
    mysqldb.query(voterchecksql,[voter_id],(err,data)=>{
      if (!data.length) {
        const addvotersql = "INSERT INTO `voters`(`voter_id`,adno, `password`, `name`, `class`,`union`) VALUES (?,?,?,?,?,?)"
        mysqldb.query(addvotersql,[voter_id,adno,password,name,Class,union],(err, response)=>{
          if (!err) {
            res.json({ VoterAddStatus: "VOTER_ADDED_SUCCESSFULLY" });

            const voteinsertcolumnsql = "INSERT INTO `votes`(`voter_id`, `classunion`, `presidential`, `secretarial`, `vice_presidential`, `treasurer`, `TimeStamb`) VALUES (?,?,?,?,?,?,?)";
            mysqldb.query(voteinsertcolumnsql,[voter_id, union,"","","","",""],(err,result)=>{
              if (!err) {
                console.log(result)
              }else{
                console.log(err)
              }
            })
          }else{
            console.log(err);
          }
        })
      }else{
        res.json({ VoterAddStatus: "VOTER_ALREADY_REGISTERD" });     
      }
    })

    

  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});



router.post('/addcandidate', (req, res) => {
  console.log(req.body);

  try {
    const {candidate_id,fullname, place, position} = {...req.body};

    const candidatechecksql = 'SELECT * FROM `candidates` WHERE candidate_id=?'
    mysqldb.query(candidatechecksql,[candidate_id],(err,data)=>{
      if (!data.length) {
        const addcandidatesql = "INSERT INTO `candidates`(`candidate_id`,fullname, `place`, `position`) VALUES (?,?,?,?)"
        mysqldb.query(addcandidatesql,[candidate_id,fullname,place,position],(err, response)=>{
          if (!err) {
            res.json({ CandidateAddStatus: "CANDIDATE_ADDED_SUCCESSFULLY" });
          }else{
            console.log(err);
          }
        })
      }else{
        res.json({ CandidateAddStatus: "CANDIDATE_ALREADY_REGISTERD" });     
      }
    })

    

  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});
module.exports = router;
