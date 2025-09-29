import { useState } from 'react';

function useToDoList() {
    const [items, addItemIntoToDoListOrRemoveFromToDoList] = useState([]);
    const [taskInputValue, setTaskInputValue] = useState("");

    function onChangeInToDoList(event) {
        setTaskInputValue(event.target.value);
        var localInputValue = event.target.value;

        if (event.key === "Enter" && localInputValue) {
            addItemIntoToDoListOrRemoveFromToDoList(items.concat({ name: localInputValue }))
            setTaskInputValue("");
        }
    }

    function removeFromList(index) {
        addItemIntoToDoListOrRemoveFromToDoList(items.splice(index, 1))
        addItemIntoToDoListOrRemoveFromToDoList(items.concat([]))
    }

    function clearToDoListInput() {
        setTaskInputValue("");
    }

    return {
        items,
        taskInputValue,
        onChangeInToDoList,
        removeFromList,
        clearToDoListInput
    };
}

export default useToDoList;