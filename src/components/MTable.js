import faker from 'faker';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Grid, Typography, TablePagination, TableFooter } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { huHU } from '@material-ui/core/locale';


const language = createMuiTheme({
}, huHU);

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        position: 'relative',

    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px, 10px',
        maxWidth: 1100,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 28%)',
        position: 'relative'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontSize: '16px'
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));

let USERS = [], STATUES = ['Felvételt nyert', 'Döntés alatt', 'Elutasítva'];
for (let i = 0; i < 15; i++) {
    USERS[i] = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('hu-HU'),
        status: STATUES[Math.floor(Math.random() * STATUES.length)]
    }
};


function MTable() {

    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('')
                .then(() => {
                    setDone(true);
                });
        }, 1000);
    }, []);



    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="App">
            {
                !done ? <ReactLoading className="loadingcenter" type={"spin"} color={"#30409f"} height={100} width={100} />
                    :
                    <ul>
                        <h2>Felvételi jegyzék</h2>
                        <ThemeProvider theme={language}>
                            <TableContainer component={Paper} className={classes.tableContainer}>
                                <Table boxShadow={3} className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHeaderCell}>Alkalmazott információ</TableCell>
                                            <TableCell className={classes.tableHeaderCell}>Munka információ</TableCell>
                                            <TableCell className={classes.tableHeaderCell}>Jelentkezési dátum</TableCell>
                                            <TableCell className={classes.tableHeaderCell}>Státusz</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell>
                                                    <Grid container>
                                                        <Grid item lg={2}>
                                                            <Avatar alt={row.name} src='.' className={classes.avatar} />
                                                        </Grid>
                                                        <Grid item lg={10}>
                                                            <Typography className={classes.name}>{row.name}</Typography>
                                                            <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                                                            <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
                                                    <Typography color="textSecondary" variant="body2">{row.company}</Typography>
                                                </TableCell>
                                                <TableCell isCellEditable={true}>{row.joinDate}</TableCell>
                                                <TableCell>
                                                    <Typography
                                                        className={classes.status}
                                                        style={{
                                                            backgroundColor:
                                                                ((row.status === 'Felvételt nyert' && 'green') ||
                                                                    (row.status === 'Döntés alatt' && 'grey') ||
                                                                    (row.status === 'Elutasítva' && 'red'))
                                                        }}
                                                    >{row.status}</Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TablePagination
                                            rowsPerPageOptions={[3, 5]}
                                            component="div"
                                            count={USERS.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                        />
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </ThemeProvider>
                    </ul>
            }
        </div>

    );
}

export default MTable;