import React, { Component } from "react";
import {Modal,Button } from 'react-bootstrap';



export class Pop extends Component{
  
  


    constructor (props){
        super(props);
        this.state = {
        }
    }



  render(){
    const { 
      currentQuestion, 


  } = this.state;
      return(



        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Feedback worng anser 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container">
        <h5> Feedback: </h5>
         {this.props.question}
<h5> Het juiste antwoord: </h5>
         {this.props.answer}
        

         </div>
        </Modal.Body>
        <Modal.Footer>
  
       
        </Modal.Footer>
      </Modal>
  

      )

  }
}



             