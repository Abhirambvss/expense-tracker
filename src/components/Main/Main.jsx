import React, { useContext } from 'react'
import { Grid, Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from '../InfoCard/InfoCard'
import Form from './Form/Form'
import List from './List/List'

const Main = () => {
    const styles = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)
    return (
        <Card className={styles.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' className={styles.promo}></CardHeader>
            <CardContent>
                <Typography align='center' variant='h5'>    
                        Total Balance Rs{balance}
                </Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                        <InfoCard />
                </Typography>
                <Divider className={styles.divider}/>
                <Form />
            </CardContent>
            <CardContent className={styles.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                         <List /> 
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default Main
