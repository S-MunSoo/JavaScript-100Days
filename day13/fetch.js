// LOAD ALL USERS

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

async function getUsers(e) {
  e.preventDefault();
  let res = await fetch(URL);
  let data = await res.json();
  console.log(data);

  let resultHTML = "";
  data.forEach((user) => {
    resultHTML += `
        <hr>
               <ul>
                  <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                       <li>Email: ${user.email}</li>
             </ul>
        `;
  });
  document.getElementById("users").innerHTML = resultHTML;
}
