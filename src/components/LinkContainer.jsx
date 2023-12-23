import Table from "./Table"
import Form from "./Form"
import { useState } from 'react'

function LinkContainer() {

    const [favLinks, setFavLinks] = useState([])

    const handleRemove = (index) => {
        const newLinks = [...favLinks]
        newLinks.splice(index, 1)
        setFavLinks(newLinks)
  };
        
    const handleSubmit = (favLink) => {

        setFavLinks([...favLinks, favLink]) 
    }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table data={favLinks} removeLink={handleRemove} prop2 prop3/> 
            <h1>Add New</h1>
            <Form submitNewLink={handleSubmit} />
        </div>
    )
}

export default LinkContainer