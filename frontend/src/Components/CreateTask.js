import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './CreateTask.css'
import axios from 'axios'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
  },
}));

const CreateTask = () => {

    const [Title, setTaskTitle] = useState('')
    const [Description, setDescription] = useState('')
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async () => {
      let TaskResp = await axios.post('/Task', {Title, Description});
      console.log([TaskResp])
  }

  const handleTaskName = (e) => {
      setTaskTitle(e.target.value)
  }
  
  const handleDesc = (e) => {
      setDescription(e.target.value)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className="CreateTaskFormContainer">
      <input type="text" placeholder="Task Name" onChange={(e) => handleTaskName(e)}/>
      <input type="text" placeholder="Task Description" onChange={(e) => handleDesc(e)}/>
      <button className="CreateTaskButton" onClick={handleSubmit}>Create</button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className="CreateTaskButton">
        Create Task
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default CreateTask;