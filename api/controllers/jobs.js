const Job = require('../models/job')

function getAll(req, res){
    Job.find({}, function(err, data){
        if (err) res.status(404)
        res.status(200).json(data)
    })
}




 
function create(req, res) {
    const job = new Job(req.body)
    job.save(function (err) {
        if (err) {
            throw err
        }
        res.json(job)
    })
}



function show(req, res) {
    Job.findById(req.params.id, function(err, data) {
        if (err) res.status(404)
        res.status(200).json(data)
    })
}

// async function update (req, res) {
//     let jobs = await Job.findOne({'jobs._id': req.params.id});
//     for (let key in req.body) {
//         jobs[key] = req.body[key];
//     };
//     try{
//         await jobs.save();
//     } catch (err) {
//         console.log(err);
//     }
//     return res.json(jobs);
// }
async function update(req, res) {
    try {
      const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      return res.json(job);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
  }

// async function update(req, res) {
//     try {
//       const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
//       if (!job) {
//         return res.status(404).json({ message: "Student not found" });
//       }
  
//       return res.json(job);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json({ message: "Server error" });
//     }
//   }

  function deleteJob(req, res) {
    Job.findByIdAndDelete(req.params.id, function(err, job){
        if(err) console.log(err)
        res.status(200).json(job)
    })
}



module.exports = {
    getAll,
    create,
    show,
    update,
    delete: deleteJob


}