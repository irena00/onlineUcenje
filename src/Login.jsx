import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  let navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8000/api/login', formData)
      .then(response => {
        if(response.data.status==200){
          alert("USPEH")
          window.sessionStorage.setItem('token',response.data.access_token)
          console.log(response.data)
          if(response.data.user.role=="student"){
            navigate('/kursevi');
          }else{
            navigate('/profesor');
          }
        }else{
          alert("GRESKA")

        }
        
      })
      .catch(error => {
        alert("GRESKA")
        console.log(error.response.data);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
