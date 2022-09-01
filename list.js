import { useState } from "react";
const List = () => {
    const [toDoitems, settoDoitems] = useState([""])
    const renderList = () => {
        return toDoitems.map((item, index) => {
            const nameList = <li key={item.split(' ').splice(0, 1).toString().toLowerCase() + "list" + (index)}>{item + (index)}</li>
            console.log(nameList);
            return nameList
        })
    }
    const handleAddItem = () => {
        settoDoitems([...toDoitems, "Relative name"])
    }
    return (
        <div>
            <ol>
                {renderList()}
            </ol>
            <button onClick={handleAddItem}>Add Relatives</button>
        </div>
    )
}
export default List;