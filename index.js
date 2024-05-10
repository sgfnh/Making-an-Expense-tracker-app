function handle(event){
    event.preventDefault();
    
    const user={
      "amo":event.target.amount.value,
      "desc":event.target.des.value,
      "cater":event.target.cate.value
    }
    localStorage.setItem(user.amo, JSON.stringify(user));
    Showscr(user)
    
  }
  function Showscr(user){
    const parentE=document.getElementById("cru")
    const childE=document.createElement('li')
    childE.textContent=childE.textContent + user.amo + " " + user.desc + " " + user.cater
    parentE.appendChild(childE)
    
    const btn=document.createElement('button')
    btn.textContent="DELETE"
    
    btn.addEventListener('click',function(){
      parentE.removeChild(childE)
      localStorage.removeItem(user.amo)
    })
    childE.appendChild(btn)
    const edi=document.createElement('button')
    edi.textContent='Edit'
    childE.appendChild(edi)
    edi.addEventListener('click',function(){
      parentE.removeChild(childE)
      localStorage.removeItem(user.amo)
      document.getElementById('amount').value=user.amo
      document.getElementById('des').value=user.desc
      document.getElementById('cate').value=user.cater
    })

  }
  
