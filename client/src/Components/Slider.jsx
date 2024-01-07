import React from 'react'
import './Slider.css'
import { useNavigate } from 'react-router-dom'
const Slider = ({title,unique_id}) => {
    const navigate=useNavigate();
    const sliderdata=[
        {
            id:1,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:3,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:2,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:6,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:44,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:132,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:15467,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:1225,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
        {
            id:1429,
            url:'/image/off3_1.jpg',
            discount:45,
            shortdis:"great offers on creating suppliments",
            offertitle:"Deal of the Day"
        },
    ]

    const scrollhandler=(x)=>{
        console.log("in");
        const ele=document.getElementById(`sm${unique_id}`);
        ele.scroll({
            left:ele.scrollLeft+x,
            behavior:'smooth'
        })
        
    }
  return (
    <>
        <div className="slider_container" >
           <h4>{title} <a href="#">See all deals</a></h4>
           <div className="main_slider" id={`sm${unique_id}`}>
            {
                sliderdata.map((e,i)=>{
                    const {id,url,discount,shortdis,offertitle}=e;
                    return(
                        <div className="pro_box" key={i} onClick={()=>{console.log(id); navigate('/productview')}}>
                            <div className="img_con">
                                <img src={url} alt="xxx" />
                            </div>
                            <div className="pro_dis">
                                <p><span>Up to {discount}% off</span>&nbsp; {offertitle}</p>
                                <p style={{color:'black',fontWeight:200}}>{shortdis}</p>

                            </div>

                        </div>
                    )
                })
                
            }
            
           </div>
           
        <button id='left' onClick={()=>scrollhandler(-300)}>{'<'}</button>
        <button id='right' onClick={()=>scrollhandler(300)}>{'>'}</button>
        
        </div>  
    </>
  )
}

export default Slider
