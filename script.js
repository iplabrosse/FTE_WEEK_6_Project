// ============== Model ========================= 
const people = [
    { name: "Isaiah LaBrosse", 
      phone:"6035552121", 
      email:"isaiahl@email.com" },
    { name: "Bob Jones", 
      phone:"6035552122", 
      email:"jones.bob@email.com" },
    { name: "Steve Smith", 
      phone:"6035552123", 
      email:"stevey.smith@email.com" },
    { name: "Mac Willis", 
      phone:"6035552124", 
      email:"m.willis@email.com" },
    { name: "Jim Johnson", 
      phone:"6035552125", 
      email:"im.jim@email.com" },
]

const mainDiv = document.querySelector("main") 

//below we will add our form 
const nameInput = document.querySelector('input[name="name"]') 
const phoneInput = document.querySelector('input[name="phone"]')
const emailInput= document.querySelector('input[name="email"') 
const createButton = document.querySelector("button#createitem") 

//below we will add our update form 
const updateName = document.querySelector('input[name="updatename"]') 
const updatePhone = document.querySelector('input[name="updatephone"]')
const updateEmail= document.querySelector('input[name="updateemail"') 
const updateFormButton = document.querySelector("button#updateitem") 

// Functions

const renderData = () => {
  
  mainDiv.innerHTML = ""

  //loop over the people array
  people.forEach((person, index) => {
    const personH1 = document.createElement("h1") 

    const buttonContainer = document.createElement("aside") 

    //Delete Button
    const deleteButton = document.createElement(`button`) 
    deleteButton.id = index
    deleteButton.innerText = "Delete" 
    deleteButton.addEventListener("click",  (e) => {
      people.splice(index, 1) 
      renderData() 
    })
    buttonContainer.appendChild(deleteButton) 

    //Update Button
    const updateButton = document.createElement(`button`) 
    updateButton.id = index
    updateButton.innerText = "Update" 
    updateButton.addEventListener("click",  (e) => {
      updateName.value = person.name 
      updatePhone.value = person.phone
      updateEmail.value = person.email
      updateFormButton.setAttribute("toupdate", index) 
    })
    buttonContainer.appendChild(updateButton) 

    personH1.innerText = `Name:  ${person.name} 
                          Phone: ${person.phone} 
                          Email: ${person.email} ` 
    mainDiv.appendChild(personH1) 
    mainDiv.appendChild(buttonContainer) 
  })
}

const createData = () => {
  const name = nameInput.value 
  const phone = phoneInput.value 
  const email = emailInput.value
  const newPerson = { name, phone, email } 
  people.push(newPerson) 
  renderData() 
}

const updateData = event => {
  const index = event.target.getAttribute("toupdate") 
  const name = updateName.value 
  const phone = updatePhone.value 
  const email = updateEmail.value
  people[index] = { name, phone, email }
  renderData() 
}

// Main App Logic

renderData() //call the render data function for the initial rendering of the data
createButton.addEventListener("click", createData) //trigger create data function whenever createButton is clicked
updateFormButton.addEventListener("click", updateData) //trigger update data function when updateButton is clicked