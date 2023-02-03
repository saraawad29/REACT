import { useState } from "react";

function MyForm (){
    const [name, setName]= useState("");
    const [age, setage]= useState("");
    const handleSubmit = (event) => {
        console.log(`
          Name: ${name}
          Age: ${age}
          
        `);
        
        event.preventDefault();
      }
    
    return(
      <div>
          <form className="form" onSubmit={handleSubmit}>
              <h1 className="test">My Form</h1>
              
              <label className="test">Name: <input type="text" className="name" id="name" onChange={e => setName(e.target.value)} required />
              </label>
              <label className="test">Age: <input type="text" className="age" id="age" onChange={e => setage(e.target.value)} required />
              </label>
              <button className="button" type = 'submit'>Soumettre</button>

          </form>
      </div>   
    );
    }
export default MyForm;



// // import { useState } from "react";
// // import { render } from '@testing-library/react';
// import MyList from './MyList';
// import React, {Component} from 'react';


// class MyForm extends Component{

//     constructor (props) {
//       super(props);
//       this.state = {
//         name : '',
//         age : ''
//       };
//       this.handleChange = this.handleChange.bind(this)
//       this.handleSubmit = this.handleSubmit.bind(this)

//     }
//     handleChange (event){
//       const name = event.target.name
//       this.setState({
//         [name]: event.target.value
//       });
//     }

//     handleSubmit (event) {
//       event.preventDefault()
//       const dataD = JSON.stringify(this.state)
//       console.log(dataD)
//     }

// // function MyForm (){
// //     const [name, setName]= useState("");
// //     const [age, setage]= useState("");
// //     const handleSubmit = (event) => {
// //         console.log(`
// //           Name: ${name}
// //           Age: ${age}
          
// //         `);
        
// //         event.preventDefault();
// //       }
//     rendre(){
//     return(
//         <form className="form" onSubmit={this.handleSubmit}>
//             <h1 className="test">My Form</h1>
            
//             <label className="test">Name: <input type="text" className="name" id="name" onChange={this.handleChange} />
//             </label>
//             <label className="test">Age: <input type="text" className="age" id="age" onChange={this.handleChange} />
//             </label>
//             <button className="button" type = 'submit'>Soumettre</button>
//             {JSON.stringify(this.state)}
//             <MyList/>
//         </form>
//     );
//     }
//   }


// export default MyForm;

  
