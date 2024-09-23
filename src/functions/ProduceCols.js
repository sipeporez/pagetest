
const ProduceCols = (cols) => {
    return [
        { field: 'local_time', headerName: 'time', width: 200 },
        { field: 'asset_id', headerName: 'asset_ID', width: 350 },
        ...cols.map((item) => ({
             field: item , headerName: item, width: 150
        }))
    ];
};

export default ProduceCols; 
