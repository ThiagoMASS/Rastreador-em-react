


export async function Cordenadas (){

return new Promise ((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(response=>{
        const {latitude,longitude}= response.coords
        resolve({latitude,longitude})
    },
    error =>{
        reject(error)
    })

})
    
}