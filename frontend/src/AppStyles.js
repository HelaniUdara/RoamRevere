import { AppBar, Typography, styled } from '@mui/material';

export const CustomAppBar = styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    
  });
  
export const CustomTitle = styled(Typography)({
    color: '#00796b',
  });
  
export const CustomLogo = styled('img')({
    marginLeft: '16px', 
  });
