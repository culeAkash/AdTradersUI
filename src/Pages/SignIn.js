import { Button, ButtonGroup, Card, Container, Divider, FormControl, FormHelperText, Input, InputLabel, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react';
import styles from '../Static/Styles/SignIn.module.css'


export default function SignIn() {
  return (
    <Paper component='div' elevation={3} className={styles.login_container} sx={{ width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' } }}>
      <Card component='form' sx={{ pb: '2em' }} noValidate
        autoComplete="off">
        <Typography
          align='center'
          variant='h4'
          gutterBottom={true}
          sx={{
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.1rem',
            color: '#1976D2',
            textDecoration: 'none',
            mt: '0.4em'
          }}
        >
          Signin Here
        </Typography>
        <Divider />
        <p className={styles.mand}>* All fields are mandatory</p>
        <div style={{ textAlign: 'center' }}>
          <TextField required id="email" label="Email Address" type="text" className={styles.form_input}></TextField><br />
          <TextField required id="password" label="Password" type="password" className={styles.form_input}></TextField><br />

          <div className={styles.btn_grp}>
            <Button color='primary' size='medium' variant='contained' className={styles.form_btn}>
              Login
            </Button>
            <Button color='warning' size='medium' variant='contained' className={styles.form_btn}>
              Reset
            </Button>
          </div>
        </div>

      </Card>
    </Paper>
  )
}