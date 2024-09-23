import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


export default function Table({ rows, columns, text, 
    // onRowSelect
}) {

    // const [selectedRow, setSelectedRow] = useState(null);

    // const handleRowSelection = (newSelectionModel) => {
    //     const newSelectedRow = newSelectionModel.length > 0 ? newSelectionModel[0] : null;
    //     setSelectedRow(newSelectedRow);
    // };

    // const getSelectedRowData = () => {
    //     if (selectedRow === null) {
    //         return null; 
    //     }
    //     return rows.find(row => row.id === selectedRow);
    // };

    // useEffect(() => {
    //     const selectedRowData = getSelectedRowData();
    //     onRowSelect(selectedRowData);
    // }, [selectedRow, rows, onRowSelect]);

    return (
        <div>
            <Paper sx={{
                height: 400, width: '100%',
                border: '4px solid black',
            }} className={text}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    // initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    // checkboxSelection
                    // selectionModel={selectedRow}
                    // onRowSelectionModelChange={handleRowSelection}
                    sx={{
                        border: 0,
                        '& .MuiDataGrid-columnHeaders': {
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            color: 'black',
                        }
                    }}
                />
            </Paper>
        </div>
    )
}

