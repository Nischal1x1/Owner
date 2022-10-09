import React from 'react'

const Test = () => {
  return (
    <Stack direction = 'row' alignItems='center' p={2} sx = {{position: 'sticky', background:"#F7C12C", top:0, justifyContent: 'space-between'}}>
    <Link to = '/' style={{ display: 'flex', alignItems: 'center'}}>
        <img src={ logo } alt = 'logo' height={45}/>
    
    </Link>  
    {/* <userImage>
        
    </userImage> */}
    </Stack>
  )
}

export default Test