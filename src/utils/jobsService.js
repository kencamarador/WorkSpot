


async function getAll(){
    const response = await fetch('http://localhost:3001/api/jobs')
    const data = await response.json()
    return data
}   
async function create(item) {
    try {
        const response = await fetch('http://localhost:3001/api/jobs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      return await response.json();
    } catch (error) {
        console.error(error);
    }
  }

async function show(id) {
    console.log("show function called with id:", id);
    const response = await fetch(`http://localhost:3001/api/jobs/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    return data
  }
  
async function deleteJob(id){
    try{ const response = await fetch(`http://localhost:3001/api/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    return data
  }catch(error){
  }
}


// async function update(id) {
//   try {
//       const response = await fetch(`http://localhost:3001/api/jobs/${id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(id)
//     });
//     return await response.json();
//   } catch (error) {
//       console.error(error);
//   }
// }

async function update(id, data) {
  try {
      const response = await fetch(`http://localhost:3001/api/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const res = await response.json()
    return res;
  } catch (error) {
      console.error(error);
  }
}
  

export default {
    getAll,
    create,
    show,
    update,
    delete: deleteJob
}