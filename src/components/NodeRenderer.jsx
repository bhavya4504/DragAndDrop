import React from "react";
import TriggerComponent from "./NodeType/TriggerComponent";
import ApprovalComponent from "./NodeType/ApprovalComponent"
import ActionComponent from "./NodeType/ActionComponent";
import DecisionComponent from "./NodeType/DecisionComponent";
import NotificationComponent from "./NodeType/NotificationComponent";
import TaskComponent from "./NodeType/TaskComponent";
import EndComponent from "./NodeType/EndComponent"


const NodeRendener = ({node}) =>{
    const renderNodeComponent = () =>{
        switch(node.type){
            case "Trigger Node":
                return <TriggerComponent node={node} />;
            case "Approval Node":
                return <ApprovalComponent node={node}/>;
            case "Action Node":
                return <ActionComponent node={node}/>;
            case "Decision Node":
                return <DecisionComponent node={node}/>;
            case "Notification Node":
                return <NotificationComponent node={node}/>;
            case "Task Node":
                return <TaskComponent node={node}/>;
            case "End Node":
                return <EndComponent node={node}/>
        }
    };
    return(
        <div>
            {renderNodeComponent}
        </div>
    );

}

export default NodeRendener;