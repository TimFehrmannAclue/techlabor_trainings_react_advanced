import ITable from "../../../type/frontend/table/ITable";

const TableRepository: { Tables: ITable[] } = {
    Tables: [
        {id: 1, name: "name1", color: "red"},
        {id: 2, name: "name2", color: "green"},
        {id: 3, name: "name3", color: "blue"},
    ],
};

export default function getTablesDb(): ITable[] | never {
    return TableRepository.Tables;
}
