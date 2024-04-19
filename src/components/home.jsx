import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Make from './make';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/make')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <>
    <div style={{color:'beige',backgroundColor:'black',flexDirection:'row',width:'1473px',height:'100px'}}>
    <h1 style={{alignContent:'start',justifyContent:"initial",display:'flex',textAlign:"start",color:'purple'}}>Style Essence!</h1>
    <div style={{display:'flex',justifyContent:'center',gap:'10px',alignItems:'centre'}}>
    <button style={{backgroundColor:'skyblue', width:'100px',color:'purple', height:'30px',padding:'10px',borderRadius:'100px'}}>HOME</button>
    <button style={{backgroundColor:'skyblue',width:'100px',color:'purple',height:'30px',padding:'10px',borderRadius:'30px'}}>ABOUT</button>
    <button style={{backgroundColor:'skyblue', width:'100px',color:'purple', height:'30px',padding:'10px',borderRadius:'30px'}}>FOOD</button>
    <button style={{backgroundColor:'skyblue',width:'100px',color:'purple',height:'30px',padding:'10px',borderRadius:'30px'}}>TRAVEL</button>
    <button style={{backgroundColor:'skyblue', width:'100px',color:'purple', height:'30px',padding:'10px',borderRadius:'30px'}}>LIFE STYLE</button>
    <button style={{backgroundColor:'skyblue',width:'100px',color:'purple',height:'30px',padding:'10px',borderRadius:'30px'}}>GARMENTS</button>
    <button style={{backgroundColor:'skyblue', width:'100px',color:'purple', height:'30px',padding:'10px',borderRadius:'30px'}}>COSMETICS</button>
    <button style={{backgroundColor:'skyblue',width:'120px',color:'purple',height:'30px',padding:'10px',borderRadius:'30px'}}>ACCESSORIES</button>
    </div>
    </div>
    <center>
    <div style={{backgroundImage:`url(sty.jpg)`,backgroundSize:'100%',height:'1000px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
    </div>
    </center>
    <div style={{display:'flex',justifyContent:'center',gap:'10px',alignItems:'centre',backgroundColor:'black'}}>
    <h3 style={{alignContent:'center',justifyContent:'center',display:'flex',textAlign:'center',color:'lightcyan',fontStyle:'italic',color:'purple'}}>"Fashion is the armor to survive the reality of everyday life."</h3>
    <h3 style={{alignContent:'center',justifyContent:'center',display:'flex',textAlign:'center',color:'lightcyan',fontStyle:'italic',color:'purple'}}>-BILL CUNNINGHAM-</h3>
    </div>
    <div style={{backgroundColor:'black',display:'flex',justifyContent:'space-around'}}>
      <a href="#" onClick={logout}>
        <img src='f15.jfif' style={{height:'200px'}}></img>
        <h3 style={{color:'purple'}}>Cosmetics</h3>
      </a>
      <a href="#">
        <img src='f12.jfif' style={{height:'200px'}}></img>
        <h3 style={{color:'purple'}}>Garments</h3>
      </a>
      <a href="#">
        <img src='f14.webp' style={{height:'200px'}}></img>
        <h3 style={{color:'purple'}}>BAGS</h3>
      </a>
      <a href="#">
        <img src='vf17.webp' style={{height:'200px'}}></img>
        <h3 style={{color:'purple'}}>SANDALS</h3>
      </a>
    </div>
    </>
  );
  };

export default Home;
