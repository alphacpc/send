import { useState } from 'react';
import { Box, Button, Grid, TextField, makeStyles } from '@material-ui/core';

const states = [
  {
    value: 'Dakar',
    label: 'Dakar'
  },
  {
    value: 'Accra',
    label: 'Accra'
  },
  {
    value: 'Ouagadougou',
    label: 'Ouagadougou'
  }
];

const SettingAccountDetails = (props) => {
  
  const classes = useStyles();
  
  const [values, setValues] = useState({
    firstName: 'Thomas',
    lastName: 'Sankara',
    gender: 'masculin',
    email: 'Thomas@contact.bf',
    phone: '',
    state: 'BF',
    country: 'Burkina Faso',
    username : 'thomas',
    job: 'Developpeur junior',
    adresse: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>

      <Grid container spacing={3}>
          
          <Grid item md={6} xs={12} >
              <TextField
                fullWidth
                label="Prenom"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom de famille"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
          </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nom d'utilisateur"
                name="username"
                onChange={handleChange}
                required
                value={values.username}
                variant="outlined"
              />
          </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Genre"
                name="gender"
                required
                value={values.gender}
                variant="outlined"
              />
            </Grid>

          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Adresse email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Numero de telephone"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Profession"
                name="job"
                onChange={handleChange}
                required
                value={values.job}
                variant="outlined"
              />
          </Grid>
            
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Pays"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
          </Grid>

          <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Adresse de residence"
                name="Adress"
                onChange={handleChange}
                required
                value={values.adresse}
                variant="outlined"
              />
          </Grid>

        </Grid>

        <Button color="primary" className={classes.addPictute} variant="file"><input type="file" /></Button>
      
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button color="primary" variant="contained">Enregistrer</Button>
        </Box>
        
    </form>
  );
};

export default SettingAccountDetails;


const useStyles = makeStyles((theme) => ({
  addPictute:{
    backgroundColor: 'yellow',
    marginTop: 20
  }
}));

