    
import {Button,Drawer} from '@mui/material';

import React ,{useState}from 'react';
import ListDrawer from './ListDrawer';
export default function Dashboard() {

const [open,setOpen]=useState(false);

  return (
    <div>
      <Button variant='contained' onClick={()=>setOpen(true)}>Open</Button>
       
       <Drawer
       open={open}
       anchor="left"
       onClose={()=>setOpen(false)}
       >
       <ListDrawer/>

       </Drawer>
       
    </div>
  )
}
