import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import MaterialTable from 'material-table';
import NameCustomComponent from './components/index';

const empList = [
    {name: 'Pár Zoltán', age: 20, job: 'Eladó'},
    {name: 'Remek Elek', age: 31, job: 'Lakatos'},
    {name: 'Trab Antal', age: 42, job: 'Kereskedő'},
    {name: 'Ultra Viola', age: 53, job: 'Szakács'},
    {name: 'Am Erika', age: 64, job: 'Óvónő'},
    {name: 'Ka Pál', age: 55, job: 'Vagyonőr'},
    {name: 'Lev Elek', age: 44, job: 'Szövő'},
    {name: 'Kér Ede', age: 33, job: 'Kubikos'},
    {name: 'Riz Ottó', age: 22, job: 'Üzletkötő'},
]



export const Table = () => {
    
    const [done, setDone] = useState(undefined);
  
    useEffect(() => {
        setTimeout(() => {
            fetch('')
            .then(() => {
                setDone(true);
            });
        }, 1000);
    }, []);

    const [data, setData] = useState(empList)

    const columns = [
        {
            title: 'Név', 
            field: 'name', 
            filterPlaceholder: 'Név szűrése',
            editable: false,
            render: (row) => <NameCustomComponent name={row.name} />,
        },
        {
            title: 'Kor',
            field: 'age',
            filterPlaceholder: 'Kor szűrése'
        },
        {
            title: 'Foglalkozása',
            field: 'job',
            filterPlaceholder: 'Foglalkozás szűrése'
        }
    ]

    return (
        <div>
            {
                !done ? <ReactLoading className="loadingcenter" type={"spin"} color={"#30409f"} height={100} width={100} />
                :
                <ul className="etable">
                    <MaterialTable title="Felvételi jegyzék 2"
                    localization={{
                        body: {
                            emptyDataSourceMessage: "Nincs megjeleníthető rekord",
                            addTooltip: 'Hozzáadás',
                            deleteTooltip: 'Eltávolítás',
                            editTooltip: 'Szerkesztés',
                            filterRow: {
                                filterTooltip: 'Szűrő'
                            },
                            editRow: {
                                deleteText: 'Biztosan törli ezt a sort?',
                                cancelTooltip: 'Lemond',
                                saveTooltip: 'Rekord'
                            }
                        },
                        grouping: {
                            groupedBy: 'Csoportosítás:'
                        },
                        header: {
                            actions: 'Műveletek'
                        },
                        pagination: {
                            labelDisplayedRows: '{from}-{to} sor a {count}-ből',
                            labelRowsSelect: 'sor',
                            labelRowsPerPage: 'Sor / oldal:',
                            firstAriaLabel: 'Első oldal',
                            firstTooltip: 'Első oldal',
                            previousAriaLabel: 'Előző oldal',
                            previousTooltip: 'Előző oldal',
                            nextAriaLabel: 'Következő oldal',
                            nextTooltip: 'Következő oldal',
                            lastAriaLabel: 'Utolsó oldal',
                            lastTooltip: 'Utolsó oldal'
                        },
                        toolbar: {
                            addRemoveColumns: 'Oszlopok hozzáadása vagy eltávolítása',
                            showColumnsTitle: 'Oszlopok megtekintése',
                            showColumnsAriaLabel: 'Oszlopok megtekintése',
                            exportTitle: 'Export',
                            exportAriaLabel: 'Export',
                            exportName: 'Exportálás - CSV',
                            searchTooltip: 'Keresés',
                            searchPlaceholder: 'Keresés'
                        }
                    }}
                    data = {empList}
                    columns = {columns}
                    options = {
                        {
                        exportButton: true,
                        actionsColumnIndex: -1, 
                        addRowPosition: "first",
                        cellStyle: {
                            textAlign: 'center',
                            fontSize: '16px',
                        }
                    }
                    }
                    editable={{
                        onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                        }),
                        onRowDelete: selectedRow => new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...data]
                        updatedRows.splice(index, 1)
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                        }),
                        onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
                        const index=oldRow.tableData.id;
                        const updatedRows=[...data]
                        updatedRows[index]=updatedRow
                        setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                        }, 2000)
                        })
                    }}
                    />
                </ul>
            }
        </div>
    );
}

export default Table;