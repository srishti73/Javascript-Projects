document.querySelector('#zipForm').addEventListener('submit',getLocationInfo);
//listen for delete
document.querySelector('body').addEventListener('click',deleteLocation);
function getLocationInfo(e){
    e.preventDefault();
    //get zip value from input
    const zip= document.querySelector('.zip').value;
    //make req 
    fetch(`http://api.zippopotam.us/us/${zip}`).then(response=> {
      if(response.status!=200){
        showIcon('remove');
        document.querySelector('#output').innerHTML=
        `
        <article class="message message-body is-danger">Invalid Zipcode, Try Again!</article>
        
        
        
        `;
        throw Error(response.statusText);
      }
      else{
        showIcon('check');
        return response.json();
      }
    }).then(data=>{
      //show location info by looping into places array that we get
      let output='';
      data.places.forEach(place=>{
        output+=`
         <article class="message is-primary">
          <div class="message-header">
            <p>Location Info</p>
            <buttton class="delete"></button>
              </div>
              <div class="message-body">
                <ul>
                  <li><strong>City:</strong>${place['place name']}</li>
                  <li><strong>State:</strong>${place['place state']}</li>
                  <li><strong>Longitude:</strong>${place['longitude']}</li>
                  <li><strong>Latitude:</strong>${place['latitutde']}</li>
                </ul>
                </div>
                </article>
        `;
      })
      //insert into ouput div
      document.querySelector('#output').innerHTML=output;
    })
    .catch(err=>console.log(err));
    
}
//sh0w check or remove item
function showIcon(icon){
   //clear icons
   document.querySelector('.icon-remove').style.display='none';
   document.querySelector('.icon-check').style.display='none';
   //show correct icons
   document.querySelector(`.icon-${icon}`).style.display='inline-flex';
}

//delete location box
function deleteLocation(e){
  if(e.target.className=='delete'){
     document.querySelector('.message').remove();
     document.querySelector('.zip').value='';
     document.querySelector('.icon-check').remove();
  }
}