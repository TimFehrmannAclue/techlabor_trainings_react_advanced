import getTablesDb from "../../repository/table/TableRepository";
import ITable from "../../../type/frontend/table/ITable";

export default function getTables(): ITable[] {
    return getTablesDb();
}
