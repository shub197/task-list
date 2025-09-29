import './App.css';
import 'tailwindcss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToDoList from './hooks/useToDoList';

function App() {
    const {
        items,
        taskInputValue,
        onChangeInToDoList,
        removeFromList,
        clearToDoListInput
    } = useToDoList();

    return (
        <div style={{ margin: 'auto' }}>
            <div className="to-do-list-container">
                <div className="to-do-list-header mb-[8px] font-bold text-[20px]">
                    Task List
                </div>

                <div className="task-input-container mb-[16px]">
                    <input
                        type="text"
                        id="to-do-list-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                                rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full
                                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="+ Add a new task"
                        onChange={onChangeInToDoList}
                        onKeyDown={onChangeInToDoList}
                        value={taskInputValue}
                        autoComplete="off"
                        required
                    />

                    <div onClick={clearToDoListInput} className="clear-input-icon cursor-pointer">
                        <FontAwesomeIcon icon="times" />
                    </div>
                </div>

                <table className="to-do-list-table table-auto">
                    <thead>
                        {/* <tr>
                            <th colSpan="3">To do</th>
                        </tr> */}

                        <tr>
                            {/* <th className="w-[7%]">#</th> */}
                            {/* <th className="w-[80%] text-left">Name</th>
                            <th className="w-[10%]"></th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {(items.length > 0) ? items.map((item, index) => (
                            <tr className="task-row" key={index + 1}>
                                <td className="text-center w-[5%]">{index + 1}.</td>
                                <td>{item.name}</td>
                                <td className="w-[6%] text-center">
                                    <a className="!text-red-900 text-[12px] font-bold" href="#" onClick={() => removeFromList(index)}>
                                        <FontAwesomeIcon icon="times" />
                                    </a>
                                </td>
                            </tr>
                        ))
                            :
                            <tr>
                                <td colSpan="3" className="text-[12px] italic text-gray-500 text-center rounded-[4px]">
                                    No tasks added yet. Add a task to get started!
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App
