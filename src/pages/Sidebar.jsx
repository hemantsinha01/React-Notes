import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import GroupList from './GroupList';
 

function Sidebar({
  groups, 
  addGroup, 
  activegroup, 
  setActiveGroup,
  
}) {

    const[name, setName] = useState('')
    const[color, setColor] = useState('')


    
   
  


    


  return (
    <div className="sidebar ">
      <div className="sidebar-header">
        <h1>Pocket Notes</h1>
        <div className="sidebar-createNoteBtn">
          <Popup trigger={<button> + Create Notes group </button>} modal nested>
            {(close) => (
              <div className="createNoteForm">
                <form>
                  <h2>Create New Notes group</h2>
                  <div className="groupName">
                    <label htmlFor="groupName">Group Name &nbsp;&nbsp;</label>
                    <input
                      type="text"
                      id="groupName"
                      placeholder="Group name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <br />
                  <div className="optionColor">
                    <label htmlFor="colorOptionns">
                      Choose Colour &nbsp;&nbsp;&nbsp;&nbsp;
                    </label>
                    <div className="colorOptionns">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: "#9468de" }}
                        onClick={(e) =>
                          setColor(e.target.style.backgroundColor)
                        }
                      ></div>
                      <div
                        className="color-circle"
                        style={{ backgroundColor: "#ff69b4" }}
                        onClick={(e) =>
                          setColor(e.target.style.backgroundColor)
                        }
                      ></div>
                      <div
                        className="color-circle"
                        style={{ backgroundColor: "#40e0d0" }}
                        onClick={(e) =>
                          setColor(e.target.style.backgroundColor)
                        }
                      ></div>
                      <div
                        className="color-circle"
                        style={{ backgroundColor: "#ff7f50" }}
                        onClick={(e) =>
                          setColor(e.target.style.backgroundColor)
                        }
                      ></div>
                      <div
                        className="color-circle"
                        style={{ backgroundColor: "#0000ff" }}
                        onClick={(e) =>
                          setColor(e.target.style.backgroundColor)
                        }
                      ></div>
                      <div
                        className="color-circle"
                        style={{ backgroundColor: "#add8e6" }}
                        onClick={(e) =>
                          setColor(e.target.style.backgroundColor)
                        }
                      ></div>
                    </div>
                  </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addGroup(color, name);
                        close();
                      }}
                    >
                      Create{" "}
                    </button>
                  
                </form>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div className="sidebar-groups">
        {groups.map((group) => {
          return (
            <div
              key={group.id}
              onClick={() => setActiveGroup(group)}
              
              className={`sidebar-group ${
                group.id === activegroup && "active-group"
              }`}
            >
              <div
                className="logo"
                style={{ backgroundColor: `${group.color}` }}
              >
                {group.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>
              <strong>{group.name}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar
