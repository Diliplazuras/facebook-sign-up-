import React from 'react';
import './sign.css';
function Sign () {
    return (
    // <!-- logo start  -->
<div className='main'>
     <div className='logo'>
<img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'   height={'100vh'}/>
</div>
{/* <!-- fb sign up form start --> */}
<div className='submain'>
<form className='valid'>
<h1 className='first_title'> Create a New Acount</h1>
< p id='sub_title'> It's quick and easy.</p>
<hr/>
{/* <!-- fb input section start --> */}
<div className='input'>

     <input 
     type={'name'}
     required
className='register_name'
placeholder='First Name'
id='all'
     /> 

     <input
     ype={'name'}
     className='register_
     name'
     placeholder='Last Name'
     id='all'
     required
     />
     <br/>
<input 
     type={'email'}
required
placeholder='Mobile and Email address'
id='all1'
     /> 
     <br/>
    <input 
     type={'password'}

required
placeholder=' New password'
id='all1'
     /> 
</div>
<h5 className='register_date'>Date of Birth</h5>
<div >
    <select>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>6</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
<option>21</option>
<option>22</option>
<option>23</option>
<option>24</option>
<option>25</option>
<option>26</option>
<option>27</option>
<option>28</option>
<option>29</option>
<option>30</option>
<option>31</option>
</select>
<select >
 <option>jan</option>
<option>feb</option>
<option>mar</option>
<option>apr</option>
<option>may</option>
<option>jun</option>
<option>july</option>
<option>aguest</option>
<option>sep</option>
<option>oct</option>
<option>nav</option>
<option>dec</option>
</select>
<select >
    <option>2022</option>
    <option>2021</option>
    <option>2020</option>
    <option>2019</option>
<option>2018</option>
<option>2017</option>
<option>2016</option>
<option>2015</option>
<option>2014</option>
<option>2013</option>
<option>2012</option>
<option>2011</option>
<option>2010</option>
<option>2009</option>
<option>2008</option>
<option>2007</option>
<option>2006</option>
<option>2005</option>
<option>2004</option>
<option>2003</option>
<option>2002</option>
<option>2001</option>
<option>2000</option>
<option>1999</option>
<option>1998</option>
<option>1997</option>
<option>1996</option>
<option>1995</option>
<option>1994</option>
<option>1993</option>
<option>1992</option>
<option>1991</option>
<option>1900</option>
</select>
</div>
<h5 className='register_gender' >Gender</h5>

<div className='female' id='wrapper'>
<label><b>Female</b></label>
<input type={'radio'} name='gender' value={'female'}/>
</div>
<div className='male' id='wrapper' >
<label><b>Male</b></label>
<input type={'radio'} name='gender' value={'male'}/>
</div>
<div className='other' id='wrapper'>
<label><b>Other</b></label>
<input type={'radio'} name='gender' value={'other'}/>

</div> 

<p className='register_policy'> By clicking sign Up, you agree to our <a href='#'> terms, date policy</a> and <a href='#'>cookie policy </a>.You may receive SMS notification from us and opt at any time </p>
<div>
<input type="submit" value="signup" class="submit"/>
</div>



</form>
</div>
</div>

    )
}
export default Sign