import { Button, MenuItem, TextField } from '@material-ui/core';
import './Home.css';
import Categories, {} from '../../data/Categories'
import { useState } from 'react';
const Home = ({name, setName}) => {


   const [category, setCategory] = useState("");
   const [difficulty, setDifficulty] = useState("");
   
  return <div className='content'>
      <div className='setting'>
          <span style={{fontSize: 30}}> Quiz Setting</span>

          <div className='setting_select'>
              <TextField style={{marginBottom: 25}}
              label= "Enter Your Name"
              variant='outlined'
              onChange={(e) => setName(e.target.value)}
              />
            
            <TextField 
            select
            label='select Category'
            variant='outlined'
            style={{marginBottom: 30}}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
              >
                  {Categories.map((cat) => {
                      return <MenuItem key={cat.category} value={cat.value} >
                          {cat.category}
                      </MenuItem>
                  })}
            </TextField>  

            <TextField 
            select
            label='select Difficulty'
            variant='outlined'
            style={{marginBottom: 30}}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
              >
                  <MenuItem key = 'easy' value ='easy'>
                      Easy
                  </MenuItem>

                  <MenuItem key = 'Medium' value ='Medium'>
                      Medium
                  </MenuItem>

                  <MenuItem key = 'Hard' value ='Hard'>
                      Hard
                  </MenuItem>
            </TextField>  


                  <Button variant='contained' color='secondary' size='medium'>
                      start Quiz
                  </Button>



          </div>

      </div>




  </div>;
};

export default Home;
