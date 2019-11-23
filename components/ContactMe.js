import React from 'react';
import axios from 'axios';
import Loader from '@/Loader';
import '@styles/layout/contactMe.scss';


class ContactMe extends React.Component {

  state = {
    name: '',
    email: '',    
    phone: '',
    message: '',
    isLoader: false
  }

  mailFormHandler = (e) => {
    const obj = {};
    obj[e.target.id] = e.target.value;
    this.setState(obj);
  }

  mailData = () => {
    const dataForm = async () => {
      const formData = new FormData();
      formData.append('name', this.state.name);
      formData.append('email', this.state.email);
      formData.append('phone', this.state.phone);
      formData.append('message', this.state.message);   

      this.setState({
        isLoader: true
      });
 
      try {     
        const data = await axios.post('https://script.google.com/macros/s/AKfycbwmJWcGWDxxXAUGiHrks9joL8akO-NGskcAzOQXtQ/exec', formData);
        if(data) {            
          alert('전송에 성공하였습니다.')

          this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
            isLoader: false
          });

        } else {
          alert('전송에 실패하였습니다.')
        }
      } catch (e) {
        alert(e)

        this.setState({
          isLoader: false
        });
  
      }
    }
    dataForm()
  }

  mailSubmitHandler = () => {               
    switch(true) {
      case !this.state.name:
        alert('이름을 입력하세요.');
        break;
      case !this.state.email:
        alert('이메일을 입력하세요.');
        break;
      case !this.state.phone:
        alert('전화번호를 입력하세요.');
        break;
      case !this.state.message:
        alert('내용을 입력하세요.');
        break;
      default:
        return this.mailData();
    }

  }  

  render() {
    
    return(
      <>
      <section>
        <article className="form">
          <h3>Contact Me</h3>
            <input type="text" name="name" className="input-text" id="name" value={this.state.name} placeholder="Name" onChange={(e)=>{this.mailFormHandler(e)}} />
            <input type="text" className="input-text" name="email" id="email" value={this.state.email} placeholder="Email" onChange={(e)=>{this.mailFormHandler(e)}} />
            <input type="tel" className="input-text" name="phone" id="phone" value={this.state.phone} placeholder="Phone" onChange={(e)=>{this.mailFormHandler(e)}} />
            <textarea className="input-text text-area" name="message" id="message" value={this.state.message} rows="5" placeholder="Message" onChange={(e)=>{this.mailFormHandler(e)}} ></textarea>
            <div className="text-center"><button className="input-btn" onClick={(e) => {this.mailSubmitHandler(e)}}>Send Message</button></div>
        </article>
        <Loader isLoader={this.state.isLoader}/>
      </section>
    </>
    )
  }
}

export default ContactMe;
