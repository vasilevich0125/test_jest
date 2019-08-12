import 'antd/dist/antd.css';
import React from "react";
import { Table} from 'antd';
const { Column } = Table;

const data = [
    { "_id" : "01001", "city" : "AGAWAM", "loc" : [ -72.622739, 42.070206 ], "pop" : 15338, "state" : "MA" },
    { "_id" : "01002", "city" : "CUSHMAN", "loc" : [ -72.51564999999999, 42.377017 ], "pop" : 36963, "state" : "MA" },
    { "_id" : "01005", "city" : "BARRE", "loc" : [ -72.10835400000001, 42.409698 ], "pop" : 4546, "state" : "MA" },
    { "_id" : "01007", "city" : "BELCHERTOWN", "loc" : [ -72.41095300000001, 42.275103 ], "pop" : 10579, "state" : "MA" },
    { "_id" : "01008", "city" : "BLANDFORD", "loc" : [ -72.936114, 42.182949 ], "pop" : 1240, "state" : "MA" },
    { "_id" : "03234", "city" : "EPSOM", "loc" : [ -71.35457599999999, 43.217398 ], "pop" : 2931, "state" : "NH" },
    { "_id" : "03235", "city" : "FRANKLIN", "loc" : [ -71.64912200000001, 43.442569 ], "pop" : 9780, "state" : "NH" },
    { "_id" : "03237", "city" : "GILMANTON", "loc" : [ -71.412063, 43.417476 ], "pop" : 1308, "state" : "NH" },
    { "_id" : "03240", "city" : "GRAFTON", "loc" : [ -71.96338900000001, 43.572743 ], "pop" : 890, "state" : "NH" },
    { "_id" : "01012", "city" : "CHESTERFIELD", "loc" : [ -72.833309, 42.38167 ], "pop" : 177, "state" : "MA" },
    { "_id" : "05252", "city" : "EAST ARLINGTON", "loc" : [ -73.138904, 43.063801 ], "pop" : 443, "state" : "VT" },
    { "_id" : "05253", "city" : "EAST DORSET", "loc" : [ -73.008146, 43.236982 ], "pop" : 516, "state" : "VT" },
    { "_id" : "05255", "city" : "MANCHESTER CENTE", "loc" : [ -73.052313, 43.175223 ], "pop" : 3622, "state" : "VT" },
    { "_id" : "05257", "city" : "NORTH BENNINGTON", "loc" : [ -73.237531, 42.92385 ], "pop" : 2037, "state" : "VT" },
    { "_id" : "05260", "city" : "NORTH POWNAL", "loc" : [ -73.25342999999999, 42.809775 ], "pop" : 523, "state" : "VT" },
    { "_id" : "08550", "city" : "PRINCETON JUNCTI", "loc" : [ -74.61459600000001, 40.297684 ], "pop" : 5807, "state" : "NJ" },
    { "_id" : "08551", "city" : "RINGOES", "loc" : [ -74.828839, 40.44587 ], "pop" : 5106, "state" : "NJ" },
    { "_id" : "08553", "city" : "ROCKY HILL", "loc" : [ -74.64004199999999, 40.400985 ], "pop" : 693, "state" : "NJ" },
    { "_id" : "08554", "city" : "ROEBLING", "loc" : [ -74.777224, 40.115352 ], "pop" : 3826, "state" : "NJ" }
];

function TableComponent() {
    return (
        <Table dataSource={data}>
            <Column title="_id" dataIndex="_id" key="_id" />
            <Column title="City" dataIndex="city" key="city" />
            <Column
                title="Location"
                dataIndex="loc"
                key="loc"
                render={loc => (
                    <span>({loc[0]}, {loc[1]})</span>
                )}
            />
            <Column title="Pop" dataIndex="pop" key="pop" />
            <Column title="State" dataIndex="state" key="state" />
        </Table>
    );
}
export default TableComponent;