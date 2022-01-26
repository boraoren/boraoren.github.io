import React, {FC} from "react";
import {Table, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";

interface STableRow{
    columns: string[]
}

interface STableProps{
    header: string[];
    rows: STableRow[];
}

const STable: FC<STableProps> = ({header, rows}) => {
    return(
        <Table size="lg"
               fontFamily="primary"
               fontSize={['md', 'lg', 'xl', '2xl']}>
            <Thead>
                <Tr>
                    {header.map((header) => <Th fontFamily="primary" fontSize={['sm', 'md', 'lg', 'xl']}>{header}</Th>)}
                </Tr>
            </Thead>
            <Tbody>
                {rows.map((row) => {
                    return <Tr>
                        {row.columns.map((column) => {
                            return <Td>{column}</Td>
                        })}
                    </Tr>
                })}
            </Tbody>
        </Table>
    )
}

export default STable;
