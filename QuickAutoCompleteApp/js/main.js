const search=document.getElementById('search');
const matchlist=document.getElementById('match-list');


//search states.json and filter
const searchStates= async searchText=>{
  const res= await fetch('data/states.json');
  const states= await res.json();

  //get matches
  let matches= states.filter(state=>{
    const regex= new RegExp(`^${searchText}`, 'gi')//^ means start with the search text, gi means global insensitive
    return state.name.match(regex) || state.abbr.match(regex)
  })

  if(searchText.length==0){
    matches=[];
    matchlist.innerHTML='';
  }
  

  outputHtml(matches);
};
  //show results in html
  const outputHtml= matches=>{
    if(matches.length>0){
        const html =matches.
        map(
            match=>`
        <div class="card card-body mb-1>
          <h4>${match.name} (${match.abbr}) <span 
          class="text-primary">${
            match.capital
        }</span></h4>
          <small>Lat: ${match.lat} / Long ${match.long} </small>
        </div>
        `)
        .join('');//for each match
        
        matchlist.innerHTML=html;
    }
  };


search.addEventListener('input',()=>searchStates(search.value));