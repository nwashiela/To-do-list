import React, {useState, useEffect} from "react";
import { v4 as createId} from "uuid";
import {HashRouter, Switch, Route,useParams} from "react-router-dom";

import Add from "../../views/add/Add";
import Edit from "../../views/edit/Edit";
import Home from "../../views/home/Home";

const EditWraper = (props) =>{
    const {list, ...remainingProps } = props;
    const {taskId} = useParams();
    const {name} = list.find((item) => item.id === taskId)

    return <Edit {...remainingProps} taskId={taskId} initialName={name} />
}

const App = () => {
    const [loaded, setloaded] = useState(false);
    const [list, setList] = useState([])

    useEffect(
        () => {
                const listAsString = window.localStorage.getItem("list")

                if(listAsString){
                    setList(JSON.parse(listAsString))
            }
            setloaded(true);
        },
        []
      
    )
    useEffect(
        () => {
            if(loaded){
                window.localStorage.setItem(
                 "list",
                JSON.stringify(list) 
                )
            }
        },
        // eslint-disable-next-line
        [list]
    )
    
    const handleAddItem = name => {
        setList([
            {id:createId(), name , checked:false},
            ...list
        ])
        window.location.replace("#/")
    }
    const handleCheckToggle = (taskId) => {
        const newList = list.map((item) => {
            if (item.id !== taskId) return item;
            return{
                ...item,
                checked: !item.checked,
            }
        })
        setList(newList)
    }

    const handleDeleteItem = (taskId)=> {
        const newList = list.filter((item) => item.id !== taskId);
        setList(newList)
    }
    const handleEditItem = (taskId, name) => {
        const newList = list.map((item) => {
            if (item.id !== taskId) return item;
            return{
                ...item,
                name,
            }
        })
        setList(newList)
        window.location.replace("#/")
    }

    return(
        <HashRouter>
            <Switch>

        <Route path="/edit/:taskId">
            <EditWraper
             list={list} 
             onSave={handleEditItem} /> 
            </Route>

        <Route path="/add/">
        <Add onSave={handleAddItem} />
        </Route>

        <Route path="/">
        <Home 
        list={list} 
        onCheckToggle={handleCheckToggle} 
        onDeleteItem={handleDeleteItem} />
        </Route>

           </Switch>
        </HashRouter>
    )
}
 export default App;