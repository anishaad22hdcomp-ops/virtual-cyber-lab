
const labs = [
  {id:1,title:'SQL Injection',diff:'easy',time:'20 min',link:'#sql'},
  {id:2,title:'Cross-site Scripting',diff:'medium',time:'30 min',link:'#xss'},
  {id:3,title:'Password Cracking',diff:'hard',time:'45 min',link:'#pw'},
  {id:4,title:'Buffer Overflow',diff:'easy',time:'25 min',link:'#buf'},
  {id:5,title:'Progress tracking',diff:'easy',time:'15 min',link:'#prog'}
];

const list = document.getElementById('lab-list');
labs.forEach(l=>{
  const el = document.createElement('div');
  el.className = 'lab-card';
  el.innerHTML = `
    <div class="lab-info">
      <div style="font-weight:600">${l.title}</div>
      <div class="lab-meta"><span class="badge ${l.diff}">${l.diff.charAt(0).toUpperCase()+l.diff.slice(1)}</span><small style="color:#6b7280">${l.time}</small></div>
    </div>
    <div>
      <button class="try-btn" data-link="${l.link}">Try Lab</button>
    </div>
  `;
  list.appendChild(el);
});
document.addEventListener('click',e=>{
  if(e.target.matches('.try-btn')){
    const link = e.target.dataset.link;
    // Open demo pages — here they just show an alert or scroll to hash.
    if(link && link.startsWith('#')){
      alert('Opening demo: '+link.slice(1)+'. This is a static demo. To create a full lab, deploy server-side content.');
    } else {
      window.location = link;
    }
  }
});

document.getElementById('submitFlag').addEventListener('click',()=>{
  const val = document.getElementById('flag').value.trim();
  const out = document.getElementById('flagResult');
  if(!val){ out.textContent = 'Please enter a flag.'; out.style.color = '#a32e00'; return; }
  // Demo validation: any value containing 'flag{' is accepted
  if(val.toLowerCase().includes('flag{')){ out.textContent = 'Correct — demo flag accepted ✅'; out.style.color = '#0b6a2b'; }
  else{ out.textContent = 'Incorrect flag. Try again.'; out.style.color = '#a32e00'; }
});
